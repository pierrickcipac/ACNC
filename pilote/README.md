# Objectif Ligne

Application d'apprentissage ludique pour préparer un parcours de pilote : Fondamentaux → Bilan → ULM → PPL(A) → ATPL théorique.
Tout tient dans un seul fichier HTML, sans serveur ni dépendance.

## Utiliser l'application
Ouvrir `dist/index.html` dans un navigateur, en double-cliquant dessus. La progression est enregistrée dans le navigateur
(et sur le compte claude.ai quand la page est ouverte comme artifact).

## Reprendre le développement sur ton ordinateur
```bash
git clone https://github.com/pierrickcipac/ACNC.git
cd ACNC
git checkout ccr-241891a5-1cy0wi      # branche de travail
cd pilote
node build.js                         # Node.js 18 ou plus : régénère dist/
open dist/index.html                  # macOS (Windows : start dist\index.html)
```
Tu peux aussi ouvrir le dossier dans Claude Code (`claude` dans le terminal) et lui demander d'ajouter des modules.

## Organisation
| Fichier | Rôle |
|---|---|
| `src/shell.html` | Squelette de la page (en-tête, zone principale) |
| `src/styles.css` | Styles et couleurs (thèmes clair et sombre) |
| `src/engine.js` | Moteur : vues, quiz, XP, grades, badges, révision espacée, sauvegarde |
| `src/games.js` | Mini-jeux : générateurs de questions illimitées (alphabet, instruments, pistes, vent, METAR, unités) |
| `src/figures.js` | Schémas SVG pédagogiques (clé `fig`) |
| `src/aptitude.js` | Questions du bilan d'aptitude |
| `src/content/*.js` | Contenus des cours et des quiz, une étape par fichier |
| `assets/img/` | Photos et images (avec `credits.json`) |
| `SCHEMA.md` | Format d'un module, d'une question, d'une image |
| `SOURCES.md` | Sources officielles utilisées |
| `build.js` | Assemble tout dans `dist/` |

## Ajouter une question
Dans `src/content/<étape>.js`, ajouter un objet au tableau `quiz` du module (voir `SCHEMA.md`), puis lancer `node build.js`.
Chaque question doit citer sa source officielle (`src`).
