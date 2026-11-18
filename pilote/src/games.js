/* Mini-jeux : générateurs de questions illimitées.
   Chaque générateur renvoie { q, choices, a, exp, how, qfig?, fig?, src? }. */
(function () {
  const H = window.FIGHELP;
  const R = Math.PI / 180;
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const p3 = n => String(n).padStart(3, '0');
  const fr = n => String(n).replace('.', ',');
  const nf = n => Number(n).toLocaleString('fr-FR');
  // Construit une question à partir d'une bonne réponse et de distracteurs (dédoublonnés)
  function mk(q, good, bads, extra) {
    const seen = new Set([String(good)]); const ch = [good];
    for (const b of bads) { if (ch.length >= 4) break; if (!seen.has(String(b))) { seen.add(String(b)); ch.push(b); } }
    const order = shuffle(ch);
    return Object.assign({ q, choices: order.map(String), a: order.indexOf(good) }, extra);
  }

  // ---------- Alphabet ----------
  const ALPHA = 'Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu'.split(' ');
  const NUMS = [['0', 'Zero', 'ZI-RO'], ['1', 'One', 'OUANN'], ['2', 'Two', 'TOU'], ['3', 'Three', 'TRI'], ['4', 'Four', 'FO-eur'], ['5', 'Five', 'FA-IF'], ['6', 'Six', 'SIKS'], ['7', 'Seven', 'SÈ-VEN'], ['8', 'Eight', 'EIT'], ['9', 'Nine', 'NAÏ-NEU']];
  const SRC_ALPHA = { label: 'OACI, Annexe 10, Vol. II, § 5.2.1.3 et DGAC, Manuel de phraséologie' };
  const letterOf = w => w[0];
  const alphaHow = 'L’alphabet radiotéléphonique de l’OACI attribue un mot à chaque lettre, choisi pour être compris par des locuteurs de toutes langues, même avec une radio grésillante. Les mots s’écrivent Alfa et Juliett (et non Alpha, Juliet) pour garder la bonne prononciation dans toutes les langues.';
  const alphabet = [
    () => { const w = pick(ALPHA); return mk(`Quel mot correspond à la lettre ${letterOf(w)} ?`, w, shuffle(ALPHA.filter(x => x !== w)), { exp: `${letterOf(w)} se dit « ${w} ».`, how: alphaHow, fig: 'otan', src: SRC_ALPHA }); },
    () => { const w = pick(ALPHA); return mk(`« ${w} » : quelle lettre ?`, letterOf(w), shuffle(ALPHA.filter(x => x !== w)).map(letterOf), { exp: `« ${w} » = ${letterOf(w)}.`, how: alphaHow, fig: 'otan', src: SRC_ALPHA }); },
    () => {
      const reg = 'F-O' + Array.from({ length: 3 }, () => String.fromCharCode(65 + rnd(0, 25))).join('');
      const spell = r => r.replace('-', '').split('').map(c => ALPHA.find(w => w[0] === c)).join(' ');
      const good = spell(reg);
      const pos = shuffle([1, 2, 3, 4]); const bads = [0, 1, 2].map(k => { const parts = good.split(' '); const i = pos[k]; const alt = { Alfa: 'Alpha', Juliett: 'Juliet', Whiskey: 'Whisky', Kilo: 'Kilogramme', Echo: 'Écho', Golf: 'Golfe', Hotel: 'Hôtel', Mike: 'Michel', Oscar: 'Olivier', Papa: 'Pierre', Romeo: 'Robert', Sierra: 'Simon', Tango: 'Thomas', Victor: 'Valérie', Yankee: 'Yvonne', Zulu: 'Zoé', Bravo: 'Bernard', Charlie: 'Charles', Delta: 'David', Foxtrot: 'François', India: 'Irène', Lima: 'Louis', November: 'Nicolas', Quebec: 'Québec', Uniform: 'Ursule', 'X-ray': 'Xavier', Foxtrot2: '' }; parts[i] = alt[parts[i]] || pick(ALPHA); return parts.join(' '); });
      return mk(`Comment épeler l’immatriculation ${reg} à la radio ?`, good, bads, { exp: `${reg} s’épelle : ${good}. Le tiret ne se prononce pas.`, how: 'Les avions immatriculés en France commencent par F ; en outre-mer, comme en Nouvelle-Calédonie, l’immatriculation commence par F-O. À la radio, chaque lettre est épelée avec l’alphabet OACI, jamais avec des prénoms.', fig: 'otan', src: SRC_ALPHA });
    },
    () => { const n = pick(NUMS); return mk(`Comment se prononce le chiffre ${n[0]} à la radio ?`, `${n[1]} (${n[2]})`, shuffle(NUMS.filter(x => x !== n)).map(x => `${x[1]} (${x[2]})`), { exp: `${n[0]} se dit « ${n[1]} », prononcé ${n[2]}.`, how: 'L’OACI fixe une prononciation pour chaque chiffre : 3 = « tree », 4 = « fower », 5 = « fife », 9 = « niner ». Elle évite les confusions (five / nine, nine / nein).', src: SRC_ALPHA }); },
    () => {
      const fl = rnd(5, 39) * 10; const s = String(fl).split('').map(d => NUMS[+d][1]).join(' ');
      const wrong1 = 'Flight level ' + (fl >= 100 ? ['', 'one hundred', 'two hundred', 'three hundred'][Math.floor(fl / 100)] + ' ' + (fl % 100) : String(fl));
      return mk(`Comment annoncer le niveau de vol ${fl} ?`, 'Flight level ' + s, [wrong1, 'Level ' + fl + ' feet', 'Flight level ' + String(fl).split('').reverse().map(d => NUMS[+d][1]).join(' ')], { exp: `On épelle chaque chiffre : Flight level ${s}.`, how: 'Les niveaux de vol, caps, fréquences, QNH et codes transpondeur se disent chiffre par chiffre. Seules les altitudes et hauteurs en centaines ou milliers ronds utilisent « hundred » et « thousand ».', src: SRC_ALPHA });
    }
  ];

  // ---------- Instruments ----------
  const SRC_INS = { label: 'FAA, Pilot’s Handbook of Aeronautical Knowledge (FAA-H-8083-25), ch. 8 « Flight Instruments »' };
  function altimeterSvg(alt) {
    const cx = 110, cy = 110; let s = H.face(cx, cy, 92);
    s += H.ticksDial(cx, cy, 88, 50, 6) + H.ticksDial(cx, cy, 88, 10, 14);
    for (let i = 0; i < 10; i++) { const a = (i * 36 - 90) * R; s += H.T((cx + 64 * Math.cos(a)).toFixed(1), (cy + 64 * Math.sin(a) + 7).toFixed(1), i, 't t-pfg t-b'); }
    s += `<rect x="${cx + 30}" y="${cy - 10}" width="44" height="20" rx="3" fill="#000" stroke="#56677C"/>` + H.T(cx + 52, cy + 5, '1013', 't-xs t-pfg');
    s += H.T(cx, cy + 40, 'ALT · FT ×100', 't-xs t-pfg');
    s += H.needle(cx, cy, (alt % 10000) / 10000 * 360, 46, 'st-pfg', 7) + H.needle(cx, cy, (alt % 1000) / 1000 * 360, 78, 'st-pfg', 3);
    return H.svg(220, 220, s, 'Altimètre');
  }
  function asiSvg(v) {
    const cx = 110, cy = 110, sp = x => (x - 40) * 2.5; let s = `<circle cx="${cx}" cy="${cy}" r="100" class="fl-bezel"/><circle cx="${cx}" cy="${cy}" r="94" class="fl-panel"/>`;
    s += `<path d="${H.arc(cx, cy, 80, sp(50), sp(110))}" class="st-ok" stroke-width="8" fill="none"/><path d="${H.arc(cx, cy, 80, sp(110), sp(150))}" class="st-warn" stroke-width="8" fill="none"/><path d="${H.arc(cx, cy, 70, sp(45), sp(85))}" style="stroke:#f5f7fa" stroke-width="6" fill="none"/>`;
    for (let x = 40; x <= 160; x += 10) { const a = (sp(x) - 90) * R; s += `<line x1="${(cx + 90 * Math.cos(a)).toFixed(1)}" y1="${(cy + 90 * Math.sin(a)).toFixed(1)}" x2="${(cx + (x % 20 ? 84 : 80) * Math.cos(a)).toFixed(1)}" y2="${(cy + (x % 20 ? 84 : 80) * Math.sin(a)).toFixed(1)}" class="st-pfg" stroke-width="2"/>`; if (x % 20 === 0) s += H.T((cx + 56 * Math.cos(a)).toFixed(1), (cy + 56 * Math.sin(a) + 5).toFixed(1), x, 't-sm t-pfg t-b'); }
    const r1 = (sp(150) - 90) * R; s += `<line x1="${cx + 72 * Math.cos(r1)}" y1="${cy + 72 * Math.sin(r1)}" x2="${cx + 92 * Math.cos(r1)}" y2="${cy + 92 * Math.sin(r1)}" class="st-bad" stroke-width="5"/>`;
    s += H.needle(cx, cy, sp(v), 76, 'st-pfg', 3.5) + H.T(cx, cy + 36, 'KT', 't-xs t-pfg');
    return H.svg(220, 220, s, 'Anémomètre');
  }
  function hdgSvg(h) {
    const cx = 110, cy = 110; let s = H.face(cx, cy, 92) + `<g transform="rotate(${-h} ${cx} ${cy})">`;
    for (let a = 0; a < 360; a += 5) { const ra = (a - 90) * R, l = a % 30 === 0 ? 12 : a % 10 === 0 ? 8 : 5; s += `<line x1="${(cx + 88 * Math.cos(ra)).toFixed(1)}" y1="${(cy + 88 * Math.sin(ra)).toFixed(1)}" x2="${(cx + (88 - l) * Math.cos(ra)).toFixed(1)}" y2="${(cy + (88 - l) * Math.sin(ra)).toFixed(1)}" class="st-pfg" stroke-width="1.6"/>`; }
    const lab = { 0: 'N', 90: 'E', 180: 'S', 270: 'W' };
    for (let a = 0; a < 360; a += 30) { const ra = (a - 90) * R, x = cx + 62 * Math.cos(ra), y = cy + 62 * Math.sin(ra); s += `<text x="${x.toFixed(1)}" y="${(y + 6).toFixed(1)}" text-anchor="middle" class="t ${lab[a] ? 't-b' : ''} t-pfg" transform="rotate(${a} ${x.toFixed(1)} ${y.toFixed(1)})">${lab[a] || a / 10}</text>`; }
    s += `</g><polygon points="${cx},${cy - 92} ${cx - 7},${cy - 104} ${cx + 7},${cy - 104}" class="fl-mock"/>`;
    s += `<path d="M${cx},${cy - 26} L${cx},${cy + 26} M${cx - 20},${cy - 4} L${cx + 20},${cy - 4} M${cx - 8},${cy + 20} L${cx + 8},${cy + 20}" class="st-mock" stroke-width="4" stroke-linecap="round"/>`;
    return H.svg(220, 220, s, 'Conservateur de cap');
  }
  function vsiSvg(vs) {
    const cx = 110, cy = 110; let s = H.face(cx, cy, 92);
    const ang = v => 270 + v / 2000 * 170;
    for (let v = -2000; v <= 2000; v += 100) { const a = (ang(v) - 90) * R, l = v % 500 === 0 ? 12 : 6; s += `<line x1="${(cx + 88 * Math.cos(a)).toFixed(1)}" y1="${(cy + 88 * Math.sin(a)).toFixed(1)}" x2="${(cx + (88 - l) * Math.cos(a)).toFixed(1)}" y2="${(cy + (88 - l) * Math.sin(a)).toFixed(1)}" class="st-pfg" stroke-width="2"/>`; if (v % 500 === 0) s += H.T((cx + 64 * Math.cos(a)).toFixed(1), (cy + 64 * Math.sin(a) + 5).toFixed(1), Math.abs(v / 100), 't-sm t-pfg t-b'); }
    s += H.T(cx + 26, cy - 30, 'MONTÉE ↑', 't-xs t-pfg', 'start') + H.T(cx + 26, cy + 38, 'DESCENTE ↓', 't-xs t-pfg', 'start') + H.T(cx + 10, cy + 4, 'ft/min ×100', 't-xs t-pfg', 'start');
    s += H.needle(cx, cy, ang(vs), 80, 'st-pfg', 3.5);
    return H.svg(220, 220, s, 'Variomètre');
  }
  const instruments = [
    () => { const alt = rnd(5, 99) * 100 + pick([0, 0, 50]); const good = nf(alt) + ' ft';
      const th = Math.floor(alt / 1000), hu = alt % 1000;
      const bads = [nf(((Math.floor(hu / 100)) * 1000 + th * 100) % 10000 || 100) + ' ft', nf(alt + 1000) + ' ft', nf(Math.max(100, alt - 1000)) + ' ft', nf(alt + 100) + ' ft'];
      return mk('Quelle altitude indique cet altimètre ?', good, bads, { qfig: altimeterSvg(alt), exp: `La petite aiguille (épaisse) indique les milliers : ${th}. La grande aiguille indique les centaines : ${fr(hu / 100)}. Total : ${good}.`, how: 'Comme une horloge : la petite aiguille avance lentement (1 tour = 10 000 ft), la grande fait un tour complet tous les 1 000 ft. On lit toujours la petite d’abord, puis la grande. Le calage (ici 1013 hPa) se règle dans la fenêtre.', src: SRC_INS }); },
    () => { const v = rnd(5, 15) * 10 + pick([0, 5]); const good = v + ' kt';
      const zone = v < 50 ? 'sous l’arc vert' : v <= 110 ? 'dans l’arc vert (plage normale)' : v <= 150 ? 'dans l’arc jaune (air calme uniquement)' : 'au-delà de la VNE';
      return mk('Quelle vitesse indique cet anémomètre ?', good, [(v + 10) + ' kt', (v - 10) + ' kt', (v + 5) + ' kt', (v - 5) + ' kt'], { qfig: asiSvg(v), exp: `L’aiguille est sur ${v} kt, ${zone}.`, how: 'L’anémomètre mesure la différence entre la pression totale (tube de Pitot) et la pression statique. Les arcs de couleur montrent les plages : blanc pour les volets, vert pour le vol normal, jaune pour l’air calme seulement, trait rouge à ne jamais dépasser.', fig: 'anemo', src: SRC_INS }); },
    () => { const h = rnd(0, 71) * 5; const good = p3(h) + '°';
      return mk('Quel cap indique ce conservateur de cap ?', good, [p3((h + 180) % 360) + '°', p3((h + 10) % 360) + '°', p3((h + 350) % 360) + '°', p3((h + 30) % 360) + '°'], { qfig: hdgSvg(h), exp: `On lit le cap sous l’index orange en haut : ${good}. Les chiffres de la rose sont en dizaines de degrés (12 = 120°).`, how: 'Le conservateur de cap est gyroscopique : il ne subit pas les erreurs du compas en virage, mais il dérive lentement. On le recale sur le compas magnétique en vol stabilisé, environ toutes les 15 minutes.', src: SRC_INS }); },
    () => { const vs = pick([-1, 1]) * rnd(1, 18) * 100; const good = (vs > 0 ? '+' : '−') + nf(Math.abs(vs)) + ' ft/min';
      const opp = (vs > 0 ? '−' : '+') + nf(Math.abs(vs)) + ' ft/min';
      return mk('Que montre ce variomètre ?', good, [opp, (vs > 0 ? '+' : '−') + nf(Math.abs(vs) + 500) + ' ft/min', (vs > 0 ? '+' : '−') + nf(Math.max(100, Math.abs(vs) - 300)) + ' ft/min'], { qfig: vsiSvg(vs), exp: `L’aiguille est ${vs > 0 ? 'au-dessus' : 'au-dessous'} du zéro (à gauche) : ${vs > 0 ? 'montée' : 'descente'} de ${nf(Math.abs(vs))} ft/min.`, how: 'Le variomètre compare la pression statique actuelle à celle d’une petite chambre qui fuit lentement. Il donne la tendance (monte ou descend) avec un léger retard. Le zéro est à 9 heures ; au-dessus c’est la montée.', src: SRC_INS }); },
    () => { const bank = pick([-30, -15, 0, 15, 30]), pitch = pick([-10, 0, 10]);
      const d = (b, p) => (b === 0 ? 'Ailes à plat' : `Virage à ${b > 0 ? 'droite' : 'gauche'}`) + ', ' + (p > 0 ? 'en montée' : p < 0 ? 'en descente' : 'en palier');
      const good = d(bank, pitch);
      const bads = shuffle([d(-bank || 15, pitch), d(bank, -pitch || 10), d(-bank || -15, -pitch || -10), d(bank === 0 ? 30 : 0, pitch)]);
      return mk('Que fait l’avion, d’après cet horizon artificiel ?', good, bads, { qfig: H.svg(220, 220, H.attitude(110, 110, 92, bank, pitch * 1.6, 'cg' + Math.random().toString(36).slice(2, 7)), 'Horizon artificiel'), exp: `${bank === 0 ? 'La ligne d’horizon est horizontale : ailes à plat.' : `La ligne d’horizon monte vers la ${bank > 0 ? 'droite' : 'gauche'} : l’avion est incliné à ${bank > 0 ? 'droite' : 'gauche'}.`} ${pitch > 0 ? 'La maquette orange est au-dessus de l’horizon : nez haut.' : pitch < 0 ? 'La maquette orange est sous l’horizon : nez bas.' : 'La maquette est sur l’horizon : assiette nulle.'}`, how: 'La maquette orange, c’est ton avion : elle ne bouge jamais. C’est l’horizon (ciel bleu, sol marron) qui bouge derrière, comme le vrai horizon à travers le pare-brise. Le petit triangle en haut indique l’inclinaison sur les graduations 10, 20, 30 et 60°.', fig: 'horizon', src: SRC_INS }); }
  ];

  // ---------- Pistes et caps ----------
  const SRC_RWY = { label: 'OACI, Annexe 14, Vol. I, § 5.2.2 (marques d’identification de piste)' };
  const rwyOf = q => { const n = Math.round(q / 10) % 36; return n === 0 ? 36 : n; };
  const pistes = [
    () => { const q = rnd(1, 359); const n = rwyOf(q); return mk(`Une piste orientée au ${p3(q)}° magnétique porte quel numéro ?`, String(n).padStart(2, '0'), [rwyOf(q + 180), rwyOf(q + 10), rwyOf(q + 350), Math.floor(q / 10) || 36].map(x => String(x).padStart(2, '0')), { exp: `${p3(q)}° ÷ 10 = ${fr((q / 10).toFixed(1))}, arrondi à ${n}.`, how: 'Le numéro de piste est l’orientation magnétique divisée par 10 et arrondie à l’entier le plus proche. Une piste orientée au nord porte le numéro 36, jamais 00.', fig: 'pistes', src: SRC_RWY }); },
    () => { const n = rnd(1, 18); const o = n + 18; const [a, b] = pick([[n, o], [o, n]]); return mk(`La piste ${String(a).padStart(2, '0')} a pour autre extrémité la piste… ?`, String(b).padStart(2, '0'), [String((a + 9) % 36 || 36).padStart(2, '0'), String((b + 1) % 36 || 36).padStart(2, '0'), String((b + 35) % 36 || 36).padStart(2, '0')], { exp: `Les deux sens d’une même piste diffèrent de 180°, donc de 18 : ${a} ${a > 18 ? '−' : '+'} 18 = ${b}.`, how: 'Une piste a deux sens d’utilisation, opposés de 180°. On l’appelle par exemple 11/29. On utilise le sens le plus face au vent.', fig: 'pistes', src: SRC_RWY }); },
    () => { const n = rnd(1, 18), o = n + 18; const nd = n * 10, od = o * 10; const useN = Math.random() < .5; const base = useN ? nd : od; const wd = ((base + pick([-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50]) + 360) % 360) || 360; const ws = rnd(6, 22);
      const good = String(useN ? n : o).padStart(2, '0'), bad = String(useN ? o : n).padStart(2, '0');
      return mk(`Aérodrome avec piste ${String(n).padStart(2, '0')}/${o}. Vent : ${p3(wd)}° / ${ws} kt. Quelle piste est en service ?`, good, [bad, 'Les deux sont équivalentes', 'Aucune, vent trop fort'], { exp: `Le vent vient du ${p3(wd)}°. La piste ${good} est orientée au ${p3(+good * 10)}° : c’est la plus face au vent (écart de ${Math.min(Math.abs(wd - +good * 10), 360 - Math.abs(wd - +good * 10))}°).`, how: 'On décolle et on atterrit face au vent : la vitesse par rapport au sol est plus faible, donc les distances sont plus courtes. La direction du vent donnée dans un METAR est celle d’où il vient.', fig: 'tdp', src: { label: 'EASA, SERA.3225 et FAA, Airplane Flying Handbook (FAA-H-8083-3), ch. 6' } }); },
    () => { const c = rnd(0, 71) * 5; const g = (c + 180) % 360; return mk(`Quel est le cap inverse de ${p3(c)}° ?`, p3(g) + '°', [p3((c + 90) % 360) + '°', p3((g + 20) % 360) + '°', p3((g + 340) % 360) + '°'], { exp: `${p3(c)} ${c < 180 ? '+' : '−'} 180 = ${p3(g)}.`, how: 'Astuce mentale : si le cap est inférieur à 180, ajoute 200 puis retire 20 ; sinon retire 200 puis ajoute 20. Exemple : 070 + 200 − 20 = 250.', src: { label: 'FAA, PHAK (FAA-H-8083-25), ch. 16 « Navigation »' } }); },
    () => { const cv = rnd(1, 71) * 5, d = rnd(2, 14), e = Math.random() < .5; const cm = (cv + (e ? -d : d) + 360) % 360;
      return mk(`Route vraie ${p3(cv)}°, déclinaison magnétique ${d}° ${e ? 'Est' : 'Ouest'}. Route magnétique ?`, p3(cm) + '°', [p3((cv + (e ? d : -d) + 360) % 360) + '°', p3(cv) + '°', p3((cm + 180) % 360) + '°'], { exp: `Déclinaison ${e ? 'Est : on la retranche' : 'Ouest : on l’ajoute'}. ${p3(cv)} ${e ? '−' : '+'} ${d} = ${p3(cm)}°.`, how: 'Le nord magnétique (celui du compas) n’est pas le nord géographique des cartes. L’écart s’appelle la déclinaison. Moyen mnémotechnique anglo-saxon : « East is least, West is best » (Est on retranche, Ouest on ajoute) pour passer du vrai au magnétique.', fig: 'vent', src: { label: 'FAA, PHAK (FAA-H-8083-25), ch. 16 « Variation »' } }); }
  ];

  // ---------- Vent ----------
  const vent = [
    () => { const n = rnd(1, 36), ang = pick([10, 20, 30, 45, 60, 90]), side = pick([-1, 1]), ws = pick([8, 10, 12, 15, 18, 20, 24, 30]);
      const wd = ((n * 10 + side * ang + 360) % 360) || 360; const xw = Math.round(ws * Math.sin(ang * R));
      return mk(`Piste ${String(n).padStart(2, '0')}, vent ${p3(wd)}° / ${ws} kt. Composante de vent traversier ?`, xw + ' kt', [ws + ' kt', Math.round(ws * Math.cos(ang * R)) + ' kt', Math.max(1, xw + pick([-4, 4, 6])) + ' kt', Math.round(ws / 2) + ' kt'], { exp: `L’angle entre le vent et la piste est ${ang}°. Travers = ${ws} × sin ${ang}° ≈ ${ws} × ${fr(Math.sin(ang * R).toFixed(2))} ≈ ${xw} kt.`, how: 'On sépare le vent en deux : une partie dans l’axe (vent de face) et une partie de côté (vent de travers). Règle rapide : 30° → la moitié du vent, 45° → 0,7, 60° et plus → presque tout le vent. Chaque avion a un vent de travers maximal démontré dans son manuel de vol.', fig: 'traversier', src: { label: 'FAA, Airplane Flying Handbook (FAA-H-8083-3), ch. 8 « Crosswind » ; FAA, PHAK, ch. 11' } }); },
    () => { const n = rnd(1, 36), ang = pick([0, 20, 30, 45, 60]), side = pick([-1, 1]), ws = pick([10, 12, 15, 20, 25]);
      const wd = ((n * 10 + side * ang + 360) % 360) || 360; const hw = Math.round(ws * Math.cos(ang * R));
      return mk(`Piste ${String(n).padStart(2, '0')}, vent ${p3(wd)}° / ${ws} kt. Composante de vent de face ?`, hw + ' kt', [ws + ' kt', Math.round(ws * Math.sin(ang * R)) + ' kt', Math.max(0, hw - 5) + ' kt', (hw + 4) + ' kt'], { exp: `Vent de face = ${ws} × cos ${ang}° ≈ ${hw} kt.`, how: 'Le vent de face réduit la vitesse sol, donc les distances de décollage et d’atterrissage. C’est pour cela qu’on choisit la piste la plus face au vent.', fig: 'traversier', src: { label: 'FAA, PHAK (FAA-H-8083-25), ch. 11 « Aircraft Performance »' } }); }
  ];

  // ---------- METAR ----------
  const SRC_MET = { label: 'OMM, Manuel des codes (WMO-No. 306), FM 15 METAR ; Météo-France, guide aviation' };
  const STA = [['NWWW', 'Nouméa La Tontouta'], ['NWWM', 'Nouméa Magenta'], ['NWWL', 'Lifou'], ['LFPG', 'Paris-Charles-de-Gaulle'], ['LFBO', 'Toulouse-Blagnac'], ['YSSY', 'Sydney'], ['NZAA', 'Auckland']];
  const WX = [['-RA', 'pluie faible'], ['RA', 'pluie modérée'], ['+RA', 'forte pluie'], ['SHRA', 'averses de pluie'], ['TSRA', 'orage avec pluie'], ['BR', 'brume'], ['DZ', 'bruine']];
  const COV = { FEW: '1 à 2 octas (quelques nuages)', SCT: '3 à 4 octas (épars)', BKN: '5 à 7 octas (fragmenté)', OVC: '8 octas (couvert)' };
  function genMetar() {
    const st = pick(STA), day = rnd(1, 28), hh = rnd(0, 23), mm = pick(['00', '30']);
    const vrb = Math.random() < .1; const wd = rnd(1, 36) * 10, ws = vrb ? rnd(1, 3) : rnd(4, 28), gust = !vrb && ws > 14 && Math.random() < .4 ? ws + rnd(8, 15) : null;
    const cavok = Math.random() < .2;
    const vis = cavok ? 9999 : pick([9999, 9999, 8000, 6000, 4000, 3000, 1500]);
    const wx = cavok || (vis === 9999 && Math.random() < .6) ? null : vis < 5000 ? pick(WX) : pick(WX.slice(0, 5));
    let clouds = [];
    if (!cavok) { let h = rnd(3, 25); const n = rnd(1, 3); const types = ['FEW', 'SCT', 'BKN', 'OVC']; let ti = rnd(0, 1); for (let i = 0; i < n; i++) { clouds.push([types[Math.min(ti, 3)], h, wx && wx[0] === 'TSRA' && i === 0 ? 'CB' : '']); h += rnd(5, 25); ti += rnd(0, 2); if (types[Math.min(ti - 1, 3)] === 'OVC') break; } }
    const t = rnd(12, 31), td = t - rnd(0, 12), q = rnd(998, 1028);
    const parts = ['METAR', st[0], `${String(day).padStart(2, '0')}${String(hh).padStart(2, '0')}${mm}Z`, vrb ? `VRB${String(ws).padStart(2, '0')}KT` : `${p3(wd)}${String(ws).padStart(2, '0')}${gust ? 'G' + gust : ''}KT`];
    if (cavok) parts.push('CAVOK'); else { parts.push(String(vis).padStart(4, '0')); if (wx) parts.push(wx[0]); clouds.forEach(c => parts.push(c[0] + p3(c[1]) + c[2])); }
    parts.push(`${String(t).padStart(2, '0')}/${String(td).padStart(2, '0')}`, `Q${q}`);
    return { txt: parts.join(' ') + '=', st, day, hh, mm, vrb, wd, ws, gust, cavok, vis, wx, clouds, t, td, q };
  }
  const metarBox = m => `<div class="metar-line" style="width:100%">${m.txt}</div>`;
  const metarHow = 'Un METAR se lit toujours dans le même ordre : type, code OACI de l’aérodrome, jour et heure UTC, vent (direction d’où il vient en degrés vrais, puis force en nœuds), visibilité en mètres (9999 = 10 km ou plus), temps présent, nuages (quantité en octas + hauteur en centaines de pieds), température / point de rosée, QNH.';
  const metarQs = [
    m => m.vrb ? mk('Que signifie le vent indiqué ?', 'Vent variable, faible (' + m.ws + ' kt)', ['Vent du nord, ' + m.ws + ' kt', 'Rafales de ' + m.ws + ' kt', 'Vent nul'], {}) : mk('D’où vient le vent et quelle est sa force ?', `Du ${p3(m.wd)}°, ${m.ws} kt`, [`Vers le ${p3(m.wd)}°, ${m.ws} kt`, `Du ${p3((m.wd + 180) % 360 || 360)}°, ${m.ws} kt`, `Du ${p3(m.wd)}°, ${m.ws} km/h`], { exp: `Groupe vent : ${p3(m.wd)} = direction d’où vient le vent, ${m.ws} = vitesse en nœuds (KT).` }),
    m => m.cavok ? mk('Que signifie CAVOK ?', 'Visibilité ≥ 10 km, pas de nuage significatif sous 5 000 ft, pas de phénomène', ['Ciel couvert', 'Visibilité nulle', 'Piste fermée'], { exp: 'CAVOK = Ceiling And Visibility OK : visibilité 10 km ou plus, aucun nuage sous 5 000 ft (ou sous l’altitude minimale de secteur la plus élevée si elle est plus haute), aucun cumulonimbus, aucun phénomène significatif.' })
      : mk('Quelle est la visibilité ?', m.vis === 9999 ? '10 km ou plus' : nf(m.vis) + ' m', m.vis === 9999 ? ['9 999 m exactement', '99 km', '1 km'] : [nf(m.vis * 10) + ' m', fr(m.vis / 100) + ' km', nf(m.vis) + ' ft'], { exp: m.vis === 9999 ? '9999 est un code : il signifie 10 km ou plus.' : `La visibilité est donnée en mètres : ${m.vis} m.` }),
    m => { const ceil = m.clouds.find(c => c[0] === 'BKN' || c[0] === 'OVC'); const good = ceil ? nf(ceil[1] * 100) + ' ft' : 'Pas de plafond';
      return mk('Quelle est la hauteur du plafond (première couche BKN ou OVC) ?', good, ceil ? [nf(ceil[1]) + ' ft', nf(ceil[1] * 1000) + ' ft', 'Pas de plafond', ...m.clouds.filter(c => c !== ceil).map(c => nf(c[1] * 100) + ' ft')] : [nf((m.clouds[0] ? m.clouds[0][1] : 30) * 100) + ' ft', '1 000 ft', '5 000 ft'], { exp: ceil ? `Le plafond est la première couche fragmentée (BKN) ou couverte (OVC) : ${ceil[0]}${p3(ceil[1])} = ${nf(ceil[1] * 100)} ft au-dessus de l’aérodrome.` : 'Aucune couche BKN ou OVC : il n’y a pas de plafond (FEW et SCT n’en forment pas).' }); },
    m => mk('Quelle est la température et le point de rosée ?', `${m.t} °C / ${m.td} °C`, [`${m.td} °C / ${m.t} °C`, `${m.t} °F / ${m.td} °F`, `${m.t} °C / humidité ${m.td} %`], { exp: `${m.t}/${m.td} : température ${m.t} °C, point de rosée ${m.td} °C. Plus ils sont proches, plus l’air est humide (risque de brume ou de brouillard).` }),
    m => mk('Quel est le QNH ?', m.q + ' hPa', [(m.q - 10) + ' hPa', '1013 hPa', m.q + ' inHg'], { exp: `Q${m.q} : QNH ${m.q} hPa. On l’affiche à l’altimètre pour lire l’altitude au-dessus du niveau de la mer.`, fig: 'calage' }),
    m => mk('À quelle heure UTC ce METAR a-t-il été émis ?', `Le ${m.day} à ${String(m.hh).padStart(2, '0')}h${m.mm} UTC`, [`Le ${m.day} à ${String((m.hh + 11) % 24).padStart(2, '0')}h${m.mm} UTC`, `Le ${String(m.hh).padStart(2, '0')} à ${m.day}h${m.mm} UTC`, `Le ${m.day} à ${String(m.hh).padStart(2, '0')}h${m.mm} heure locale`], { exp: `${String(m.day).padStart(2, '0')}${String(m.hh).padStart(2, '0')}${m.mm}Z : jour ${m.day}, ${String(m.hh).padStart(2, '0')}h${m.mm}, Z = UTC. En Nouvelle-Calédonie, l’heure locale est UTC + 11 : ${String((m.hh + 11) % 24).padStart(2, '0')}h${m.mm}.` }),
    m => m.gust ? mk('Que signifie « G' + m.gust + ' » dans le groupe vent ?', `Rafales jusqu’à ${m.gust} kt`, [`Vent moyen ${m.gust} kt`, `Vent variable sur ${m.gust}°`, `Visibilité ${m.gust} km`], { exp: `G = gust (rafale). Vent moyen ${m.ws} kt avec des rafales à ${m.gust} kt.` }) : null,
    m => m.wx ? mk(`Que signifie le code « ${m.wx[0]} » ?`, m.wx[1], shuffle(WX.filter(w => w !== m.wx)).map(w => w[1]), { exp: `${m.wx[0]} = ${m.wx[1]}. Le signe − veut dire faible, + fort ; SH = averse, TS = orage, RA = pluie, BR = brume, DZ = bruine.` }) : null,
    m => mk('De quel aérodrome s’agit-il ?', m.st[1], shuffle(STA.filter(s => s !== m.st)).map(s => s[1]), { exp: `${m.st[0]} est l’indicateur OACI de ${m.st[1]}. Les codes commençant par NW sont en Nouvelle-Calédonie, LF en France métropolitaine, Y en Australie, NZ en Nouvelle-Zélande.` })
  ];
  const metar = [() => { const m = genMetar(); let q = null; while (!q) q = pick(metarQs)(m); return Object.assign(q, { qfig: metarBox(m), how: metarHow, fig: 'metar', src: SRC_MET }); }];

  // ---------- Unités ----------
  const SRC_U = { label: 'OACI, Annexe 5 « Unités de mesure à utiliser dans l’exploitation en vol et au sol »' };
  const unites = [
    () => { const ft = rnd(1, 40) * 500; const m = Math.round(ft * 0.3048); return mk(`${nf(ft)} ft, c’est environ combien de mètres ?`, nf(m) + ' m', [nf(Math.round(ft / 0.3048)) + ' m', nf(Math.round(ft * 0.5)) + ' m', nf(Math.round(ft * 0.2)) + ' m'], { exp: `1 ft = 0,3048 m. ${nf(ft)} × 0,3048 ≈ ${nf(m)} m. Calcul mental : diviser par 3 et retirer 10 %.`, how: 'En aviation, les hauteurs et altitudes sont en pieds (ft), les distances en milles nautiques (NM) et les vitesses en nœuds (kt), conformément à l’Annexe 5 de l’OACI.', src: SRC_U }); },
    () => { const nm = rnd(2, 60) * 5; const km = Math.round(nm * 1.852); return mk(`${nm} NM, c’est environ combien de kilomètres ?`, nf(km) + ' km', [nf(Math.round(nm * 1.609)) + ' km', nf(nm) + ' km', nf(Math.round(nm / 1.852)) + ' km'], { exp: `1 NM = 1 852 m. ${nm} × 1,852 ≈ ${km} km.`, how: 'Le mille nautique correspond à une minute d’arc de latitude : c’est pour cela qu’il est pratique sur les cartes. Le mille terrestre (1 609 m) n’est pas utilisé en navigation aérienne.', src: SRC_U }); },
    () => { const kt = rnd(4, 30) * 10; const kmh = Math.round(kt * 1.852); return mk(`${kt} kt, c’est environ combien de km/h ?`, nf(kmh) + ' km/h', [nf(kt) + ' km/h', nf(Math.round(kt * 1.609)) + ' km/h', nf(Math.round(kt / 1.852)) + ' km/h'], { exp: `1 nœud = 1 NM par heure = 1,852 km/h. ${kt} × 1,852 ≈ ${kmh} km/h.`, how: 'Un nœud est une vitesse : un mille nautique par heure. Ne dis jamais « nœuds par heure ».', src: SRC_U }); },
    () => { const h = rnd(0, 23); const l = (h + 11) % 24; return mk(`Il est ${String(h).padStart(2, '0')}:00 UTC. Quelle heure est-il à Nouméa ?`, String(l).padStart(2, '0') + ':00', [String((h + 10) % 24).padStart(2, '0') + ':00', String((h + 13) % 24).padStart(2, '0') + ':00', String((h + 24 - 11) % 24).padStart(2, '0') + ':00'], { exp: `La Nouvelle-Calédonie est à UTC + 11 toute l’année : ${String(h).padStart(2, '0')} + 11 = ${String(l).padStart(2, '0')}:00${h + 11 >= 24 ? ' (le lendemain)' : ''}.`, how: 'Tous les horaires aéronautiques (plans de vol, METAR, NOTAM) sont en UTC, aussi appelé « Zulu » (Z), pour que tout le monde parle de la même heure partout dans le monde.', src: { label: 'OACI, Annexe 5, ch. 3 et Annexe 2' } }); },
    () => { const fl = rnd(2, 40) * 10; return mk(`Le niveau de vol FL ${p3(fl)} correspond à quelle altitude-pression ?`, nf(fl * 100) + ' ft', [nf(fl * 10) + ' ft', nf(fl * 1000) + ' ft', nf(Math.round(fl * 100 * 0.3048)) + ' ft'], { exp: `Niveau de vol = altitude-pression en centaines de pieds : FL ${p3(fl)} = ${nf(fl * 100)} ft avec le calage standard 1013,25 hPa.`, how: 'Au-dessus de l’altitude de transition, tous les avions affichent le même calage (1013,25 hPa). Ainsi, même si la pression réelle change, deux avions à des niveaux différents restent bien séparés.', fig: 'calage', src: { label: 'OACI, Annexe 2 et Doc 8168 (PANS-OPS), Vol. I, partie III' } }); }
  ];

  const GAMES = [
    { id: 'alphabet', name: 'Alphabet OACI', desc: 'Lettres, mots, chiffres, immatriculations, niveaux de vol.', gen: alphabet, n: 15, rush: 60, icon: 'abc' },
    { id: 'instruments', name: 'Lecture des instruments', desc: 'Altimètre, anémomètre, cap, variomètre, horizon : lis-les comme en vol.', gen: instruments, n: 10, icon: 'dial' },
    { id: 'pistes', name: 'Pistes et caps', desc: 'Numéros de piste, piste en service, caps inverses, déclinaison.', gen: pistes, n: 10, icon: 'rwy' },
    { id: 'vent', name: 'Vent de travers', desc: 'Calcule les composantes de face et de travers avant d’atterrir.', gen: vent, n: 10, icon: 'wind' },
    { id: 'metar', name: 'Décodeur METAR', desc: 'Des METAR générés au hasard (Nouméa, Lifou, Paris…) : décode-les.', gen: metar, n: 10, icon: 'cloud' },
    { id: 'unites', name: 'Unités et heures', desc: 'Pieds, milles nautiques, nœuds, niveaux de vol et heure UTC.', gen: unites, n: 10, icon: 'ruler' }
  ];
  window.GAMES = GAMES;
  window.gameQuestion = g => pick(g.gen)();
})();
