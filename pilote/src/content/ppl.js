window.PARCOURS = window.PARCOURS || {};
window.PARCOURS.ppl = {
  modules: [
    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-1',
      title: 'La licence PPL : le parcours',
      domain: 'regl',
      duration: 20,
      intro: 'Comprendre ce qu’est la licence de pilote privé avion (PPL(A)), comment on l’obtient et comment on la garde valide.',
      sections: [
        {
          h: 'Ce que permet le PPL',
          html: '<p>Le <strong>PPL(A)</strong> (Private Pilot Licence, avion) est une licence européenne EASA, reconnue dans le monde entier car conforme à l’OACI. Elle permet de piloter un avion comme commandant de bord, d’emmener des passagers, de voyager à l’étranger, mais <strong>sans être rémunéré</strong>.</p><p>C’est la marche naturelle après l’ULM : on passe d’un brevet national à une vraie licence internationale, avec des avions plus lourds, plus rapides, et des espaces aériens plus complexes.</p><ul><li>Âge minimum pour la licence : <strong>17 ans</strong> (le premier vol solo est possible à 16 ans).</li><li>Certificat médical : <strong>classe 2</strong> au minimum (un futur pilote de ligne passe directement la classe 1).</li><li>Qualification associée : <strong>SEP</strong> (Single Engine Piston, monomoteur à pistons).</li></ul>',
          fig: 'parcours',
          caption: 'Le PPL est la deuxième marche du parcours vers le métier de pilote de ligne.'
        },
        {
          h: 'L’examen théorique : 9 matières',
          html: '<p>Le théorique se présente sous forme de QCM. Il faut au moins <strong>75 %</strong> dans chaque matière.</p><table class="tbl"><tr><th>Matière</th><th>En clair</th></tr><tr><td>Droit aérien</td><td>Les règles du jeu</td></tr><tr><td>Facteurs humains</td><td>Le corps et le cerveau du pilote</td></tr><tr><td>Météorologie</td><td>Le ciel dans lequel on vole</td></tr><tr><td>Communications</td><td>Parler à la radio</td></tr><tr><td>Principes du vol</td><td>Pourquoi l’avion vole</td></tr><tr><td>Procédures opérationnelles</td><td>Comment on fait, y compris en urgence</td></tr><tr><td>Performances et préparation du vol</td><td>Masse, centrage, distances, carburant</td></tr><tr><td>Connaissance générale de l’aéronef</td><td>Moteur, cellule, instruments</td></tr><tr><td>Navigation</td><td>Aller d’un point A à un point B</td></tr></table><p>Toutes les matières doivent être réussies dans une fenêtre limitée (18 mois), et le théorique reste valable 24 mois pour obtenir la licence.</p>',
          tip: 'Ne passez pas les 9 matières en une fois : regroupez-les en 2 ou 3 sessions, en commençant par celles qui se recoupent (principes du vol + connaissance avion, météo + navigation).'
        },
        {
          h: 'La formation en vol et le test pratique',
          html: '<p>Minimum réglementaire : <strong>45 heures de vol</strong>, dont :</p><ul><li><strong>25 h</strong> en double commande avec un instructeur ;</li><li><strong>10 h</strong> en solo supervisé, dont <strong>5 h de navigation solo</strong> ;</li><li>une navigation solo d’au moins <strong>270 km (150 NM)</strong> avec <strong>2 atterrissages complets</strong> sur deux aérodromes différents de celui de départ.</li></ul><p>En pratique, la moyenne se situe plutôt entre 55 et 70 heures. La formation se termine par un <strong>test pratique</strong> (skill test) avec un examinateur : préparation, navigation, maniabilité, pannes simulées, atterrissages.</p>'
        },
        {
          h: 'Garder sa licence valide : la qualification SEP',
          html: '<p>La licence ne « périme » pas, mais la <strong>qualification SEP</strong> est valable <strong>24 mois</strong>. Pour la prolonger sans repasser d’examen, il faut, dans les 12 mois avant l’échéance :</p><ul><li>12 h de vol, dont 6 h comme commandant de bord ;</li><li>12 décollages et 12 atterrissages ;</li><li>un vol d’entraînement d’au moins 1 h avec un instructeur.</li></ul><p>Sinon, on passe un contrôle de compétences avec un examinateur.</p><p><strong>Expérience récente pour emmener des passagers</strong> : au moins <strong>3 décollages, approches et atterrissages dans les 90 jours</strong> précédents sur la même classe d’avion (dont 1 de nuit pour transporter des passagers de nuit).</p>',
          tip: 'Retenez « 3 en 90 » pour les passagers et « 12-12-1 » (12 h, 12 atterrissages, 1 h avec instructeur) pour la prorogation SEP.'
        },
        {
          h: 'ULM, LAPL, PPL : quelles différences ?',
          html: '<table class="tbl"><tr><th></th><th>ULM</th><th>LAPL(A)</th><th>PPL(A)</th></tr><tr><td>Type de titre</td><td>Brevet national</td><td>Licence EASA allégée</td><td>Licence EASA / OACI</td></tr><tr><td>Heures minimum</td><td>Pas de minimum fixé</td><td>30 h</td><td>45 h</td></tr><tr><td>Avion</td><td>ULM (très léger)</td><td>Jusqu’à 2 000 kg, 3 passagers max</td><td>Pas de limite de masse (selon qualifications)</td></tr><tr><td>Médical</td><td>Certificat de non contre-indication</td><td>Médical LAPL</td><td>Classe 2</td></tr><tr><td>Valable à l’étranger</td><td>Selon accords</td><td>Europe EASA</td><td>Monde entier</td></tr></table><p>Pour un projet de pilote de ligne, c’est le <strong>PPL</strong> qui compte : ses heures et son théorique servent de base pour la suite (CPL, IR, ATPL).</p>'
        }
      ],
      keypoints: [
        'PPL(A) = licence EASA conforme OACI, valable partout, vol non rémunéré.',
        '9 matières théoriques, 75 % minimum dans chacune.',
        '45 h minimum dont 25 h double, 10 h solo, 5 h de navigation solo et une navigation de 270 km avec 2 atterrissages extérieurs.',
        'Qualification SEP valable 24 mois, prorogeable par l’expérience (12 h, 12 atterrissages, 1 h avec instructeur).',
        'Passagers : 3 décollages et atterrissages dans les 90 derniers jours.',
        'Médical classe 2 pour le PPL ; viser directement la classe 1 si le but est la ligne.'
      ],
      links: [
        { label: 'EASA – Easy Access Rules (dont Part-FCL, licences)', url: 'https://www.easa.europa.eu/en/document-library/easy-access-rules' },
        { label: 'Wikipédia – Licence de pilote privé', url: 'https://fr.wikipedia.org/wiki/Licence_de_pilote_priv%C3%A9' }
      ],
      quiz: [
        {
          q: 'Quel pourcentage minimum faut-il obtenir dans chaque matière du théorique PPL ?',
          choices: ['50 %', '65 %', '75 %', '90 %'],
          a: 2,
          exp: 'Le seuil EASA est de 75 % par matière. Une moyenne générale ne suffit pas : une matière sous 75 % doit être repassée.'
        },
        {
          q: 'Combien d’heures de vol minimum exige la réglementation EASA pour le PPL(A) ?',
          choices: ['30 h', '45 h', '60 h', '150 h'],
          a: 1,
          exp: '45 h est le minimum réglementaire (30 h c’est le LAPL, 150 h c’est la formation CPL intégrée). En pratique, la plupart des élèves en font davantage.'
        },
        {
          q: 'La navigation solo obligatoire du PPL doit faire au moins :',
          choices: ['100 km avec 1 atterrissage extérieur', '270 km (150 NM) avec 2 atterrissages complets sur 2 autres aérodromes', '500 km sans escale', '150 km avec 3 atterrissages'],
          a: 1,
          exp: 'C’est le « grand voyage » de l’élève : 150 NM (270 km) avec deux arrêts complets sur deux aérodromes différents de celui de départ.',
          fig: 'parcours'
        },
        {
          q: 'Vous voulez emmener un ami samedi. Votre dernier vol date de 4 mois. Que faut-il faire ?',
          choices: ['Rien, la licence est valide', 'Faire d’abord 3 décollages et atterrissages (seul ou avec instructeur)', 'Repasser le test pratique', 'Demander une autorisation à la DGAC'],
          a: 1,
          exp: 'Pour transporter des passagers, il faut 3 décollages, approches et atterrissages dans les 90 jours précédents. Après 4 mois, il faut d’abord se « remettre à jour ».'
        },
        {
          q: 'Quelle est la durée de validité de la qualification SEP ?',
          choices: ['12 mois', '24 mois', '36 mois', 'À vie'],
          a: 1,
          exp: 'La qualification SEP est valable 24 mois. La licence elle-même n’expire pas, mais sans qualification valide on ne peut pas voler comme commandant de bord.'
        },
        {
          q: 'Quel certificat médical est exigé au minimum pour le PPL(A) ?',
          choices: ['Aucun', 'Classe 1', 'Classe 2', 'Certificat de non contre-indication du médecin traitant'],
          a: 2,
          exp: 'Le PPL demande la classe 2. La classe 1 est requise pour les licences professionnelles (CPL, ATPL) : si vous visez la ligne, passez la classe 1 dès le début pour vérifier votre aptitude.'
        },
        {
          q: 'Quelle différence principale entre le LAPL et le PPL ?',
          choices: ['Le LAPL permet le vol rémunéré', 'Le LAPL est limité (2 000 kg, 3 passagers) et reconnu seulement en Europe EASA', 'Le LAPL ne demande pas de théorique', 'Il n’y a aucune différence'],
          a: 1,
          exp: 'Le LAPL est une licence « loisir » allégée : 30 h minimum, avions jusqu’à 2 000 kg et 3 passagers au maximum, valable seulement dans les pays EASA.'
        },
        {
          q: 'Pour proroger la SEP par l’expérience, il faut dans les 12 derniers mois :',
          choices: ['6 h de vol et 6 atterrissages', '12 h de vol (dont 6 h CDB), 12 décollages et atterrissages, 1 h avec instructeur', '20 h de vol seul', 'Un vol de nuit'],
          a: 1,
          exp: 'Retenez « 12-12-1 » : 12 h dont 6 h comme commandant de bord, 12 décollages et atterrissages, et un vol d’entraînement d’au moins 1 h avec un instructeur.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-2',
      title: 'Droit aérien et espaces',
      domain: 'regl',
      duration: 30,
      intro: 'Les règles de l’air, les conditions pour voler à vue, les classes d’espace aérien et le transpondeur.',
      sections: [
        {
          h: 'Les règles de l’air : qui s’écarte de qui ?',
          html: '<p>En Europe, les règles de l’air sont regroupées dans le règlement <strong>SERA</strong>. Le principe de base : <strong>voir et éviter</strong>. Le pilote reste responsable de l’anticollision, même sous contrôle.</p><ul><li><strong>Routes convergentes</strong> : l’avion qui voit l’autre <strong>sur sa droite</strong> lui laisse la priorité.</li><li><strong>Face à face</strong> : chacun dégage <strong>par la droite</strong>.</li><li><strong>Dépassement</strong> : l’avion dépassé est prioritaire ; celui qui dépasse s’écarte par la droite.</li><li><strong>Moins manœuvrant prioritaire</strong> : les avions à moteur cèdent le passage aux dirigeables, planeurs et ballons, et aux aéronefs qui remorquent.</li><li><strong>Atterrissage</strong> : l’avion en finale ou en train d’atterrir est prioritaire ; entre deux avions en approche, le plus bas est prioritaire (sans « couper » la route de l’autre).</li></ul>',
          tip: 'Comme sur la route en France : priorité à droite, on se croise par la droite.'
        },
        {
          h: 'Voler à vue : les minima VMC',
          html: '<p>Un vol <strong>VFR</strong> (règles de vol à vue) n’est possible que dans des conditions <strong>VMC</strong> (conditions météo de vol à vue). Les minima dépendent de l’altitude et de la classe d’espace.</p><table class="tbl"><tr><th>Où ?</th><th>Visibilité</th><th>Distance des nuages</th></tr><tr><td>Au-dessus du FL100</td><td>8 km</td><td>1 500 m horizontalement, 1 000 ft verticalement</td></tr><tr><td>En dessous du FL100 (cas général)</td><td>5 km</td><td>1 500 m horizontalement, 1 000 ft verticalement</td></tr><tr><td>Classes F et G, au plus haut de 3 000 ft AMSL ou 1 000 ft sol</td><td>5 km (réductions possibles à faible vitesse selon les États)</td><td>Hors nuages et en vue du sol</td></tr></table><p><strong>Formule prudente</strong> à retenir quand on débute : <strong>5 km de visibilité, 1 500 m et 1 000 ft des nuages</strong>, partout. Si ces conditions ne sont pas réunies, on ne part pas ou on fait demi-tour.</p><p>Pour entrer en VFR dans une zone de contrôle (CTR), il faut en plus en général un plafond d’au moins 1 500 ft et une visibilité au sol d’au moins 5 km, sauf clairance « VFR spécial ».</p>',
          tip: 'Moyen mnémotechnique : « 5 – 15 – 1 000 » : 5 km, 1 500 m, 1 000 ft.'
        },
        {
          h: 'Les classes d’espace aérien',
          html: '<p>L’espace aérien est découpé en volumes, avec une <strong>classe de A à G</strong>. Plus la lettre est proche de A, plus c’est contrôlé.</p><table class="tbl"><tr><th>Classe</th><th>VFR autorisé ?</th><th>Ce qu’il faut retenir</th></tr><tr><td>A</td><td>Non</td><td>IFR uniquement</td></tr><tr><td>B</td><td>Oui, avec clairance</td><td>Tout le monde est séparé par le contrôle</td></tr><tr><td>C</td><td>Oui, avec clairance</td><td>VFR séparés des IFR, information de trafic entre VFR</td></tr><tr><td>D</td><td>Oui, avec clairance</td><td>Information de trafic seulement : le VFR assure sa propre anticollision</td></tr><tr><td>E</td><td>Oui, sans clairance</td><td>Espace contrôlé pour les IFR ; le VFR y vole librement (transpondeur souvent exigé)</td></tr><tr><td>F</td><td>Oui</td><td>Service consultatif pour les IFR</td></tr><tr><td>G</td><td>Oui</td><td>Non contrôlé, service d’information de vol</td></tr></table><p>Chaque zone a un <strong>plancher</strong> et un <strong>plafond</strong>, indiqués sur la carte. Une <strong>CTR</strong> part du sol autour d’un aéroport ; une <strong>TMA</strong> est posée au-dessus, plus large, comme un gâteau à étages inversé.</p>',
          fig: 'espaces',
          caption: 'Coupe verticale : la CTR touche le sol, la TMA est au-dessus, l’espace G reste libre en dessous.'
        },
        {
          h: 'Le transpondeur',
          html: '<p>Le transpondeur répond aux radars secondaires du contrôle avec un <strong>code à 4 chiffres</strong> (et l’altitude en mode C ou S). Codes à connaître par cœur :</p><table class="tbl"><tr><th>Code</th><th>Signification</th></tr><tr><td>7000</td><td>Vol VFR sans code attribué (Europe)</td></tr><tr><td>7500</td><td>Intervention illicite (détournement)</td></tr><tr><td>7600</td><td>Panne radio</td></tr><tr><td>7700</td><td>Détresse / urgence</td></tr></table><p>Quand le contrôleur donne un code, on le <strong>collationne</strong> (on le répète) puis on l’affiche.</p>',
          tip: '« 75 : on m’a pris l’avion, 76 : je n’ai plus de radio, 77 : je suis en détresse » — 7500, 7600, 7700, dans l’ordre de gravité perçue par le contrôle.'
        },
        {
          h: 'Les documents de bord',
          html: '<p>Avant chaque vol, on vérifie que les papiers sont à bord :</p><ul><li><strong>Certificat d’immatriculation</strong> (la « carte grise » de l’avion) ;</li><li><strong>Certificat de navigabilité</strong> et son <strong>certificat d’examen de navigabilité</strong> (ARC) en cours de validité ;</li><li><strong>Licence de station d’aéronef</strong> (radio) ;</li><li><strong>Attestation d’assurance</strong> ;</li><li><strong>Manuel de vol</strong> et <strong>carnet de route</strong> ;</li><li>Pour le pilote : <strong>licence</strong>, <strong>certificat médical</strong> et pièce d’identité.</li></ul>'
        }
      ],
      keypoints: [
        'Priorité à l’avion qui vient de droite ; face à face, chacun dégage à droite.',
        'Minima VMC à retenir : 5 km, 1 500 m horizontalement, 1 000 ft verticalement (8 km au-dessus du FL100).',
        'Classes A à G : A interdit au VFR ; B, C, D exigent une clairance ; E, F, G sans clairance pour le VFR.',
        'Transpondeur : 7000 VFR, 7500 détournement, 7600 panne radio, 7700 détresse.',
        'Le pilote reste toujours responsable de l’anticollision en VFR.'
      ],
      links: [
        { label: 'SIA – Service de l’information aéronautique (cartes, AIP, NOTAM)', url: 'https://www.sia.aviation-civile.gouv.fr/' },
        { label: 'Wikipédia – Classes d’espace aérien', url: 'https://fr.wikipedia.org/wiki/Espace_a%C3%A9rien' },
        { label: 'Wikipédia – Transpondeur', url: 'https://fr.wikipedia.org/wiki/Transpondeur' }
      ],
      quiz: [
        {
          q: 'Deux avions convergent à la même altitude. Vous voyez l’autre avion sur votre droite. Que faites-vous ?',
          choices: ['Vous gardez votre cap, vous êtes prioritaire', 'Vous lui cédez le passage', 'Vous montez', 'Vous appelez la tour'],
          a: 1,
          exp: 'Celui qui a l’autre sur sa droite cède le passage, comme la priorité à droite sur la route. On s’écarte généralement en passant derrière lui.'
        },
        {
          q: 'Deux avions arrivent face à face. Quelle est la règle ?',
          choices: ['Les deux virent à gauche', 'Les deux virent à droite', 'Le plus rapide monte', 'Le plus lourd garde son cap'],
          a: 1,
          exp: 'Face à face, chacun dégage par la droite. Comme ça les deux manœuvres s’additionnent au lieu de s’annuler.'
        },
        {
          q: 'Quels sont les minima VMC « prudents » à retenir sous le FL100 ?',
          choices: ['1,5 km et hors nuages', '5 km, 1 500 m horizontalement et 1 000 ft verticalement des nuages', '8 km et 300 m des nuages', '10 km et 2 000 ft des nuages'],
          a: 1,
          exp: '« 5 – 15 – 1 000 ». Ce sont les minima du cas général. Les réductions (hors nuages, vue du sol) ne s’appliquent qu’en basse altitude en classes F et G.'
        },
        {
          q: 'Dans quelle classe d’espace le vol VFR est-il interdit ?',
          choices: ['A', 'C', 'E', 'G'],
          a: 0,
          exp: 'La classe A est réservée aux vols IFR. Toutes les autres classes acceptent le VFR, avec ou sans clairance.',
          fig: 'espaces'
        },
        {
          q: 'En classe E, un vol VFR :',
          choices: ['Doit obtenir une clairance', 'Peut voler sans clairance', 'Est interdit', 'Est séparé de tous les autres vols par le contrôle'],
          a: 1,
          exp: 'La classe E est contrôlée pour les IFR seulement. Le VFR y entre sans clairance, mais doit redoubler de vigilance car des IFR peuvent y voler dans les nuages environnants.'
        },
        {
          q: 'Vous perdez la radio en vol. Quel code transpondeur affichez-vous ?',
          choices: ['7000', '7500', '7600', '7700'],
          a: 2,
          exp: '7600 = panne radio. 7700 = détresse, 7500 = détournement, 7000 = VFR sans code attribué.'
        },
        {
          q: 'Une CTR est un espace qui :',
          choices: ['Commence au sol autour d’un aéroport', 'Commence toujours au FL100', 'Est réservé aux militaires', 'N’a pas de plafond'],
          a: 0,
          exp: 'La zone de contrôle (CTR) part du sol et protège les trajectoires d’arrivée et de départ d’un aéroport. La TMA, plus large, est posée au-dessus avec un plancher en altitude.',
          fig: 'espaces'
        },
        {
          q: 'Lequel de ces documents n’est PAS un document de bord de l’avion ?',
          choices: ['Certificat d’immatriculation', 'Certificat de navigabilité', 'Carnet de route', 'Facture d’achat de l’avion'],
          a: 3,
          exp: 'La facture n’a rien à faire à bord. Les documents obligatoires sont l’immatriculation, la navigabilité (avec l’ARC), la licence radio, l’assurance, le manuel de vol et le carnet de route.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-3',
      title: 'Aérodynamique avancée',
      domain: 'aero',
      duration: 35,
      intro: 'Aller plus loin que les 4 forces : la polaire, le second régime, l’effet de sol, la vrille et les vitesses à connaître par cœur.',
      sections: [
        {
          h: 'Portance, traînée et polaire',
          html: '<p>La portance et la traînée dépendent de la même formule : <strong>F = ½ ρ S V² C</strong> (ρ : densité de l’air, S : surface de l’aile, V : vitesse, C : coefficient qui dépend de l’incidence).</p><ul><li><strong>Cz</strong> : coefficient de portance ;</li><li><strong>Cx</strong> : coefficient de traînée.</li></ul><p>La <strong>polaire</strong> est la courbe qui trace Cz en fonction de Cx pour toutes les incidences. Le point où la droite partant de l’origine est tangente à la courbe donne la <strong>finesse maximale</strong> : c’est le meilleur compromis portance / traînée, donc la vitesse de plané la plus efficace.</p><p>Quand l’incidence dépasse l’<strong>incidence critique</strong> (environ 15 à 16° sur un profil classique), les filets d’air décollent de l’extrados : c’est le <strong>décrochage</strong>, quelle que soit la vitesse.</p>',
          fig: 'decrochage',
          caption: 'Le Cz augmente avec l’incidence jusqu’au décrochage, puis chute brutalement.'
        },
        {
          h: 'Premier et second régime',
          html: '<p>Pour voler en palier, il faut une certaine <strong>puissance nécessaire</strong>. Cette puissance est élevée à grande vitesse (traînée de forme) mais aussi à très basse vitesse (traînée induite, car l’aile travaille à forte incidence).</p><ul><li><strong>Premier régime</strong> (vitesses élevées) : pour aller plus vite, il faut plus de puissance. C’est intuitif et stable.</li><li><strong>Second régime</strong> (vitesses lentes, à gauche du minimum de la courbe) : plus on ralentit, plus il faut de puissance. Si on cabre pour tenir l’altitude, la vitesse baisse, la traînée augmente… et l’avion s’enfonce.</li></ul><p>En approche lente, on est souvent proche du second régime : la vitesse se tient au manche, et la trajectoire se corrige en ajustant la puissance.</p>',
          fig: 'puissance',
          caption: 'Courbe de puissance nécessaire : à gauche du creux, on est au second régime.'
        },
        {
          h: 'Effet de sol, hypersustentateurs et virage',
          html: '<p><strong>Effet de sol</strong> : à moins d’une envergure du sol environ, les tourbillons de bout d’aile sont écrasés et la traînée induite diminue. Résultat : l’avion « flotte » à l’arrondi, et peut décoller à une vitesse trop faible puis s’enfoncer en sortant de cet effet.</p><p><strong>Dispositifs hypersustentateurs</strong> :</p><ul><li>les <strong>volets</strong> augmentent la courbure de l’aile : plus de portance et plus de traînée, la vitesse de décrochage baisse ;</li><li>les <strong>becs</strong> de bord d’attaque retardent le décollement des filets : l’incidence de décrochage augmente.</li></ul><p><strong>En virage</strong>, l’aile doit porter plus que le poids : le facteur de charge vaut <strong>n = 1 / cos(inclinaison)</strong>. À 60°, n = 2 : vous « pesez » deux fois votre poids, et la vitesse de décrochage est multipliée par √2, soit environ <strong>+41 %</strong>.</p>',
          fig: 'virage',
          caption: 'Facteur de charge en virage : 30° → 1,15 ; 45° → 1,41 ; 60° → 2.'
        },
        {
          h: 'La vrille',
          html: '<p>La vrille est un <strong>décrochage dissymétrique</strong> : une aile décroche plus que l’autre, l’avion part en autorotation en descendant. Elle survient typiquement si on décroche avec du lacet (pied mal dosé), par exemple en dernier virage trop serré et trop lent.</p><p>Sortie standard (toujours vérifier le manuel de vol de l’avion) :</p><ol><li><strong>Réduire</strong> la puissance (plein réduit) ;</li><li><strong>Ailerons au neutre</strong> ;</li><li><strong>Pied à fond opposé</strong> au sens de rotation ;</li><li><strong>Manche en avant</strong> pour casser l’incidence ;</li><li>Dès l’arrêt de la rotation : pieds au neutre, ressource souple.</li></ol>',
          tip: 'Mnémotechnique : « RAPM » — Réduire, Ailerons neutres, Pied opposé, Manche avant.'
        },
        {
          h: 'Les vitesses caractéristiques',
          html: '<table class="tbl"><tr><th>Vitesse</th><th>Signification</th><th>Sur l’anémomètre</th></tr><tr><td>VS0</td><td>Décrochage en configuration atterrissage</td><td>Bas de l’arc blanc</td></tr><tr><td>VS1</td><td>Décrochage en lisse (sans volets)</td><td>Bas de l’arc vert</td></tr><tr><td>VFE</td><td>Vitesse maxi volets sortis</td><td>Haut de l’arc blanc</td></tr><tr><td>VNO</td><td>Vitesse maxi en air agité (croisière structurale)</td><td>Haut de l’arc vert</td></tr><tr><td>VNE</td><td>Vitesse à ne jamais dépasser</td><td>Trait rouge</td></tr><tr><td>VA</td><td>Vitesse de manœuvre : débattements complets autorisés en dessous</td><td>Non indiquée (manuel de vol)</td></tr><tr><td>VX</td><td>Meilleur angle de montée (passer un obstacle)</td><td>Non indiquée</td></tr><tr><td>VY</td><td>Meilleur taux de montée (prendre de l’altitude vite)</td><td>Non indiquée</td></tr></table><p>VA <strong>diminue quand la masse diminue</strong> : un avion léger décroche plus tôt, donc atteint plus vite sa limite structurale avant de décrocher.</p>',
          fig: 'anemo',
          caption: 'Les arcs colorés de l’anémomètre et leurs vitesses limites.',
          tip: 'VX : « X comme eXtrême angle » ; VY : « Y comme vite en hauteur ».'
        }
      ],
      keypoints: [
        'Le décrochage dépend de l’incidence, pas de la vitesse : on peut décrocher à n’importe quelle vitesse.',
        'Au second régime, ralentir demande plus de puissance : on tient la vitesse au manche, la trajectoire à la puissance.',
        'En virage à 60°, facteur de charge 2 et vitesse de décrochage +41 %.',
        'Effet de sol : l’avion flotte à moins d’une envergure du sol.',
        'Vrille : Réduire, Ailerons neutres, Pied opposé, Manche avant.',
        'VS0 / VFE = arc blanc ; VS1 / VNO = arc vert ; VNE = trait rouge ; VX angle, VY taux.'
      ],
      links: [
        { label: 'Wikipédia – Vrille (aéronautique)', url: 'https://fr.wikipedia.org/wiki/Vrille_(a%C3%A9ronautique)' },
        { label: 'Wikipédia – Effet de sol', url: 'https://fr.wikipedia.org/wiki/Effet_de_sol' },
        { label: 'SKYbrary – base de connaissances sécurité aérienne', url: 'https://skybrary.aero/' }
      ],
      quiz: [
        {
          q: 'Un avion décroche lorsque :',
          choices: ['Sa vitesse descend sous VS1', 'Son incidence dépasse l’incidence critique', 'Son moteur s’arrête', 'Il vole trop haut'],
          a: 1,
          exp: 'Le décrochage est une affaire d’incidence. VS1 n’est que la vitesse à laquelle cela arrive en vol rectiligne à 1 g ; en virage serré ou en ressource, on décroche à une vitesse plus élevée.',
          fig: 'decrochage'
        },
        {
          q: 'En virage en palier à 60° d’inclinaison, le facteur de charge vaut :',
          choices: ['1', '1,41', '2', '3'],
          a: 2,
          exp: 'n = 1 / cos(60°) = 1 / 0,5 = 2. L’aile doit porter deux fois le poids de l’avion.',
          fig: 'virage'
        },
        {
          q: 'Toujours à 60° d’inclinaison, la vitesse de décrochage :',
          choices: ['Ne change pas', 'Augmente d’environ 41 %', 'Double', 'Diminue'],
          a: 1,
          exp: 'La vitesse de décrochage est multipliée par la racine carrée du facteur de charge : √2 ≈ 1,41. Un avion qui décroche à 50 kt en ligne droite décroche vers 70 kt à 60°.'
        },
        {
          q: 'Vous êtes au second régime en approche et vous êtes trop bas. Que faut-il faire ?',
          choices: ['Tirer sur le manche seulement', 'Ajouter de la puissance (en tenant la vitesse)', 'Sortir plus de volets', 'Réduire la puissance'],
          a: 1,
          exp: 'Au second régime, tirer sur le manche fait chuter la vitesse et augmente la traînée : l’avion s’enfonce davantage. C’est la puissance qui corrige la trajectoire.',
          fig: 'puissance'
        },
        {
          q: 'Que représente le bas de l’arc blanc de l’anémomètre ?',
          choices: ['VS1', 'VS0', 'VFE', 'VNO'],
          a: 1,
          exp: 'Arc blanc = plage d’utilisation des volets : de VS0 (décrochage en configuration atterrissage) à VFE (vitesse maxi volets sortis).',
          fig: 'anemo'
        },
        {
          q: 'Vous devez franchir un obstacle juste après le décollage. Quelle vitesse adoptez-vous ?',
          choices: ['VY', 'VX', 'VNO', 'VA'],
          a: 1,
          exp: 'VX donne le meilleur angle de montée : le plus de hauteur sur le moins de distance. VY donne le meilleur taux : le plus de hauteur en un minimum de temps.'
        },
        {
          q: 'Quelle est la bonne séquence de sortie de vrille (cas général) ?',
          choices: ['Plein gaz, manche arrière', 'Réduire, ailerons neutres, pied opposé à la rotation, manche avant', 'Ailerons opposés, pied du même côté', 'Sortir les volets'],
          a: 1,
          exp: 'On supprime la puissance (qui entretient la rotation), on neutralise les ailerons, on arrête la rotation avec le pied opposé et on casse l’incidence en poussant. Toujours vérifier la procédure du manuel de vol.'
        },
        {
          q: 'Pourquoi un avion a-t-il tendance à « flotter » juste avant de toucher la piste ?',
          choices: ['À cause du vent arrière', 'À cause de l’effet de sol qui réduit la traînée induite', 'Parce que le moteur accélère', 'Parce que les volets se rentrent'],
          a: 1,
          exp: 'Près du sol (moins d’une envergure), les tourbillons marginaux sont écrasés : moins de traînée induite, l’avion perd moins vite sa vitesse et prolonge son palier.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-4',
      title: 'Instruments et systèmes',
      domain: 'tech',
      duration: 30,
      intro: 'Comment fonctionnent les instruments, comment ils peuvent mentir, et les principaux systèmes de l’avion.',
      sections: [
        {
          h: 'Le système Pitot-statique',
          html: '<p>Trois instruments utilisent la pression de l’air :</p><ul><li>l’<strong>anémomètre</strong> compare la pression totale (prise par le <strong>tube de Pitot</strong>, face au vent) à la pression statique ;</li><li>l’<strong>altimètre</strong> mesure la pression statique ;</li><li>le <strong>variomètre</strong> mesure la variation de pression statique.</li></ul><p><strong>Pannes classiques</strong> :</p><table class="tbl"><tr><th>Panne</th><th>Effet</th></tr><tr><td>Pitot bouché (entrée et drain)</td><td>L’anémomètre se comporte comme un altimètre : il augmente en montée, baisse en descente.</td></tr><tr><td>Prise statique bouchée</td><td>Altimètre figé, variomètre à zéro, anémomètre faux.</td></tr><tr><td>Givrage du Pitot</td><td>Anémomètre faux ou à zéro : utiliser le réchauffage Pitot si disponible.</td></tr></table><p>En cas de doute, on revient aux fondamentaux : <strong>assiette + puissance = performance</strong>.</p>',
          fig: 'six',
          caption: 'Le « T » des 6 instruments de base : anémomètre, horizon, altimètre en haut ; virage, cap, variomètre en bas.'
        },
        {
          h: 'Les instruments gyroscopiques',
          html: '<p>Un gyroscope qui tourne vite a deux propriétés :</p><ul><li><strong>Fixité</strong> : son axe garde la même direction dans l’espace ;</li><li><strong>Précession</strong> : une force appliquée se manifeste à 90° dans le sens de rotation.</li></ul><p>Trois instruments en dépendent :</p><ul><li>l’<strong>horizon artificiel</strong> : assiette et inclinaison ;</li><li>le <strong>conservateur de cap</strong> : cap stable mais qui <strong>dérive</strong>, à recaler sur le compas environ toutes les 15 minutes, en vol stabilisé ;</li><li>l’<strong>indicateur de virage</strong> (ou coordinateur) avec sa <strong>bille</strong> : la bille indique la symétrie du vol (« le pied pousse la bille »).</li></ul>',
          fig: 'horizon',
          caption: 'Horizon artificiel en virage à droite : la maquette reste fixe, c’est l’horizon qui s’incline.',
          tip: '« Le pied chasse la bille » : bille à droite, pied à droite.'
        },
        {
          h: 'Le compas magnétique',
          html: '<p>Le compas est le seul instrument de cap qui ne dépend d’aucune énergie. Mais il a des défauts :</p><ul><li><strong>Déviation</strong> : les masses métalliques et circuits électriques de l’avion le perturbent. Une <strong>carte de déviation</strong> à côté du compas donne les corrections.</li><li><strong>Erreurs dynamiques</strong> : en virage et en accélération, l’aimant s’incline et l’indication est fausse sur certains caps.</li></ul><p>Dans l’hémisphère Nord, on apprend « <strong>ANDS</strong> » (sur cap Est ou Ouest, une accélération fait indiquer un virage vers le Nord) et des erreurs en virage autour des caps Nord et Sud. <strong>Dans l’hémisphère Sud (Nouvelle-Calédonie), ces erreurs sont inversées.</strong></p><p>Règle simple : on ne lit le compas qu’en <strong>vol rectiligne, horizontal et stabilisé</strong>.</p>'
        },
        {
          h: 'Le circuit électrique',
          html: '<p>Un monomoteur classique a un circuit en courant continu (souvent 12 ou 24 V) :</p><ul><li>un <strong>alternateur</strong> entraîné par le moteur produit le courant ;</li><li>une <strong>batterie</strong> sert au démarrage et de secours ;</li><li>un <strong>ampèremètre</strong> (ou voyant) indique la charge ;</li><li>des <strong>fusibles / disjoncteurs</strong> protègent chaque équipement.</li></ul><p>Point clé : le <strong>moteur à pistons fonctionne sans électricité</strong> grâce aux <strong>magnétos</strong>, qui produisent leur propre courant d’allumage. En panne d’alternateur, le moteur continue de tourner, mais la batterie va se vider : on <strong>déleste</strong> (on coupe ce qui n’est pas indispensable) et on écourte le vol.</p>'
        },
        {
          h: 'L’hélice à pas variable',
          html: '<p>Sur les avions plus performants, le pas de l’hélice s’ajuste. Deux manettes au lieu d’une :</p><ul><li><strong>Manette des gaz</strong> (noire) : règle la <strong>pression d’admission</strong> ;</li><li><strong>Manette d’hélice</strong> (bleue) : règle les <strong>tours par minute</strong> ; un régulateur fait varier le pas pour les maintenir.</li></ul><p>Ordre des manipulations pour éviter de « surcharger » le moteur :</p><ul><li><strong>Augmenter</strong> la puissance : mélange, <strong>hélice d’abord</strong>, puis gaz ;</li><li><strong>Réduire</strong> la puissance : <strong>gaz d’abord</strong>, puis hélice, puis mélange.</li></ul>',
          tip: 'Pour monter en puissance on avance de droite à gauche (rouge, bleu, noir) ; pour réduire on recule de gauche à droite (noir, bleu, rouge).'
        }
      ],
      keypoints: [
        'Anémomètre, altimètre et variomètre dépendent du système Pitot-statique.',
        'Pitot bouché : l’anémomètre agit comme un altimètre. Statique bouché : altimètre figé, vario à zéro.',
        'Conservateur de cap à recaler sur le compas environ toutes les 15 minutes.',
        'Compas : fiable seulement en vol stabilisé ; erreurs inversées dans l’hémisphère Sud.',
        'Les magnétos rendent l’allumage indépendant du circuit électrique.',
        'Pas variable : en augmentation, hélice puis gaz ; en réduction, gaz puis hélice.'
      ],
      links: [
        { label: 'Wikipédia – Tube de Pitot', url: 'https://fr.wikipedia.org/wiki/Tube_de_Pitot' },
        { label: 'Wikipédia – Horizon artificiel', url: 'https://fr.wikipedia.org/wiki/Horizon_artificiel' }
      ],
      quiz: [
        {
          q: 'Quels instruments sont reliés à la prise statique ?',
          choices: ['Anémomètre, altimètre, variomètre', 'Horizon, conservateur de cap, bille', 'Compas uniquement', 'Tachymètre et ampèremètre'],
          a: 0,
          exp: 'Les trois instruments « anémobarométriques » utilisent la pression statique. Les instruments gyroscopiques (horizon, cap, virage) n’en dépendent pas.',
          fig: 'six'
        },
        {
          q: 'Le tube de Pitot est complètement bouché (entrée et drain). En montée, l’anémomètre :',
          choices: ['Reste à zéro', 'Indique une vitesse qui augmente', 'Indique une vitesse qui diminue', 'Reste juste'],
          a: 1,
          exp: 'La pression piégée dans le Pitot ne change plus, alors que la pression statique diminue en montant : l’écart augmente et l’anémomètre « monte » comme un altimètre.'
        },
        {
          q: 'La prise statique est bouchée. Que fait l’altimètre ?',
          choices: ['Il indique zéro', 'Il reste bloqué sur la dernière valeur', 'Il varie deux fois plus vite', 'Il fonctionne normalement'],
          a: 1,
          exp: 'Sans nouvelle pression statique, l’altimètre reste figé et le variomètre indique zéro. La parade : la prise statique de secours, si l’avion en a une.'
        },
        {
          q: 'Pourquoi faut-il recaler régulièrement le conservateur de cap ?',
          choices: ['Parce qu’il dérive avec le temps', 'Parce qu’il s’use', 'Parce que le compas est plus précis en virage', 'Ce n’est pas nécessaire'],
          a: 0,
          exp: 'Le gyroscope dérive (frottements, rotation de la Terre). On le recale sur le compas environ toutes les 15 minutes, en vol rectiligne stabilisé.'
        },
        {
          q: 'En virage, la bille est décalée vers la droite. Que faites-vous ?',
          choices: ['Pied à gauche', 'Pied à droite', 'Plus d’inclinaison', 'Moins de puissance'],
          a: 1,
          exp: '« Le pied chasse la bille » : on appuie du côté où se trouve la bille pour la recentrer et retrouver un vol symétrique.'
        },
        {
          q: 'L’alternateur tombe en panne. Le moteur :',
          choices: ['S’arrête immédiatement', 'Continue de tourner grâce aux magnétos', 'S’arrête quand la batterie est vide', 'Perd la moitié de sa puissance'],
          a: 1,
          exp: 'Les magnétos produisent leur propre courant d’allumage. Le moteur continue, mais la radio et les équipements électriques vivent sur la batterie : on déleste et on se pose rapidement.'
        },
        {
          q: 'Quand peut-on se fier au compas magnétique ?',
          choices: ['En virage serré', 'En accélération', 'En vol rectiligne horizontal stabilisé', 'Toujours'],
          a: 2,
          exp: 'En virage et lors des changements de vitesse, l’aimant s’incline et l’indication est fausse. Il faut être stabilisé pour lire un cap fiable.'
        },
        {
          q: 'Avion à hélice à pas variable : vous voulez augmenter la puissance. Dans quel ordre ?',
          choices: ['Gaz puis hélice', 'Hélice puis gaz', 'Peu importe', 'Hélice seulement'],
          a: 1,
          exp: 'On augmente d’abord les tours (hélice) puis la pression d’admission (gaz), pour ne pas faire forcer le moteur à bas régime. En réduction, c’est l’inverse : gaz d’abord.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-5',
      title: 'Météorologie du pilote',
      domain: 'meteo',
      duration: 40,
      intro: 'Lire le ciel et les messages météo, reconnaître les dangers, et comprendre le climat tropical de la Nouvelle-Calédonie.',
      sections: [
        {
          h: 'L’atmosphère et l’altimètre',
          html: '<p>Référence : l’<strong>atmosphère standard</strong> (1013,25 hPa et 15 °C au niveau de la mer, température qui baisse d’environ 2 °C par 1 000 ft).</p><p>Dans la réalité, la pression et la température varient. Deux pièges :</p><ul><li>voler <strong>vers une zone de basse pression</strong> sans recaler l’altimètre ;</li><li>voler dans un <strong>air plus froid</strong> que la normale.</li></ul><p>Dans les deux cas, l’altimètre <strong>surestime</strong> l’altitude : on est plus bas qu’on ne le croit.</p>',
          fig: 'atmosphere',
          caption: 'Atmosphère standard : la référence de tous les calculs.',
          tip: '« Du chaud vers le froid, ou du haut vers le bas : attention en bas ! »'
        },
        {
          h: 'Masses d’air, nuages et fronts',
          html: '<p>Une <strong>masse d’air instable</strong> (air qui, soulevé, continue de monter) donne des <strong>cumulus</strong>, des averses, des turbulences mais une bonne visibilité. Une <strong>masse d’air stable</strong> donne des <strong>stratus</strong>, de la brume, une mauvaise visibilité mais un air calme.</p><p>Un <strong>front</strong> est la limite entre deux masses d’air :</p><ul><li><strong>Front chaud</strong> : l’air chaud glisse lentement sur l’air froid. Séquence Ci → Cs → As → Ns, pluie continue, plafonds qui baissent pendant des heures.</li><li><strong>Front froid</strong> : l’air froid pousse brutalement l’air chaud vers le haut. Cumulonimbus, averses, rafales, passage rapide, puis éclaircie.</li></ul>',
          fig: 'fronts',
          caption: 'Front froid (raide, orageux) et front chaud (en pente douce, pluvieux).'
        },
        {
          h: 'Les dangers : orages, givrage, cisaillement, brouillard',
          html: '<ul><li><strong>Orage (cumulonimbus)</strong> : turbulence extrême, grêle, foudre, rafales descendantes. On ne s’en approche pas : une distance d’au moins 10 NM d’un orage actif est une règle de prudence courante.</li><li><strong>Givrage</strong> : de l’eau liquide surfondue gèle sur l’avion. Plus fréquent entre 0 et -15 °C dans les nuages ou la pluie. Le <strong>givrage carburateur</strong> peut, lui, survenir par temps humide même au-dessus de +20 °C.</li><li><strong>Cisaillement de vent</strong> : changement brutal du vent en vitesse ou en direction, dangereux en approche (orages, relief, inversions).</li><li><strong>Brouillard de rayonnement</strong> : nuit claire, vent faible, air humide ; se lève souvent dans la matinée. <strong>Brouillard d’advection</strong> : air chaud et humide qui passe sur une surface froide ; peut durer longtemps.</li></ul>',
          fig: 'nuages',
          caption: 'Les étages de nuages : le cumulonimbus traverse tous les étages.'
        },
        {
          h: 'Lire un METAR, un TAF, une TEMSI',
          html: '<p><strong>METAR</strong> : observation d’un aéroport, toutes les 30 min ou 1 h. <strong>TAF</strong> : prévision pour un aéroport. <strong>TEMSI</strong> : carte du temps significatif (fronts, nuages, givrage, turbulence) sur une région.</p><p>Exemple fictif :</p><p><code>METAR NWWW 180000Z 12012KT 9999 FEW020 SCT040 26/19 Q1016 NOSIG</code></p><ul><li><code>NWWW</code> : La Tontouta ; <code>180000Z</code> : le 18 à 00h00 UTC ;</li><li><code>12012KT</code> : vent du 120° pour 12 nœuds ;</li><li><code>9999</code> : visibilité 10 km ou plus ;</li><li><code>FEW020 SCT040</code> : quelques nuages à 2 000 ft, épars à 4 000 ft ;</li><li><code>26/19</code> : température 26 °C, point de rosée 19 °C ;</li><li><code>Q1016</code> : QNH 1016 hPa ; <code>NOSIG</code> : pas de changement significatif prévu.</li></ul><p>Couverture nuageuse : FEW (1-2/8), SCT (3-4/8), BKN (5-7/8), OVC (8/8). Le <strong>plafond</strong> commence à BKN.</p>',
          fig: 'metar',
          caption: 'Un METAR se lit dans l’ordre : lieu, heure, vent, visibilité, nuages, température, pression.'
        },
        {
          h: 'Météo tropicale et hémisphère Sud',
          html: '<p>En Nouvelle-Calédonie :</p><ul><li>les <strong>alizés</strong> soufflent la plupart du temps de secteur <strong>Est à Sud-Est</strong> ; ils renforcent souvent l’après-midi ;</li><li>la <strong>saison cyclonique</strong> couvre en gros l’été austral (de novembre à avril) : suivre les bulletins de Météo-France Nouvelle-Calédonie ;</li><li>le relief de la Grande Terre crée des <strong>turbulences et des effets de foehn</strong> sous le vent de la chaîne.</li></ul><p><strong>Rotation inversée</strong> : dans l’hémisphère Nord, le vent tourne dans le sens inverse des aiguilles d’une montre autour d’une dépression. <strong>Dans l’hémisphère Sud, c’est l’inverse</strong> : sens des aiguilles d’une montre autour d’une dépression (et donc des cyclones), sens inverse autour d’un anticyclone.</p>',
          fig: 'isobares',
          caption: 'Le sens de rotation autour des dépressions s’inverse entre les deux hémisphères.'
        }
      ],
      keypoints: [
        'Vers une basse pression ou dans l’air froid, l’altimètre surestime : on est plus bas que prévu.',
        'Air instable : cumulus, averses, bonne visibilité. Air stable : stratus, brume, air calme.',
        'Front froid : orages et passage rapide. Front chaud : pluie continue, plafonds bas.',
        'METAR = observation, TAF = prévision d’aéroport, TEMSI = carte du temps significatif.',
        'FEW, SCT, BKN, OVC : le plafond commence à BKN.',
        'Hémisphère Sud : rotation des dépressions dans le sens des aiguilles d’une montre.'
      ],
      links: [
        { label: 'Météo-France – Aéroweb (portail météo aéronautique)', url: 'https://aviation.meteo.fr/' },
        { label: 'Météo-France Nouvelle-Calédonie', url: 'https://www.meteo.nc/' },
        { label: 'Wikipédia – METAR', url: 'https://fr.wikipedia.org/wiki/METAR' }
      ],
      quiz: [
        {
          q: 'Vous volez d’une zone de haute pression vers une zone de basse pression sans changer le calage altimétrique. Vous êtes :',
          choices: ['Plus haut que l’altimètre l’indique', 'Plus bas que l’altimètre l’indique', 'À l’altitude indiquée', 'Cela dépend du vent'],
          a: 1,
          exp: 'Vers une basse pression, l’altimètre « croit » qu’on est monté et surestime l’altitude. On est donc plus bas qu’affiché : danger près du relief.',
          fig: 'calage'
        },
        {
          q: 'Quelle masse d’air donne généralement une bonne visibilité, des cumulus et des averses ?',
          choices: ['Stable', 'Instable', 'Saturée et stable', 'Aucune'],
          a: 1,
          exp: 'L’air instable monte facilement : il forme des nuages à développement vertical (cumulus) et des averses, mais les mouvements verticaux dispersent la brume.'
        },
        {
          q: 'Quel front est le plus souvent accompagné d’orages et de rafales ?',
          choices: ['Le front chaud', 'Le front froid', 'Le front stationnaire', 'Aucun'],
          a: 1,
          exp: 'Au front froid, l’air froid soulève brutalement l’air chaud : cumulonimbus, averses et rafales. Le front chaud donne surtout une pluie continue et des nuages bas.',
          fig: 'fronts'
        },
        {
          q: 'Dans le METAR « 11012KT », que signifie 110 ?',
          choices: ['La vitesse du vent', 'La direction d’où vient le vent', 'La visibilité', 'L’heure'],
          a: 1,
          exp: 'Le vent est donné par la direction d’où il vient (110°, donc Est-Sud-Est) puis sa vitesse (12 nœuds).',
          fig: 'metar'
        },
        {
          q: 'À partir de quelle couverture parle-t-on de plafond ?',
          choices: ['FEW', 'SCT', 'BKN', 'Seulement OVC'],
          a: 2,
          exp: 'Le plafond est la hauteur de la base de la plus basse couche couvrant plus de la moitié du ciel : BKN (5 à 7 octas) ou OVC (8 octas).'
        },
        {
          q: 'Le givrage carburateur peut se produire :',
          choices: ['Uniquement sous 0 °C', 'Même par +20 °C si l’air est humide', 'Seulement en vol dans les nuages', 'Jamais sur un moteur à injection ou à carburateur'],
          a: 1,
          exp: 'La détente de l’air et l’évaporation de l’essence refroidissent fortement le carburateur. Par air humide, de la glace peut s’y former même par temps chaud.'
        },
        {
          q: 'En Nouvelle-Calédonie (hémisphère Sud), le vent autour d’une dépression tourne :',
          choices: ['Dans le sens des aiguilles d’une montre', 'Dans le sens inverse des aiguilles d’une montre', 'Il ne tourne pas', 'Dans un sens qui change chaque jour'],
          a: 0,
          exp: 'La force de Coriolis s’inverse dans l’hémisphère Sud. Les dépressions et cyclones y tournent dans le sens horaire, à l’inverse de ce qu’on voit sur les cartes européennes.',
          fig: 'isobares'
        },
        {
          q: 'Quel document donne une vue d’ensemble des fronts, du givrage et des turbulences sur une région ?',
          choices: ['Le METAR', 'Le TAF', 'La TEMSI', 'Le NOTAM'],
          a: 2,
          exp: 'La TEMSI est la carte du temps significatif. Le METAR et le TAF ne concernent qu’un aéroport ; le NOTAM n’est pas un document météo.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-6',
      title: 'Navigation à vue',
      domain: 'nav',
      duration: 40,
      intro: 'Préparer et conduire une navigation : carte, caps, vent, estime et règle du 1 sur 60.',
      sections: [
        {
          h: 'La carte OACI au 1/500 000',
          html: '<p>La carte aéronautique VFR de référence est au <strong>1/500 000</strong> : <strong>1 cm sur la carte = 5 km</strong> au sol.</p><p>On y trouve : le relief et les altitudes maximales par zone, les aérodromes, les espaces aériens avec planchers et plafonds, les zones réglementées (P, R, D), les obstacles, les balises radio et les points de report VFR.</p><p>Les distances se mesurent en <strong>milles nautiques (NM)</strong> : 1 NM = 1 852 m, soit une minute d’arc de latitude. On mesure donc les distances sur l’échelle des latitudes (bord vertical de la carte).</p>'
        },
        {
          h: 'Du cap vrai au cap compas',
          html: '<p>Sur la carte, on trace une <strong>route vraie</strong> (Rv), mesurée par rapport au Nord géographique. Mais le compas indique le Nord magnétique. Il faut donc corriger :</p><ul><li><strong>Déclinaison magnétique (Dm)</strong> : écart entre Nord vrai et Nord magnétique, indiqué sur la carte. Elle dépend du lieu.</li><li><strong>Déviation (d)</strong> : erreur propre au compas de l’avion, lue sur la carte de déviation.</li></ul><p>Formules (déclinaison et déviation comptées <strong>positives vers l’Est</strong>) :</p><ul><li>Cap magnétique : <strong>Cm = Cv − Dm</strong></li><li>Cap compas : <strong>Cc = Cm − d</strong></li></ul><p>Exemple : Cv = 090°, déclinaison 10° Est → Cm = 080°.</p>',
          tip: 'Moyen mnémotechnique anglais : « East is least, West is best » — avec une déclinaison Est, on retranche ; Ouest, on ajoute.'
        },
        {
          h: 'Le vent et le triangle des vitesses',
          html: '<p>L’avion se déplace dans une masse d’air qui elle-même bouge. Le <strong>vent</strong> fait donc dériver l’avion :</p><ul><li><strong>Cap</strong> : là où pointe le nez ;</li><li><strong>Route</strong> : la trajectoire réelle au sol ;</li><li><strong>Dérive</strong> : l’angle entre les deux.</li></ul><p>Calcul mental rapide :</p><ol><li><strong>Facteur de base</strong> : Fb = 60 / Vp (Vp = vitesse propre en kt). À 120 kt, Fb = 0,5 min par NM.</li><li><strong>Dérive maximale</strong> : Xm = vitesse du vent × 60 / Vp. Vent de 20 kt à 120 kt → Xm = 10°.</li><li><strong>Dérive réelle</strong> = Xm × sin(angle entre vent et route). 30° → × 0,5 ; 45° → × 0,7 ; 60° et plus → × 0,9 à 1.</li></ol>',
          fig: 'vent',
          caption: 'Triangle des vitesses : le cap corrige la dérive pour suivre la route.'
        },
        {
          h: 'La règle du 1 sur 60 et l’estime',
          html: '<p><strong>Règle du 1 sur 60</strong> : 1° d’écart sur 60 NM = 1 NM d’écart latéral. Elle permet tous les calculs d’angle de tête.</p><p>Exemple : après 30 NM, vous êtes 3 NM à droite de la route.</p><ul><li>Erreur de cap = 3 × 60 / 30 = <strong>6°</strong> ;</li><li>s’il reste 30 NM, il faut en plus 3 × 60 / 30 = 6° pour rejoindre la destination ;</li><li>correction totale : <strong>12° à gauche</strong>.</li></ul><p>L’<strong>estime</strong>, c’est savoir où l’on est grâce au cap, à la vitesse et au temps écoulé. On prépare un <strong>log de navigation</strong> : pour chaque branche, route, cap, distance, temps estimé, heure estimée, heure réelle et carburant.</p>',
          fig: 'traversier',
          caption: 'Les mêmes coefficients (0,5 ; 0,7 ; 0,9 ; 1) servent pour la dérive et pour le vent de travers.'
        },
        {
          h: 'Le GNSS : un allié, pas un maître',
          html: '<p>Le GPS (et plus généralement le <strong>GNSS</strong>) est très précis, mais :</p><ul><li>sa base de données doit être à jour ;</li><li>le signal peut être perdu ou brouillé ;</li><li>il pousse à regarder dans le cockpit au lieu de dehors.</li></ul><p>La bonne pratique : <strong>préparer sa navigation à la carte et au log</strong>, puis utiliser le GNSS pour <strong>confirmer</strong> sa position. Si le GNSS et l’estime ne sont pas d’accord, on cherche pourquoi.</p>'
        }
      ],
      keypoints: [
        'Carte 1/500 000 : 1 cm = 5 km ; distances en NM (1 NM = 1 852 m).',
        'Cm = Cv − Dm (Dm Est positive) ; Cc = Cm − déviation.',
        'Dérive max = vent × 60 / Vp ; dérive réelle = dérive max × sin(angle au vent).',
        'Règle du 1 sur 60 : 1° d’écart = 1 NM à 60 NM.',
        'Le log de navigation est la colonne vertébrale du vol ; le GNSS sert à confirmer.'
      ],
      links: [
        { label: 'SIA – Cartes aéronautiques et AIP', url: 'https://www.sia.aviation-civile.gouv.fr/' },
        { label: 'Wikipédia – Déclinaison magnétique', url: 'https://fr.wikipedia.org/wiki/D%C3%A9clinaison_magn%C3%A9tique' }
      ],
      quiz: [
        {
          q: 'Sur une carte au 1/500 000, 4 cm représentent :',
          choices: ['2 km', '20 km', '40 km', '200 km'],
          a: 1,
          exp: '1 cm = 500 000 cm = 5 km. Donc 4 cm = 20 km.'
        },
        {
          q: 'Route vraie 180°, déclinaison 10° Est. Quel est le cap magnétique (sans vent) ?',
          choices: ['170°', '180°', '190°', '200°'],
          a: 0,
          exp: 'Cm = Cv − Dm = 180 − 10 = 170°. Avec une déclinaison Est, on retranche (« East is least »).'
        },
        {
          q: 'Vitesse propre 120 kt, vent de 30 kt. Quelle est la dérive maximale possible ?',
          choices: ['5°', '10°', '15°', '30°'],
          a: 2,
          exp: 'Xm = vent × 60 / Vp = 30 × 60 / 120 = 15°. C’est la dérive quand le vent souffle pile de travers.',
          fig: 'vent'
        },
        {
          q: 'Avec une dérive maximale de 10°, le vent fait 30° avec la route. Quelle est la dérive ?',
          choices: ['3°', '5°', '7°', '10°'],
          a: 1,
          exp: 'Dérive = Xm × sin(30°) = 10 × 0,5 = 5°.',
          fig: 'traversier'
        },
        {
          q: 'Après 60 NM, vous êtes 2 NM à gauche de votre route. Quelle est votre erreur de cap ?',
          choices: ['1°', '2°', '4°', '6°'],
          a: 1,
          exp: 'Règle du 1 sur 60 : 2 NM d’écart sur 60 NM parcourus = 2° d’erreur.'
        },
        {
          q: 'Quelle est la différence entre cap et route ?',
          choices: ['Aucune', 'Le cap est l’orientation du nez, la route est la trajectoire au sol', 'La route est l’orientation du nez, le cap la trajectoire', 'Le cap est toujours magnétique, la route toujours vraie'],
          a: 1,
          exp: 'Avec du vent, l’avion « crabe » : le nez (cap) pointe un peu dans le vent pour que la trajectoire au sol (route) reste sur le trait de la carte.',
          fig: 'vent'
        },
        {
          q: 'Un mille nautique vaut :',
          choices: ['1 000 m', '1 609 m', '1 852 m', '2 000 m'],
          a: 2,
          exp: '1 NM = 1 852 m = une minute d’arc de latitude. 1 609 m, c’est le mile terrestre.'
        },
        {
          q: 'Le GNSS et votre estime ne sont pas d’accord sur votre position. Que faites-vous ?',
          choices: ['Vous suivez le GNSS sans réfléchir', 'Vous cherchez des repères au sol pour comprendre l’écart', 'Vous éteignez le GNSS', 'Vous faites demi-tour immédiatement'],
          a: 1,
          exp: 'Ni l’un ni l’autre n’est infaillible. On recoupe avec des repères visuels (ville, rivière, route) pour savoir lequel a raison.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-7',
      title: 'Préparation du vol et performances',
      domain: 'perf',
      duration: 35,
      intro: 'Vérifier que l’avion est dans ses limites, qu’il décollera et atterrira sur la piste choisie, et qu’on a assez de carburant.',
      sections: [
        {
          h: 'Masse et centrage',
          html: '<p>Deux questions avant chaque vol :</p><ol><li>L’avion est-il <strong>sous sa masse maximale</strong> au décollage ?</li><li>Le <strong>centre de gravité</strong> est-il dans les limites ?</li></ol><p>Méthode : pour chaque élément (avion vide, pilote, passagers, bagages, carburant), on calcule le <strong>moment = masse × bras de levier</strong>. Le centrage vaut <strong>somme des moments / somme des masses</strong>. On reporte le point sur le graphique du manuel de vol.</p><ul><li><strong>Centrage avant</strong> : avion très stable mais lourd aux commandes, vitesse de décrochage un peu plus élevée, arrondi difficile.</li><li><strong>Centrage arrière</strong> : avion instable, commandes légères, sortie de vrille parfois impossible. Plus dangereux.</li></ul><p>Penser à vérifier aussi le centrage <strong>à l’atterrissage</strong> : le carburant consommé déplace le centre de gravité.</p>',
          fig: 'centrage',
          caption: 'Le point masse/centrage doit rester dans l’enveloppe, au décollage comme à l’atterrissage.'
        },
        {
          h: 'Ce qui allonge le décollage et l’atterrissage',
          html: '<p>Les abaques du manuel de vol donnent les distances. Ce qui les <strong>allonge</strong> :</p><ul><li><strong>Altitude élevée</strong> et <strong>température élevée</strong> : air moins dense, moins de portance et moins de puissance ;</li><li><strong>Masse élevée</strong> ;</li><li><strong>Piste en herbe</strong>, mouillée, ou en <strong>montée</strong> ;</li><li><strong>Vent arrière</strong> (le vent de face, lui, raccourcit).</li></ul><p>Ordres de grandeur pour un monomoteur (fiche « Safety Sense » de l’autorité britannique), au décollage : environ +10 % par 1 000 ft d’altitude, +10 % par 10 °C au-dessus de la normale, +20 % sur herbe sèche, davantage sur herbe mouillée. Ces effets <strong>se multiplient</strong>.</p><p>Par une chaude journée calédonienne sur une piste courte en herbe, les marges fondent très vite.</p>',
          tip: 'Pensez « densité » : chaud, haut, humide et lourd sont les quatre ennemis du décollage.'
        },
        {
          h: 'Altitude pression et calage',
          html: '<p>Les abaques demandent souvent l’<strong>altitude pression</strong> : l’altitude lue avec le calage 1013 hPa.</p><ul><li><strong>QNH</strong> : altimètre calé pour lire l’<strong>altitude</strong> au-dessus du niveau de la mer ;</li><li><strong>QFE</strong> : altimètre calé pour lire la <strong>hauteur</strong> au-dessus de l’aérodrome ;</li><li><strong>1013,25</strong> : on lit un <strong>niveau de vol</strong>.</li></ul><p>Calcul rapide : 1 hPa ≈ 28 ft. Terrain à 500 ft, QNH 1003 → altitude pression = 500 + (1013 − 1003) × 28 ≈ 780 ft.</p>',
          fig: 'calage',
          caption: 'QNH = altitude, QFE = hauteur, 1013 = niveau de vol.'
        },
        {
          h: 'Carburant et réserves',
          html: '<p>Le carburant se calcule ainsi :</p><ul><li>roulage ;</li><li>délestage (le trajet) ;</li><li>marge pour imprévus (vent plus fort, détour) ;</li><li>déroutement éventuel vers un aérodrome de dégagement ;</li><li><strong>réserve finale</strong> : en VFR de jour, au moins <strong>30 minutes</strong> de vol en croisière ; de nuit, <strong>45 minutes</strong>.</li></ul><p>On ne fait pas confiance aux jauges seules : on vérifie visuellement les réservoirs avant le vol et on surveille la consommation en temps réel avec le log.</p>',
          tip: 'Les seuls cas où l’on a trop de carburant, c’est quand l’avion brûle.'
        },
        {
          h: 'NOTAM et informations aéronautiques',
          html: '<p>Les <strong>NOTAM</strong> (Notice To Air Missions) signalent les changements temporaires : piste fermée, balise en panne, zone militaire active, grue près d’un aérodrome, manifestation aérienne…</p><p>Avant chaque navigation, on consulte :</p><ul><li>les NOTAM de départ, de destination, de dégagement et de la route ;</li><li>les cartes d’aérodrome (cartes VAC) à jour ;</li><li>les suppléments à l’AIP (SUP AIP) pour les activations temporaires.</li></ul><p>En France métropolitaine comme dans les territoires d’outre-mer, ces informations sont publiées par le <strong>SIA</strong>.</p>'
        }
      ],
      keypoints: [
        'Moment = masse × bras de levier ; centrage = Σ moments / Σ masses.',
        'Centrage arrière = instabilité, plus dangereux que le centrage avant.',
        'Chaud, haut, lourd, herbe et vent arrière allongent les distances ; les effets se multiplient.',
        '1 hPa ≈ 28 ft ; altitude pression = altitude lue avec 1013.',
        'Réserve finale VFR : 30 min de jour, 45 min de nuit.',
        'Toujours consulter les NOTAM pour départ, route, destination et dégagement.'
      ],
      links: [
        { label: 'SIA – NOTAM, cartes VAC et AIP', url: 'https://www.sia.aviation-civile.gouv.fr/' },
        { label: 'Wikipédia – NOTAM', url: 'https://fr.wikipedia.org/wiki/NOTAM' }
      ],
      quiz: [
        {
          q: 'Comment calcule-t-on le centrage d’un avion ?',
          choices: ['Somme des masses / somme des bras de levier', 'Somme des moments / somme des masses', 'Masse maximale − masse à vide', 'Bras de levier × carburant'],
          a: 1,
          exp: 'Chaque masse multipliée par son bras de levier donne un moment. La somme des moments divisée par la masse totale donne la position du centre de gravité.',
          fig: 'centrage'
        },
        {
          q: 'Un centrage trop arrière rend l’avion :',
          choices: ['Plus stable', 'Instable et parfois impossible à sortir de vrille', 'Plus lourd aux commandes', 'Plus lent'],
          a: 1,
          exp: 'Avec le centre de gravité trop en arrière, la profondeur n’a plus assez de bras de levier pour contrer un cabrage. C’est le cas le plus dangereux.'
        },
        {
          q: 'Lequel de ces facteurs RACCOURCIT la distance de décollage ?',
          choices: ['Température élevée', 'Piste en herbe', 'Vent de face', 'Altitude élevée'],
          a: 2,
          exp: 'Le vent de face réduit la vitesse sol nécessaire pour atteindre la vitesse de rotation. Tous les autres facteurs allongent la distance.'
        },
        {
          q: 'Pourquoi un avion décolle-t-il plus mal par forte chaleur ?',
          choices: ['Le pilote transpire', 'L’air est moins dense : moins de portance et moins de puissance moteur', 'Les pneus sont plus mous', 'La piste est glissante'],
          a: 1,
          exp: 'L’air chaud est moins dense. L’aile porte moins à une vitesse donnée et le moteur respire moins d’air : double peine.'
        },
        {
          q: 'Quelle réserve finale minimale prévoir pour un vol VFR de jour (cas général) ?',
          choices: ['10 minutes', '30 minutes', '45 minutes', '1 heure'],
          a: 1,
          exp: 'En VFR de jour, la réserve finale est d’au moins 30 minutes de vol en croisière (45 minutes de nuit). C’est un minimum : on ajoute la marge et le dégagement.'
        },
        {
          q: 'Altimètre calé au QFE, avion posé sur l’aérodrome. Que lit-on ?',
          choices: ['L’altitude du terrain', 'Zéro', '1013', 'Le niveau de vol'],
          a: 1,
          exp: 'Le QFE donne la hauteur au-dessus de l’aérodrome : au sol, l’altimètre indique 0. Avec le QNH, il indiquerait l’altitude du terrain.',
          fig: 'calage'
        },
        {
          q: 'Terrain à 0 ft, QNH 1003 hPa. Quelle est approximativement l’altitude pression ?',
          choices: ['0 ft', '-280 ft', '+280 ft', '+1 003 ft'],
          a: 2,
          exp: 'La pression est 10 hPa plus basse que 1013 : avec un calage à 1013, l’altimètre lirait environ 10 × 28 = 280 ft. L’avion « se comporte » comme s’il était plus haut.'
        },
        {
          q: 'À quoi sert un NOTAM ?',
          choices: ['À donner la météo', 'À signaler un changement temporaire (piste fermée, zone active, balise en panne…)', 'À enregistrer les heures de vol', 'À calculer le centrage'],
          a: 1,
          exp: 'Le NOTAM informe des changements temporaires qui ne sont pas sur les cartes. Ne pas les lire, c’est risquer de se poser sur une piste fermée ou d’entrer dans une zone active.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'ppl-8',
      title: 'Facteurs humains et radio',
      domain: 'fh',
      duration: 35,
      intro: 'Le pilote est le maillon le plus fort et le plus fragile : comprendre ses limites, bien décider et bien communiquer.',
      sections: [
        {
          h: 'Vision et désorientation',
          html: '<p><strong>Vision</strong> : l’œil ne voit net qu’au centre. Un avion sur une trajectoire de collision ne bouge pas dans le champ de vision : il grossit seulement, et tard. Il faut donc <strong>balayer le ciel par secteurs</strong> (environ 10° à la fois) en faisant de courtes pauses.</p><p><strong>Désorientation spatiale</strong> : l’oreille interne ne détecte que les <strong>changements</strong> de rotation. Dans un virage prolongé sans repère extérieur, elle « oublie » le virage ; en revenant à plat, on a l’impression de virer de l’autre côté. Dans les nuages, sans formation au vol aux instruments, la perte de contrôle survient en quelques dizaines de secondes à quelques minutes.</p><p>Règle d’or : <strong>un pilote VFR ne rentre pas dans les nuages</strong>. Si la visibilité baisse, demi-tour tant qu’il est encore temps.</p>'
        },
        {
          h: 'Hypoxie et forme physique',
          html: '<p>L’<strong>hypoxie</strong> est un manque d’oxygène dans le cerveau. Elle est sournoise : euphorie, erreurs, sans que le pilote s’en rende compte. Elle commence à jouer sur les performances dès environ 10 000 ft, plus tôt la nuit ou chez un fumeur.</p><p>Avant de voler, la check-list <strong>IMSAFE</strong> :</p><ul><li><strong>I</strong>llness – suis-je malade ?</li><li><strong>M</strong>edication – ai-je pris un médicament incompatible ?</li><li><strong>S</strong>tress – suis-je préoccupé ?</li><li><strong>A</strong>lcohol – au moins 8 h depuis le dernier verre, et pas d’alcool dans le sang ;</li><li><strong>F</strong>atigue – ai-je assez dormi ?</li><li><strong>E</strong>ating – ai-je mangé et bu ?</li></ul>',
          fig: 'hypoxie',
          caption: 'Plus on monte, moins on a de temps de conscience utile en cas de manque d’oxygène.'
        },
        {
          h: 'Stress, décision et erreur',
          html: '<p>Un peu de stress améliore la performance ; trop la fait chuter (vision tunnel, oublis). Les accidents ont rarement une seule cause : selon le <strong>modèle de Reason</strong>, ce sont des « trous » alignés dans plusieurs barrières de sécurité (préparation, météo, fatigue, pression du rendez-vous…).</p><p>Pour décider, une méthode simple en cas d’imprévu :</p><ol><li><strong>Piloter</strong> d’abord (assiette, vitesse) ;</li><li><strong>Analyser</strong> la situation ;</li><li><strong>Choisir</strong> une option et un plan B ;</li><li><strong>Agir</strong>, puis <strong>vérifier</strong> le résultat.</li></ol><p>Piège classique : la <strong>pression de destination</strong> (« get-home-itis »), l’envie d’arriver coûte que coûte.</p>',
          fig: 'reason',
          caption: 'Modèle de Reason : l’accident passe quand les trous de toutes les barrières s’alignent.',
          tip: '« Aviate, Navigate, Communicate » : piloter, naviguer, communiquer, dans cet ordre.'
        },
        {
          h: 'La phraséologie radio',
          html: '<p>Un message radio suit un ordre précis : <strong>qui j’appelle, qui je suis, où je suis, ce que je veux</strong>.</p><p>Exemple : <em>« Magenta Tour, F-GXYZ, DR400, au point N, 1 500 pieds, pour intégrer le circuit en vue d’un atterrissage. »</em></p><p>On <strong>collationne</strong> (on répète) obligatoirement : les clairances, la piste en service, le calage altimétrique, le code transpondeur, les niveaux, caps et vitesses imposés.</p><p>En cas de problème :</p><ul><li><strong>PAN PAN</strong> (× 3) : urgence, pas de danger immédiat ;</li><li><strong>MAYDAY</strong> (× 3) : détresse, danger grave et imminent.</li></ul>',
          tip: 'Avant d’appuyer sur l’alternat : penser le message, puis parler. Un message court est un message compris.'
        },
        {
          h: 'L’alphabet aéronautique',
          html: '<p>Pour épeler sans ambiguïté, on utilise l’alphabet OACI (dit « OTAN ») : Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Québec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zoulou.</p><p>Les chiffres se prononcent un par un : 1 015 hPa se dit « un zéro un cinq ». F-GXYZ se dit « Fox Golf X-ray Yankee Zoulou », puis souvent abrégé en « F-YZ » (« Fox Yankee Zoulou ») une fois le contact établi.</p>',
          fig: 'otan',
          caption: 'L’alphabet aéronautique international.'
        }
      ],
      keypoints: [
        'Balayer le ciel par secteurs : un trafic en collision ne bouge pas, il grossit.',
        'Un pilote VFR ne rentre jamais dans les nuages : la désorientation arrive très vite.',
        'IMSAFE avant chaque vol ; au moins 8 h entre le dernier verre et le vol.',
        'Aviate, Navigate, Communicate.',
        'Message radio : qui j’appelle, qui je suis, où je suis, ce que je veux.',
        'PAN PAN = urgence ; MAYDAY = détresse.'
      ],
      links: [
        { label: 'Wikipédia – Alphabet phonétique de l’OTAN', url: 'https://fr.wikipedia.org/wiki/Alphabet_phon%C3%A9tique_de_l%27OTAN' },
        { label: 'SKYbrary – facteurs humains et sécurité', url: 'https://skybrary.aero/' }
      ],
      quiz: [
        {
          q: 'Un avion sur une trajectoire de collision avec vous apparaît dans votre champ de vision :',
          choices: ['Se déplaçant rapidement de gauche à droite', 'Immobile, mais grossissant', 'Toujours au-dessus de l’horizon', 'Toujours en clignotant'],
          a: 1,
          exp: 'S’il garde la même position relative, c’est que vos trajectoires convergent. Il ne bouge pas, il grossit, souvent très tard : d’où l’importance du balayage visuel.'
        },
        {
          q: 'Pourquoi un pilote non qualifié IFR ne doit-il pas entrer dans les nuages ?',
          choices: ['C’est seulement interdit la nuit', 'Sans repère extérieur, l’oreille interne trompe et la perte de contrôle arrive vite', 'Les nuages abîment la peinture', 'La radio ne passe plus'],
          a: 1,
          exp: 'L’oreille interne ne perçoit que les variations de rotation. Sans horizon visible et sans entraînement aux instruments, on finit par virer sans le savoir puis par perdre le contrôle.'
        },
        {
          q: 'Quel est le principal danger de l’hypoxie ?',
          choices: ['Elle provoque une douleur vive', 'Elle est insidieuse : on ne se rend pas compte qu’on est diminué', 'Elle fait monter l’avion', 'Elle n’existe qu’au-dessus de 30 000 ft'],
          a: 1,
          exp: 'L’hypoxie donne souvent une sensation de bien-être. Le pilote fait des erreurs sans s’en apercevoir. D’où l’intérêt de connaître ses symptômes et le temps de conscience utile.',
          fig: 'hypoxie'
        },
        {
          q: 'Dans quel ordre gérer un imprévu en vol ?',
          choices: ['Communiquer, naviguer, piloter', 'Piloter, naviguer, communiquer', 'Naviguer, communiquer, piloter', 'Communiquer d’abord, toujours'],
          a: 1,
          exp: '« Aviate, Navigate, Communicate ». On garde d’abord le contrôle de l’avion, ensuite on sait où on va, et seulement après on parle à la radio.'
        },
        {
          q: 'Que dit le modèle de Reason (fromage suisse) ?',
          choices: ['Un accident a toujours une cause unique', 'Un accident survient quand des failles dans plusieurs barrières s’alignent', 'Les fromages sont interdits à bord', 'Seule la météo cause les accidents'],
          a: 1,
          exp: 'Chaque barrière (formation, préparation, réglementation, équipement) a des trous. L’accident passe quand ils s’alignent. Fermer un seul trou peut suffire à l’éviter.',
          fig: 'reason'
        },
        {
          q: 'Parmi ces éléments, lequel faut-il obligatoirement collationner ?',
          choices: ['Une information de trafic', 'Le calage altimétrique', 'La météo générale', 'Le bonjour du contrôleur'],
          a: 1,
          exp: 'On collationne les éléments de sécurité : clairances, piste, calage altimétrique, code transpondeur, niveaux, caps et vitesses.'
        },
        {
          q: 'Moteur en feu, vous devez vous poser au plus vite. Quel message lancez-vous ?',
          choices: ['PAN PAN', 'MAYDAY', 'SECURITE', 'Aucun, on pilote'],
          a: 1,
          exp: 'MAYDAY signale une détresse, un danger grave et imminent. PAN PAN est réservé à l’urgence sans danger immédiat (malaise léger d’un passager, panne non critique).'
        },
        {
          q: 'Comment épelle-t-on « NWW » à la radio ?',
          choices: ['Nancy Whisky Whisky', 'November Whiskey Whiskey', 'Novembre Walter Walter', 'Nord Ouest Ouest'],
          a: 1,
          exp: 'Alphabet aéronautique : N = November, W = Whiskey. Il est le même pour tous les pilotes du monde, quelle que soit la langue utilisée.',
          fig: 'otan'
        }
      ]
    }
  ]
};
