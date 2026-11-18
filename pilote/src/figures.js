/* Schémas pédagogiques dessinés en SVG. Couleurs via classes CSS (thème clair/sombre). */
(function () {
  const R = Math.PI / 180;
  const T = (x, y, s, cls = '', anchor = 'middle') =>
    `<text x="${x}" y="${y}" text-anchor="${anchor}" class="${cls}">${s}</text>`;
  const L = (x1, y1, x2, y2, cls = 'st-fg', w = 2, extra = '') =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" stroke-width="${w}" ${extra}/>`;
  function A(x1, y1, x2, y2, c = 'acc', w = 2.5, h = 10) {
    const a = Math.atan2(y2 - y1, x2 - x1);
    const p1 = [x2 - h * Math.cos(a - 0.42), y2 - h * Math.sin(a - 0.42)];
    const p2 = [x2 - h * Math.cos(a + 0.42), y2 - h * Math.sin(a + 0.42)];
    const bx = x2 - h * 0.8 * Math.cos(a), by = y2 - h * 0.8 * Math.sin(a);
    return L(x1, y1, bx.toFixed(1), by.toFixed(1), 'st-' + c, w) +
      `<polygon points="${x2},${y2} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}" class="fl-${c}"/>`;
  }
  const svg = (w, h, body, label) =>
    `<svg class="fig" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}" style="max-width:${w}px">${body}</svg>`;

  // Silhouette avion de profil (nez à droite), centrée en 0,0
  const planeSide = (cls = 'fl-surf2 st-fg') =>
    `<g class="${cls}" stroke-width="1.6" stroke-linejoin="round">
      <path d="M-100,-2 L-112,-38 L-96,-38 L-74,-9 Z"/>
      <path d="M-104,0 L-88,-9 L20,-14 L62,-12 L92,-4 L100,1 L92,8 L50,12 L-60,6 L-104,2 Z"/>
      <path d="M-12,-16 L48,-16 L48,-12 L-12,-12 Z"/>
      <path d="M-112,-1 L-82,-1 L-82,2 L-112,2 Z"/>
      <path d="M28,-12 L52,-12 L70,-4 L30,-4 Z" class="fl-cy" opacity=".35"/>
      <line x1="103" y1="-20" x2="103" y2="22" class="st-fg" stroke-width="3"/>
      <line x1="40" y1="11" x2="44" y2="26" class="st-fg"/><circle cx="44" cy="28" r="4" class="fl-fg"/>
      <line x1="-30" y1="7" x2="-36" y2="26" class="st-fg"/><circle cx="-36" cy="28" r="4" class="fl-fg"/>
    </g>`;
  // Silhouette avion vue de dessus (nez en haut), centrée en 0,0
  const planeTop = (cls = 'fl-surf2 st-fg') =>
    `<g class="${cls}" stroke-width="1.6" stroke-linejoin="round">
      <path d="M0,-110 C10,-108 14,-90 14,-60 L12,80 L6,110 L-6,110 L-12,80 L-14,-60 C-14,-90 -10,-108 0,-110 Z"/>
      <path d="M-150,-30 L150,-30 L150,0 L-150,0 Z"/>
      <path d="M-55,92 L55,92 L55,112 L-55,112 Z"/>
    </g>`;

  const F = {};

  F.axes = () => svg(640, 400, `
    <g transform="translate(320,215)">${planeTop()}
      ${L(0, -165, 0, 160, 'st-acc', 2.5, 'stroke-dasharray="8 5"')}
      ${L(-210, -15, 210, -15, 'st-cy', 2.5, 'stroke-dasharray="8 5"')}
      <circle cx="0" cy="-15" r="9" class="fl-ok"/><circle cx="0" cy="-15" r="3" class="fl-bg"/>
      <path d="M-26,-165 A30,12 0 1 0 26,-165" class="st-acc" stroke-width="2.5" fill="none"/>
      <polygon points="26,-165 16,-171 18,-160" class="fl-acc"/>
      <path d="M222,-45 A12,30 0 1 1 222,15" class="st-cy" stroke-width="2.5" fill="none"/>
      <polygon points="222,15 216,5 228,6" class="fl-cy"/>
      <path d="M-34,-15 A34,34 0 0 1 0,-49" class="st-ok" stroke-width="2.5" fill="none"/>
      <polygon points="0,-49 -10,-55 -9,-43" class="fl-ok"/>
    </g>
    ${T(360, 26, 'Axe longitudinal → ROULIS', 't t-b t-acc', 'start')}
    ${T(360, 44, 'ailerons · manche gauche / droite', 't-sm', 'start')}
    ${T(14, 150, 'Axe transversal → TANGAGE', 't t-b t-cy', 'start')}
    ${T(14, 168, 'profondeur · manche avant / arrière', 't-sm', 'start')}
    ${T(380, 330, 'Axe vertical (point vert) → LACET', 't t-b t-ok', 'start')}
    ${T(380, 348, 'direction · palonnier', 't-sm', 'start')}
    ${T(380, 366, 'les 3 axes passent par le centre de gravité', 't-xs t-mut', 'start')}
  `, 'Les trois axes de l’avion');

  F.forces = () => svg(560, 330, `
    <g transform="translate(270,170)">${planeSide()}
      ${A(0, -20, 0, -135, 'cy', 4, 14)}${A(0, 10, 0, 125, 'fg', 4, 14)}
      ${A(108, 0, 220, 0, 'acc', 4, 14)}${A(-110, 0, -225, 0, 'mut', 4, 14)}
    </g>
    ${T(285, 30, 'PORTANCE', 't t-b t-cy', 'start')}${T(285, 47, 'générée par l’aile', 't-sm', 'start')}
    ${T(285, 300, 'POIDS', 't t-b', 'start')}${T(285, 317, 'masse × gravité', 't-sm', 'start')}
    ${T(490, 150, 'TRACTION', 't t-b t-acc')}${T(490, 167, 'hélice / moteur', 't-sm')}
    ${T(60, 150, 'TRAÎNÉE', 't t-b t-mut')}${T(60, 167, 'résistance de l’air', 't-sm')}
    ${T(80, 250, 'Palier stabilisé :', 't-sm t-b', 'start')}${T(80, 267, 'Portance = Poids', 't-sm', 'start')}${T(80, 284, 'Traction = Traînée', 't-sm', 'start')}
  `, 'Les quatre forces');

  F.profil = () => {
    const af = 'M0,0 C10,-26 70,-40 150,-36 C260,-30 360,-12 440,0 C360,6 260,10 150,12 C70,14 12,10 0,0 Z';
    return svg(600, 330, `
      <g transform="translate(70,190) rotate(-9)">
        <path d="${af}" class="fl-surf2 st-fg" stroke-width="2"/>
        ${L(-30, 0, 480, 0, 'st-mut', 1.5, 'stroke-dasharray="6 5"')}
        ${T(220, 32, 'corde', 't-sm t-mut')}
      </g>
      ${A(4, 190, 60, 190, 'cy', 2.5)}${A(4, 230, 60, 230, 'cy', 2.5)}${A(4, 150, 60, 150, 'cy', 2.5)}
      ${T(14, 268, 'vent relatif', 't-sm t-cy', 'start')}
      ${L(70, 190, 530, 190, 'st-cy', 1.2, 'stroke-dasharray="3 4"')}
      <path d="M420,190 A350,350 0 0 0 416,124" class="st-acc" stroke-width="2.5" fill="none"/>
      ${T(442, 165, 'α incidence', 't t-b t-acc', 'start')}
      ${A(250, 140, 250, 40, 'cy', 3.5, 13)}${T(262, 52, 'PORTANCE', 't t-b t-cy', 'start')}
      ${T(262, 69, '⊥ au vent relatif', 't-sm', 'start')}
      ${A(300, 175, 380, 175, 'mut', 3, 11)}${T(388, 180, 'traînée', 't-sm t-mut', 'start')}
      ${T(150, 105, 'EXTRADOS — dépression (aspiration)', 't-sm t-b')}
      ${T(230, 262, 'INTRADOS — surpression', 't-sm t-b')}
      ${T(78, 222, 'bord d’attaque', 't-sm', 'start')}
      ${T(504, 104, 'bord de fuite', 't-sm')}
    `, 'Profil d’aile');
  };

  F.decrochage = () => {
    const x = a => 60 + a * 24, y = c => 280 - c * 150;
    let pts = [];
    for (let a = -2; a <= 15; a += 0.5) pts.push([x(a), y(0.2 + a * 0.087)]);
    const cmax = 0.2 + 15 * 0.087;
    pts.push([x(15.6), y(cmax + 0.02)], [x(16.3), y(cmax - 0.08)], [x(17.5), y(cmax - 0.3)], [x(19), y(cmax - 0.42)], [x(20), y(cmax - 0.46)]);
    const d = 'M' + pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L');
    let ticks = '';
    for (let a = 0; a <= 20; a += 5) ticks += L(x(a), 280, x(a), 286, 'st-mut', 1.5) + T(x(a), 302, a + '°', 't-sm t-mut');
    for (let c = 0; c <= 1.5; c += 0.5) ticks += L(54, y(c), 60, y(c), 'st-mut', 1.5) + T(48, y(c) + 4, c.toFixed(1).replace('.', ','), 't-sm t-mut', 'end');
    return svg(560, 330, `
      <rect x="${x(15.6)}" y="40" width="${x(20.5) - x(15.6)}" height="240" class="fl-bad" opacity=".12"/>
      ${L(60, 40, 60, 280, 'st-mut', 1.5)}${L(60, 280, 560 - 20, 280, 'st-mut', 1.5)}${ticks}
      <path d="${d}" class="st-acc" stroke-width="3.5" fill="none"/>
      <circle cx="${x(15.6)}" cy="${y(cmax + 0.02)}" r="6" class="fl-acc"/>
      ${T(x(15.6) - 8, y(cmax + 0.02) - 16, 'Cz max = DÉCROCHAGE', 't t-b t-acc', 'end')}
      ${T(x(18), 70, 'écoulement', 't-sm t-bad')}${T(x(18), 86, 'décollé', 't-sm t-bad')}
      ${T(x(5), 170, 'zone normale de vol :', 't-sm', 'start')}${T(x(5), 186, 'plus d’incidence = plus de portance', 't-sm', 'start')}
      ${T(300, 325, 'Angle d’incidence α', 't-sm t-b')}
      ${T(18, 30, 'Coefficient de portance Cz', 't-sm t-b', 'start')}
    `, 'Courbe de portance et décrochage');
  };

  F.gouvernes = () => svg(600, 380, `
    <g transform="translate(300,180)">${planeTop()}
      <rect x="-150" y="-6" width="60" height="10" class="fl-acc"/><rect x="90" y="-6" width="60" height="10" class="fl-acc"/>
      <rect x="-85" y="-6" width="65" height="10" class="fl-cy"/><rect x="20" y="-6" width="65" height="10" class="fl-cy"/>
      <rect x="-55" y="104" width="110" height="10" class="fl-ok"/>
      <rect x="18" y="104" width="22" height="10" class="fl-warn"/>
      <rect x="-3" y="96" width="6" height="26" class="fl-fg"/>
    </g>
    ${L(150, 180, 120, 120, 'st-acc', 1.2)}${T(120, 112, 'AILERONS', 't t-b t-acc')}${T(120, 96, 'roulis', 't-sm')}
    ${L(250, 180, 250, 120, 'st-cy', 1.2)}${T(250, 112, 'VOLETS', 't t-b t-cy')}${T(250, 96, 'portance à basse vitesse', 't-sm')}
    ${L(270, 290, 170, 330, 'st-ok', 1.2)}${T(150, 345, 'PROFONDEUR', 't t-b t-ok')}${T(150, 362, 'tangage', 't-sm')}
    ${L(300, 302, 300, 345, 'st-fg', 1.2)}${T(300, 360, 'DIRECTION (dérive)', 't t-b')}${T(300, 376, 'lacet', 't-sm')}
    ${L(330, 290, 460, 330, 'st-warn', 1.2)}${T(490, 345, 'COMPENSATEUR', 't t-b t-warn')}${T(490, 362, 'annule l’effort au manche', 't-sm')}
  `, 'Les gouvernes');

  F.virage = () => {
    const phi = 30;
    const plane = `<g class="fl-surf2 st-fg" stroke-width="1.6">
        <rect x="-150" y="-4" width="300" height="8" rx="3"/><circle cx="0" cy="0" r="16"/>
        <path d="M-6,-16 L0,-46 L6,-16 Z"/><rect x="-50" y="-22" width="100" height="5" rx="2"/></g>`;
    const rows = [[0, '1'], [30, '1,15'], [45, '1,41'], [60, '2'], [75, '3,9']];
    let tbl = rows.map((r, i) => T(450, 98 + i * 24, r[0] + '°', 't-sm', 'end') + T(530, 98 + i * 24, r[1] + ' g', 't-sm t-b', 'end')).join('');
    return svg(580, 330, `
      <g transform="translate(190,175)">
        <g transform="rotate(${phi})">${plane}${A(0, -20, 0, -140, 'cy', 3.5, 13)}</g>
        ${A(0, 20, 0, 120, 'fg', 3.5, 13)}
        ${A(0, 0, (140 * Math.sin(phi * R)).toFixed(1), 0, 'acc', 3.5, 12)}
        ${L(0, 0, 0, -140, 'st-mut', 1, 'stroke-dasharray="4 4"')}
        <path d="M0,-70 A70,70 0 0 1 ${(70 * Math.sin(phi * R)).toFixed(1)},${(-70 * Math.cos(phi * R)).toFixed(1)}" class="st-acc" fill="none" stroke-width="2"/>
        ${T(18, -82, 'φ', 't t-b t-acc')}
      </g>
      ${T(268, 40, 'Portance inclinée', 't-sm t-b t-cy', 'start')}
      ${T(258, 172, 'force centripète', 't-sm t-acc', 'start')}${T(258, 188, '(fait tourner)', 't-sm', 'start')}
      ${T(200, 310, 'Poids', 't-sm t-b', 'start')}
      ${T(490, 50, 'n = 1 / cos φ', 't t-b')}
      ${T(450, 76, 'incl.', 't-sm t-mut', 'end')}${T(530, 76, 'facteur n', 't-sm t-mut', 'end')}${tbl}
      ${T(490, 230, 'À 60° : l’avion « pèse » 2×,', 't-sm')}${T(490, 247, 'la vitesse de décrochage', 't-sm')}${T(490, 264, 'augmente de √2 ≈ +41 %', 't-sm t-b')}
    `, 'Virage et facteur de charge');
  };

  F.puissance = () => {
    const x = v => 60 + (v - 40) * 3.4, y = p => 280 - p * 1.7;
    const pn = v => 3800 / v + 0.00002 * v * v * v;
    const pu = v => 105 - 0.0035 * (v - 135) * (v - 135);
    let d1 = '', d2 = '';
    for (let v = 45; v <= 175; v += 2) {
      d1 += (v === 45 ? 'M' : 'L') + x(v).toFixed(1) + ',' + y(pn(v)).toFixed(1);
      d2 += (v === 45 ? 'M' : 'L') + x(v).toFixed(1) + ',' + y(pu(v)).toFixed(1);
    }
    let vmin = 45, best = 1e9;
    for (let v = 45; v < 175; v += 0.5) if (pn(v) < best) { best = pn(v); vmin = v; }
    return svg(560, 330, `
      <rect x="60" y="30" width="${x(vmin) - 60}" height="250" class="fl-warn" opacity=".12"/>
      ${L(60, 30, 60, 280, 'st-mut', 1.5)}${L(60, 280, 520, 280, 'st-mut', 1.5)}
      <path d="${d1}" class="st-acc" stroke-width="3.5" fill="none"/>
      <path d="${d2}" class="st-cy" stroke-width="3" fill="none" stroke-dasharray="9 5"/>
      ${L(x(vmin), 30, x(vmin), 280, 'st-mut', 1.2, 'stroke-dasharray="4 4"')}
      <circle cx="${x(vmin)}" cy="${y(best)}" r="5" class="fl-acc"/>
      ${T(x(vmin), 300, 'V puissance mini', 't-sm t-b')}
      ${T(68, 50, '2nd RÉGIME', 't-sm t-b t-warn', 'start')}${T(68, 66, 'ralentir demande', 't-sm', 'start')}${T(68, 82, 'PLUS de puissance', 't-sm', 'start')}
      ${T(390, 230, '1er RÉGIME', 't-sm t-b', 'start')}${T(390, 246, 'régime normal', 't-sm', 'start')}
      ${T(505, 42, 'puissance nécessaire', 't-sm t-acc', 'end')}
      ${T(300, 132, 'puissance disponible (plein gaz)', 't-sm t-cy')}
      ${T(290, 324, 'Vitesse →', 't-sm t-b')}${T(18, 22, 'Puissance', 't-sm t-b', 'start')}
    `, 'Courbe de puissance');
  };

  F.finesse = () => svg(560, 280, `
    <rect x="20" y="220" width="520" height="40" class="fl-ground" opacity=".55"/>
    ${L(20, 220, 540, 220, 'st-fg', 2)}
    ${L(60, 60, 500, 220, 'st-acc', 3, 'stroke-dasharray="10 6"')}
    <g transform="translate(60,60) rotate(20) scale(.38)">${planeSide()}</g>
    ${L(40, 60, 40, 220, 'st-cy', 2)}${L(34, 60, 46, 60, 'st-cy', 2)}
    ${T(30, 145, '1 000 m', 't t-b t-cy', 'end')}
    ${L(60, 240, 500, 240, 'st-fg', 1.5)}${L(60, 234, 60, 246, 'st-fg', 1.5)}${L(500, 234, 500, 246, 'st-fg', 1.5)}
    ${T(280, 255, '10 km parcourus', 't t-b')}
    ${T(330, 90, 'Finesse = distance ÷ hauteur perdue', 't t-b')}
    ${T(330, 112, 'Finesse 10 → 10 km pour 1 000 m', 't-sm')}
    ${T(330, 130, 'vent de face : on va moins loin', 't-sm t-mut')}
  `, 'Finesse en plané');

  F.tdp = () => svg(600, 380, `
    <rect x="160" y="270" width="280" height="26" class="fl-surf2 st-fg" stroke-width="1.5"/>
    ${L(175, 283, 425, 283, 'st-mut', 1.5, 'stroke-dasharray="12 8"')}
    ${T(300, 318, 'PISTE 09 — décollage et atterrissage face au vent (vers l’Est)', 't-sm')}
    <path d="M200,283 L470,283 Q520,283 520,230 L520,120 Q520,70 470,70 L130,70 Q80,70 80,120 L80,230 Q80,283 130,283 L160,283"
      class="st-acc" stroke-width="3" fill="none"/>
    ${A(300, 70, 280, 70, 'acc', 3)}${A(520, 200, 520, 180, 'acc', 3)}${A(80, 160, 80, 180, 'acc', 3)}${A(470, 283, 490, 283, 'acc', 3)}${A(110, 283, 130, 283, 'acc', 3)}
    ${T(300, 56, 'VENT ARRIÈRE', 't t-b t-acc')}${T(300, 96, '≈ 1 000 ft sol, parallèle à la piste', 't-sm')}
    ${T(532, 160, 'VENT', 't t-b t-acc', 'start')}${T(532, 177, 'TRAVERSIER', 't t-b t-acc', 'start')}
    ${T(68, 160, 'ÉTAPE', 't t-b t-acc', 'end')}${T(68, 177, 'DE BASE', 't t-b t-acc', 'end')}
    ${T(120, 262, 'FINALE', 't t-b t-acc')}
    ${T(480, 262, 'MONTÉE INITIALE', 't t-b t-acc')}
    ${A(590, 350, 545, 350, 'cy', 3)}${T(580, 370, 'vent', 't-sm t-cy', 'end')}
    ${T(300, 190, 'Circuit « main gauche » :', 't-sm t-b')}${T(300, 207, 'tous les virages se font à gauche', 't-sm')}
  `, 'Tour de piste');

  F.pistes = () => {
    let piano = '';
    for (let i = 0; i < 6; i++) { piano += `<rect x="70" y="${132 + i * 12}" width="40" height="6" class="fl-fg"/><rect x="490" y="${132 + i * 12}" width="40" height="6" class="fl-fg"/>`; }
    return svg(600, 320, `
      <rect x="50" y="120" width="500" height="80" class="fl-panel"/>
      <g style="fill:#f5f7fa">${piano.replace(/fl-fg/g, '')}</g>
      <text x="150" y="172" class="t-run" transform="rotate(90 150 160)" text-anchor="middle">09</text>
      <text x="450" y="172" class="t-run" transform="rotate(-90 450 160)" text-anchor="middle">27</text>
      ${[190, 240, 290, 340, 390].map(xx => `<rect x="${xx}" y="158" width="28" height="4" style="fill:#f5f7fa"/>`).join('')}
      <rect x="200" y="140" width="40" height="10" style="fill:#f5f7fa"/><rect x="200" y="170" width="40" height="10" style="fill:#f5f7fa"/>
      ${A(40, 250, 200, 250, 'acc', 3)}${T(120, 275, 'QFU 087° → piste 09', 't t-b t-acc')}
      ${A(560, 70, 400, 70, 'cy', 3)}${T(480, 55, 'QFU 267° → piste 27', 't t-b t-cy')}
      ${T(300, 300, 'Numéro = orientation magnétique ÷ 10, arrondie. Les deux sens diffèrent de 18.', 't-sm')}
      ${T(90, 110, 'seuil', 't-sm t-mut')}${T(220, 110, 'zone de toucher', 't-sm t-mut')}
    `, 'Numérotation des pistes');
  };

  // ---------- Instruments ----------
  const face = (cx, cy, r = 62) => `<circle cx="${cx}" cy="${cy}" r="${r + 6}" class="fl-bezel"/><circle cx="${cx}" cy="${cy}" r="${r}" class="fl-panel"/>`;
  const ticksDial = (cx, cy, r, n, len, a0 = 0, span = 360) => {
    let s = '';
    for (let i = 0; i < n; i++) { const a = (a0 + span * i / n - 90) * R; s += `<line x1="${(cx + r * Math.cos(a)).toFixed(1)}" y1="${(cy + r * Math.sin(a)).toFixed(1)}" x2="${(cx + (r - len) * Math.cos(a)).toFixed(1)}" y2="${(cy + (r - len) * Math.sin(a)).toFixed(1)}" class="st-pfg" stroke-width="2"/>`; }
    return s;
  };
  const needle = (cx, cy, ang, len, cls = 'st-pfg', w = 3) => { const a = (ang - 90) * R; return `<line x1="${cx}" y1="${cy}" x2="${(cx + len * Math.cos(a)).toFixed(1)}" y2="${(cy + len * Math.sin(a)).toFixed(1)}" class="${cls}" stroke-width="${w}" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="4" class="fl-pfg"/>`; };
  const arc = (cx, cy, r, a1, a2) => { const p = a => [(cx + r * Math.cos((a - 90) * R)).toFixed(1), (cy + r * Math.sin((a - 90) * R)).toFixed(1)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); return `M${x1},${y1} A${r},${r} 0 ${a2 - a1 > 180 ? 1 : 0} 1 ${x2},${y2}`; };

  function attitude(cx, cy, r, bank, pitch, id) {
    return `<defs><clipPath id="${id}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
      <circle cx="${cx}" cy="${cy}" r="${r + 6}" class="fl-bezel"/>
      <g clip-path="url(#${id})"><g transform="rotate(${-bank} ${cx} ${cy}) translate(0 ${pitch})">
        <rect x="${cx - 2 * r}" y="${cy - 2 * r}" width="${4 * r}" height="${2 * r}" class="fl-sky"/>
        <rect x="${cx - 2 * r}" y="${cy}" width="${4 * r}" height="${2 * r}" class="fl-ground"/>
        ${L(cx - 2 * r, cy, cx + 2 * r, cy, 'st-pfg', 2)}
        ${[-20, -10, 10, 20].map(p => L(cx - (Math.abs(p) === 10 ? 14 : 22) * r / 62, cy - p * 1.6 * r / 62, cx + (Math.abs(p) === 10 ? 14 : 22) * r / 62, cy - p * 1.6 * r / 62, 'st-pfg', 1.5)).join('')}
      </g></g>
      ${[-60, -30, -20, -10, 0, 10, 20, 30, 60].map(a => { const ra = (a - 90) * R; const l = a % 30 === 0 ? 10 : 6; return `<line x1="${(cx + (r - 1) * Math.cos(ra)).toFixed(1)}" y1="${(cy + (r - 1) * Math.sin(ra)).toFixed(1)}" x2="${(cx + (r - 1 - l) * Math.cos(ra)).toFixed(1)}" y2="${(cy + (r - 1 - l) * Math.sin(ra)).toFixed(1)}" class="st-pfg" stroke-width="2"/>`; }).join('')}
      <g transform="rotate(${-bank} ${cx} ${cy})"><polygon points="${cx},${cy - r + 12} ${cx - 6},${cy - r + 22} ${cx + 6},${cy - r + 22}" class="fl-pfg"/></g>
      <path d="M${cx - r * 0.55},${cy} L${cx - r * 0.18},${cy} L${cx - r * 0.1},${cy + 7} M${cx + r * 0.55},${cy} L${cx + r * 0.18},${cy} L${cx + r * 0.1},${cy + 7}" class="st-mock" stroke-width="4" fill="none"/>
      <circle cx="${cx}" cy="${cy}" r="3" class="fl-mock"/>`;
  }

  F.six = () => {
    const pos = [[100, 95], [260, 95], [420, 95], [100, 265], [260, 265], [420, 265]];
    const [a, b, c, d, e, f] = pos;
    let s = '';
    // Anémomètre
    s += face(...a) + `<path d="${arc(a[0], a[1], 54, 30, 150)}" class="st-ok" stroke-width="6" fill="none"/><path d="${arc(a[0], a[1], 54, 150, 210)}" class="st-warn" stroke-width="6" fill="none"/>` + ticksDial(a[0], a[1], 58, 12, 8) + needle(a[0], a[1], 95, 46) + T(a[0], a[1] + 30, 'KT', 't-xs t-pfg');
    // Horizon
    s += attitude(b[0], b[1], 62, 0, 4, 'clip6');
    // Altimètre
    s += face(...c) + ticksDial(c[0], c[1], 58, 10, 9) + needle(c[0], c[1], 54, 30, 'st-pfg', 5) + needle(c[0], c[1], 194, 48) + T(c[0], c[1] + 30, '1015', 't-xs t-pfg');
    // Coordinateur de virage
    s += face(...d) + `<g transform="rotate(15 ${d[0]} ${d[1]})"><rect x="${d[0] - 40}" y="${d[1] - 3}" width="80" height="6" class="fl-pfg"/><circle cx="${d[0]}" cy="${d[1]}" r="8" class="fl-pfg"/></g>` +
      `<path d="M${d[0] - 34},${d[1] + 26} Q${d[0]},${d[1] + 40} ${d[0] + 34},${d[1] + 26}" class="st-pfg" stroke-width="12" fill="none" opacity=".35"/><circle cx="${d[0]}" cy="${d[1] + 33}" r="6" class="fl-pfg"/>` + T(d[0] - 44, d[1] + 20, 'G', 't-xs t-pfg') + T(d[0] + 44, d[1] + 20, 'D', 't-xs t-pfg');
    // Conservateur de cap
    s += face(...e) + ticksDial(e[0], e[1], 58, 36, 6) + ['N', '3', '6', 'E', '12', '15', 'S', '21', '24', 'W', '30', '33'].map((t, i) => { const ang = (i * 30 - 30 - 90) * R; return T((e[0] + 40 * Math.cos(ang)).toFixed(1), (e[1] + 40 * Math.sin(ang) + 4).toFixed(1), t, 't-xs t-pfg'); }).join('') +
      `<polygon points="${e[0]},${e[1] - 64} ${e[0] - 6},${e[1] - 72} ${e[0] + 6},${e[1] - 72}" class="fl-acc"/><path d="M${e[0]},${e[1] - 18} L${e[0]},${e[1] + 18} M${e[0] - 14},${e[1] - 2} L${e[0] + 14},${e[1] - 2} M${e[0] - 6},${e[1] + 14} L${e[0] + 6},${e[1] + 14}" class="st-mock" stroke-width="3"/>`;
    // Variomètre
    s += face(...f) + ticksDial(f[0], f[1], 58, 18, 7, -180 + 10, 340) + needle(f[0], f[1], 300, 48) + T(f[0] - 30, f[1] + 4, '0', 't-xs t-pfg') + T(f[0] + 8, f[1] + 30, 'ft/min', 't-xs t-pfg');
    const lab = [['Anémomètre', 'vitesse'], ['Horizon artificiel', 'assiette / inclinaison'], ['Altimètre', 'altitude'], ['Coordinateur de virage', 'taux de virage + bille'], ['Conservateur de cap', 'cap'], ['Variomètre', 'vitesse verticale']];
    pos.forEach((p, i) => { s += T(p[0], p[1] + 88, lab[i][0], 't-sm t-b') + T(p[0], p[1] + 103, lab[i][1], 't-xs t-mut'); });
    return svg(520, 380, s, 'Les six instruments de base');
  };

  F.anemo = () => {
    const cx = 200, cy = 190, sp = v => (v - 40) * 2.5; // 40 kt → 0°, 160 kt → 300°
    let s = `<circle cx="${cx}" cy="${cy}" r="${150}" class="fl-bezel"/><circle cx="${cx}" cy="${cy}" r="${142}" class="fl-panel"/>`;
    s += `<path d="${arc(cx, cy, 112, sp(45), sp(85))}" style="stroke:#f5f7fa" stroke-width="9" fill="none"/>`;
    s += `<path d="${arc(cx, cy, 124, sp(50), sp(110))}" class="st-ok" stroke-width="11" fill="none"/>`;
    s += `<path d="${arc(cx, cy, 124, sp(110), sp(150))}" class="st-warn" stroke-width="11" fill="none"/>`;
    const r1 = (sp(150) - 90) * R; s += `<line x1="${cx + 108 * Math.cos(r1)}" y1="${cy + 108 * Math.sin(r1)}" x2="${cx + 138 * Math.cos(r1)}" y2="${cy + 138 * Math.sin(r1)}" class="st-bad" stroke-width="6"/>`;
    for (let v = 40; v <= 160; v += 10) { const a = (sp(v) - 90) * R; s += `<line x1="${(cx + 102 * Math.cos(a)).toFixed(1)}" y1="${(cy + 102 * Math.sin(a)).toFixed(1)}" x2="${(cx + 92 * Math.cos(a)).toFixed(1)}" y2="${(cy + 92 * Math.sin(a)).toFixed(1)}" class="st-pfg" stroke-width="2"/>`; if (v % 20 === 0) s += T((cx + 76 * Math.cos(a)).toFixed(1), (cy + 76 * Math.sin(a) + 5).toFixed(1), v, 't-sm t-pfg'); }
    s += needle(cx, cy, sp(95), 100, 'st-pfg', 4) + T(cx, cy + 50, 'KT', 't-sm t-pfg');
    const lab = (txt, sub, y, cls) => T(380, y, txt, 't t-b ' + cls, 'start') + T(380, y + 17, sub, 't-sm', 'start');
    s += lab('Arc blanc : VSO → VFE', 'plage d’utilisation des volets', 60, '');
    s += lab('Arc vert : VS1 → VNO', 'plage normale', 120, 't-ok');
    s += lab('Arc jaune : VNO → VNE', 'air calme uniquement', 180, 't-warn');
    s += lab('Trait rouge : VNE', 'vitesse à ne jamais dépasser', 240, 't-bad');
    s += T(380, 300, 'Exemple d’avion école (valeurs fictives)', 't-xs t-mut', 'start');
    return svg(620, 380, s, 'Anémomètre et ses arcs');
  };

  F.horizon = () => svg(560, 300, attitude(150, 150, 120, 20, 14, 'clipH') + `
    ${T(310, 70, 'Ce que tu vois :', 't t-b', 'start')}
    ${T(310, 96, '• la maquette (orange) est fixe :', 't-sm', 'start')}${T(322, 112, 'c’est ton avion', 't-sm', 'start')}
    ${T(310, 138, '• la ligne d’horizon bouge :', 't-sm', 'start')}${T(322, 154, 'ici elle penche → virage à DROITE (20°)', 't-sm', 'start')}
    ${T(310, 180, '• maquette au-dessus de l’horizon', 't-sm', 'start')}${T(322, 196, '→ assiette à cabrer (nez haut)', 't-sm', 'start')}
    ${T(310, 222, '• le repère du haut indique', 't-sm', 'start')}${T(322, 238, 'l’inclinaison (graduations 10/20/30/60°)', 't-sm', 'start')}
  `, 'Horizon artificiel en virage');

  F.moteur = () => {
    const steps = [['1. Admission', 'piston ↓', 'aspire air + essence', 1, 0, 1], ['2. Compression', 'piston ↑', 'comprime le mélange', 0, 0, -1], ['3. Combustion', 'étincelle', 'pousse le piston ↓', 0, 0, 1], ['4. Échappement', 'piston ↑', 'chasse les gaz', 0, 1, -1]];
    let s = '';
    steps.forEach((st, i) => {
      const x = 20 + i * 140, pis = st[5] === 1 ? 120 : 80;
      s += `<rect x="${x + 25}" y="60" width="80" height="140" class="fl-surf2 st-fg" stroke-width="2"/>`;
      s += `<rect x="${x + 29}" y="${pis}" width="72" height="30" class="fl-mut"/>`;
      s += L(x + 65, pis + 30, x + 65 + (i % 2 ? 14 : -14), 230, 'st-fg', 4);
      s += `<circle cx="${x + 65}" cy="238" r="16" class="st-mut" fill="none" stroke-width="2"/>`;
      s += `<rect x="${x + 33}" y="${st[3] ? 64 : 56}" width="24" height="5" class="${st[3] ? 'fl-cy' : 'fl-fg'}"/>`;
      s += `<rect x="${x + 73}" y="${st[4] ? 64 : 56}" width="24" height="5" class="${st[4] ? 'fl-warn' : 'fl-fg'}"/>`;
      s += `<rect x="${x + 61}" y="40" width="8" height="18" class="fl-fg"/>`;
      if (i === 2) s += `<polygon points="${x + 65},70 ${x + 55},92 ${x + 75},86 ${x + 62},112 ${x + 80},80 ${x + 68},84" class="fl-acc"/>`;
      if (i === 0) s += A(x + 20, 40, x + 42, 58, 'cy', 2.5);
      if (i === 3) s += A(x + 88, 58, x + 112, 36, 'warn', 2.5);
      s += A(x + 120, st[5] === 1 ? 110 : 150, x + 120, st[5] === 1 ? 150 : 110, 'acc', 2.5);
      s += T(x + 65, 278, st[0], 't-sm t-b') + T(x + 65, 295, st[1], 't-xs') + T(x + 65, 309, st[2], 't-xs');
    });
    return svg(580, 320, s, 'Cycle du moteur 4 temps');
  };

  F.atmosphere = () => {
    const y = km => 290 - km * 17, x = t => 300 + t * 3.4;
    return svg(580, 320, `
      ${L(80, 30, 80, 290, 'st-mut', 1.5)}${L(80, 290, 540, 290, 'st-mut', 1.5)}
      ${[0, 5, 11, 15].map(k => L(74, y(k), 80, y(k), 'st-mut', 1.5) + T(70, y(k) + 4, k + ' km', 't-xs t-mut', 'end')).join('')}
      ${[-60, -40, -20, 0, 20].map(t => L(x(t), 290, x(t), 296, 'st-mut', 1.5) + T(x(t), 310, t + '°C', 't-xs t-mut')).join('')}
      <rect x="80" y="${y(15)}" width="460" height="${y(11) - y(15)}" class="fl-cy" opacity=".1"/>
      <path d="M${x(15)},${y(0)} L${x(-56.5)},${y(11)} L${x(-56.5)},${y(15)}" class="st-acc" stroke-width="3.5" fill="none"/>
      ${L(80, y(11), 540, y(11), 'st-cy', 1.2, 'stroke-dasharray="6 4"')}
      ${T(536, y(11) - 8, 'TROPOPAUSE ≈ 11 km / 36 000 ft', 't-sm t-b t-cy', 'end')}
      ${T(x(-56.5) + 10, y(13.3), 'stratosphère : −56,5 °C constant', 't-xs', 'start')}
      <circle cx="${x(15)}" cy="${y(0)}" r="5" class="fl-acc"/>
      ${T(574, y(0) - 14, 'Niveau mer : 1013,25 hPa · 15 °C', 't-sm t-b', 'end')}
      ${T(x(-20) + 30, y(5.5), '−2 °C par 1 000 ft', 't-sm t-b t-acc', 'start')}
      ${T(x(-20) + 30, y(5.5) + 16, '(−6,5 °C par km)', 't-xs', 'start')}
      ${T(100, 236, 'Pression ÷2 vers 5 500 m (FL 180)', 't-xs', 'start')}
      ${T(100, 252, 'Près du sol : 1 hPa ≈ 28 ft', 't-xs', 'start')}
    `, 'Atmosphère standard');
  };

  F.calage = () => svg(600, 330, `
    <path d="M20,270 L180,270 Q230,250 260,215 L420,215 Q470,240 520,270 L580,270 L580,320 L20,320 Z" class="fl-ground" opacity=".55"/>
    <rect x="20" y="270" width="160" height="50" class="fl-cy" opacity=".25"/>
    ${T(100, 300, 'niveau de la mer', 't-xs')}
    <rect x="280" y="208" width="120" height="7" class="fl-panel"/>${T(340, 235, 'aérodrome', 't-xs')}
    <path d="M20,120 Q150,100 300,118 T580,110" class="st-mut" stroke-width="2" fill="none" stroke-dasharray="7 5"/>
    ${T(24, 96, 'surface isobare 1013,25 hPa', 't-xs t-mut', 'start')}
    <g transform="translate(340,60) scale(.35)">${planeSide()}</g>
    ${A(120, 270, 120, 72, 'acc', 2.5)}${T(112, 150, 'ALTITUDE', 't-sm t-b t-acc', 'end')}${T(112, 166, 'calage QNH', 't-xs', 'end')}
    ${A(330, 208, 330, 74, 'cy', 2.5)}${T(322, 160, 'HAUTEUR', 't-sm t-b t-cy', 'end')}${T(322, 176, 'calage QFE', 't-xs', 'end')}
    ${A(460, 113, 460, 64, 'warn', 2.5)}${A(460, 113, 460, 72, 'warn', 2.5)}${T(470, 80, 'NIVEAU DE VOL', 't-sm t-b t-warn', 'start')}${T(470, 96, 'calage 1013', 't-xs', 'start')}
    ${L(105, 72, 360, 72, 'st-mut', 1, 'stroke-dasharray="3 3"')}
  `, 'Calages altimétriques');

  const cu = (x, y, s = 1, cls = 'fl-cloud st-mut') => `<g transform="translate(${x},${y}) scale(${s})" class="${cls}" stroke-width="1.2"><path d="M-40,0 Q-44,-18 -26,-20 Q-22,-38 -2,-34 Q12,-48 26,-30 Q44,-30 40,-10 Q50,0 40,0 Z"/></g>`;
  F.nuages = () => svg(600, 380, `
    ${L(90, 30, 90, 350, 'st-mut', 1.5)}
    ${[[350, '0'], [250, '2 km'], [110, '6 km']].map(v => L(84, v[0], 600, v[0], 'st-mut', 1, 'stroke-dasharray="3 6"') + T(80, v[0] + 4, v[1], 't-xs t-mut', 'end')).join('')}
    ${T(98, 46, 'ÉTAGE SUPÉRIEUR (cristaux de glace)', 't-xs t-b', 'start')}
    ${T(98, 126, 'ÉTAGE MOYEN', 't-xs t-b', 'start')}${T(98, 266, 'ÉTAGE INFÉRIEUR', 't-xs t-b', 'start')}
    <path d="M120,80 q20,-14 40,-4 t40,-2 M130,92 q20,-10 40,0" class="st-mut" stroke-width="2" fill="none"/>${T(165, 104, 'Ci', 't-sm t-b')}
    ${[0, 1, 2, 3, 4].map(i => `<circle cx="${230 + i * 12}" cy="${80 + (i % 2) * 6}" r="5" class="fl-cloud st-mut"/>`).join('')}${T(255, 104, 'Cc', 't-sm t-b')}
    <rect x="300" y="72" width="80" height="10" rx="5" class="fl-cloud st-mut"/>${T(340, 104, 'Cs', 't-sm t-b')}
    ${cu(150, 190, .6)}${cu(180, 196, .5)}${T(165, 218, 'Ac', 't-sm t-b')}
    <rect x="230" y="170" width="140" height="22" rx="8" class="fl-cloud st-mut"/>${T(300, 218, 'As', 't-sm t-b')}
    <rect x="110" y="300" width="120" height="12" rx="6" class="fl-cloud st-mut"/>${T(170, 330, 'St', 't-sm t-b')}
    ${cu(270, 310, .55)}${cu(310, 312, .55)}${cu(350, 310, .55)}${T(310, 330, 'Sc', 't-sm t-b')}
    <rect x="380" y="200" width="70" height="120" rx="14" class="fl-dark st-mut"/>${T(415, 345, 'Ns', 't-sm t-b')}${T(415, 290, 'pluie', 't-xs', 'middle')}
    ${cu(495, 330, .6)}${T(495, 345, 'Cu', 't-sm t-b')}
    <path d="M520,320 L530,140 Q500,80 470,70 L600,64 Q570,90 572,140 L580,320 Z" class="fl-dark st-mut" stroke-width="1.5"/>${T(556, 345, 'Cb', 't-sm t-b t-bad')}
    ${T(556, 200, 'orage', 't-xs')}
    ${T(545, 56, 'développement vertical', 't-xs t-b', 'end')}
  `, 'Les familles de nuages');

  F.fronts = () => svg(620, 330, `
    ${T(155, 24, 'FRONT FROID', 't t-b t-cy')}${T(465, 24, 'FRONT CHAUD', 't t-b t-bad')}
    ${L(310, 30, 310, 320, 'st-mut', 1, 'stroke-dasharray="4 4"')}
    <path d="M20,280 L130,280 Q200,270 230,150 L290,150 L290,280" class="fl-cy" opacity=".22"/>
    ${T(70, 260, 'air froid', 't-sm t-b t-cy')}${A(40, 230, 110, 230, 'cy', 2.5)}
    ${T(262, 130, 'air chaud', 't-sm t-b t-bad')}
    <path d="M190,250 L196,90 Q178,60 160,56 L240,52 Q220,66 222,90 L230,250 Z" class="fl-dark st-mut"/>${T(208, 76, 'Cb', 't-sm t-b')}
    ${T(155, 306, 'pente raide, temps violent et bref', 't-xs')}
    ${[0, 1, 2, 3, 4].map(i => `<polygon points="${40 + i * 50},300 ${56 + i * 50},300 ${48 + i * 50},288" class="fl-cy"/>`).join('').replace(/300/g, '322').replace(/288/g, '310')}
    <path d="M330,280 L610,280 L610,250 Q480,200 360,280 Z" class="fl-cy" opacity=".22"/>
    ${T(560, 268, 'air froid', 't-sm t-b t-cy')}${T(380, 200, 'air chaud', 't-sm t-b t-bad')}${A(345, 220, 410, 200, 'bad', 2.5)}
    <rect x="420" y="215" width="80" height="34" rx="10" class="fl-dark st-mut"/>${T(460, 237, 'Ns', 't-sm t-b')}
    <rect x="480" y="160" width="70" height="14" rx="7" class="fl-cloud st-mut"/>${T(515, 152, 'As', 't-xs t-b')}
    <path d="M530,100 q20,-10 40,0 t30,0" class="st-mut" fill="none" stroke-width="2"/>${T(570, 92, 'Ci', 't-xs t-b')}
    ${T(465, 306, 'pente douce, pluie continue étendue', 't-xs')}
  `, 'Fronts froid et chaud');

  F.isobares = () => {
    const sys = (cx, cy, letter, cw) => {
      let s = '';
      [28, 50, 72].forEach(r => s += `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.2}" ry="${r}" class="st-mut" fill="none" stroke-width="1.5"/>`);
      s += T(cx, cy + 8, letter, 't-big ' + (letter === 'D' ? 't-bad' : 't-cy'));
      [0, 90, 180, 270].forEach(a => {
        const r = 61, ra = a * R, x = cx + r * 1.2 * Math.cos(ra), y = cy + r * Math.sin(ra);
        const dir = cw ? 1 : -1; const tx = -Math.sin(ra) * dir, ty = Math.cos(ra) * dir;
        s += A((x - tx * 14).toFixed(1), (y - ty * 14).toFixed(1), (x + tx * 14).toFixed(1), (y + ty * 14).toFixed(1), letter === 'D' ? 'bad' : 'cy', 2.5, 9);
      });
      return s;
    };
    return svg(620, 400, `
      ${T(155, 24, 'HÉMISPHÈRE NORD', 't t-b')}${T(465, 24, 'HÉMISPHÈRE SUD (Nouvelle-Calédonie)', 't t-b t-acc')}
      ${L(310, 30, 310, 390, 'st-mut', 1, 'stroke-dasharray="4 4"')}
      ${sys(155, 120, 'D', false)}${sys(155, 300, 'A', true)}
      ${sys(465, 120, 'D', true)}${sys(465, 300, 'A', false)}
      ${T(155, 210, 'dépression : sens inverse des aiguilles', 't-xs')}
      ${T(155, 390, 'anticyclone : sens des aiguilles', 't-xs')}
      ${T(465, 210, 'dépression : sens des aiguilles', 't-xs t-b')}
      ${T(465, 390, 'anticyclone : sens inverse des aiguilles', 't-xs t-b')}
    `, 'Rotation des vents autour des centres de pression');
  };

  F.metar = () => {
    const toks = [['METAR', 'type de message', 'mut'], ['NWWW', 'La Tontouta', 'acc'], ['180000Z', 'le 18 à 00h00 UTC', 'cy'], ['12012KT', 'vent 120° · 12 nœuds', 'acc'], ['9999', 'visibilité ≥ 10 km', 'ok'], ['FEW020', '1-2/8 nuages à 2 000 ft', 'cy'], ['SCT040', '3-4/8 nuages à 4 000 ft', 'cy'], ['26/19', 'temp. 26 °C / point de rosée 19 °C', 'warn'], ['Q1016', 'QNH 1016 hPa', 'acc'], ['NOSIG', 'pas de changement prévu', 'ok']];
    return `<div class="metar"><div class="metar-line">${toks.map(t => `<span class="mt mt-${t[2]}">${t[0]}</span>`).join(' ')}</div>
      <div class="metar-grid">${toks.map(t => `<div><code class="mt mt-${t[2]}">${t[0]}</code><span>${t[1]}</span></div>`).join('')}</div>
      <p class="metar-note">Exemple pédagogique construit pour l’exercice, pas une observation réelle. Les nuages : FEW 1–2/8, SCT 3–4/8, BKN 5–7/8, OVC 8/8. Hauteurs en centaines de pieds.</p></div>`;
  };

  F.espaces = () => svg(620, 360, `
    <rect x="10" y="300" width="600" height="40" class="fl-ground" opacity=".5"/>${L(10, 300, 610, 300, 'st-fg', 2)}
    <rect x="250" y="210" width="120" height="90" class="fl-cy" opacity=".25" /><rect x="250" y="210" width="120" height="90" class="st-cy" fill="none" stroke-width="2"/>
    ${T(310, 250, 'CTR', 't t-b t-cy')}${T(310, 268, 'sol → 1 500 ft', 't-xs')}${T(310, 284, 'classe D', 't-xs')}
    <path d="M160,210 L250,210 L250,160 L370,160 L370,210 L460,210 L460,110 L160,110 Z" class="fl-acc" opacity=".12"/>
    <path d="M160,210 L250,210 M370,210 L460,210 L460,110 L160,110 L160,210" class="st-acc" fill="none" stroke-width="2"/>
    ${L(250, 160, 370, 160, 'st-acc', 2, 'stroke-dasharray="5 4"')}
    ${T(310, 135, 'TMA — classe D ou E', 't t-b t-acc')}${T(205, 190, 'plancher 1 500 ft', 't-xs')}${T(310, 125 - 30, 'plafond FL 115 (exemple)', 't-xs')}
    <rect x="300" y="294" width="20" height="6" class="fl-panel"/>${T(310, 318, 'aérodrome', 't-xs')}
    ${T(80, 260, 'ESPACE G', 't t-b')}${T(80, 278, 'non contrôlé', 't-xs')}
    ${T(540, 260, 'ESPACE G', 't t-b')}${T(540, 278, 'non contrôlé', 't-xs')}
    ${T(80, 160, 'classe E / G', 't-sm')}${T(540, 160, 'classe E / G', 't-sm')}
    ${L(10, 50, 610, 50, 'st-mut', 1.5, 'stroke-dasharray="8 5"')}${T(310, 40, 'Au-dessus : espaces supérieurs, accès réservé (IFR)', 't-sm t-b')}
    ${T(310, 352, 'Exemple type : les vraies limites figurent sur les cartes aéronautiques', 't-xs t-mut')}
  `, 'Coupe des espaces aériens');

  F.vent = () => svg(560, 340, `
    <circle cx="80" cy="290" r="5" class="fl-fg"/>
    ${A(80, 290, 300, 60, 'acc', 3.5, 13)}${A(300, 60, 400, 110, 'cy', 3.5, 13)}${A(80, 290, 400, 110, 'ok', 3.5, 13)}
    ${L(80, 290, 80, 40, 'st-mut', 1.2, 'stroke-dasharray="4 4"')}${T(80, 32, 'N', 't-sm t-b')}
    ${T(176, 160, 'CAP + vitesse propre', 't-sm t-b t-acc', 'end')}${T(176, 176, '(où pointe le nez)', 't-xs', 'end')}
    ${T(360, 70, 'VENT', 't-sm t-b t-cy', 'start')}
    ${T(268, 230, 'ROUTE + vitesse sol', 't-sm t-b t-ok', 'start')}${T(268, 246, '(trajectoire réelle)', 't-xs', 'start')}
    <path d="M${80 + 70 * Math.cos(-46 * R)},${290 + 70 * Math.sin(-46 * R)} A70,70 0 0 1 ${80 + 70 * Math.cos(-29.4 * R)},${290 + 70 * Math.sin(-29.4 * R)}" class="st-warn" stroke-width="3" fill="none"/>
    ${T(168, 255, 'dérive', 't-sm t-b t-warn', 'start')}
    ${T(420, 300, 'Cap = Route ± dérive', 't t-b')}
  `, 'Triangle des vitesses');

  F.traversier = () => {
    const th = 30, V = 160, cx = 160, cy = 270;
    const ex = cx + V * Math.sin(th * R), ey = cy - V * Math.cos(th * R);
    const rows = [['30°', '× 0,5'], ['45°', '× 0,7'], ['60°', '× 0,9'], ['90°', '× 1']];
    return svg(600, 320, `
      <rect x="140" y="40" width="40" height="260" class="fl-panel"/>${L(160, 50, 160, 290, 'st-pfg', 1.5, 'stroke-dasharray="10 8"')}
      ${A(ex, ey, cx, cy, 'acc', 3.5, 13)}
      ${A(cx, ey, cx, cy, 'ok', 3, 11)}${A(ex, cy - 10, cx + 4, cy - 10, 'cy', 3, 11)}
      ${L(ex, ey, cx, ey, 'st-mut', 1, 'stroke-dasharray="3 3"')}${L(ex, ey, ex, cy - 10, 'st-mut', 1, 'stroke-dasharray="3 3"')}
      <path d="M160,200 A70,70 0 0 1 ${(cx + 70 * Math.sin(th * R)).toFixed(1)},${(cy - 70 * Math.cos(th * R)).toFixed(1)}" class="st-warn" fill="none" stroke-width="2"/>
      ${T(ex + 8, ey - 22, 'VENT 20 kt', 't-sm t-b t-acc', 'start')}${T(ex + 8, ey - 6, 'à 30° de l’axe', 't-xs t-acc', 'start')}
      ${T(130, 190, 'face', 't-sm t-b t-ok', 'end')}${T(130, 206, '≈ 17 kt', 't-xs', 'end')}
      ${T(ex + 10, cy - 4, 'travers : 10 kt', 't-sm t-b t-cy', 'start')}
      ${T(400, 70, 'Composante de travers', 't t-b', 'start')}${T(400, 88, '= vent × facteur', 't-sm', 'start')}
      ${rows.map((r, i) => T(420, 120 + i * 24, r[0], 't-sm', 'start') + T(520, 120 + i * 24, r[1], 't-sm t-b', 'end')).join('')}
      ${T(400, 240, '(c’est le sinus de l’angle)', 't-xs t-mut', 'start')}
    `, 'Composante de vent traversier');
  };

  F.centrage = () => {
    const x = c => 70 + (c - 800) * 1.2, y = m => 290 - (m - 500) * 0.45;
    const env = [[860, 550], [860, 850], [900, 1000], [1060, 1000], [1060, 550]];
    return svg(560, 340, `
      ${L(70, 40, 70, 290, 'st-mut', 1.5)}${L(70, 290, 530, 290, 'st-mut', 1.5)}
      ${[850, 900, 950, 1000, 1050, 1100].map(c => L(x(c), 290, x(c), 296, 'st-mut', 1.5) + T(x(c), 310, c, 't-xs t-mut')).join('')}
      ${[600, 800, 1000].map(m => L(64, y(m), 70, y(m), 'st-mut', 1.5) + T(60, y(m) + 4, m, 't-xs t-mut', 'end')).join('')}
      <polygon points="${env.map(p => x(p[0]) + ',' + y(p[1])).join(' ')}" class="fl-ok st-ok" fill-opacity=".15" stroke-width="2.5"/>
      ${T(x(960), y(760), 'ZONE AUTORISÉE', 't-sm t-b t-ok')}
      <circle cx="${x(960)}" cy="${y(900)}" r="7" class="fl-ok"/>${T(x(960) + 12, y(900) + 4, 'OK', 't-sm t-b', 'start')}
      <circle cx="${x(1085)}" cy="${y(880)}" r="7" class="fl-bad"/>${T(x(1085), y(880) - 14, 'trop arrière !', 't-sm t-b t-bad')}
      ${T(x(860) - 6, y(600), 'limite', 't-xs', 'end')}${T(x(860) - 6, y(600) + 14, 'avant', 't-xs', 'end')}
      ${T(x(1060) + 6, y(600), 'limite', 't-xs', 'start')}${T(x(1060) + 6, y(600) + 14, 'arrière', 't-xs', 'start')}
      ${T(300, 330, 'Centre de gravité (mm derrière la référence)', 't-sm t-b')}${T(18, 28, 'Masse (kg)', 't-sm t-b', 'start')}
      ${T(300, 28, 'Exemple fictif d’avion léger', 't-xs t-mut')}
    `, 'Enveloppe masse et centrage');
  };

  F.vor = () => {
    const cx = 200, cy = 190, r = 140;
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" class="st-mut" fill="none" stroke-width="1.5" stroke-dasharray="3 5"/>`;
    for (let a = 0; a < 360; a += 30) { const ra = (a - 90) * R; s += L(cx, cy, (cx + r * Math.cos(ra)).toFixed(1), (cy + r * Math.sin(ra)).toFixed(1), 'st-mut', 1, 'opacity=".5"') + T((cx + (r + 16) * Math.cos(ra)).toFixed(1), (cy + (r + 16) * Math.sin(ra) + 4).toFixed(1), String(a).padStart(3, '0'), 't-xs t-mut'); }
    const ra = (45 - 90) * R, px = cx + 105 * Math.cos(ra), py = cy + 105 * Math.sin(ra);
    s += L(cx, cy, (cx + r * Math.cos(ra)).toFixed(1), (cy + r * Math.sin(ra)).toFixed(1), 'st-acc', 3);
    s += `<polygon points="${cx},${cy - 12} ${cx + 10},${cy - 6} ${cx + 10},${cy + 6} ${cx},${cy + 12} ${cx - 10},${cy + 6} ${cx - 10},${cy - 6}" class="fl-surf st-fg" stroke-width="2"/><circle cx="${cx}" cy="${cy}" r="3" class="fl-fg"/>`;
    s += `<g transform="translate(${px.toFixed(1)},${py.toFixed(1)}) rotate(225) scale(.18)">${planeTop('fl-acc st-acc')}</g>`;
    s += T(px + 18, py + 2, 'avion', 't-sm t-b t-acc', 'start');
    s += T(420, 70, 'Avion sur la RADIALE 045', 't t-b t-acc', 'start');
    s += T(420, 96, 'QDR 045 : relèvement depuis la balise', 't-sm', 'start');
    s += T(420, 116, 'QDM 225 : cap magnétique pour', 't-sm', 'start') + T(432, 132, 'rejoindre la balise (sans vent)', 't-sm', 'start');
    s += T(420, 158, 'QDM = QDR ± 180°', 't-sm t-b', 'start');
    s += T(420, 200, 'Une radiale part toujours', 't-sm', 'start') + T(420, 216, 'DE la balise vers l’extérieur.', 't-sm', 'start');
    return svg(720, 380, s, 'VOR et radiales');
  };

  F.ils = () => svg(620, 360, `
    ${T(16, 24, 'VUE DE PROFIL — GLIDE', 't-sm t-b', 'start')}
    ${L(20, 160, 600, 160, 'st-fg', 2)}<rect x="480" y="156" width="120" height="6" class="fl-panel"/>
    <path d="M500,160 L40,60 L40,90 Z" class="fl-acc" opacity=".14"/>${L(500, 160, 40, 75, 'st-acc', 2.5)}
    ${T(250, 92, 'pente 3° ≈ 300 ft par NM', 't-sm t-b t-acc')}
    ${L(150, 105, 150, 160, 'st-cy', 1.5, 'stroke-dasharray="3 3"')}${T(150, 178, 'OM ≈ 4 NM', 't-xs t-cy')}
    ${L(420, 145, 420, 160, 'st-cy', 1.5, 'stroke-dasharray="3 3"')}${T(420, 178, 'MM', 't-xs t-cy')}
    ${T(16, 214, 'VUE DE DESSUS — LOCALIZER', 't-sm t-b', 'start')}
    <rect x="480" y="276" width="120" height="16" class="fl-panel"/>${L(20, 284, 600, 284, 'st-mut', 1, 'stroke-dasharray="8 6"')}
    <path d="M600,284 L40,240 L40,284 Z" class="fl-cy" opacity=".14"/><path d="M600,284 L40,328 L40,284 Z" class="fl-warn" opacity=".14"/>
    ${T(120, 262, 'faisceau 90 Hz', 't-xs')}${T(120, 316, 'faisceau 150 Hz', 't-xs')}
    ${T(330, 250, 'Axe = égalité des deux signaux', 't-sm t-b', 'start')}
    ${T(540, 310, 'piste', 't-xs')}
  `, 'ILS : localizer et glide');

  F.hypoxie = () => {
    const data = [['FL 180', 'env. 20 à 30 min', 1500], ['FL 250', 'env. 3 à 5 min', 240], ['FL 300', 'env. 1 à 2 min', 90], ['FL 350', 'env. 30 à 60 s', 45], ['FL 400', 'env. 15 à 20 s', 18]];
    const w = s => (Math.log10(s) - 1) / (Math.log10(2000) - 1) * 300;
    return svg(560, 300, `
      ${T(16, 26, 'Temps de conscience utile (TUC) sans oxygène', 't t-b', 'start')}
      ${data.map((d, i) => `<rect x="110" y="${50 + i * 44}" width="${w(d[2]).toFixed(1)}" height="26" class="fl-${i < 2 ? 'warn' : 'bad'}" opacity="${0.35 + i * 0.13}"/>` + T(100, 68 + i * 44, d[0], 't-sm t-b', 'end') + T(118 + w(d[2]), 68 + i * 44, d[1], 't-sm', 'start')).join('')}
      ${T(16, 284, 'Échelle logarithmique. Valeurs indicatives au repos, très variables selon les individus.', 't-xs t-mut', 'start')}
    `, 'Hypoxie et temps de conscience utile');
  };

  F.reason = () => {
    const labels = ['Organisation', 'Supervision', 'Conditions', 'Actes'];
    let s = '';
    labels.forEach((l, i) => {
      const x = 120 + i * 110;
      s += `<path d="M${x},70 L${x + 40},50 L${x + 40},230 L${x},250 Z" class="fl-cheese st-warn" stroke-width="1.5"/>`;
      s += `<ellipse cx="${x + 20}" cy="150" rx="7" ry="11" class="fl-bg"/>`;
      s += `<ellipse cx="${x + 20}" cy="${i % 2 ? 95 : 205}" rx="6" ry="9" class="fl-bg"/>`;
      s += T(x + 20, 280, l, 't-sm t-b');
    });
    s += A(40, 150, 540, 150, 'bad', 3, 13) + T(40, 136, 'danger', 't-sm t-b', 'start') + T(560, 155, 'ACCIDENT', 't t-b t-bad', 'start');
    s += T(320, 30, 'Chaque couche de défense a des « trous ». L’accident survient quand ils s’alignent.', 't-sm');
    s += T(320, 306, 'Défaillances latentes (à gauche) → défaillances actives (à droite)', 't-xs t-mut');
    return svg(660, 320, s, 'Modèle de Reason');
  };

  F.parcours = () => {
    const steps = [
      ['0', 'Bilan', 'Visite médicale classe 1, budget, anglais', 'avant toute dépense'],
      ['1', 'ULM', 'Découverte du pilotage, coût réduit', 'optionnel'],
      ['2', 'PPL', '45 h de vol minimum, 9 matières', '6 à 12 mois'],
      ['3', 'ATPL théorique', '13 examens EASA, 75 % requis', '12 à 18 mois'],
      ['4', 'Heures de vol', 'Navigations en commandant de bord', 'vers 200 h'],
      ['5', 'CPL + IR multi', 'Pilote pro + vol aux instruments', '6 à 12 mois'],
      ['6', 'MCC / APS', 'Travail en équipage sur simulateur', '2 à 4 semaines'],
      ['7', 'Qualification de type', 'A320, B737, ATR… souvent avec la compagnie', '1 à 3 mois'],
      ['8', 'Copilote', 'ATPL « gelé » → débloqué à 1 500 h', 'carrière']
    ];
    return `<ol class="route">${steps.map(s => `<li><span class="route-n">${s[0]}</span><div><strong>${s[1]}</strong><span>${s[2]}</span><em>${s[3]}</em></div></li>`).join('')}</ol>`;
  };

  F.otan = () => {
    const w = 'Alfa Bravo Charlie Delta Echo Foxtrot Golf Hotel India Juliett Kilo Lima Mike November Oscar Papa Quebec Romeo Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu'.split(' ');
    return `<div class="otan">${w.map(x => `<div><b>${x[0]}</b><span>${x}</span></div>`).join('')}</div>`;
  };

  window.FIGURES = F;
  window.renderFig = key => (F[key] ? F[key]() : '');
})();
