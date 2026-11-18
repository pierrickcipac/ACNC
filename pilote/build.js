// Assemble src/ en une seule page : index.html (autonome) et artifact.html (contenu sans squelette)
const fs = require('fs'), path = require('path');
const src = f => fs.readFileSync(path.join(__dirname, 'src', f), 'utf8');
const data = ['data-bilan.js', 'data-ulm.js', 'data-ppl.js', 'data-atpl.js'].map(src).join('\n');
const page = src('app.html')
  .replace('/*__FIGURES__*/', () => src('figures.js'))
  .replace('/*__DATA__*/', () => data.replace(/<\/script/gi, '<\\/script'));
const out = process.argv[2] || path.join(__dirname, 'artifact.html');
fs.writeFileSync(out, page);
fs.writeFileSync(path.join(__dirname, 'index.html'),
  '<!doctype html>\n<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>\n' + page + '\n</body></html>\n');
console.log('ok', (page.length / 1024).toFixed(0) + ' KiB');
