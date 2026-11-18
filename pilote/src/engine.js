/* Objectif Ligne — moteur de l’application (vues, quiz, progression, jeu). */
(function () {
  'use strict';
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const PASS = 0.75;
  const DAY = 86400000;
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const dayNum = s => Math.round(new Date(s + 'T12:00:00').getTime() / DAY);

  // ---------- Structure du programme ----------
  const STAGES = [
    { id: 'fondamentaux', code: 'FDM', name: 'Fondamentaux', nav: 'Bases', desc: 'Le vocabulaire de base de tout pilote : alphabet, chiffres, unités, heure UTC et découverte du cockpit.',
      facts: [['Pour qui', 'Grand débutant'], ['Durée', 'Quelques jours'], ['Objectif', 'Parler et compter comme un pilote']] },
    { id: 'bilan', code: '00', name: 'Bilan & aptitudes', nav: 'Bilan', desc: 'Le métier, la route complète, les tests psychotechniques et l’anglais. Pour savoir où tu mets les pieds avant d’engager de l’argent.',
      facts: [['Durée', '1 à 2 semaines'], ['Coût', 'Visite médicale classe 1 : quelques centaines d’euros'], ['Objectif', 'Décider en connaissance de cause']] },
    { id: 'ulm', code: 'ULM', name: 'Brevet ULM multiaxes', nav: 'ULM', desc: 'Les bases du vol : pourquoi un avion vole, comment on le pilote, la météo et le tour de piste. La porte d’entrée la moins chère.',
      facts: [['Formation', 'Avec instructeur'], ['Théorie', 'QCM national'], ['Coût indicatif', 'Quelques milliers d’euros']] },
    { id: 'ppl', code: 'PPL', name: 'Licence PPL(A)', nav: 'PPL', desc: 'La licence de pilote privé avion selon les règles européennes : navigation, météo, réglementation et facteurs humains approfondis.',
      facts: [['Vol', '45 h minimum dont 10 h solo'], ['Théorie', '9 matières, 75 % requis'], ['Médical', 'Classe 2 (classe 1 si tu vises la ligne)']] },
    { id: 'atpl', code: 'ATPL', name: 'ATPL théorique', nav: 'ATPL', desc: 'Les 13 matières de l’examen théorique de pilote de ligne EASA : le gros morceau intellectuel du parcours.',
      facts: [['Examens', '13 matières, 75 % requis dans chacune'], ['Délai', 'Tout réussir en 18 mois'], ['Volume', 'Plusieurs centaines d’heures de cours']] }
  ];
  const DOMAINS = { regl: 'Réglementation', aero: 'Aérodynamique', tech: 'Connaissance avion', meteo: 'Météorologie', nav: 'Navigation', perf: 'Performances & préparation', fh: 'Facteurs humains', proc: 'Procédures', com: 'Communications', apt: 'Aptitudes' };
  const DATA = window.PARCOURS || {};
  const MODS = {}; const ORDER = [];
  STAGES.forEach(s => { s.mods = (DATA[s.id] && DATA[s.id].modules) || []; s.mods.forEach(m => { m.stage = s.id; MODS[m.id] = m; ORDER.push(m); }); });
  const GAMES = window.GAMES || [];

  // ---------- Grades (galons de pilote) ----------
  const RANKS = [
    [0, 'Passager', 0], [150, 'Élève pilote', 1], [400, 'Lâché solo', 1], [800, 'Pilote ULM', 1], [1400, 'Pilote privé', 2], [2200, 'Navigateur', 2],
    [3200, 'Pilote IFR', 2], [4500, 'Pilote professionnel', 2], [6000, 'Copilote', 3], [8000, 'Commandant de bord', 4], [11000, 'Instructeur', 4], [15000, 'Chef pilote', 4]
  ];
  const rankOf = xp => { let i = 0; RANKS.forEach((r, k) => { if (xp >= r[0]) i = k; }); return i; };
  function epaulette(bars, big) {
    let s = `<svg viewBox="0 0 60 60" aria-hidden="true"><rect x="12" y="4" width="36" height="52" rx="6" fill="#0E1726" stroke="#3A4659" stroke-width="2"/><circle cx="30" cy="12" r="3" fill="#C9A227"/>`;
    for (let i = 0; i < bars; i++) s += `<rect x="15" y="${46 - i * 8}" width="30" height="5" rx="1" fill="#D9B53A"/>`;
    if (!bars) s += `<rect x="15" y="46" width="30" height="5" rx="1" fill="none" stroke="#56677C" stroke-dasharray="3 2"/>`;
    s += `<path d="M30 20 l-12 4 l12 1 l12 -1 z" fill="#D9B53A"/><circle cx="30" cy="22.5" r="2.4" fill="#D9B53A"/>`;
    return s + '</svg>';
  }

  // ---------- Badges ----------
  const BADGES = [
    ['premier-vol', 'Premier vol', 'Première bonne réponse', 'I', P => P.correct >= 1],
    ['combo-5', 'En finale', '5 bonnes réponses d’affilée', 'x5', P => P.comboBest >= 5],
    ['combo-10', 'Kiss landing', '10 bonnes réponses d’affilée', 'x10', P => P.comboBest >= 10],
    ['combo-25', 'Pilote automatique', '25 bonnes réponses d’affilée', 'x25', P => P.comboBest >= 25],
    ['lache', 'Lâché solo', 'Premier module validé', 'SOLO', P => ORDER.some(m => modDone(m))],
    ['sans-faute', 'Sans faute', 'Un quiz de module à 100 %', '100', P => Object.values(P.mods).some(m => m.best === 1)],
    ['curieux', 'Curieux', '10 cours lus', 'LU', P => Object.values(P.mods).filter(m => m.read).length >= 10],
    ['alphabet', 'Radio claire', '12 bonnes réponses au défi chrono Alphabet', 'ABC', P => (P.games.alphabet && P.games.alphabet.rush || 0) >= 12],
    ['instruments', 'Scan instruments', '9/10 en lecture des instruments', 'SCAN', P => (P.games.instruments && P.games.instruments.best || 0) >= 0.9],
    ['metar', 'Météorologue', '9/10 au décodeur METAR', 'MET', P => (P.games.metar && P.games.metar.best || 0) >= 0.9],
    ['chrono', 'Calculateur', '9/10 au calcul mental chrono', 'CALC', P => P.chrono.some(c => c.score >= 9)],
    ['examen', 'Examen blanc', 'Un examen blanc réussi', 'EXAM', P => Object.values(P.exams).some(e => e.best >= PASS)],
    ['serie-3', 'Régulier', '3 jours d’affilée', '3J', P => P.streak.best >= 3],
    ['serie-7', 'Semaine complète', '7 jours d’affilée', '7J', P => P.streak.best >= 7],
    ['serie-30', 'Mois de vol', '30 jours d’affilée', '30J', P => P.streak.best >= 30],
    ['q-500', '500 réponses', '500 questions répondues', '500', P => P.answered >= 500],
    ['xp-2000', 'Navigateur', '2 000 XP', '2K', P => P.xp >= 2000],
    ['fdm', 'Bases solides', 'Étape Fondamentaux validée', 'FDM', P => stageDone('fondamentaux')],
    ['ulm', 'Brevet ULM', 'Étape ULM validée', 'ULM', P => stageDone('ulm')],
    ['ppl', 'Licence PPL', 'Étape PPL validée', 'PPL', P => stageDone('ppl')],
    ['atpl', 'ATPL théorique', 'Étape ATPL validée', 'ATPL', P => stageDone('atpl')]
  ];
  function medal(txt, on) {
    const fs = txt.length > 3 ? 13 : 17;
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M22 2 L32 18 L42 2" fill="none" stroke="${on ? '#A8127A' : '#56677C'}" stroke-width="6"/><circle cx="32" cy="38" r="22" fill="${on ? '#D9B53A' : '#8C97A6'}"/><circle cx="32" cy="38" r="17" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.5"/><text x="32" y="${38 + fs / 3}" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="700" font-size="${fs}" fill="#1A1A1A">${esc(txt)}</text></svg>`;
  }

  // ---------- État et sauvegarde ----------
  const KEY = 'objectif-ligne-v1';
  const blank = () => ({ v: 2, xp: 0, mods: {}, q: {}, exams: {}, games: {}, badges: {}, days: {}, streak: { cur: 0, best: 0, last: null }, auto: null, chrono: [], answered: 0, correct: 0, comboBest: 0, daily: {}, sound: true, updated: 0 });
  function migrate(o) {
    const P = Object.assign(blank(), o || {});
    if (!o || !o.v) { // v1 → v2
      P.q = {}; Object.keys((o && o.errs) || {}).forEach(k => { P.q[k] = { box: 0, due: 0, ok: 0, ko: o.errs[k] }; });
      P.xp = (P.correct || 0) * 10 + ORDER.filter(m => P.mods[m.id] && P.mods[m.id].best >= PASS).length * 100;
      delete P.errs; P.v = 2;
    }
    ['mods', 'q', 'exams', 'games', 'badges', 'days', 'daily'].forEach(k => { if (!P[k] || typeof P[k] !== 'object') P[k] = {}; });
    if (!P.streak) P.streak = { cur: 0, best: 0, last: null };
    if (!Array.isArray(P.chrono)) P.chrono = [];
    return P;
  }
  let P = blank();
  try { const raw = localStorage.getItem(KEY); if (raw) P = migrate(JSON.parse(raw)); } catch (e) {}
  let dbRef = null, saveTimer = null, writing = false, pending = false;
  function save() {
    P.updated = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {}
    clearTimeout(saveTimer); saveTimer = setTimeout(push, 1200);
    renderHud();
  }
  async function push() {
    if (!dbRef) return;
    if (writing) { pending = true; return; }
    writing = true;
    try { await dbRef.set(JSON.parse(JSON.stringify(P))); setSync('sauvegardé sur ton compte'); } catch (e) { setSync('sauvegarde locale'); }
    writing = false; if (pending) { pending = false; push(); }
  }
  function setSync(t) { const el = $('#sync'); if (el) el.textContent = t; syncLabel = t; }
  let syncLabel = 'sauvegarde locale';
  async function initCloud() {
    try {
      if (!window.claude || !window.claude.use) return;
      const [user, db] = await Promise.all([window.claude.use('user'), window.claude.use('db')]);
      if (!user || !db) return;
      const id = await user.id(); if (!id) return;
      const ref = db.doc('data/users/' + id + '/progress');
      const snap = await Promise.race([ref.get(), new Promise((_, r) => setTimeout(() => r(new Error('timeout')), 10000))]);
      dbRef = ref;
      if (snap.exists) {
        const remote = snap.data() || {};
        if ((remote.updated || 0) > (P.updated || 0)) { P = migrate(JSON.parse(JSON.stringify(remote))); try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} route(); }
        else if ((P.updated || 0) > (remote.updated || 0)) push();
      } else if (P.updated) push();
      setSync('sauvegardé sur ton compte');
    } catch (e) { /* sauvegarde locale seulement */ }
  }

  // ---------- Calculs de progression ----------
  const mp = id => P.mods[id] || (P.mods[id] = { read: false, best: null, attempts: 0 });
  function modProgress(m) { const s = P.mods[m.id]; if (!s) return 0; const q = s.best == null ? 0 : Math.min(s.best / PASS, 1); return (s.read ? 0.25 : 0) + 0.75 * q; }
  const modDone = m => { const s = P.mods[m.id]; return !!(s && s.best != null && s.best >= PASS); };
  const stageProgress = s => s.mods.length ? s.mods.reduce((a, m) => a + modProgress(m), 0) / s.mods.length : 0;
  const stageDone = id => { const s = STAGES.find(x => x.id === id); return !!(s && s.mods.length && s.mods.every(modDone)); };
  const globalProgress = () => ORDER.length ? ORDER.reduce((a, m) => a + modProgress(m), 0) / ORDER.length : 0;
  const pct = x => Math.round(x * 100) + ' %';
  const modVerified = m => m.verified === true;
  function domainScores() {
    const out = {};
    Object.keys(DOMAINS).forEach(d => {
      const ms = ORDER.filter(m => m.domain === d); if (!ms.length) return;
      const tried = ms.filter(m => P.mods[m.id] && P.mods[m.id].best != null);
      out[d] = { total: ms.length, tried: tried.length, score: tried.length ? tried.reduce((a, m) => a + P.mods[m.id].best, 0) / tried.length : null };
    });
    return out;
  }
  const LEIT = [0, 1, 2, 4, 8, 16, 32];
  const dueKeys = () => { const now = dayNum(today()); return Object.keys(P.q).filter(k => { const [m, i] = k.split('#'); return MODS[m] && MODS[m].quiz[+i] && P.q[k].due <= now; }); };
  const errCount = () => Object.keys(P.q).filter(k => P.q[k].box === 0 && P.q[k].ko > 0).length;
  const todayXp = () => P.days[today()] || 0;
  const GOAL = 100;

  // ---------- Récompenses ----------
  let combo = 0;
  function gainXp(n, ev) {
    if (n <= 0) return;
    const before = rankOf(P.xp);
    P.xp += n; const t = today(); P.days[t] = (P.days[t] || 0) + n;
    // série de jours
    if (P.streak.last !== t) {
      const gap = P.streak.last ? dayNum(t) - dayNum(P.streak.last) : 99;
      P.streak.cur = gap === 1 ? P.streak.cur + 1 : 1; P.streak.last = t; P.streak.best = Math.max(P.streak.best, P.streak.cur);
    }
    if (ev) floatXp('+' + n + ' XP', ev);
    const after = rankOf(P.xp);
    if (after > before) { sound('level'); confetti(); toast(epaulette(RANKS[after][2]), 'Nouveau grade : ' + RANKS[after][1], 'Continue comme ça, commandant !'); }
    if (P.days[t] >= GOAL && P.days[t] - n < GOAL) { sound('level'); toast(goalRing(1), 'Objectif du jour atteint', GOAL + ' XP aujourd’hui. Série : ' + P.streak.cur + ' jour' + (P.streak.cur > 1 ? 's' : '')); }
    checkBadges();
  }
  function checkBadges() {
    BADGES.forEach(b => { if (!P.badges[b[0]] && b[4](P)) { P.badges[b[0]] = Date.now(); setTimeout(() => { sound('level'); toast(medal(b[3], true), 'Badge débloqué : ' + b[1], b[2]); }, 900); } });
  }
  function floatXp(txt, ev) {
    const el = document.createElement('div'); el.className = 'xp-float'; el.textContent = txt;
    const r = ev && ev.getBoundingClientRect ? ev.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0 };
    el.style.left = Math.min(innerWidth - 120, r.left + r.width - 60) + 'px'; el.style.top = (r.top - 10) + 'px';
    document.body.appendChild(el); setTimeout(() => el.remove(), 1200);
  }
  let toastTimer = null;
  function toast(icon, title, sub) {
    const old = $('.toast'); if (old) old.remove();
    const el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status');
    el.innerHTML = icon + `<div><b>${esc(title)}</b><span>${esc(sub)}</span></div>`;
    document.body.appendChild(el); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.remove(), 4200);
  }
  let actx = null;
  function sound(kind) {
    if (!P.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const notes = { ok: [[660, 0], [990, .09]], ko: [[220, 0], [180, .12]], level: [[523, 0], [659, .1], [784, .2], [1047, .3]], tick: [[880, 0]] }[kind] || [];
      notes.forEach(([f, t]) => { const o = actx.createOscillator(), g = actx.createGain(); o.type = kind === 'ko' ? 'sawtooth' : 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(0.0001, actx.currentTime + t); g.gain.exponentialRampToValueAtTime(kind === 'ko' ? 0.05 : 0.09, actx.currentTime + t + .02); g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + t + .18); o.connect(g).connect(actx.destination); o.start(actx.currentTime + t); o.stop(actx.currentTime + t + .2); });
    } catch (e) {}
  }
  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas'); c.id = 'confetti'; c.width = innerWidth; c.height = innerHeight; document.body.appendChild(c);
    const ctx = c.getContext('2d'), cols = ['#F065C4', '#4DC6EC', '#D9B53A', '#4CC17E', '#ffffff'];
    const ps = Array.from({ length: 140 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 12 - 4, s: 4 + Math.random() * 6, c: cols[Math.floor(Math.random() * cols.length)], r: Math.random() * 6 }));
    let f = 0; (function tick() { ctx.clearRect(0, 0, c.width, c.height); ps.forEach(p => { p.vy += .35; p.x += p.vx; p.y += p.vy; p.r += .2; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); }); if (++f < 110) requestAnimationFrame(tick); else c.remove(); })();
  }
  function goalRing(p) { const r = 15, C = 2 * Math.PI * r; return `<svg class="goal-ring" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="${r}" fill="none" stroke="#ffffff22" stroke-width="5"/><circle cx="18" cy="18" r="${r}" fill="none" stroke="#4CC17E" stroke-width="5" stroke-linecap="round" stroke-dasharray="${(C * Math.min(p, 1)).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 18 18)"/></svg>`; }
  const flame = `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 3-6 0 2 1 3 2 3 0-3-1-5 1-8z" fill="#F29A1F"/></svg>`;

  // ---------- En-tête ----------
  function renderHud() {
    const ri = rankOf(P.xp), r = RANKS[ri], nx = RANKS[ri + 1];
    const prog = nx ? (P.xp - r[0]) / (nx[0] - r[0]) : 1;
    const streakOk = P.streak.last === today() || (P.streak.last && dayNum(today()) - dayNum(P.streak.last) === 1);
    const el = $('#hud'); if (!el) return;
    el.innerHTML = `<span class="rank">${epaulette(r[2])}${esc(r[1])}</span>
      <span class="xpbar" title="${P.xp} XP"><i style="width:${(prog * 100).toFixed(1)}%"></i></span>
      <span class="mono">${P.xp} XP${nx ? ' / ' + nx[0] : ''}</span>
      <span class="chip" title="Jours d’affilée">${flame}${streakOk ? P.streak.cur : 0} j</span>
      <span class="chip" title="Objectif du jour">${goalRing(todayXp() / GOAL)}${Math.min(todayXp(), GOAL)}/${GOAL}</span>
      <button class="chip" id="snd" type="button" aria-pressed="${P.sound}" title="Sons">${P.sound ? 'son : oui' : 'son : non'}</button>
      <span class="sync" id="sync">${esc(syncLabel)}</span>`;
  }
  function renderNav(active) {
    const items = [['accueil', 'Cockpit']].concat(STAGES.map(s => ['etape-' + s.id, s.nav])).concat([['simulateur', 'Simulateur'], ['revision', 'Révision' + (dueKeys().length ? ' (' + dueKeys().length + ')' : '')], ['badges', 'Badges']]);
    $('#nav').innerHTML = items.map(i => `<a href="#${i[0]}" class="${active === i[0] ? 'on' : ''}">${esc(i[1])}</a>`).join('');
  }

  // ---------- Figures et photos ----------
  function fig(key, cap) { if (!key || !window.FIGURES[key]) return ''; return `<figure>${renderFig(key)}${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`; }
  function photo(img) {
    if (!img || !img.src) return '';
    const c = img.credit ? `<span class="credit">${esc(img.credit)}${img.license ? ' · ' + esc(img.license) : ''}${img.url ? ` · <a href="${esc(img.url)}" target="_blank" rel="noopener">source</a>` : ''}</span>` : '';
    return `<figure class="photo"><img src="${esc(img.src)}" alt="${esc(img.alt || '')}" loading="lazy">${img.caption || c ? `<figcaption>${esc(img.caption || '')}${c}</figcaption>` : ''}</figure>`;
  }
  const srcLine = s => !s ? '' : `<p class="src">Source : ${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>` : esc(s.label)}</p>`;
  const wrapTables = html => String(html).replace(/<table/g, '<div class="tblwrap"><table').replace(/<\/table>/g, '</table></div>');

  // ---------- Vues ----------
  function routeMap() {
    return `<div class="routemap">${STAGES.filter(s => s.mods.length).map(s => {
      const firstOpen = s.mods.findIndex(m => !modDone(m));
      return `<div class="leg"><div class="leg-h"><b>${esc(s.code)} · ${esc(s.name)}</b><span class="mono" style="font-size:.8rem;color:var(--muted)">${s.mods.filter(modDone).length}/${s.mods.length} · ${pct(stageProgress(s))}</span></div>
      <div class="wps">${s.mods.map((m, i) => {
        const done = modDone(m), cur = i === firstOpen, prog = modProgress(m);
        const ic = done ? `<svg viewBox="0 0 46 46"><circle cx="23" cy="23" r="19" fill="var(--magenta)"/><path d="M15 23l6 6 11-12" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
          : cur ? `<svg viewBox="0 0 46 46"><circle cx="23" cy="23" r="20" fill="none" stroke="var(--magenta)" stroke-width="3" stroke-dasharray="4 3"/><polygon points="23,9 35,35 23,29 11,35" fill="var(--magenta)"/></svg>`
          : `<svg viewBox="0 0 46 46"><polygon points="23,5 41,23 23,41 5,23" fill="var(--surf)" stroke="${prog > 0 ? 'var(--cyan)' : 'var(--line)'}" stroke-width="3"/><text x="23" y="28" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="13" fill="var(--fg)">${i + 1}</text></svg>`;
        return `<div class="wp ${done ? 'done' : cur ? 'cur' : ''}">${i ? '<span class="conn"></span>' : ''}<a href="#cours-${m.id}" aria-label="${esc(m.title)}">${ic}<span class="tip-t">${esc(m.title)}</span></a></div>`;
      }).join('')}</div></div>`;
    }).join('')}</div>`;
  }

  function viewHome() {
    renderNav('accueil');
    const next = ORDER.find(m => !modDone(m));
    const ri = rankOf(P.xp), r = RANKS[ri], nx = RANKS[ri + 1];
    const ds = domainScores(), due = dueKeys().length;
    const dailyDone = P.daily[today()];
    const nextAct = next ? (P.mods[next.id] && P.mods[next.id].read ? ['quiz-' + next.id, 'Passer le quiz'] : ['cours-' + next.id, 'Ouvrir le cours']) : null;
    const auto = P.auto && P.auto.result;
    return `
      <section class="card rankcard">${epaulette(r[2]).replace('<svg', '<svg class="ins"')}
        <div><div class="eyebrow" style="color:#9FB0C4">Ton grade</div><h2>${esc(r[1])}</h2>
          <div class="sub">${P.xp} XP${nx ? ` · encore ${nx[0] - P.xp} XP pour devenir <strong style="color:#fff">${esc(nx[1])}</strong>` : ' · grade maximal'}</div>
          <div class="xpbar"><i style="width:${nx ? ((P.xp - r[0]) / (nx[0] - r[0]) * 100).toFixed(1) : 100}%"></i></div></div></section>
      <section class="grid2">
        <div class="card daily">${goalRing(todayXp() / GOAL).replace('class="goal-ring"', '')}<div><div class="eyebrow">Objectif du jour</div><h3>${Math.min(todayXp(), GOAL)} / ${GOAL} XP</h3><p style="margin:.3em 0 .6em;color:var(--muted)">Série en cours : ${P.streak.last === today() ? P.streak.cur : P.streak.last && dayNum(today()) - dayNum(P.streak.last) === 1 ? P.streak.cur + ' (joue aujourd’hui pour la garder)' : 0} jour(s). Record : ${P.streak.best}.</p>
          <div class="btns"><a class="btn pri" href="#defi">${dailyDone ? 'Défi du jour terminé · rejouer' : 'Défi du jour · +50 XP bonus'}</a></div></div></div>
        <div class="card"><div class="eyebrow">Révision espacée</div><h3>${due ? due + ' question' + (due > 1 ? 's' : '') + ' à revoir aujourd’hui' : 'Rien à revoir aujourd’hui'}</h3><p style="margin:.3em 0 .6em;color:var(--muted)">Chaque question revient au bon moment : tout de suite si tu t’es trompé, puis après 1, 2, 4, 8, 16 jours quand tu la réussis.</p>
          <div class="btns"><a class="btn ${due ? 'pri' : ''}" href="#revision">Réviser</a><a class="btn" href="#simulateur">Mini-jeux</a></div></div>
      </section>
      ${next ? `<section class="card next"><div><div class="eyebrow">Prochain waypoint · ${esc(STAGES.find(s => s.id === next.stage).name)}</div><h2>${esc(next.title)}</h2><p style="margin:.4em 0 0;color:var(--muted)">${esc(next.intro)}</p></div><a class="btn pri" href="#${nextAct[0]}">${nextAct[1]} →</a></section>` : ''}
      <section class="card"><div class="eyebrow">Ta route vers le siège de droite</div><h2 style="margin:.2em 0 .8em">Plan de vol de la formation · ${pct(globalProgress())}</h2>${routeMap()}</section>
      <section class="card"><div class="eyebrow">Simulateur</div><h2 style="margin:.2em 0 .8em">Mini-jeux à questions illimitées</h2>${gamesGrid()}</section>
      <section class="grid2">
        <div class="card"><div class="eyebrow">Compétences du pilote</div><h2 style="margin:.2em 0 .6em">Ton niveau par domaine</h2>
          <div class="skills">${Object.keys(ds).map(d => { const x = ds[d]; return `<div class="skill"><span>${DOMAINS[d]}</span><div class="pbar ${x.score != null && x.score < PASS ? 'cy' : ''}"><i style="width:${((x.score || 0) * 100).toFixed(0)}%"></i></div><span class="v ${x.score == null ? 'na' : ''}">${x.score == null ? 'à évaluer' : pct(x.score)}</span></div>`; }).join('')}</div></div>
        <div style="display:grid;gap:18px;align-content:start">
          <div class="card"><div class="eyebrow">Mesurer ta capacité</div><h2 style="margin:.2em 0 .4em">Bilan d’aptitude</h2>
            ${auto ? `<p style="margin:0 0 10px">${verdictPill(auto.level)} ${esc(auto.summary)}</p>` : `<p style="margin:0 0 10px;color:var(--muted)">10 questions honnêtes sur ta santé, ton budget, ton temps, ton anglais… pour repérer ce qui peut bloquer.</p>`}
            <div class="btns"><a class="btn" href="#auto-evaluation">${auto ? 'Revoir mon bilan' : 'Faire mon bilan'}</a><a class="btn" href="#chrono">Calcul mental chrono</a></div></div>
          <div class="card"><div class="eyebrow">Statistiques</div><div class="stats" style="margin-top:8px">
            <div class="stat"><b>${ORDER.filter(modDone).length}/${ORDER.length}</b><span>modules validés</span></div>
            <div class="stat"><b>${P.answered}</b><span>réponses données</span></div>
            <div class="stat"><b>${P.answered ? pct(P.correct / P.answered) : '–'}</b><span>bonnes réponses</span></div>
            <div class="stat"><b>${P.comboBest}</b><span>meilleur combo</span></div>
            <div class="stat"><b>${Object.keys(P.badges).length}/${BADGES.length}</b><span>badges</span></div>
          </div></div>
        </div>
      </section>
      <section class="card"><div class="eyebrow">La route complète</div><h2 style="margin:.2em 0 .8em">Les étapes réelles jusqu’à la ligne</h2>${renderFig('parcours')}</section>
      ${resetBlock()}
      <p class="foot">Outil d’entraînement personnel. Il ne remplace ni une école agréée (ATO), ni les textes officiels, ni l’avis d’un instructeur ou d’un médecin aéronautique. Les modules marqués « source à vérifier » n’ont pas encore été recoupés avec les documents officiels.</p>`;
  }
  function gamesGrid() {
    const icons = {
      abc: '<svg viewBox="0 0 40 40"><text x="20" y="27" text-anchor="middle" font-family="Barlow Condensed, sans-serif" font-weight="700" font-size="20" fill="#F065C4">ABC</text></svg>',
      dial: '<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#F2F5F8" stroke-width="2"/><path d="M20 20 L29 11" stroke="#F065C4" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="20" r="2.5" fill="#F2F5F8"/></svg>',
      rwy: '<svg viewBox="0 0 40 40"><rect x="13" y="4" width="14" height="32" fill="#39424F"/><path d="M20 8v4M20 16v4M20 24v4" stroke="#F2F5F8" stroke-width="2"/><text x="20" y="35" text-anchor="middle" font-size="7" fill="#F2F5F8" font-family="monospace">27</text></svg>',
      wind: '<svg viewBox="0 0 40 40"><path d="M6 12h20a4 4 0 1 0-4-4M6 20h26a4 4 0 1 1-4 4M6 28h14" fill="none" stroke="#4DC6EC" stroke-width="2.5" stroke-linecap="round"/></svg>',
      cloud: '<svg viewBox="0 0 40 40"><path d="M10 28a6 6 0 0 1 1-12 8 8 0 0 1 15-2 6 6 0 0 1 4 14z" fill="#F2F5F8"/><path d="M14 31l-2 4M20 31l-2 4M26 31l-2 4" stroke="#4DC6EC" stroke-width="2"/></svg>',
      ruler: '<svg viewBox="0 0 40 40"><rect x="4" y="14" width="32" height="12" rx="2" fill="none" stroke="#D9B53A" stroke-width="2"/><path d="M10 14v5M16 14v3M22 14v5M28 14v3" stroke="#D9B53A" stroke-width="2"/></svg>',
      calc: '<svg viewBox="0 0 40 40"><rect x="9" y="5" width="22" height="30" rx="3" fill="none" stroke="#4CC17E" stroke-width="2"/><rect x="13" y="9" width="14" height="6" fill="#4CC17E"/><path d="M14 21h2M19 21h2M24 21h2M14 27h2M19 27h2M24 27h2" stroke="#4CC17E" stroke-width="2.5"/></svg>'
    };
    const card = (href, ic, name, desc, meta) => `<a class="card game" href="${href}"><span class="gi">${icons[ic]}</span><h3>${esc(name)}</h3><p>${esc(desc)}</p><div class="meta">${meta}</div></a>`;
    return `<div class="games">${GAMES.map(g => { const s = P.games[g.id] || {}; return card('#jeu-' + g.id, g.icon, g.name, g.desc, `<span>${s.plays || 0} partie(s)</span><span>record ${s.best != null ? pct(s.best) : '–'}${g.rush ? ' · chrono ' + (s.rush || 0) : ''}</span>`); }).join('')}
      ${card('#chrono', 'calc', 'Calcul mental chrono', 'Vitesses, distances, carburant : 10 calculs chronométrés, comme aux sélections.', `<span>${P.chrono.length} série(s)</span><span>record ${P.chrono.length ? Math.max(...P.chrono.map(c => c.score)) + '/10' : '–'}</span>`)}</div>`;
  }
  function resetBlock() { return `<section><button class="btn ghost" id="reset-ask" type="button">Remettre ma progression à zéro</button><div class="confirm" id="reset-box" hidden><p style="margin:0">Effacer XP, grades, badges, scores, cours lus et bilan ? Cette action est définitive.</p><div class="btns"><button class="btn" id="reset-no" type="button">Annuler</button><button class="btn pri" id="reset-yes" type="button">Tout effacer</button></div></div></section>`; }

  function viewStage(id) {
    const s = STAGES.find(x => x.id === id); if (!s) return viewHome();
    renderNav('etape-' + id);
    const sp = stageProgress(s), ex = P.exams[id], nQ = s.mods.reduce((a, m) => a + m.quiz.length, 0);
    return `
      <div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><span>${esc(s.name)}</span></div>
      <section style="display:grid;gap:14px">
        <div class="eyebrow">Étape ${s.code} · ${s.mods.length} modules · ${nQ} questions</div><h1>${esc(s.name)}</h1>
        <p style="margin:0;max-width:65ch;color:var(--muted)">${esc(s.desc)}</p>
        <div style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center"><div class="pbar"><i style="width:${(sp * 100).toFixed(1)}%"></i></div><span class="mono">${pct(sp)}</span></div>
        <div class="facts">${s.facts.map(f => `<div><b>${esc(f[0])}</b>${esc(f[1])}</div>`).join('')}</div>
      </section>
      ${s.mods.length ? `<ol class="mods">${s.mods.map((m, i) => modRow(m, i)).join('')}</ol>
      <section class="card next"><div><div class="eyebrow">Examen blanc</div><h2>${Math.min(20, nQ)} questions tirées au hasard dans toute l’étape</h2><p style="margin:.4em 0 0;color:var(--muted)">Conditions d’examen : pas d’explication avant la fin, 75 % pour réussir. +150 XP si tu réussis.${ex ? ' Meilleur score : ' + pct(ex.best) + '.' : ''}</p></div><a class="btn pri" href="#examen-${s.id}">Lancer l’examen →</a></section>` : '<p class="card">Contenu en préparation.</p>'}`;
  }
  function modRow(m, i) {
    const s = P.mods[m.id], done = modDone(m), prog = !done && modProgress(m) > 0;
    const status = done ? '<span class="pill ok">validé</span>' : s && s.best != null ? '<span class="pill warn">à retenter</span>' : s && s.read ? '<span class="pill cy">cours lu</span>' : '<span class="pill mut">à faire</span>';
    return `<li class="mod ${done ? 'done' : prog ? 'prog' : ''}"><span class="n">${done ? '✓' : i + 1}</span>
      <div><h3>${esc(m.title)}</h3><div class="sub">${status}${modVerified(m) ? '<span class="pill ok">sources officielles</span>' : '<span class="pill unv">source à vérifier</span>'}<span>${DOMAINS[m.domain] || ''}</span><span class="mono">${m.duration} min · ${m.quiz.length} questions</span>${s && s.best != null ? `<span class="mono">meilleur : ${pct(s.best)}</span>` : ''}</div></div>
      <div class="acts"><a class="btn" href="#cours-${m.id}">Cours</a><a class="btn ${s && s.read && !done ? 'pri' : ''}" href="#quiz-${m.id}">Quiz</a></div></li>`;
  }

  function viewLesson(id) {
    const m = MODS[id]; if (!m) return viewHome();
    const s = STAGES.find(x => x.id === m.stage); renderNav('etape-' + s.id);
    const idx = s.mods.indexOf(m);
    return `
      <div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><a href="#etape-${s.id}">${esc(s.name)}</a><span>/</span><span>Module ${idx + 1}</span></div>
      <article class="lesson">
        <header><div class="eyebrow">${esc(s.code)} · module ${idx + 1} · ${DOMAINS[m.domain] || ''} · ${m.duration} min · ${m.quiz.length} questions</div><h1>${esc(m.title)}</h1><p class="intro">${esc(m.intro)}</p>
          <p style="margin:.6em 0 0">${modVerified(m) ? '<span class="pill ok">rédigé à partir des sources officielles</span>' : '<span class="pill unv">source à vérifier</span>'}</p></header>
        ${m.sections.map((sec, i) => `<section class="sec"><h2><span class="k">${String(i + 1).padStart(2, '0')}</span>${esc(sec.h)}</h2><div class="prose">${wrapTables(sec.html)}</div>${photo(sec.img)}${fig(sec.fig, sec.caption)}${sec.tip ? `<div class="tip"><b>Astuce</b><span>${esc(sec.tip)}</span></div>` : ''}${srcLine(sec.src)}</section>`).join('')}
        <section class="keys"><h3>À retenir</h3><ul>${m.keypoints.map(k => `<li><span>${esc(k)}</span></li>`).join('')}</ul></section>
        ${(m.sources || m.links || []).length ? `<section class="links"><div class="eyebrow">Sources et documents officiels</div>${(m.sources || m.links).map(l => l.url ? `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>` : `<span>${esc(l.label)}</span>`).join('')}</section>` : ''}
        <div class="btns"><button class="btn pri" id="read-go" data-id="${m.id}" type="button">J’ai lu ce cours · passer au quiz (+20 XP) →</button><a class="btn" href="#etape-${s.id}">Retour à l’étape</a></div>
      </article>`;
  }

  // ---------- Quiz ----------
  let Q = null;
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const prep = it => Object.assign({}, it, { order: shuffle(it.q.choices.map((_, i) => i)), picked: null, idk: false });
  function seeded(seed) { let x = 0; for (const c of seed) x = (x * 31 + c.charCodeAt(0)) >>> 0; return () => { x = (x * 1664525 + 1013904223) >>> 0; return x / 4294967296; }; }
  function startQuiz(kind, ref) {
    let items = [], title = '', back = '#accueil', rush = 0;
    const all = () => ORDER.flatMap(m => m.quiz.map((q, i) => ({ q, mod: m.id, i })));
    if (kind === 'quiz') { const m = MODS[ref]; items = shuffle(m.quiz.map((q, i) => ({ q, mod: m.id, i }))); title = m.title; back = '#etape-' + m.stage; }
    if (kind === 'examen') { const s = STAGES.find(x => x.id === ref); s.mods.forEach(m => m.quiz.forEach((q, i) => items.push({ q, mod: m.id, i }))); items = shuffle(items).slice(0, 20); title = 'Examen blanc · ' + s.name; back = '#etape-' + s.id; }
    if (kind === 'revision') { items = shuffle(dueKeys().map(k => { const [mod, i] = k.split('#'); return { q: MODS[mod].quiz[+i], mod, i: +i }; })).slice(0, 20); title = 'Révision espacée'; }
    if (kind === 'defi') { const rnd = seeded(today()); const pool = all(); const cur = STAGES.find(s => s.mods.some(m => !modDone(m))) || STAGES[0]; const mine = pool.filter(x => MODS[x.mod].stage === cur.id);
      const pickN = (arr, n) => { const a = arr.slice(); const out = []; while (a.length && out.length < n) out.push(a.splice(Math.floor(rnd() * a.length), 1)[0]); return out; };
      items = pickN(mine, 6).concat(pickN(pool.filter(x => !mine.includes(x)), 4)); title = 'Défi du jour'; }
    if (kind === 'jeu') { const g = GAMES.find(x => x.id === ref); title = g.name; back = '#simulateur'; items = Array.from({ length: g.n }, () => ({ q: window.gameQuestion(g), game: g.id })); }
    if (kind === 'rush') { const g = GAMES.find(x => x.id === ref); title = g.name + ' · chrono ' + g.rush + ' s'; back = '#simulateur'; rush = g.rush; items = Array.from({ length: 3 }, () => ({ q: window.gameQuestion(g), game: g.id })); }
    Q = { kind, ref, title, back, items: items.map(prep), cur: 0, done: false, exam: kind === 'examen', rush, t0: null, xp: 0 };
    combo = 0;
  }
  function viewQuiz() {
    if (!Q.items.length) return `<div class="crumbs"><a href="#accueil">Cockpit</a></div><section class="card"><h2>Rien à réviser pour l’instant</h2><p>Les questions que tu rates ou que tu ne connais pas reviennent ici au bon moment. Réponds à des quiz pour alimenter ta révision.</p><a class="btn pri" href="#accueil">Retour</a></section>`;
    if (Q.done) return viewResult();
    const it = Q.items[Q.cur], letters = 'ABCD', q = it.q;
    const answered = it.picked != null || it.idk, good = it.picked != null && it.order[it.picked] === q.a;
    const showFb = answered && !Q.exam;
    const src = it.mod ? MODS[it.mod] : null;
    const left = Q.rush ? Math.max(0, Q.rush - (Date.now() - (Q.t0 || Date.now())) / 1000) : 0;
    return `
      <div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><a href="${Q.back}">Retour</a></div>
      <section class="quiz">
        <div><div class="eyebrow">${{ quiz: 'Quiz du module', examen: 'Examen blanc', revision: 'Révision', defi: 'Défi du jour', jeu: 'Simulateur', rush: 'Contre la montre' }[Q.kind]}</div><h1 style="font-size:2rem">${esc(Q.title)}</h1></div>
        ${Q.rush ? `<div class="timerbar"><i id="rush-bar" style="width:${(left / Q.rush * 100).toFixed(1)}%"></i></div>` : `<div class="qsteps">${Q.items.map((x, i) => `<i class="${i === Q.cur ? 'cur' : x.picked == null && !x.idk ? '' : Q.exam ? 'cur' : x.picked != null && x.order[x.picked] === x.q.a ? 'ok' : 'ko'}"></i>`).join('')}</div>`}
        <div class="qhead"><span>${Q.rush ? `<span id="rush-left">${Math.ceil(left)} s</span> · score ${Q.items.filter(x => x.picked != null && x.order[x.picked] === x.q.a).length}` : `Question ${Q.cur + 1} / ${Q.items.length}`}</span><span class="combo ${combo >= 3 ? 'hot' : ''}">${combo >= 2 ? 'Combo ×' + combo : ''}</span><span>${src ? esc(src.title) : ''}</span></div>
        ${q.img ? photo(q.img) : ''}${q.qfig ? `<div class="qfig">${q.qfig}</div>` : ''}
        <p class="qtext">${esc(q.q)}</p>
        <div class="choices">${it.order.map((orig, k) => {
          let cls = '';
          if (answered && !Q.exam) { if (orig === q.a) cls = 'good'; else if (k === it.picked) cls = 'wrong'; }
          const mk = cls === 'good' ? '✓' : cls === 'wrong' ? '✗' : '';
          return `<button class="choice ${cls}" data-k="${k}" type="button" ${answered ? 'disabled' : ''} ${answered && Q.exam && k === it.picked ? 'style="border-color:var(--cyan)"' : ''}><span class="l">${letters[k]}</span><span>${esc(q.choices[orig])}</span><span class="mk">${mk}</span></button>`;
        }).join('')}</div>
        ${!answered && !Q.exam && !Q.rush ? '<div class="btns"><button class="btn idk" id="q-idk" type="button">Je ne sais pas · explique-moi</button></div>' : ''}
        ${showFb && !Q.rush ? feedback(it, good) : ''}
        ${answered && !Q.rush ? `<div class="btns"><button class="btn pri" id="q-next" type="button">${Q.cur + 1 < Q.items.length ? 'Question suivante →' : 'Voir mon résultat →'}</button><span class="kbd">Clavier : 1 à 4 pour répondre, 0 pour « je ne sais pas », Entrée pour continuer</span></div>` : ''}
      </section>`;
  }
  function feedback(it, good) {
    const q = it.q;
    const title = it.idk ? 'Pas de souci, voici l’explication' : good ? pick(['Bonne réponse', 'Exact', 'Parfait', 'Bien vu', 'Correct']) : 'Pas tout à fait';
    return `<div class="fb ${it.idk ? 'idk-fb' : good ? 'ok' : 'ko'}"><h3>${title}</h3>
      ${good ? '' : `<p><strong>La bonne réponse : ${esc(q.choices[q.a])}</strong></p>`}
      <div class="why"><span class="lbl">Pourquoi</span><p>${esc(q.exp)}</p></div>
      ${q.how ? `<div class="how"><span class="lbl">Comment ça marche</span><p>${esc(q.how)}</p></div>` : ''}
      ${q.img && q.expImg ? photo(q.expImg) : ''}${fig(q.fig)}${srcLine(q.src)}</div>`;
  }
  const pick = a => a[Math.floor(Math.random() * a.length)];
  function record(it, good) {
    if (!it.mod) return;
    const key = it.mod + '#' + it.i, now = dayNum(today());
    const s = P.q[key] || (P.q[key] = { box: 0, due: now, ok: 0, ko: 0 });
    if (good) { s.ok++; s.box = Math.min(s.box + 1, LEIT.length - 1); s.due = now + LEIT[s.box]; } else { s.ko++; s.box = 0; s.due = now; }
  }
  function answer(k, btn) {
    const it = Q.items[Q.cur]; if (it.picked != null || it.idk) return;
    if (Q.rush && !Q.t0) return;
    it.picked = k; const good = it.order[k] === it.q.a;
    P.answered++; record(it, good);
    if (good) { P.correct++; combo++; P.comboBest = Math.max(P.comboBest, combo); const x = 10 + Math.min(10, Math.max(0, combo - 1) * 2); Q.xp += x; gainXp(x, btn); sound('ok'); }
    else { combo = 0; sound('ko'); }
    if (Q.rush) { Q.items.push(prep({ q: window.gameQuestion(GAMES.find(g => g.id === Q.ref)), game: Q.ref })); Q.cur++; save(); render(); return; }
    save(); render();
    const n = $('#q-next'); if (n) n.focus({ preventScroll: true });
    if (!Q.exam) { const fb = document.querySelector('.fb'); if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  }
  function idk() { const it = Q.items[Q.cur]; if (it.picked != null || it.idk) return; it.idk = true; combo = 0; P.answered++; record(it, false); save(); render(); const fb = document.querySelector('.fb'); if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  function nextQ() {
    if (Q.cur + 1 < Q.items.length) { Q.cur++; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    finish();
  }
  function finish() {
    Q.done = true; clearInterval(rushTimer);
    const answered = Q.rush ? Q.items.filter(x => x.picked != null) : Q.items;
    const nOk = answered.filter(x => x.picked != null && x.order[x.picked] === x.q.a).length;
    const score = answered.length ? nOk / answered.length : 0; Q.score = score; Q.nOk = nOk;
    let bonus = 0;
    if (Q.kind === 'quiz') { const s = mp(Q.ref); const wasDone = s.best != null && s.best >= PASS; s.attempts++; s.best = s.best == null ? score : Math.max(s.best, score); s.last = score; if (!wasDone && score >= PASS) bonus = 100; }
    if (Q.kind === 'examen') { const e = P.exams[Q.ref] || { best: 0, n: 0 }; const was = e.best >= PASS; e.n++; e.best = Math.max(e.best, score); e.last = score; P.exams[Q.ref] = e; if (!was && score >= PASS) bonus = 150; }
    if (Q.kind === 'defi' && !P.daily[today()]) { P.daily[today()] = score; bonus = 50; }
    if (Q.kind === 'jeu') { const g = P.games[Q.ref] || { plays: 0 }; g.plays++; g.best = Math.max(g.best || 0, score); P.games[Q.ref] = g; }
    if (Q.kind === 'rush') { const g = P.games[Q.ref] || { plays: 0 }; g.plays++; g.rush = Math.max(g.rush || 0, nOk); P.games[Q.ref] = g; }
    Q.bonus = bonus;
    if (bonus) gainXp(bonus); else checkBadges();
    if (score >= PASS) { confetti(); sound('level'); }
    save(); render(); window.scrollTo({ top: 0 });
  }
  function ring(p, ok) { const r = 54, c = 2 * Math.PI * r; return `<svg viewBox="0 0 140 140" width="140" height="140" role="img" aria-label="Score ${pct(p)}"><circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--surf2)" stroke-width="12"/><circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--${ok ? 'ok' : 'bad'})" stroke-width="12" stroke-linecap="round" stroke-dasharray="${(c * p).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 70 70)"/><text x="70" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="26" font-weight="600" fill="var(--fg)">${Math.round(p * 100)}%</text></svg>`; }
  function viewResult() {
    const ok = Q.score >= PASS;
    const list = Q.rush ? Q.items.filter(x => x.picked != null) : Q.items;
    const wrong = list.filter(x => x.idk || x.order[x.picked] !== x.q.a);
    let nextLink = '';
    if (Q.kind === 'quiz') { const i = ORDER.indexOf(MODS[Q.ref]), n = ORDER[i + 1]; if (ok && n) nextLink = `<a class="btn pri" href="#cours-${n.id}">Module suivant : ${esc(n.title)} →</a>`; }
    const retry = { quiz: '#quiz-' + Q.ref, examen: '#examen-' + Q.ref, revision: '#revision', defi: '#defi', jeu: '#jeu-' + Q.ref, rush: '#rush-' + Q.ref }[Q.kind];
    const head = Q.rush ? `${Q.nOk} bonne${Q.nOk > 1 ? 's' : ''} réponse${Q.nOk > 1 ? 's' : ''} en ${Q.rush} s` : ok ? ({ quiz: 'Module validé', examen: 'Examen blanc réussi', defi: 'Défi relevé' }[Q.kind] || 'Bien joué') : 'Encore un effort';
    return `
      <div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><a href="${Q.back}">Retour</a></div>
      <section class="quiz">
        <div class="result">${ring(Q.score, ok)}<div><div class="eyebrow">${esc(Q.title)}</div><h1 style="font-size:2.2rem">${head}</h1>
          <p style="margin:.4em 0 0;color:var(--muted)">${Q.nOk} sur ${list.length}. +${Q.xp + (Q.bonus || 0)} XP${Q.bonus ? ' (dont bonus ' + Q.bonus + ')' : ''}.${ok || Q.rush ? '' : ' Relis les explications ci-dessous : ces questions reviendront dans ta révision.'}</p></div></div>
        <div class="btns">${nextLink}<a class="btn ${nextLink ? '' : 'pri'}" href="${retry}" data-retry="1">Rejouer</a>${Q.kind === 'quiz' ? `<a class="btn" href="#cours-${Q.ref}">Relire le cours</a>` : ''}${Q.kind === 'jeu' && GAMES.find(g => g.id === Q.ref).rush ? `<a class="btn" href="#rush-${Q.ref}" data-retry="1">Mode chrono</a>` : ''}<a class="btn" href="${Q.back}">Retour</a></div>
        ${wrong.length ? `<h2>Ce qu’il faut retenir</h2><div class="review">${wrong.map(x => `<div class="card">${x.q.qfig ? `<div class="qfig">${x.q.qfig}</div>` : ''}<p><strong>${esc(x.q.q)}</strong></p>${x.idk ? '<p class="yours">Tu as passé cette question</p>' : `<p class="yours">Ta réponse : ${esc(x.q.choices[x.order[x.picked]])}</p>`}<p class="right">Bonne réponse : ${esc(x.q.choices[x.q.a])}</p><p>${esc(x.q.exp)}</p>${x.q.how ? `<p style="color:var(--muted)">${esc(x.q.how)}</p>` : ''}${fig(x.q.fig)}${srcLine(x.q.src)}</div>`).join('')}</div>` : '<p>Aucune erreur. Parfait.</p>'}
      </section>`;
  }
  let rushTimer = null;
  function startRush() {
    if (!Q || !Q.rush || Q.t0) return;
    Q.t0 = Date.now(); clearInterval(rushTimer);
    rushTimer = setInterval(() => {
      if (!Q || !Q.rush || Q.done) { clearInterval(rushTimer); return; }
      const left = Math.max(0, Q.rush - (Date.now() - Q.t0) / 1000);
      const b = $('#rush-bar'), l = $('#rush-left'); if (b) b.style.width = (left / Q.rush * 100).toFixed(1) + '%'; if (l) l.textContent = Math.ceil(left) + ' s';
      if (left <= 0) finish();
    }, 200);
  }

  // ---------- Simulateur, badges ----------
  function viewSim() {
    renderNav('simulateur');
    return `<div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><span>Simulateur</span></div>
      <section style="display:grid;gap:10px"><div class="eyebrow">Entraînement illimité</div><h1>Simulateur</h1><p style="margin:0;max-width:65ch;color:var(--muted)">Chaque partie génère de nouvelles questions : impossible de les apprendre par cœur. Joue quelques minutes par jour, c’est là que les réflexes se construisent.</p></section>
      ${gamesGrid()}
      <section class="card"><div class="eyebrow">Défi chrono</div><h2 style="margin:.2em 0 .6em">Alphabet en 60 secondes</h2><p style="margin:0 0 10px;color:var(--muted)">Le plus de bonnes réponses possible en une minute. Record : ${(P.games.alphabet && P.games.alphabet.rush) || 0}.</p><a class="btn pri" href="#rush-alphabet">Lancer le chrono</a></section>`;
  }
  function viewBadges() {
    renderNav('badges');
    return `<div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><span>Badges</span></div>
      <section style="display:grid;gap:10px"><div class="eyebrow">${Object.keys(P.badges).length} / ${BADGES.length} débloqués</div><h1>Badges et grades</h1></section>
      <div class="badges">${BADGES.map(b => `<div class="card badge ${P.badges[b[0]] ? '' : 'off'}">${medal(b[3], !!P.badges[b[0]])}<b>${esc(b[1])}</b><span>${esc(b[2])}</span></div>`).join('')}</div>
      <section class="card"><div class="eyebrow">Les grades</div><table class="tbl" style="margin-top:10px"><thead><tr><th>Grade</th><th>XP</th></tr></thead><tbody>${RANKS.map((r, i) => `<tr ${i === rankOf(P.xp) ? 'style="font-weight:600;color:var(--magenta)"' : ''}><td>${esc(r[1])}</td><td class="mono">${r[0]}</td></tr>`).join('')}</tbody></table>
      <p style="color:var(--muted);font-size:.9rem">+10 XP par bonne réponse, jusqu’à +20 avec les combos · +20 par cours lu · +100 par module validé · +150 par examen blanc réussi · +50 pour le défi du jour.</p></section>`;
  }

  // ---------- Bilan d’aptitude ----------
  const AE = window.AE || [];
  function verdictPill(level) { return level === 2 ? '<span class="pill ok">feu vert</span>' : level === 1 ? '<span class="pill warn">à consolider</span>' : '<span class="pill bad">points bloquants</span>'; }
  function computeAuto(ans) {
    const scores = AE.map(a => ans[a.id] == null ? null : a.o[ans[a.id]][1]);
    const blockers = AE.filter((a, i) => scores[i] === 0 && ['sante', 'budget', 'anglais', 'mobilite'].includes(a.id)).length;
    const total = scores.reduce((s, x) => s + (x || 0), 0);
    let level = 2; if (blockers || total < 12) level = 0; else if (total < 17) level = 1;
    const years = +ans.ans || 3, age = +ans.age || 40, career = Math.max(0, 65 - (age + years));
    const summary = level === 2 ? `Profil favorable. Environ ${career} ans de carrière possibles.` : level === 1 ? `Projet réaliste, avec des points à préparer. Environ ${career} ans de carrière possibles.` : `Des points peuvent bloquer : traite-les avant d’investir. Environ ${career} ans de carrière possibles.`;
    return { level, total, career, summary };
  }
  function viewAuto() {
    renderNav('');
    const ans = (P.auto && P.auto.ans) || {}, res = P.auto && P.auto.result;
    const sel = 'font:inherit;background:var(--surf);color:var(--fg);border:1px solid var(--line);border-radius:6px;padding:4px 6px';
    return `<div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><span>Bilan d’aptitude</span></div>
      <section style="display:grid;gap:10px;max-width:820px"><div class="eyebrow">Mesurer ta capacité</div><h1>Bilan d’aptitude</h1><p style="margin:0;color:var(--muted)">Réponds franchement : personne d’autre que toi ne voit ces réponses. Le bilan repère ce qui peut bloquer et te propose quoi faire. Il ne remplace pas l’avis d’un médecin aéronautique ni celui d’une école.</p></section>
      <form class="ae" id="ae-form" style="max-width:820px">
        <fieldset><legend>Ton âge aujourd’hui et la durée de formation visée</legend><div class="opts"><label class="o">Âge <input id="ae-age" name="age" type="number" min="17" max="64" value="${esc(ans.age || 40)}" style="width:70px;${sel}"></label>
          <label class="o">Durée jusqu’au premier poste <select id="ae-ans" name="ans" style="${sel}">${[2, 3, 4, 5].map(y => `<option value="${y}" ${(+ans.ans || 3) === y ? 'selected' : ''}>${y} ans</option>`).join('')}</select></label></div></fieldset>
        ${AE.map(a => `<fieldset><legend>${esc(a.q)}</legend><div class="opts">${a.o.map((o, i) => `<label class="o"><input type="radio" id="ae-${a.id}-${i}" name="${a.id}" value="${i}" ${ans[a.id] === i ? 'checked' : ''}>${esc(o[0])}</label>`).join('')}</div></fieldset>`).join('')}
        <div class="btns"><button class="btn pri" type="submit">Calculer mon bilan</button></div></form>
      ${res ? `<section class="card verdict" id="ae-result" style="max-width:820px"><div class="eyebrow">Ton bilan</div><h2>${verdictPill(res.level)} ${esc(res.summary)}</h2>
        <p style="margin:0;color:var(--muted)">Avec un premier poste de copilote à ${(+ans.age || 40) + (+ans.ans || 3)} ans, la limite de 65 ans laisse ${res.career} ans de vol commercial.</p>
        ${AE.map(a => { if (ans[a.id] == null) return `<div class="vrow"><span class="pill mut">sans réponse</span><p>${esc(a.q)}</p></div>`; const sc = a.o[ans[a.id]][1]; return `<div class="vrow"><span>${sc === 2 ? '<span class="pill ok">ok</span>' : sc === 1 ? '<span class="pill warn">à préparer</span>' : '<span class="pill bad">frein</span>'} <strong style="display:block;margin-top:6px">${esc(a.q.split(' :')[0].split('?')[0])}</strong></span><p>${esc(a.adv[ans[a.id]])}</p></div>`; }).join('')}
        <div class="tip"><b>Ensuite</b><span>1) Rendez-vous examen médical classe 1. 2) Vol d’initiation. 3) Étapes Fondamentaux puis ULM ou PPL de ce programme. 4) Seulement après, les engagements financiers lourds.</span></div></section>` : ''}`;
  }

  // ---------- Calcul mental chrono ----------
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const GEN = [
    () => { const v = [60, 90, 120, 150, 180][rnd(0, 4)], t = [10, 15, 20, 30, 40][rnd(0, 4)]; return [`À ${v} kt, quelle distance (NM) en ${t} min ?`, v * t / 60]; },
    () => { const v = [60, 90, 120, 180][rnd(0, 3)], d = v / 60 * [10, 20, 30, 40][rnd(0, 3)]; return [`${d} NM à ${v} kt : durée en minutes ?`, d / v * 60]; },
    () => { const c = rnd(1, 35) * 10 + [0, 5][rnd(0, 1)]; return [`Cap inverse de ${String(c).padStart(3, '0')}° ?`, (c + 180) % 360]; },
    () => { const q = rnd(5, 355); const n = Math.round(q / 10) || 36; return [`QFU ${String(q).padStart(3, '0')}° : numéro de piste ?`, n]; },
    () => { const c = [20, 24, 30, 36][rnd(0, 3)], m = [30, 45, 90, 105, 150][rnd(0, 4)]; return [`Consommation ${c} L/h, vol de ${m} min : litres consommés ?`, c * m / 60]; },
    () => { const d = [30, 60][rnd(0, 1)], e = rnd(1, 4); return [`Écart de ${e} NM après ${d} NM parcourus : erreur en degrés ?`, e * 60 / d]; },
    () => { const v = [80, 90, 100, 120, 140][rnd(0, 4)]; return [`Vitesse sol ${v} kt, pente 3° : vario approximatif (ft/min) ?`, v * 5]; },
    () => { const w = [10, 20, 30, 40][rnd(0, 3)]; return [`Vent ${w} kt à 30° de l’axe : composante traversière (kt) ?`, w / 2]; },
    () => { const fl = rnd(3, 12) * 10 + 5; return [`Niveau de vol FL ${String(fl).padStart(3, '0')} : altitude en ft (calage 1013) ?`, fl * 100]; },
    () => { const h = rnd(0, 23); return [`${String(h).padStart(2, '0')}h UTC : quelle heure à Nouméa (UTC+11) ?`, (h + 11) % 24]; }
  ];
  let C = null, cTimer = null;
  function viewChrono() {
    renderNav('simulateur');
    const hist = P.chrono.slice(-8).reverse();
    if (!C) return `<div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><a href="#simulateur">Simulateur</a><span>/</span><span>Calcul mental</span></div>
      <section style="display:grid;gap:12px;max-width:760px"><div class="eyebrow">Entraînement aux tests psychotechniques</div><h1>Calcul mental chrono</h1><p style="margin:0;color:var(--muted)">10 calculs de pilote, sans calculatrice, chronométrés. Vise 9/10 en moins de 15 s par question. +10 XP par bonne réponse.</p><div class="btns"><button class="btn pri" id="c-start" type="button">Démarrer</button></div></section>
      ${hist.length ? `<section class="card" style="max-width:760px"><div class="eyebrow">Tes dernières séries</div><table class="tbl" style="margin-top:8px"><thead><tr><th>Date</th><th>Score</th><th>Temps moyen</th></tr></thead><tbody>${hist.map(h => `<tr><td>${new Date(h.at).toLocaleDateString('fr-FR')}</td><td class="mono">${h.score}/10</td><td class="mono">${h.avg.toFixed(1)} s</td></tr>`).join('')}</tbody></table></section>` : ''}`;
    if (C.i >= C.qs.length) {
      const score = C.res.filter(r => r.ok).length, avg = C.res.reduce((a, r) => a + r.t, 0) / C.res.length;
      return `<div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><a href="#simulateur">Simulateur</a></div>
        <section class="quiz"><div class="result">${ring(score / 10, score >= 8)}<div><h1 style="font-size:2.2rem">${score}/10 · ${avg.toFixed(1)} s par calcul</h1><p style="color:var(--muted);margin:.4em 0 0">${score >= 9 && avg < 15 ? 'Niveau sélection atteint.' : 'Recommence demain : la régularité compte plus que la performance d’un jour.'}</p></div></div>
        <div class="review">${C.res.map(r => `<div class="card"><p><strong>${esc(r.q)}</strong></p><p class="${r.ok ? 'right' : 'yours'}">Ta réponse : ${esc(r.given)} ${r.ok ? '✓' : ''}</p>${r.ok ? '' : `<p class="right">Attendu : ${r.exp}</p>`}<p class="kbd">${r.t.toFixed(1)} s</p></div>`).join('')}</div>
        <div class="btns"><button class="btn pri" id="c-start" type="button">Nouvelle série</button><a class="btn" href="#simulateur">Simulateur</a></div></section>`;
    }
    const q = C.qs[C.i];
    return `<div class="crumbs"><a href="#accueil">Cockpit</a><span>/</span><span>Calcul mental chrono</span></div>
      <section class="quiz"><div class="qsteps">${C.qs.map((_, i) => `<i class="${i < C.i ? (C.res[i].ok ? 'ok' : 'ko') : i === C.i ? 'cur' : ''}"></i>`).join('')}</div>
      <div class="qhead"><span>Calcul ${C.i + 1} / 10</span><span class="timer" id="c-timer">0,0 s</span></div>
      <p class="chrono-q">${esc(q[0])}</p>
      <form class="chrono-in" id="c-form"><input id="c-in" inputmode="decimal" autocomplete="off" aria-label="Ta réponse"><button class="btn pri" type="submit">Valider</button></form></section>`;
  }
  function chronoStart() { C = { qs: shuffle(GEN).map(g => g()), i: 0, res: [], t0: performance.now() }; render(); chronoTick(); }
  function chronoTick() { clearInterval(cTimer); cTimer = setInterval(() => { const el = $('#c-timer'); if (!el || !C) { clearInterval(cTimer); return; } el.textContent = ((performance.now() - C.t0) / 1000).toFixed(1).replace('.', ',') + ' s'; }, 100); const inp = $('#c-in'); if (inp) inp.focus(); }
  function chronoAnswer(v) {
    const q = C.qs[C.i], t = (performance.now() - C.t0) / 1000;
    const num = parseFloat(String(v).replace(',', '.').replace(/\s/g, ''));
    const ok = !isNaN(num) && Math.abs(num - q[1]) < 0.01;
    C.res.push({ q: q[0], exp: String(q[1]).replace('.', ','), given: v || '(vide)', ok, t });
    if (ok) { gainXp(10, $('#c-in')); sound('ok'); } else sound('ko');
    C.i++; C.t0 = performance.now();
    if (C.i >= C.qs.length) { clearInterval(cTimer); const score = C.res.filter(r => r.ok).length, avg = C.res.reduce((a, r) => a + r.t, 0) / C.res.length; P.chrono.push({ at: Date.now(), score, avg }); P.chrono = P.chrono.slice(-30); checkBadges(); save(); render(); }
    else { save(); render(); chronoTick(); }
  }

  // ---------- Routeur ----------
  function render() {
    const h = (location.hash || '#accueil').slice(1);
    let html = '';
    const quizRoute = /^(quiz|examen|jeu|rush)-(.+)$/.exec(h) || (h === 'revision' || h === 'defi' ? [h, h, null] : null);
    if (h.startsWith('etape-')) html = viewStage(h.slice(6));
    else if (h.startsWith('cours-')) html = viewLesson(h.slice(6));
    else if (quizRoute) {
      const kind = quizRoute[1], ref = quizRoute[2];
      if (!Q) {
        if (kind === 'quiz' && !MODS[ref]) { location.hash = '#accueil'; return; }
        if (kind === 'examen' && !STAGES.find(s => s.id === ref && s.mods.length)) { location.hash = '#accueil'; return; }
        if ((kind === 'jeu' || kind === 'rush') && !GAMES.find(g => g.id === ref)) { location.hash = '#simulateur'; return; }
        startQuiz(kind, ref);
      }
      renderNav(Q.kind === 'revision' ? 'revision' : Q.kind === 'jeu' || Q.kind === 'rush' ? 'simulateur' : Q.kind === 'defi' ? 'accueil' : 'etape-' + (Q.kind === 'quiz' ? MODS[Q.ref].stage : Q.ref));
      html = viewQuiz();
    }
    else if (h === 'auto-evaluation') html = viewAuto();
    else if (h === 'chrono') html = viewChrono();
    else if (h === 'simulateur') html = viewSim();
    else if (h === 'badges') html = viewBadges();
    else html = viewHome();
    $('#view').innerHTML = html;
    renderHud();
    if (Q && Q.rush && !Q.done && !Q.t0 && quizRoute) startRush();
  }
  function route() { Q = null; clearInterval(rushTimer); if (location.hash !== '#chrono') { C = null; clearInterval(cTimer); } render(); window.scrollTo({ top: 0 }); }
  window.addEventListener('hashchange', route);

  document.addEventListener('click', e => {
    const t = e.target.closest('button, a'); if (!t) return;
    if (t.classList.contains('choice')) return answer(+t.dataset.k, t);
    if (t.id === 'q-idk') return idk();
    if (t.id === 'q-next') return nextQ();
    if (t.id === 'snd') { P.sound = !P.sound; save(); if (P.sound) sound('ok'); return; }
    if (t.dataset.retry) { e.preventDefault(); Q = null; if (location.hash === t.getAttribute('href')) render(); else location.hash = t.getAttribute('href'); window.scrollTo({ top: 0 }); return; }
    if (t.id === 'read-go') { const m = mp(t.dataset.id); if (!m.read) { m.read = true; gainXp(20, t); } save(); location.hash = '#quiz-' + t.dataset.id; return; }
    if (t.id === 'c-start') return chronoStart();
    if (t.id === 'reset-ask') { $('#reset-box').hidden = false; t.hidden = true; return; }
    if (t.id === 'reset-no') { $('#reset-box').hidden = true; $('#reset-ask').hidden = false; return; }
    if (t.id === 'reset-yes') { const snd = P.sound; P = blank(); P.sound = snd; save(); render(); return; }
  });
  document.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.id === 'c-form') return chronoAnswer($('#c-in').value.trim());
    if (e.target.id === 'ae-form') {
      const fd = new FormData(e.target), ans = { age: fd.get('age'), ans: fd.get('ans') };
      AE.forEach(a => { const v = fd.get(a.id); if (v != null) ans[a.id] = +v; });
      P.auto = { ans, result: computeAuto(ans), at: Date.now() }; save(); render();
      const r = $('#ae-result'); if (r) r.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  document.addEventListener('keydown', e => {
    if (!Q || Q.done || !/^#(quiz|examen|revision|defi|jeu|rush)/.test(location.hash)) return;
    if (e.target.matches('input, select, textarea')) return;
    const it = Q.items[Q.cur]; if (!it) return;
    const open = it.picked == null && !it.idk;
    if (open && /^[1-4]$/.test(e.key) && +e.key <= it.order.length) { e.preventDefault(); answer(+e.key - 1, document.querySelectorAll('.choice')[+e.key - 1]); }
    else if (open && e.key === '0' && !Q.exam && !Q.rush) { e.preventDefault(); idk(); }
    else if (!open && e.key === 'Enter' && !e.target.matches('button, a')) { e.preventDefault(); nextQ(); }
  });

  render();
  initCloud();
})();
