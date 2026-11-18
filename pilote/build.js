// Assemble src/ en une page unique.
//   node build.js            → dist/index.html (autonome) + dist/artifact.html (sans squelette) + dist/assets/
// Ordre des scripts : figures → jeux → bilan d'aptitude → contenus → moteur.
const fs = require('fs'), path = require('path');
const S = f => fs.readFileSync(path.join(__dirname, 'src', f), 'utf8');
const CONTENT = ['fondamentaux', 'bilan', 'ulm', 'ppl', 'atpl'].filter(n => fs.existsSync(path.join(__dirname, 'src/content', n + '.js')));
const js = ['figures.js', 'games.js', 'aptitude.js', ...CONTENT.map(n => 'content/' + n + '.js'), 'engine.js']
  .map(f => '/* ---- ' + f + ' ---- */\n' + S(f)).join('\n;\n').replace(/<\/script/gi, '<\\/script');
const page = S('shell.html').replace('/*__CSS__*/', () => S('styles.css')).replace('/*__JS__*/', () => js);
const dist = path.join(__dirname, 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'artifact.html'), page);
fs.writeFileSync(path.join(dist, 'index.html'), '<!doctype html>\n<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>\n' + page + '\n</body></html>\n');
// Copie des images
const copy = (a, b) => { if (!fs.existsSync(a)) return 0; let n = 0; fs.mkdirSync(b, { recursive: true }); for (const f of fs.readdirSync(a)) { const p = path.join(a, f); if (fs.statSync(p).isDirectory()) n += copy(p, path.join(b, f)); else { fs.copyFileSync(p, path.join(b, f)); n++; } } return n; };
const n = copy(path.join(__dirname, 'assets'), path.join(dist, 'assets'));
console.log('ok', (page.length / 1024).toFixed(0) + ' KiB,', n, 'fichier(s) image');
