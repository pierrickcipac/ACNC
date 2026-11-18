# Format des fichiers de contenu

Chaque fichier `data-<etape>.js` est du JavaScript pur (pas de module, pas d'import) :

```js
window.PARCOURS = window.PARCOURS || {};
window.PARCOURS.ppl = {
  modules: [
    {
      id: 'ppl-1',                 // unique, préfixe = étape
      title: 'Titre court',
      domain: 'aero',              // voir liste des domaines
      duration: 25,                // minutes de lecture estimées
      intro: 'Une phrase qui dit ce qu’on va apprendre.',
      sections: [
        {
          h: 'Titre de section',
          html: '<p>Texte simple…</p><ul><li>…</li></ul>',  // HTML simple : p, ul, ol, li, strong, em, table (class="tbl"), code
          fig: 'forces',           // OPTIONNEL : clé d'un schéma de la liste ci-dessous
          caption: 'Légende',      // OPTIONNEL, avec fig
          tip: 'Astuce / moyen mnémotechnique'  // OPTIONNEL
        }
      ],
      keypoints: ['À retenir 1', 'À retenir 2', '…'],   // 4 à 6
      links: [ { label: 'Nom de la ressource', url: 'https://…' } ],  // 1 à 3 liens officiels/réputés vers de vrais visuels ou documents
      quiz: [
        {
          q: 'Question ?',
          choices: ['A', 'B', 'C', 'D'],   // 3 ou 4 choix
          a: 1,                            // index (0-based) de la bonne réponse
          exp: 'Explication simple, 1 à 3 phrases, qui dit POURQUOI c’est la bonne réponse et pourquoi l’erreur fréquente est fausse.',
          fig: 'tdp'                       // OPTIONNEL : schéma qui aide à comprendre l’explication
        }
      ]
    }
  ]
};
```

Toutes les chaînes en français, apostrophes typographiques (’) ou échappées, guillemets simples JS.
Ne pas utiliser de backticks. Pas d'emoji.

## Domaines (champ `domain`)
regl (Réglementation & droit aérien), aero (Aérodynamique & mécanique du vol), tech (Connaissance de l’avion), meteo (Météorologie), nav (Navigation), fh (Facteurs humains), proc (Procédures opérationnelles), com (Communications radio), perf (Performances & préparation du vol)

## Schémas disponibles (champ `fig`) — UNIQUEMENT ces clés
- axes : les 3 axes (roulis, tangage, lacet) et les gouvernes associées
- forces : les 4 forces (portance, poids, traction, traînée)
- profil : profil d’aile (bord d’attaque/fuite, corde, extrados/intrados, angle d’incidence, vent relatif)
- decrochage : courbe Cz en fonction de l’incidence, incidence de décrochage (~15-16°)
- gouvernes : vue de dessus avion avec ailerons, volets, profondeur, direction, compensateur
- virage : avion incliné, facteur de charge n = 1/cos(inclinaison) ; 30°→1,15 ; 45°→1,41 ; 60°→2
- puissance : courbe puissance nécessaire / vitesse, 1er et 2nd régime
- finesse : plané, finesse = distance/hauteur (finesse 10 : 1 000 m de hauteur → 10 km)
- tdp : tour de piste main gauche (montée initiale, vent traversier, vent arrière, étape de base, finale)
- pistes : numérotation de piste (QFU 260° → piste 26), seuil, marques
- six : les 6 instruments de base (anémomètre, horizon, altimètre, coordinateur de virage, conservateur de cap, variomètre)
- anemo : anémomètre avec arcs (blanc VSO-VFE, vert VS1-VNO, jaune VNO-VNE, trait rouge VNE)
- horizon : horizon artificiel en virage à droite, maquette, assiette, inclinaison
- moteur : cycle 4 temps (admission, compression, combustion-détente, échappement)
- atmosphere : atmosphère standard (1013,25 hPa, 15 °C, -2 °C/1000 ft, 1 hPa ≈ 28 ft (27 ft en OACI), tropopause 11 km)
- calage : QNH / QFE / 1013 → altitude / hauteur / niveau de vol
- nuages : étages des nuages (Ci, Cc, Cs / Ac, As / St, Sc, Ns / Cu, Cb)
- fronts : coupe front froid et front chaud
- isobares : anticyclone / dépression et sens de rotation des vents (hémisphère nord ET sud — utile en Nouvelle-Calédonie)
- metar : METAR exemple annoté (NWWW = La Tontouta)
- espaces : coupe verticale des espaces aériens (CTR, TMA, classes, plancher/plafond, espace G)
- vent : triangle des vitesses (cap, route, dérive, vent)
- traversier : composante de vent traversier (règle 30°→1/2 ; 45°→0,7 ; 60°→0,9 ; 90°→1)
- centrage : enveloppe masse et centrage (limites avant/arrière)
- vor : VOR, radiales, QDM/QDR, indicateur CDI
- ils : ILS, localizer + glide (3°), marqueurs
- hypoxie : temps de conscience utile selon l’altitude
- reason : modèle du fromage suisse (Reason)
- parcours : la frise du parcours ULM → PPL → ATPL théorique → CPL/IR → MCC → qualification de type → copilote
- otan : alphabet aéronautique (Alpha, Bravo…)
