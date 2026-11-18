window.PARCOURS = window.PARCOURS || {};
window.PARCOURS.atpl = {
  modules: [
    /* ===================== 010 DROIT AÉRIEN ===================== */
    {
      id: 'atpl-1',
      title: '010 – Droit aérien',
      domain: 'regl',
      duration: 35,
      intro: 'Comprendre qui fixe les règles du ciel mondial (OACI), comment l’Europe les applique (EASA) et ce que cela change pour un pilote de ligne en IFR.',
      sections: [
        {
          h: 'Le cadre mondial : Chicago et l’OACI',
          html: '<p>En <strong>1944</strong>, la <strong>Convention de Chicago</strong> crée l’<strong>OACI</strong> (Organisation de l’aviation civile internationale, siège à Montréal). Chaque État reste souverain sur son espace aérien, mais s’engage à appliquer des normes communes.</p><p>Ces normes sont regroupées dans <strong>19 annexes</strong>. Celles à connaître par cœur :</p><table class="tbl"><tr><th>Annexe</th><th>Sujet</th></tr><tr><td>1</td><td>Licences du personnel</td></tr><tr><td>2</td><td>Règles de l’air</td></tr><tr><td>3</td><td>Météorologie</td></tr><tr><td>6</td><td>Exploitation des aéronefs</td></tr><tr><td>7</td><td>Marques de nationalité et d’immatriculation</td></tr><tr><td>8</td><td>Navigabilité</td></tr><tr><td>11</td><td>Services de la circulation aérienne</td></tr><tr><td>12</td><td>Recherches et sauvetage</td></tr><tr><td>13</td><td>Enquêtes sur les accidents</td></tr><tr><td>14</td><td>Aérodromes</td></tr><tr><td>17</td><td>Sûreté</td></tr><tr><td>18</td><td>Marchandises dangereuses</td></tr><tr><td>19</td><td>Gestion de la sécurité (SMS)</td></tr></table>',
          tip: 'Moyen mnémotechnique : « 1 je suis pilote (licence), 2 je respecte les règles, 3 je regarde la météo ». Le 13 porte malheur : c’est l’enquête accident.'
        },
        {
          h: 'Les libertés de l’air',
          html: '<p>Les <strong>libertés de l’air</strong> sont des droits que les États s’accordent entre eux, par accords bilatéraux :</p><ul><li><strong>1re liberté</strong> : survoler un pays sans s’y poser.</li><li><strong>2e liberté</strong> : s’y poser pour une raison technique (carburant, maintenance), sans embarquer ni débarquer de passagers.</li><li><strong>3e et 4e libertés</strong> : transporter des passagers de son pays vers un autre, et retour.</li><li><strong>5e liberté</strong> : prendre des passagers dans un pays tiers lors d’une escale (exemple : une compagnie qui fait Nouméa → Tokyo via une escale où elle embarque des passagers).</li></ul>'
        },
        {
          h: 'L’Europe : EASA et ses « Parts »',
          html: '<p>En Europe, l’<strong>EASA</strong> transforme les normes OACI en règlements obligatoires, découpés en <em>Parts</em> :</p><ul><li><strong>Part-FCL</strong> : les licences (LAPL, PPL, CPL, ATPL) et qualifications (IR, qualification de type…).</li><li><strong>Part-MED</strong> : les certificats médicaux (classe 1 pour le pilote professionnel).</li><li><strong>Part-ORO</strong> : les exigences pour les organismes (compagnies, écoles).</li><li><strong>Part-CAT</strong> : les règles d’exploitation du transport aérien commercial.</li></ul><p>L’ATPL(A) exige notamment <strong>21 ans minimum</strong> et <strong>1 500 heures de vol</strong>. Avant cela, avec l’examen théorique réussi, on vole comme copilote avec un CPL + IR : c’est le fameux « ATPL gelé » (frozen ATPL).</p><p>L’examen théorique ATPL comprend <strong>13 examens</strong> (note minimale <strong>75 %</strong>) plus une évaluation « 100 KSA » (connaissances, compétences, attitudes) faite par l’école.</p>'
        },
        {
          h: 'Espaces aériens et règles IFR',
          html: '<p>Le ciel est découpé en <strong>FIR</strong> (régions d’information de vol), puis en espaces de <strong>classes A à G</strong> :</p><ul><li><strong>Classe A</strong> : IFR uniquement, tout le monde est séparé par le contrôle.</li><li><strong>Classes B à E</strong> : espaces contrôlés, avec des services qui diminuent de B vers E.</li><li><strong>Classes F et G</strong> : non contrôlés (G : simple information de vol).</li></ul><p>En <strong>IFR</strong>, sauf pour décoller ou atterrir, l’altitude minimale est de <strong>1 000 ft au-dessus de l’obstacle le plus haut</strong> dans un rayon de <strong>8 km</strong> autour de la position estimée (<strong>2 000 ft</strong> en région montagneuse).</p>',
          fig: 'espaces',
          caption: 'Coupe simplifiée des espaces aériens : plus on monte près des grands aéroports, plus l’espace est contrôlé.'
        }
      ],
      keypoints: [
        'Convention de Chicago (1944) → OACI → 19 annexes.',
        'Annexe 1 licences, 2 règles de l’air, 6 exploitation, 13 enquêtes accidents, 18 marchandises dangereuses.',
        'EASA : Part-FCL (licences), Part-MED, Part-ORO, Part-CAT.',
        'ATPL : 21 ans et 1 500 h ; théorie = 13 examens à 75 % minimum.',
        'Classe A = IFR seulement ; G = non contrôlé.',
        'IFR : 1 000 ft au-dessus de l’obstacle le plus haut dans 8 km (2 000 ft en montagne).'
      ],
      links: [
        { label: 'Convention de Chicago (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Chicago_Convention_on_International_Civil_Aviation' },
        { label: 'EASA – Agence européenne de la sécurité aérienne', url: 'https://www.easa.europa.eu/en' },
        { label: 'OACI – site officiel', url: 'https://www.icao.int/' }
      ],
      quiz: [
        {
          q: 'Quelle annexe OACI traite des licences du personnel ?',
          choices: ['Annexe 1', 'Annexe 13', 'Annexe 2', 'Annexe 6'],
          a: 0,
          exp: 'L’annexe 1 fixe les licences (pilotes, contrôleurs, mécaniciens). L’annexe 2 concerne les règles de l’air, la 6 l’exploitation et la 13 les enquêtes accidents.'
        },
        {
          q: 'Une compagnie s’arrête dans un pays uniquement pour refaire le plein, sans embarquer personne. Quelle liberté de l’air utilise-t-elle ?',
          choices: ['1re liberté', '2e liberté', '3e liberté', '5e liberté'],
          a: 1,
          exp: 'La 2e liberté est l’escale technique. La 1re liberté serait un simple survol, la 5e permettrait d’embarquer des passagers pendant l’escale.'
        },
        {
          q: 'Dans quelle classe d’espace aérien seuls les vols IFR sont-ils autorisés ?',
          choices: ['Classe C', 'Classe A', 'Classe G', 'Classe E'],
          a: 1,
          exp: 'La classe A est réservée à l’IFR. En classe C et E, le VFR est admis ; la classe G est non contrôlée.',
          fig: 'espaces'
        },
        {
          q: 'En IFR, hors région montagneuse, quelle est la marge minimale au-dessus de l’obstacle le plus haut (rayon de 8 km) ?',
          choices: ['500 ft', '1 000 ft', '1 500 ft', '2 000 ft'],
          a: 1,
          exp: 'La règle est 1 000 ft dans un rayon de 8 km. Les 2 000 ft s’appliquent seulement en région montagneuse.'
        },
        {
          q: 'Quel règlement européen définit les licences de pilote ?',
          choices: ['Part-CAT', 'Part-ORO', 'Part-FCL', 'Part-MED'],
          a: 2,
          exp: 'FCL signifie Flight Crew Licensing. Part-CAT = exploitation commerciale, Part-ORO = organismes, Part-MED = aptitude médicale.'
        },
        {
          q: 'Quelle note minimale faut-il obtenir à chaque examen théorique ATPL EASA ?',
          choices: ['50 %', '65 %', '75 %', '90 %'],
          a: 2,
          exp: 'Chaque matière se réussit avec au moins 75 %. C’est la même barre qu’au PPL, mais le volume est bien plus important.'
        },
        {
          q: 'Quelle annexe OACI concerne les enquêtes sur les accidents et incidents ?',
          choices: ['Annexe 11', 'Annexe 17', 'Annexe 18', 'Annexe 13'],
          a: 3,
          exp: 'L’annexe 13 encadre les enquêtes (en France, le BEA). Leur but n’est pas de punir mais d’éviter que l’accident se reproduise. La 17 est la sûreté, la 18 les marchandises dangereuses.'
        },
        {
          q: 'Que signifie avoir un « ATPL gelé » (frozen ATPL) ?',
          choices: ['Avoir réussi la théorie ATPL et détenir un CPL/IR, sans encore les 1 500 h', 'Être commandant de bord sur avion cargo', 'Avoir une licence suspendue pour raison médicale', 'Avoir échoué à l’ATPL et devoir attendre'],
          a: 0,
          exp: 'On peut voler comme copilote en compagnie avec CPL + IR + théorie ATPL. La licence ATPL « se dégèle » une fois les 1 500 h et les autres conditions remplies.'
        }
      ]
    },

    /* ===================== 021 CELLULE ET SYSTÈMES ===================== */
    {
      id: 'atpl-2',
      title: '021 – Cellule, systèmes et moteurs',
      domain: 'tech',
      duration: 40,
      intro: 'Découvrir comment un avion de ligne est construit et quels systèmes le font vivre : hydraulique, électricité, pressurisation, réacteurs, protection contre le givre.',
      sections: [
        {
          h: 'L’hydraulique : la force musculaire de l’avion',
          html: '<p>Un liquide est presque <strong>incompressible</strong> : une pression appliquée à un endroit se transmet partout (principe de <strong>Pascal</strong>). Une petite pompe peut donc déplacer de grosses gouvernes, le train d’atterrissage ou les freins.</p><ul><li>Pression typique : environ <strong>3 000 psi</strong> (environ 207 bar).</li><li>Plusieurs circuits indépendants (souvent 3) pour la redondance : une panne ne doit jamais tout faire perdre.</li><li>Pompes entraînées par les moteurs, par moteur électrique, et parfois une éolienne de secours (RAT) qui sort en cas de panne générale.</li></ul>'
        },
        {
          h: 'La pressurisation',
          html: '<p>À 37 000 ft, l’air est trop pauvre pour respirer. On pressurise la cabine avec de l’air prélevé sur les moteurs (<em>bleed air</em>) ou par des compresseurs électriques (Boeing 787).</p><ul><li>L’<strong>altitude cabine</strong> maximale en croisière est de <strong>8 000 ft</strong>.</li><li>Une <strong>vanne de sortie</strong> (outflow valve) règle la pression : plus elle est fermée, plus la cabine est pressurisée.</li><li>La <strong>pression différentielle</strong> (intérieur moins extérieur) est limitée par la résistance du fuselage.</li></ul><p>En cas de dépressurisation, les masques à oxygène tombent et l’équipage entame une <strong>descente d’urgence</strong>.</p>'
        },
        {
          h: 'Le turboréacteur double flux',
          html: '<p>Un réacteur moderne suit le même cycle qu’un moteur de voiture (aspirer, comprimer, brûler, détendre), mais <strong>en continu</strong> : soufflante → compresseurs → chambre de combustion → turbines → tuyère.</p><ul><li>La grosse <strong>soufflante</strong> (fan) à l’avant envoie la majeure partie de l’air <strong>autour</strong> du cœur du moteur : c’est le <strong>flux secondaire</strong>.</li><li>Le <strong>taux de dilution</strong> (bypass ratio) = flux secondaire / flux primaire. Sur un moteur d’A320neo ou de 787, il dépasse 10.</li><li>Sur ces moteurs, la soufflante produit la grande majorité de la poussée : plus économique et plus silencieux.</li></ul>',
          fig: 'moteur',
          caption: 'Le même cycle en 4 temps qu’un moteur à piston : dans un réacteur, les 4 étapes se font en continu, chacune dans une partie du moteur.'
        },
        {
          h: 'Électricité, APU et protection givre',
          html: '<ul><li><strong>Courant alternatif (AC)</strong> : 115 V / 400 Hz, produit par les générateurs des moteurs.</li><li><strong>Courant continu (DC)</strong> : 28 V, obtenu par transformateurs-redresseurs, et batteries de secours.</li><li>L’<strong>APU</strong> (petit réacteur dans la queue) fournit électricité et air comprimé au sol, moteurs arrêtés, et sert de secours en vol.</li></ul><p><strong>Givre</strong> : on distingue l’<strong>antigivrage</strong> (empêcher le givre de se former) et le <strong>dégivrage</strong> (l’enlever une fois formé). Sur un jet : air chaud des moteurs pour les bords d’attaque d’aile et les entrées d’air ; chauffage électrique pour les sondes et les pare-brise.</p>',
          tip: '400 Hz au lieu de 50 Hz à la maison : à puissance égale, les transformateurs et moteurs électriques sont beaucoup plus légers.'
        }
      ],
      keypoints: [
        'Hydraulique : fluide incompressible, environ 3 000 psi, plusieurs circuits redondants.',
        'Altitude cabine maximale : 8 000 ft ; la vanne de sortie règle la pression.',
        'Double flux : la soufflante produit l’essentiel de la poussée ; taux de dilution élevé = économie.',
        'Électricité : AC 115 V / 400 Hz et DC 28 V.',
        'APU : électricité et air au sol, secours en vol.',
        'Antigivrage = prévenir ; dégivrage = enlever.'
      ],
      links: [
        { label: 'Turboréacteur à double flux (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Turbofan' },
        { label: 'Pressurisation cabine (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Cabin_pressurization' },
        { label: 'SKYbrary – encyclopédie de la sécurité aérienne', url: 'https://skybrary.aero/' }
      ],
      quiz: [
        {
          q: 'Pourquoi utilise-t-on un liquide dans les circuits hydrauliques ?',
          choices: ['Parce qu’il refroidit les freins', 'Parce qu’il est presque incompressible et transmet la pression', 'Parce qu’il ne gèle jamais', 'Parce qu’il est léger'],
          a: 1,
          exp: 'Un liquide ne se comprime quasiment pas : la pression créée par la pompe arrive intacte au vérin. C’est le principe de Pascal.'
        },
        {
          q: 'Quelle est l’altitude cabine maximale normale d’un avion pressurisé ?',
          choices: ['2 000 ft', '5 000 ft', '8 000 ft', '12 000 ft'],
          a: 2,
          exp: 'La réglementation de certification vise une altitude cabine d’au plus 8 000 ft. Au-delà, le manque d’oxygène commence à peser sur les passagers.'
        },
        {
          q: 'Pour augmenter la pression dans la cabine, la vanne de sortie (outflow valve) doit :',
          choices: ['rester immobile', 's’ouvrir davantage', 'se fermer davantage', 'être shuntée par l’APU'],
          a: 2,
          exp: 'L’air entre en permanence. Si on laisse moins d’air sortir (vanne plus fermée), la pression intérieure monte, donc l’altitude cabine descend.'
        },
        {
          q: 'Sur un réacteur à grand taux de dilution, qui produit la majorité de la poussée ?',
          choices: ['La tuyère du flux primaire', 'La chambre de combustion', 'La turbine haute pression', 'La soufflante (flux secondaire)'],
          a: 3,
          exp: 'La soufflante accélère une énorme masse d’air autour du moteur. Accélérer beaucoup d’air un peu est plus efficace qu’accélérer peu d’air beaucoup.'
        },
        {
          q: 'Quelle est la tension et la fréquence du courant alternatif sur un avion de ligne classique ?',
          choices: ['230 V / 50 Hz', '115 V / 400 Hz', '28 V / 60 Hz', '12 V / 400 Hz'],
          a: 1,
          exp: 'Le standard aéronautique est 115 V à 400 Hz. Le courant continu, lui, est en 28 V.'
        },
        {
          q: 'Quelle est la différence entre antigivrage et dégivrage ?',
          choices: ['L’antigivrage empêche la formation du givre ; le dégivrage enlève le givre déjà formé', 'Le dégivrage ne se fait qu’au sol', 'L’antigivrage est électrique, le dégivrage pneumatique', 'Aucune, ce sont des synonymes'],
          a: 0,
          exp: 'Anti = avant (prévenir), dé = après (enlever). Sur un jet, l’air chaud des moteurs garde les bords d’attaque propres en continu : c’est de l’antigivrage.'
        },
        {
          q: 'À quoi sert l’APU ?',
          choices: ['À freiner l’avion à l’atterrissage', 'À fournir électricité et air comprimé, surtout au sol', 'À pressuriser les réservoirs', 'À piloter automatiquement en croisière'],
          a: 1,
          exp: 'L’APU est un petit réacteur dans la queue. Au sol, il alimente la climatisation, l’électricité et sert à démarrer les moteurs.'
        },
        {
          q: 'Pourquoi un avion de ligne possède-t-il plusieurs circuits hydrauliques indépendants ?',
          choices: ['Pour alimenter la cabine en eau', 'Pour gagner du poids', 'Pour la redondance : une panne ne doit pas faire perdre les commandes', 'Parce que chaque moteur a besoin de son propre circuit pour démarrer'],
          a: 2,
          exp: 'C’est le principe de base de la sécurité : aucune panne unique ne doit être catastrophique. Les gouvernes sont alimentées par plusieurs circuits.'
        }
      ]
    },

    /* ===================== 022 INSTRUMENTATION ===================== */
    {
      id: 'atpl-3',
      title: '022 – Instrumentation',
      domain: 'tech',
      duration: 35,
      intro: 'Passer des 6 instruments classiques au cockpit « tout écran » : centrales inertielles, PFD, ND, FMS, pilote automatique et systèmes anticollision.',
      sections: [
        {
          h: 'Des 6 instruments au PFD',
          html: '<p>Les 6 instruments de base de l’avion léger existent toujours, mais regroupés sur un écran : le <strong>PFD</strong> (Primary Flight Display).</p><ul><li>À gauche : la <strong>bande de vitesse</strong>.</li><li>Au centre : l’<strong>horizon artificiel</strong> (assiette et inclinaison).</li><li>À droite : la <strong>bande d’altitude</strong> et la <strong>vitesse verticale</strong>.</li><li>En bas : le <strong>cap</strong>.</li></ul><p>À côté, le <strong>ND</strong> (Navigation Display) montre la route, les balises, la météo radar et le trafic.</p>',
          fig: 'six',
          caption: 'Le « T de base » : on retrouve exactement cette disposition sur un PFD d’Airbus ou de Boeing.'
        },
        {
          h: 'Les sources : ADC et centrale inertielle',
          html: '<p>Les instruments reçoivent leurs données de deux familles de capteurs, souvent réunies dans un <strong>ADIRU</strong> :</p><ul><li><strong>ADR / ADC</strong> (données air) : prises <strong>pitot</strong> (pression totale) et <strong>statiques</strong> → vitesse, altitude, vitesse verticale, Mach.</li><li><strong>IRS</strong> (inertiel) : gyromètres laser et accéléromètres → assiette, cap, position, sans aucun signal extérieur.</li></ul><p>Pannes classiques à connaître :</p><table class="tbl"><tr><th>Panne</th><th>Effet en montée</th></tr><tr><td>Pitot et purge bouchés</td><td>L’anémomètre augmente : il se comporte comme un altimètre</td></tr><tr><td>Prise statique bouchée</td><td>Altimètre figé, variomètre à zéro, anémomètre sous-estime</td></tr></table>',
          tip: 'Pitot bouché = « anémomètre-altimètre ». Statique bouchée = « tout se fige ».'
        },
        {
          h: 'FMS et pilote automatique',
          html: '<p>Le <strong>FMS</strong> (Flight Management System) est l’ordinateur de navigation : on y entre la route, les performances, le carburant. Il calcule la trajectoire et les vitesses optimales.</p><p>Le <strong>pilote automatique</strong> suit soit des consignes simples (cap, altitude, vitesse : modes « sélectés »), soit la trajectoire du FMS (modes « managés »). Le <strong>directeur de vol</strong> affiche des barres sur l’horizon pour indiquer au pilote quoi faire.</p><p>Règle d’or : toujours savoir <strong>quel mode est engagé</strong> en lisant le FMA (bandeau en haut du PFD).</p>',
          fig: 'horizon',
          caption: 'L’horizon artificiel : la maquette fixe représente l’avion, le fond bleu et marron bouge selon l’assiette et l’inclinaison.'
        },
        {
          h: 'TCAS et GPWS : les anges gardiens',
          html: '<ul><li><strong>TCAS II</strong> (anticollision) : interroge les transpondeurs des avions voisins. Il donne d’abord une <strong>TA</strong> (Traffic Advisory, « Traffic, traffic ») puis, si le risque augmente, une <strong>RA</strong> (Resolution Advisory) : « Climb » ou « Descend ». Les RA sont uniquement <strong>verticales</strong>.</li><li><strong>On suit toujours une RA</strong>, même si le contrôleur dit l’inverse : l’autre avion reçoit l’ordre complémentaire.</li><li><strong>GPWS / TAWS</strong> : alerte de proximité du sol (« TERRAIN », « PULL UP »). Le TAWS compare la position GPS à une base de données du relief.</li></ul>'
        }
      ],
      keypoints: [
        'PFD : vitesse à gauche, horizon au centre, altitude à droite, cap en bas.',
        'ADC (pitot-statique) donne vitesse et altitude ; IRS donne attitude, cap et position.',
        'Pitot bouché en montée : l’anémomètre augmente comme un altimètre.',
        'Toujours lire le FMA pour connaître les modes du pilote automatique.',
        'TCAS : TA puis RA, uniquement verticales ; une RA se suit toujours.',
        'GPWS/TAWS : alerte de proximité du relief.'
      ],
      links: [
        { label: 'TCAS (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Traffic_collision_avoidance_system' },
        { label: 'Primary Flight Display (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Primary_flight_display' }
      ],
      quiz: [
        {
          q: 'Sur un PFD, où se trouve la bande d’altitude ?',
          choices: ['En bas', 'À gauche', 'Au centre', 'À droite'],
          a: 3,
          exp: 'Vitesse à gauche, horizon au centre, altitude à droite, cap en bas : c’est le T de base, transposé sur écran.',
          fig: 'six'
        },
        {
          q: 'Pendant une montée, le tube pitot et son trou de purge se bouchent (givre). Que fait l’anémomètre ?',
          choices: ['Il indique une vitesse qui augmente', 'Il tombe à zéro', 'Il indique une vitesse qui diminue', 'Il reste figé'],
          a: 0,
          exp: 'La pression piégée dans le pitot reste constante, alors que la pression statique diminue en montant. L’écart grandit : l’anémomètre « monte » comme un altimètre.'
        },
        {
          q: 'Quel équipement fournit l’assiette et le cap sans aucun signal extérieur ?',
          choices: ['Le radioaltimètre', 'La centrale inertielle (IRS)', 'Le VOR', 'Le GPS'],
          a: 1,
          exp: 'L’IRS mesure les rotations (gyromètres laser) et accélérations de l’avion. Il est totalement autonome, contrairement au GPS ou au VOR.'
        },
        {
          q: 'Le TCAS annonce « CLIMB, CLIMB » alors que le contrôleur vient de demander de descendre. Que faire ?',
          choices: ['Ne rien faire et attendre', 'Virer à droite', 'Suivre la RA du TCAS et prévenir le contrôleur', 'Suivre le contrôleur'],
          a: 2,
          exp: 'La RA est coordonnée avec l’autre avion qui reçoit l’ordre inverse. Désobéir peut créer la collision (accident d’Überlingen, 2002). On suit la RA puis on prévient l’ATC.'
        },
        {
          q: 'Dans quel plan le TCAS II donne-t-il ses ordres d’évitement (RA) ?',
          choices: ['Horizontal uniquement', 'Horizontal et vertical', 'Aucun, il donne seulement des informations', 'Vertical uniquement'],
          a: 3,
          exp: 'Le TCAS II ne connaît pas assez précisément la position horizontale des autres avions : il ne commande que monter, descendre ou maintenir la vitesse verticale.'
        },
        {
          q: 'Où lit-on les modes engagés du pilote automatique ?',
          choices: ['Sur le FMA, en haut du PFD', 'Sur le ND', 'Sur l’ECAM', 'Sur le transpondeur'],
          a: 0,
          exp: 'Le FMA (Flight Mode Annunciator) affiche les modes actifs et armés. De nombreux incidents viennent d’une confusion sur le mode engagé.'
        },
        {
          q: 'Une prise statique se bouche en montée. Que fait l’altimètre ?',
          choices: ['Il indique une altitude qui augmente trop vite', 'Il reste figé à la dernière altitude', 'Il indique une descente', 'Il tombe à zéro'],
          a: 1,
          exp: 'L’altimètre mesure la pression statique. Si elle est piégée, l’instrument ne voit plus aucun changement : il se fige, et le variomètre revient à zéro.'
        },
        {
          q: 'Quel système alerte l’équipage lorsque l’avion se rapproche dangereusement du relief ?',
          choices: ['ACARS', 'ELT', 'GPWS / TAWS', 'TCAS'],
          a: 2,
          exp: 'Le GPWS (et sa version améliorée TAWS) annonce « TERRAIN » ou « PULL UP ». Le TCAS concerne les autres avions, l’ELT est une balise de détresse.'
        }
      ]
    },

    /* ===================== 031 MASSE ET CENTRAGE ===================== */
    {
      id: 'atpl-4',
      title: '031 – Masse et centrage',
      domain: 'perf',
      duration: 30,
      intro: 'Savoir calculer la masse et la position du centre de gravité d’un avion de ligne, et comprendre pourquoi un mauvais centrage peut le rendre incontrôlable.',
      sections: [
        {
          h: 'Les masses, de la plus légère à la plus lourde',
          html: '<table class="tbl"><tr><th>Sigle</th><th>Nom</th><th>Contenu</th></tr><tr><td>DOM</td><td>Masse de base opérationnelle</td><td>Avion vide + équipage, ses bagages, catering, eau…</td></tr><tr><td>ZFM</td><td>Masse sans carburant</td><td>DOM + charge marchande (passagers, bagages, fret)</td></tr><tr><td>TOM</td><td>Masse au décollage</td><td>ZFM + carburant au décollage</td></tr><tr><td>LM</td><td>Masse à l’atterrissage</td><td>TOM − carburant consommé (trip fuel)</td></tr></table><p>Chacune a une limite maximale (MZFM, MTOM, MLM). La <strong>MZFM</strong> existe parce que le carburant dans les ailes allège la flexion de l’aile : une aile sans carburant mais un fuselage très chargé travaille plus.</p>',
          tip: 'Retiens l’ordre de construction : DOM → + passagers = ZFM → + carburant = TOM → − vol = LM.'
        },
        {
          h: 'Le centre de gravité : bras et moments',
          html: '<p>Chaque masse a un <strong>bras de levier</strong> (distance à une référence). <strong>Moment = masse × bras</strong>.</p><p><strong>Position du CG = somme des moments / masse totale</strong>.</p><p>Exemple : avion de 1 000 kg dont le CG est à 2 m de la référence. On ajoute 100 kg à 4 m.</p><ul><li>Moments : 1 000 × 2 = 2 000 ; 100 × 4 = 400 ; total 2 400.</li><li>Masse totale : 1 100 kg.</li><li>CG = 2 400 / 1 100 = <strong>2,18 m</strong>.</li></ul><p>Sur un avion de ligne, on exprime le CG en <strong>% de la MAC</strong> (corde aérodynamique moyenne) : 25 % MAC signifie que le CG est au quart de cette corde depuis son bord d’attaque.</p>'
        },
        {
          h: 'Centrage avant, centrage arrière',
          html: '<ul><li><strong>Centrage avant</strong> : avion très stable, mais plus « lourd » aux commandes ; vitesse de décrochage plus élevée ; plus de consommation (la queue doit davantage pousser vers le bas).</li><li><strong>Centrage arrière</strong> : avion moins stable, plus économique, mais au-delà de la limite arrière il peut devenir <strong>incontrôlable</strong>.</li></ul><p>Le CG doit rester dans l’<strong>enveloppe</strong> de centrage pendant tout le vol, y compris quand le carburant est consommé.</p>',
          fig: 'centrage',
          caption: 'L’enveloppe masse et centrage : le point (masse, CG) doit rester à l’intérieur, au décollage comme à l’atterrissage.'
        }
      ],
      keypoints: [
        'DOM + charge marchande = ZFM ; ZFM + carburant = TOM ; TOM − trip fuel = LM.',
        'Moment = masse × bras ; CG = somme des moments / masse totale.',
        'Sur avion de ligne, le CG s’exprime en % MAC.',
        'Centrage avant : stable, décrochage plus haut, consommation accrue.',
        'Centrage arrière : instable, risque de perte de contrôle.',
        'La MZFM protège la structure de l’aile.'
      ],
      links: [
        { label: 'Centre de gravité d’un avion (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Center_of_gravity_of_an_aircraft' },
        { label: 'SKYbrary – sécurité aérienne', url: 'https://skybrary.aero/' }
      ],
      quiz: [
        {
          q: 'Que contient la masse sans carburant (ZFM) ?',
          choices: ['La DOM plus le carburant', 'La TOM moins le carburant de réserve', 'L’avion vide seulement', 'La DOM plus la charge marchande'],
          a: 3,
          exp: 'ZFM = Zero Fuel Mass : tout l’avion chargé (DOM + passagers, bagages, fret), mais sans carburant utilisable.'
        },
        {
          q: 'Un avion pèse 1 000 kg avec un CG à 2 m. On ajoute 100 kg à 4 m. Où est le nouveau CG ?',
          choices: ['2,00 m', '2,18 m', '2,50 m', '3,00 m'],
          a: 1,
          exp: 'Moments : 2 000 + 400 = 2 400. Masse : 1 100 kg. CG = 2 400 / 1 100 ≈ 2,18 m. Il recule un peu, vers la charge ajoutée.'
        },
        {
          q: 'Quelle est une conséquence d’un centrage trop avant ?',
          choices: ['La vitesse de décrochage augmente', 'Les commandes deviennent très légères', 'L’avion devient instable', 'La consommation diminue'],
          a: 0,
          exp: 'Avec un CG avant, la queue doit pousser plus fort vers le bas : l’aile doit porter davantage, donc le décrochage arrive à une vitesse plus élevée.',
          fig: 'centrage'
        },
        {
          q: 'Pourquoi un centrage trop arrière est-il dangereux ?',
          choices: ['Il empêche de rentrer le train', 'Il peut rendre l’avion instable, voire incontrôlable', 'Il augmente la consommation', 'Il fait monter la vitesse de décrochage'],
          a: 1,
          exp: 'Plus le CG recule, moins l’avion revient seul à sa position d’équilibre. Au-delà de la limite arrière, la profondeur ne suffit plus à le contrôler.'
        },
        {
          q: 'Comment calcule-t-on la masse à l’atterrissage (LM) ?',
          choices: ['ZFM + réserve finale', 'DOM + passagers', 'TOM − carburant consommé pendant le vol', 'MTOM − 10 %'],
          a: 2,
          exp: 'On part de la masse au décollage et on enlève le carburant du voyage (trip fuel). Le carburant restant (réserves) fait partie de la LM.'
        },
        {
          q: 'Pourquoi existe-t-il une masse maximale sans carburant (MZFM) ?',
          choices: ['Pour limiter le bruit', 'Pour des raisons de taxe aéroportuaire', 'Pour limiter la longueur de piste', 'Pour protéger la structure de l’aile en flexion'],
          a: 3,
          exp: 'Le carburant dans les ailes contrebalance la portance qui plie l’aile vers le haut. Sans carburant, toute la charge est dans le fuselage : l’emplanture travaille plus.'
        },
        {
          q: 'Que signifie « CG à 25 % MAC » ?',
          choices: ['Le CG est au quart de la corde aérodynamique moyenne, depuis son bord d’attaque', 'Le CG est 25 % trop arrière', 'Le CG est à 25 m du nez', 'L’avion est chargé à 25 %'],
          a: 0,
          exp: 'La MAC est une corde de référence de l’aile. Exprimer le CG en pourcentage de cette corde permet de comparer facilement avec les limites du constructeur.'
        },
        {
          q: 'Laquelle de ces masses fait partie de la DOM ?',
          choices: ['Le carburant de délestage', 'L’équipage et le catering', 'Le fret', 'Les passagers'],
          a: 1,
          exp: 'La DOM comprend tout ce qui est nécessaire à l’exploitation hors charge payante et hors carburant : équipage, ses bagages, repas, eau potable…'
        }
      ]
    },

    /* ===================== 032 PERFORMANCES ===================== */
    {
      id: 'atpl-5',
      title: '032 – Performances',
      domain: 'perf',
      duration: 35,
      intro: 'Comprendre les vitesses de décollage V1, VR, V2, les distances de piste et pourquoi un avion de ligne doit pouvoir décoller même avec un moteur en panne.',
      sections: [
        {
          h: 'Les vitesses clés du décollage',
          html: '<ul><li><strong>V1</strong> : vitesse de décision. Avant V1, en cas de panne grave, on interrompt le décollage. <strong>Après V1, on décolle quoi qu’il arrive</strong> : il ne reste plus assez de piste pour s’arrêter.</li><li><strong>VR</strong> : vitesse de rotation, on lève le nez.</li><li><strong>V2</strong> : vitesse de sécurité au décollage, à atteindre au plus tard à <strong>35 ft</strong> au-dessus de la piste, même avec un moteur en panne.</li></ul><p>On a toujours <strong>V1 ≤ VR &lt; V2</strong>.</p>',
          tip: 'Le pilote qui ne pilote pas annonce « V1 » : à partir de là, la main quitte les manettes de poussée pour ne pas être tenté d’interrompre.'
        },
        {
          h: 'Les distances déclarées de la piste',
          html: '<table class="tbl"><tr><th>Sigle</th><th>Signification</th></tr><tr><td>TORA</td><td>Longueur de roulement disponible au décollage (la piste)</td></tr><tr><td>TODA</td><td>TORA + prolongement dégagé (clearway), sans obstacle</td></tr><tr><td>ASDA</td><td>TORA + prolongement d’arrêt (stopway), utilisable pour freiner</td></tr><tr><td>LDA</td><td>Distance disponible à l’atterrissage</td></tr></table><p>Le calcul de performance vérifie que l’avion peut, avec un moteur en panne à V1, soit <strong>s’arrêter</strong> dans l’ASDA, soit <strong>continuer</strong> et passer 35 ft dans la TODA.</p>'
        },
        {
          h: 'Classe de performance A et facteurs qui dégradent',
          html: '<p>Les avions de ligne multimoteurs à turbines sont certifiés en <strong>classe de performance A</strong> : ils doivent pouvoir poursuivre le décollage et franchir les obstacles après une panne moteur au pire moment.</p><p>Ce qui <strong>allonge</strong> les distances et dégrade la montée :</p><ul><li>Masse élevée.</li><li>Altitude et température élevées (« hot and high ») : l’air est moins dense.</li><li>Vent arrière ; piste mouillée ou contaminée ; pente montante.</li></ul><p>Pour la sécurité, les calculs ne retiennent que <strong>50 % du vent de face</strong> et <strong>150 % du vent arrière</strong>.</p>'
        },
        {
          h: 'Puissance, traînée et vitesses de montée',
          html: '<p>La traînée totale est la somme de la traînée <strong>induite</strong> (qui baisse quand la vitesse augmente) et de la traînée de <strong>profil</strong> (qui augmente avec la vitesse). Leur somme passe par un minimum : la vitesse de <strong>finesse maximale</strong>.</p><ul><li><strong>Vx</strong> : meilleur angle de montée (franchir un obstacle proche).</li><li><strong>Vy</strong> : meilleur taux de montée (gagner de l’altitude le plus vite possible).</li></ul>',
          fig: 'puissance',
          caption: 'Courbe de puissance nécessaire : à gauche du minimum (second régime), ralentir demande plus de puissance, un piège en approche.'
        }
      ],
      keypoints: [
        'V1 = décision ; après V1 on décolle toujours.',
        'V2 atteinte au plus tard à 35 ft, même moteur en panne.',
        'TODA = TORA + clearway ; ASDA = TORA + stopway.',
        'Classe A : le décollage doit rester possible après une panne moteur.',
        'Chaleur, altitude, masse, vent arrière et piste mouillée dégradent les performances.',
        'Calculs : 50 % du vent de face, 150 % du vent arrière.'
      ],
      links: [
        { label: 'Les vitesses V (Wikipédia)', url: 'https://en.wikipedia.org/wiki/V_speeds' },
        { label: 'SKYbrary – sécurité aérienne', url: 'https://skybrary.aero/' }
      ],
      quiz: [
        {
          q: 'Que fait l’équipage si un moteur tombe en panne juste après V1 ?',
          choices: ['Il attend VR pour décider', 'Il interrompt le décollage', 'Il poursuit le décollage', 'Il réduit à fond et freine'],
          a: 2,
          exp: 'V1 est le point de non-retour au sol : passé V1, la piste restante ne suffit plus pour s’arrêter. L’avion est certifié pour décoller sur le moteur restant.'
        },
        {
          q: 'À quelle hauteur la V2 doit-elle être atteinte au plus tard ?',
          choices: ['15 ft', '35 ft', '50 ft', '400 ft'],
          a: 1,
          exp: 'Pour la classe A, la V2 est atteinte au plus tard à 35 ft au-dessus de la surface de décollage. 50 ft est une valeur d’avion léger.'
        },
        {
          q: 'Que représente l’ASDA ?',
          choices: ['La piste plus le prolongement dégagé', 'La distance d’atterrissage disponible', 'La distance jusqu’au premier obstacle', 'La piste plus le prolongement d’arrêt'],
          a: 3,
          exp: 'ASDA = Accelerate-Stop Distance Available : distance pour accélérer puis s’arrêter, donc piste + stopway, une zone capable de supporter l’avion en freinage.'
        },
        {
          q: 'Quel ordre est toujours respecté ?',
          choices: ['V1 ≤ VR < V2', 'VR ≤ V1 < V2', 'V1 = V2', 'V2 < V1 < VR'],
          a: 0,
          exp: 'On décide (V1), puis on fait la rotation (VR), puis on atteint la vitesse de sécurité (V2). V1 peut être égale à VR, jamais supérieure.'
        },
        {
          q: 'Un aéroport chaud et en altitude :',
          choices: ['n’a aucun effet sur un jet', 'dégrade les performances : distances plus longues, montée plus faible', 'n’affecte que l’atterrissage', 'améliore les performances de décollage'],
          a: 1,
          exp: 'Air chaud et altitude = air moins dense. L’aile porte moins et le moteur pousse moins, il faut aller plus vite donc rouler plus longtemps.'
        },
        {
          q: 'Pour les calculs de performance, quelle part du vent arrière annoncé retient-on ?',
          choices: ['50 %', '100 %', '150 %', '200 %'],
          a: 2,
          exp: 'On est pessimiste : on ne compte que 50 % du vent de face (favorable) mais 150 % du vent arrière (défavorable).'
        },
        {
          q: 'Quelle vitesse donne le meilleur angle de montée, utile pour franchir un obstacle proche ?',
          choices: ['Vy', 'VMO', 'Vx', 'V2'],
          a: 2,
          exp: 'Vx maximise la hauteur gagnée par distance parcourue (angle). Vy maximise la hauteur gagnée par minute (taux).'
        },
        {
          q: 'Quand la vitesse augmente, la traînée induite :',
          choices: ['disparaît au-delà de Mach 0,5', 'augmente', 'reste constante', 'diminue'],
          a: 3,
          exp: 'La traînée induite est liée à la portance produite à forte incidence. Plus on va vite, plus l’incidence est faible, moins il y a de traînée induite.',
          fig: 'puissance'
        }
      ]
    },

    /* ===================== 033 PRÉPARATION DU VOL ===================== */
    {
      id: 'atpl-6',
      title: '033 – Préparation et suivi du vol',
      domain: 'perf',
      duration: 35,
      intro: 'Préparer un vol de ligne : calculer le carburant, remplir un plan de vol OACI, gérer les longs survols océaniques comme ceux du Pacifique.',
      sections: [
        {
          h: 'Le carburant, poste par poste',
          html: '<table class="tbl"><tr><th>Poste</th><th>Rôle</th></tr><tr><td>Taxi</td><td>Roulage avant décollage</td></tr><tr><td>Trip fuel</td><td>Du décollage à l’atterrissage à destination</td></tr><tr><td>Contingency</td><td>Imprévus (vent, déroutement de route…), en général 5 % du trip fuel</td></tr><tr><td>Alternate</td><td>Pour rejoindre l’aérodrome de dégagement</td></tr><tr><td>Final reserve</td><td>Réserve finale : 30 min d’attente à 1 500 ft pour un avion à turbines</td></tr><tr><td>Additional / Extra</td><td>Cas particuliers et choix du commandant de bord</td></tr></table><p>La <strong>réserve finale</strong> est sacrée : si l’équipage prévoit d’atterrir en l’entamant, il déclare une détresse (MAYDAY FUEL).</p>',
          tip: 'Moyen mnémotechnique : « T-T-C-A-F » : Taxi, Trip, Contingency, Alternate, Final reserve.'
        },
        {
          h: 'Le plan de vol OACI',
          html: '<p>Le plan de vol OACI est un formulaire codé. Quelques cases importantes :</p><ul><li><strong>Case 7</strong> : identification (indicatif).</li><li><strong>Case 8</strong> : règles de vol (I = IFR, V = VFR, Y = IFR puis VFR, Z = VFR puis IFR).</li><li><strong>Case 9</strong> : type d’avion et catégorie de turbulence de sillage.</li><li><strong>Case 10</strong> : équipements de bord.</li><li><strong>Case 15</strong> : route (vitesse, niveau, points et voies aériennes).</li><li><strong>Case 18</strong> : renseignements divers.</li></ul>'
        },
        {
          h: 'Point équitemps et point de non-retour',
          html: '<p>Sur un long survol (Nouméa → Tokyo par exemple), on calcule :</p><ul><li><strong>ETP</strong> (point équitemps) : le point où il faut <strong>autant de temps</strong> pour continuer que pour faire demi-tour.</li><li><strong>PNR</strong> (point de non-retour) : le point au-delà duquel on n’a plus assez de carburant pour revenir.</li></ul><p>Formule de l’ETP depuis le départ : <strong>distance = D × GS retour / (GS aller + GS retour)</strong>.</p><p>Exemple : D = 1 000 NM, GS aller 400 kt, GS retour 600 kt (vent arrière au retour). Distance ETP = 1 000 × 600 / 1 000 = <strong>600 NM</strong>. Le vent de face à l’aller pousse l’ETP <strong>vers le vent</strong>, plus loin du départ.</p>',
          fig: 'vent',
          caption: 'Le vent change la vitesse sol (GS) dans chaque sens : c’est lui qui déplace l’ETP.'
        },
        {
          h: 'ETOPS / EDTO : les biréacteurs au-dessus des océans',
          html: '<p>Un biréacteur qui s’éloigne de plus de <strong>60 minutes</strong> (à la vitesse de croisière sur un moteur) d’un aérodrome adéquat doit avoir une autorisation <strong>ETOPS</strong> (appelée <strong>EDTO</strong> par l’OACI) : ETOPS 120, 180… minutes.</p><p>Cela impose une maintenance renforcée, des aérodromes de dégagement en route et du carburant prévu pour le pire scénario (panne moteur et dépressurisation).</p>'
        }
      ],
      keypoints: [
        'Carburant : taxi, trip, contingency (5 %), alternate, final reserve, additional, extra.',
        'Réserve finale turbines : 30 min d’attente à 1 500 ft.',
        'Plan de vol OACI : case 8 = règles de vol (I, V, Y, Z).',
        'ETP = D × GS retour / (GS aller + GS retour).',
        'Le vent de face à l’aller éloigne l’ETP du départ.',
        'ETOPS/EDTO : biréacteur à plus de 60 min d’un aérodrome adéquat.'
      ],
      links: [
        { label: 'ETOPS (Wikipédia)', url: 'https://en.wikipedia.org/wiki/ETOPS' },
        { label: 'Plan de vol (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Flight_plan' }
      ],
      quiz: [
        {
          q: 'Quelle est la réserve finale de carburant d’un avion à turbines ?',
          choices: ['15 minutes', '30 minutes d’attente à 1 500 ft', '45 minutes', '1 heure'],
          a: 1,
          exp: 'Pour les avions à turbines, la réserve finale correspond à 30 min d’attente à 1 500 ft au-dessus de l’aérodrome. Les 45 min concernent les avions à moteur à pistons.'
        },
        {
          q: 'À quoi sert le carburant « contingency » ?',
          choices: ['À couvrir les imprévus pendant le vol (vent, changement de route…)', 'À la réserve finale', 'À rejoindre le dégagement', 'Au roulage'],
          a: 0,
          exp: 'Le contingency fuel (souvent 5 % du trip) absorbe les écarts entre prévision et réalité : vent plus fort, niveau de vol refusé, attente…'
        },
        {
          q: 'Case 8 du plan de vol OACI : que signifie la lettre Y ?',
          choices: ['IFR seulement', 'IFR puis VFR', 'VFR seulement', 'VFR puis IFR'],
          a: 1,
          exp: 'I = IFR, V = VFR, Y = commence en IFR puis passe VFR, Z = commence en VFR puis passe IFR.'
        },
        {
          q: 'D = 1 000 NM, GS aller 400 kt, GS retour 600 kt. À quelle distance du départ est l’ETP ?',
          choices: ['400 NM', '500 NM', '600 NM', '700 NM'],
          a: 2,
          exp: 'ETP = D × GS retour / (GS aller + GS retour) = 1 000 × 600 / 1 000 = 600 NM. Comme le retour est rapide (vent arrière), on peut aller plus loin avant que le demi-tour soit aussi long que la suite.'
        },
        {
          q: 'Quelle différence entre ETP et PNR ?',
          choices: ['L’ETP ne dépend pas du vent', 'Le PNR est toujours avant l’ETP', 'L’ETP est lié au temps, le PNR au carburant disponible', 'Aucune'],
          a: 2,
          exp: 'L’ETP est le point où continuer ou revenir prend le même temps (utile en cas de panne ou de malade). Le PNR est la limite carburant pour pouvoir revenir.'
        },
        {
          q: 'À partir de quel éloignement un biréacteur a-t-il besoin d’une autorisation ETOPS ?',
          choices: ['30 minutes', '60 minutes d’un aérodrome adéquat', '120 minutes', '180 minutes'],
          a: 1,
          exp: 'Au-delà de 60 min de vol sur un moteur d’un aérodrome adéquat, il faut une approbation ETOPS. Les valeurs 120 ou 180 min sont des niveaux d’autorisation.'
        },
        {
          q: 'L’équipage réalise qu’il atterrira en entamant sa réserve finale. Que doit-il faire ?',
          choices: ['Rien de particulier', 'Ralentir au maximum', 'Demander un niveau plus bas', 'Déclarer une urgence carburant (MAYDAY FUEL)'],
          a: 3,
          exp: 'Prévoir d’atterrir avec moins que la réserve finale est une situation de détresse : on annonce MAYDAY MAYDAY MAYDAY FUEL pour obtenir la priorité.'
        },
        {
          q: 'Avec un vent de face à l’aller, l’ETP se déplace :',
          choices: ['vers le vent, donc plus loin du départ', 'il ne bouge pas', 'vers le départ', 'il disparaît'],
          a: 0,
          exp: 'Vent de face à l’aller = vent arrière au retour : faire demi-tour est rapide. Il faut donc aller plus loin pour que revenir prenne autant de temps que continuer.'
        }
      ]
    },

    /* ===================== 040 PERFORMANCE HUMAINE ===================== */
    {
      id: 'atpl-7',
      title: '040 – Performance humaine',
      domain: 'fh',
      duration: 35,
      intro: 'Connaître les limites du corps et du cerveau en altitude, et les méthodes de travail en équipage (CRM, TEM) qui font la sécurité du transport aérien.',
      sections: [
        {
          h: 'Hypoxie et temps de conscience utile',
          html: '<p>En altitude, la proportion d’oxygène dans l’air reste de 21 %, mais la <strong>pression partielle</strong> d’oxygène baisse (loi de Dalton) : le sang se charge moins bien.</p><p>L’<strong>hypoxie</strong> est sournoise : euphorie, excès de confiance, puis perte de connaissance. Le <strong>TUC</strong> (temps de conscience utile) est le temps pendant lequel on peut encore agir efficacement :</p><table class="tbl"><tr><th>Niveau</th><th>TUC approximatif</th></tr><tr><td>FL180</td><td>20 à 30 min</td></tr><tr><td>FL250</td><td>3 à 5 min</td></tr><tr><td>FL300</td><td>1 à 2 min</td></tr><tr><td>FL350</td><td>30 à 60 s</td></tr><tr><td>FL400</td><td>15 à 20 s</td></tr></table><p>En cas de décompression rapide, ces temps sont encore réduits : <strong>masque d’abord</strong>, réflexion ensuite.</p>',
          fig: 'hypoxie',
          caption: 'Plus on monte, plus le temps pour mettre son masque est court.'
        },
        {
          h: 'Les sens qui trompent',
          html: '<ul><li><strong>Illusion somatogravique</strong> : une forte accélération (décollage de nuit) donne l’impression de cabrer ; le pilote risque de piquer vers le sol.</li><li><strong>Les « leans »</strong> : après un long virage doux, l’oreille interne s’habitue ; en revenant à plat, on a l’impression de pencher de l’autre côté.</li><li><strong>Gaz piégés</strong> (loi de Boyle) : l’air des oreilles, sinus, intestins se dilate en montée. Ne pas voler enrhumé.</li><li><strong>Plongée</strong> : attendre au moins 12 h après une plongée sans palier, 24 h avec paliers de décompression.</li></ul>',
          tip: 'Règle d’or : en conditions IFR, on croit ses instruments, pas ses sensations.'
        },
        {
          h: 'Le modèle de Reason et la gestion des erreurs',
          html: '<p>Un accident est rarement dû à une seule erreur. James <strong>Reason</strong> le représente comme des tranches de fromage suisse : chaque défense (conception, formation, procédures, contrôle) a des trous. L’accident arrive quand les trous <strong>s’alignent</strong>.</p><ul><li><strong>Défaillances actives</strong> : erreurs des opérateurs en première ligne.</li><li><strong>Conditions latentes</strong> : failles cachées dans l’organisation (pression commerciale, procédure mal conçue).</li></ul><p>Le <strong>TEM</strong> (Threat and Error Management) apprend à repérer les <strong>menaces</strong> (météo, fatigue, piste courte), à rattraper les <strong>erreurs</strong> et à éviter les <strong>états indésirables</strong> de l’avion.</p>',
          fig: 'reason',
          caption: 'Modèle de Reason : il suffit qu’une seule tranche bouche le trou pour arrêter l’accident.'
        },
        {
          h: 'CRM, fatigue et stress',
          html: '<p>Le <strong>CRM</strong> (Crew Resource Management) regroupe communication, leadership, prise de décision et conscience de la situation au sein de l’équipage. Le copilote doit oser dire « Stop » au commandant.</p><ul><li><strong>Fatigue</strong> : le creux circadien (WOCL) se situe entre <strong>2 h et 6 h</strong> du matin. Les limitations de temps de vol (FTL) encadrent les rotations.</li><li><strong>Stress</strong> : un peu de stress améliore la performance, trop la dégrade (courbe en U inversé de Yerkes-Dodson).</li><li><strong>Alcool</strong> : en Europe, la limite est de 0,2 g/L de sang ; la plupart des compagnies imposent « zéro alcool » plusieurs heures avant le vol.</li></ul>'
        }
      ],
      keypoints: [
        'Hypoxie : la pression partielle d’O2 baisse, le pourcentage reste 21 %.',
        'TUC : environ 30 à 60 s au FL350 ; masque d’abord.',
        'Illusion somatogravique : accélération = sensation de cabrer.',
        'Reason : accident = alignement des trous de plusieurs défenses.',
        'TEM : menaces, erreurs, états indésirables.',
        'Creux circadien entre 2 h et 6 h ; stress optimal modéré.'
      ],
      links: [
        { label: 'Temps de conscience utile (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Time_of_useful_consciousness' },
        { label: 'Modèle du fromage suisse (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Swiss_cheese_model' },
        { label: 'Crew Resource Management (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Crew_resource_management' }
      ],
      quiz: [
        {
          q: 'Pourquoi manque-t-on d’oxygène en altitude ?',
          choices: ['Le froid empêche la respiration', 'La pression partielle d’oxygène baisse', 'Le pourcentage d’oxygène dans l’air baisse', 'L’air contient plus d’azote'],
          a: 1,
          exp: 'L’air contient toujours 21 % d’oxygène. Mais la pression totale baisse, donc la pression d’oxygène aussi : les poumons en transfèrent moins au sang.'
        },
        {
          q: 'Quel est le temps de conscience utile approximatif au FL350 ?',
          choices: ['15 à 20 s', '30 à 60 s', '3 à 5 min', '20 à 30 min'],
          a: 1,
          exp: 'Au FL350, on dispose d’environ 30 à 60 secondes. C’est pourquoi les pilotes mettent leur masque immédiatement, avant toute autre action.',
          fig: 'hypoxie'
        },
        {
          q: 'Au décollage de nuit, une forte accélération peut donner l’impression :',
          choices: ['de piquer', 'de ralentir', 'de cabrer', 'de virer à gauche'],
          a: 2,
          exp: 'C’est l’illusion somatogravique : l’oreille interne confond accélération et inclinaison vers l’arrière. Le pilote risque de rendre la main et de piquer vers le sol.'
        },
        {
          q: 'Dans le modèle de Reason, comment se produit un accident ?',
          choices: ['Par une panne mécanique uniquement', 'Par hasard', 'Par une erreur unique du pilote', 'Par l’alignement de failles dans plusieurs niveaux de défense'],
          a: 3,
          exp: 'Chaque barrière a ses faiblesses. L’accident survient quand toutes les faiblesses s’alignent. D’où l’importance de renforcer chaque barrière.',
          fig: 'reason'
        },
        {
          q: 'Après une plongée sous-marine sans palier de décompression, combien de temps attendre avant de voler ?',
          choices: ['2 heures', '6 heures', '12 heures', '72 heures'],
          a: 2,
          exp: 'L’azote dissous doit s’éliminer, sinon il forme des bulles en altitude (accident de décompression). On attend au moins 12 h, 24 h après des paliers.'
        },
        {
          q: 'Que signifie TEM ?',
          choices: ['Threat and Error Management', 'Total Engine Monitoring', 'Technical Equipment Manual', 'Time Estimated for Manoeuvre'],
          a: 0,
          exp: 'Le TEM consiste à anticiper les menaces, détecter et corriger les erreurs, et éviter les états indésirables de l’avion.'
        },
        {
          q: 'Quand se situe le creux circadien, moment de plus forte baisse de vigilance ?',
          choices: ['Entre 20 h et 22 h', 'Entre 2 h et 6 h du matin', 'Entre 13 h et 15 h', 'Entre 8 h et 10 h'],
          a: 1,
          exp: 'Le WOCL (Window Of Circadian Low) est en fin de nuit. Il existe aussi un petit creux après le déjeuner, mais le plus profond est entre 2 h et 6 h.'
        },
        {
          q: 'Selon la courbe de Yerkes-Dodson, quel niveau de stress donne la meilleure performance ?',
          choices: ['Un stress maximal', 'Aucun stress', 'Un stress modéré', 'Le stress n’a pas d’effet'],
          a: 2,
          exp: 'Sans stimulation, on s’ennuie et on rate des choses ; trop de stress sature le cerveau. La performance est maximale avec un niveau d’éveil modéré.'
        }
      ]
    },

    /* ===================== 050 MÉTÉOROLOGIE ===================== */
    {
      id: 'atpl-8',
      title: '050 – Météorologie',
      domain: 'meteo',
      duration: 45,
      intro: 'Aller au-delà de la météo VFR : courants-jets, turbulence en air clair, givrage, orages, cyclones tropicaux et documents météo d’un vol long-courrier.',
      sections: [
        {
          h: 'Atmosphère standard et tropopause',
          html: '<p>L’<strong>atmosphère standard</strong> (ISA) sert de référence : au niveau de la mer, <strong>15 °C</strong> et <strong>1 013,25 hPa</strong>. La température baisse d’environ <strong>2 °C par 1 000 ft</strong> jusqu’à la <strong>tropopause</strong> (11 km, environ 36 000 ft), où elle se stabilise à <strong>−56,5 °C</strong>.</p><p>La tropopause est plus haute à l’équateur qu’aux pôles. Les avions de ligne volent juste en dessous ou autour d’elle.</p>',
          fig: 'atmosphere',
          caption: 'L’atmosphère standard OACI : la référence de tous les calculs d’altimétrie et de performance.'
        },
        {
          h: 'Courants-jets et turbulence en air clair',
          html: '<p>Un <strong>courant-jet</strong> (jet stream) est un « fleuve » de vent très fort (au moins 60 kt, parfois plus de 200 kt) près de la tropopause, là où s’opposent masses d’air chaudes et froides.</p><ul><li>Avec lui en arrière, on gagne beaucoup de temps et de carburant ; de face, on l’évite.</li><li>Sur ses bords, le cisaillement du vent crée la <strong>CAT</strong> (Clear Air Turbulence) : turbulence en ciel clair, invisible au radar météo.</li></ul><p>Les cartes <strong>SIGWX</strong> (temps significatif) indiquent jets, zones de CAT, orages (CB) et givrage.</p>'
        },
        {
          h: 'Givrage et orages',
          html: '<p><strong>Givrage</strong> : il faut de l’eau liquide <strong>surfondue</strong> (en dessous de 0 °C) et une surface froide.</p><ul><li><strong>Glace claire</strong> (verglas) : grosses gouttes, entre 0 et environ −10 °C ; lourde, adhérente, très dangereuse.</li><li><strong>Givre blanc</strong> : petites gouttes, températures plus froides ; friable.</li></ul><p><strong>Orage (cumulonimbus)</strong>, 3 stades :</p><ol><li><strong>Cumulus</strong> : courants ascendants seulement.</li><li><strong>Maturité</strong> : ascendances et descendances, précipitations, grêle, foudre, rafales. Le plus dangereux.</li><li><strong>Dissipation</strong> : descendances dominantes.</li></ol><p>Les <strong>microrafales</strong> (microbursts) sous un orage provoquent un cisaillement de vent mortel en approche.</p>',
          fig: 'nuages',
          caption: 'Le cumulonimbus traverse tous les étages : on le contourne largement, on ne le traverse jamais.'
        },
        {
          h: 'Cyclones tropicaux et hémisphère Sud',
          html: '<p>En Nouvelle-Calédonie, la saison cyclonique va en gros de <strong>novembre à avril</strong>. Un <strong>cyclone tropical</strong> naît sur une mer chaude (au moins 26 à 27 °C) et jamais tout près de l’équateur, car il faut la force de Coriolis pour lancer la rotation.</p><p>Attention au sens de rotation :</p><ul><li><strong>Hémisphère Nord</strong> : autour d’une dépression, le vent tourne dans le sens <strong>inverse des aiguilles d’une montre</strong>.</li><li><strong>Hémisphère Sud</strong> : dans le <strong>sens des aiguilles d’une montre</strong>.</li></ul><p>Loi de Buys-Ballot : dos au vent, la dépression est à <strong>gauche</strong> dans l’hémisphère Nord, à <strong>droite</strong> dans l’hémisphère Sud.</p>',
          fig: 'isobares',
          caption: 'Les sens de rotation sont inversés entre les deux hémisphères.'
        }
      ],
      keypoints: [
        'ISA : 15 °C, 1 013,25 hPa, −2 °C/1 000 ft, tropopause 11 km à −56,5 °C.',
        'Courant-jet : au moins 60 kt, près de la tropopause ; CAT sur ses bords.',
        'Glace claire : grosses gouttes surfondues entre 0 et −10 °C environ.',
        'Orage : stade de maturité = le plus dangereux.',
        'Hémisphère Sud : rotation horaire autour d’une dépression.',
        'Cyclone : mer à 26-27 °C minimum, jamais sur l’équateur.'
      ],
      links: [
        { label: 'Courant-jet (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Courant-jet' },
        { label: 'Cyclone tropical (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Cyclone_tropical' },
        { label: 'Aviation Weather Center – cartes SIGWX et METAR réels', url: 'https://aviationweather.gov/' }
      ],
      quiz: [
        {
          q: 'Quelle est la température standard à la tropopause (11 km) ?',
          choices: ['−20 °C', '−40 °C', '−56,5 °C', '−80 °C'],
          a: 2,
          exp: 'De 15 °C au sol, on perd environ 6,5 °C par kilomètre sur 11 km : 15 − 71,5 = −56,5 °C. Au-dessus, la température reste constante.',
          fig: 'atmosphere'
        },
        {
          q: 'Pourquoi la turbulence en air clair (CAT) est-elle redoutée ?',
          choices: ['Elle est toujours associée aux orages', 'Elle provoque du givrage', 'Elle n’existe qu’au sol', 'Elle est invisible : pas de nuage et rien au radar météo'],
          a: 3,
          exp: 'La CAT naît du cisaillement de vent près des courants-jets, en air sec. Le radar ne voit que les précipitations : on se fie aux prévisions SIGWX et aux comptes rendus des autres avions.'
        },
        {
          q: 'Quelles conditions favorisent la glace claire, la plus dangereuse ?',
          choices: ['Grosses gouttes surfondues entre 0 et environ −10 °C', 'Neige sèche', 'Air sec au-dessus de la tropopause', 'Petites gouttes à −30 °C'],
          a: 0,
          exp: 'Les grosses gouttes ne gèlent pas instantanément : elles s’étalent avant de geler et forment une couche lisse, lourde et très adhérente.'
        },
        {
          q: 'À quel stade un orage est-il le plus dangereux ?',
          choices: ['Stade de dissipation', 'Stade de maturité', 'Stade cumulus', 'Avant sa formation'],
          a: 1,
          exp: 'Au stade de maturité coexistent ascendances et descendances violentes, grêle, foudre, rafales et microrafales.'
        },
        {
          q: 'Dans l’hémisphère Sud (Nouvelle-Calédonie), autour d’une dépression, le vent tourne :',
          choices: ['il ne tourne pas', 'dans le sens inverse des aiguilles d’une montre', 'dans le sens des aiguilles d’une montre', 'toujours d’ouest en est'],
          a: 2,
          exp: 'La force de Coriolis s’inverse au sud de l’équateur. Les dépressions et cyclones y tournent dans le sens horaire, à l’inverse de l’Europe.',
          fig: 'isobares'
        },
        {
          q: 'Pourquoi les cyclones tropicaux ne se forment-ils pas sur l’équateur ?',
          choices: ['L’eau y est trop froide', 'Il n’y a pas d’humidité', 'Le vent y est trop fort', 'La force de Coriolis y est nulle'],
          a: 3,
          exp: 'La force de Coriolis, qui fait tourner l’air, vaut zéro sur l’équateur. Sans elle, la circulation tourbillonnaire ne peut pas s’organiser.'
        },
        {
          q: 'Dans un TAF, que signifie « TEMPO » ?',
          choices: ['Fluctuations temporaires de moins d’une heure à chaque fois', 'Température en hausse', 'Changement définitif progressif', 'Prévision annulée'],
          a: 0,
          exp: 'TEMPO annonce des variations temporaires (moins d’une heure chacune et moins de la moitié de la période). BECMG annonce un changement durable.'
        },
        {
          q: 'Quelle vitesse minimale de vent définit en général un courant-jet ?',
          choices: ['20 kt', '40 kt', '60 kt', '150 kt'],
          a: 2,
          exp: 'On parle de courant-jet à partir de 60 kt (environ 110 km/h). Le cœur dépasse souvent 100 kt et peut atteindre 200 kt en hiver.'
        }
      ]
    },

    /* ===================== 061 NAVIGATION GÉNÉRALE ===================== */
    {
      id: 'atpl-9',
      title: '061 – Navigation générale',
      domain: 'nav',
      duration: 40,
      intro: 'Naviguer sur une Terre ronde : routes orthodromiques et loxodromiques, mille nautique, fuseaux horaires et cartes aéronautiques.',
      sections: [
        {
          h: 'La Terre et le mille nautique',
          html: '<p>La Terre est presque une sphère, légèrement aplatie aux pôles. On repère un point par sa <strong>latitude</strong> (0 à 90° Nord ou Sud) et sa <strong>longitude</strong> (0 à 180° Est ou Ouest).</p><p>Le <strong>mille nautique</strong> (NM) est la longueur d’<strong>une minute d’arc de latitude</strong> : <strong>1 NM = 1 852 m</strong>. Un nœud (kt) = 1 NM par heure.</p><p>Attention : une minute de <strong>longitude</strong> ne vaut 1 NM qu’à l’équateur. Ailleurs, elle vaut <strong>cos(latitude)</strong> NM. À 60° de latitude, 60 minutes de longitude ne font que 30 NM.</p>'
        },
        {
          h: 'Orthodromie et loxodromie',
          html: '<ul><li><strong>Orthodromie</strong> (grand cercle) : le <strong>plus court chemin</strong> entre deux points. Mais la route vraie change en permanence.</li><li><strong>Loxodromie</strong> : route qui coupe tous les méridiens sous le <strong>même angle</strong> ; cap constant, mais plus longue.</li></ul><p>La <strong>convergence des méridiens</strong> entre deux points vaut : <strong>Δlongitude × sin(latitude moyenne)</strong>. C’est la variation de route vraie le long de l’orthodromie. L’angle entre orthodromie et loxodromie au départ (<strong>correction de conversion</strong>) en vaut la moitié.</p><p>C’est pourquoi un vol Paris → Los Angeles passe près du Groenland : sur une carte plate, ça paraît un détour, c’est en réalité le plus court.</p>',
          tip: 'Loxodromie = « loxo » comme « cap constant ». Ortho = droit, le chemin le plus direct sur le globe.'
        },
        {
          h: 'Les cartes',
          html: '<table class="tbl"><tr><th>Projection</th><th>Ligne droite sur la carte</th><th>Usage</th></tr><tr><td>Mercator</td><td>Loxodromie</td><td>Régions équatoriales, marine</td></tr><tr><td>Lambert conique conforme</td><td>Quasi orthodromie</td><td>Cartes aéronautiques des latitudes moyennes</td></tr><tr><td>Stéréographique polaire</td><td>Quasi orthodromie</td><td>Régions polaires</td></tr></table><p>Toutes ces projections sont <strong>conformes</strong> : elles conservent les angles, ce qui permet de mesurer directement une route au rapporteur.</p>'
        },
        {
          h: 'Temps, cap et vent',
          html: '<p>La Terre tourne de <strong>360° en 24 h</strong>, soit <strong>15° par heure</strong>. En aviation, tout se fait en <strong>UTC</strong>. La Nouvelle-Calédonie est à <strong>UTC+11</strong> : 14 h UTC = 1 h du matin le lendemain à Nouméa.</p><p><strong>Déclinaison magnétique</strong> : Route vraie = Route magnétique + déclinaison Est (ou − déclinaison Ouest).</p><p>Le <strong>triangle des vitesses</strong> relie cap et vitesse propre, vent, route et vitesse sol. La différence entre cap et route est la <strong>dérive</strong>.</p>',
          fig: 'vent',
          caption: 'Triangle des vitesses : on pointe le nez un peu dans le vent pour suivre la route voulue.'
        }
      ],
      keypoints: [
        '1 NM = 1 852 m = 1 minute de latitude.',
        '1 minute de longitude = cos(latitude) NM.',
        'Orthodromie = plus court chemin ; loxodromie = cap constant.',
        'Convergence = Δlong × sin(lat moyenne) ; conversion = la moitié.',
        'Lambert : droite ≈ orthodromie ; Mercator : droite = loxodromie.',
        '15° de longitude = 1 heure ; Nouméa = UTC+11.'
      ],
      links: [
        { label: 'Orthodromie (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Orthodromie' },
        { label: 'Loxodromie (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Loxodromie' },
        { label: 'Projection conique conforme de Lambert (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Projection_conique_conforme_de_Lambert' }
      ],
      quiz: [
        {
          q: 'À quoi correspond exactement un mille nautique ?',
          choices: ['1 609 m', 'Une minute d’arc de latitude, soit 1 852 m', '1 000 m', 'Un degré de longitude'],
          a: 1,
          exp: 'Le mille nautique est défini à partir du globe : une minute de latitude, 1 852 m. 1 609 m est le mille terrestre (statute mile).'
        },
        {
          q: 'À 60° de latitude, combien de NM représentent 60 minutes de longitude ?',
          choices: ['15 NM', '30 NM', '52 NM', '60 NM'],
          a: 1,
          exp: 'Les méridiens se rapprochent vers les pôles. Distance = minutes de longitude × cos(latitude) = 60 × 0,5 = 30 NM.'
        },
        {
          q: 'Quelle route est le plus court chemin entre deux points du globe ?',
          choices: ['La route magnétique', 'Le parallèle', 'L’orthodromie', 'La loxodromie'],
          a: 2,
          exp: 'L’orthodromie suit un grand cercle (dont le centre est celui de la Terre). C’est le chemin le plus court, mais la route vraie varie tout au long du vol.'
        },
        {
          q: 'Sur une carte de Mercator, une ligne droite représente :',
          choices: ['un grand cercle', 'une orthodromie', 'un parallèle uniquement', 'une loxodromie'],
          a: 3,
          exp: 'Sur Mercator, les méridiens sont parallèles : une droite coupe tous les méridiens sous le même angle, c’est donc une loxodromie.'
        },
        {
          q: 'De combien de degrés de longitude la Terre tourne-t-elle en une heure ?',
          choices: ['10°', '15°', '24°', '30°'],
          a: 1,
          exp: '360° en 24 heures : 360 / 24 = 15° par heure. C’est la base des fuseaux horaires.'
        },
        {
          q: 'Il est 14 h 00 UTC. Quelle heure est-il à Nouméa (UTC+11) ?',
          choices: ['3 h 00 le même jour', '1 h 00 le lendemain', '23 h 00 le même jour', '11 h 00 le même jour'],
          a: 1,
          exp: '14 + 11 = 25, soit 1 h du matin le jour suivant. En vol, tout est noté en UTC pour éviter ces pièges.'
        },
        {
          q: 'Entre deux points à 30° de latitude, séparés de 20° de longitude, quelle est la convergence ?',
          choices: ['5°', '10°', '17°', '20°'],
          a: 1,
          exp: 'Convergence = Δlong × sin(lat moyenne) = 20 × sin 30° = 20 × 0,5 = 10°. La correction de conversion serait de 5°.'
        },
        {
          q: 'La route magnétique est 100°, la déclinaison est 12° Est. Quelle est la route vraie ?',
          choices: ['88°', '100°', '112°', '124°'],
          a: 2,
          exp: 'Vraie = magnétique + déclinaison Est = 100 + 12 = 112°. Moyen mnémotechnique anglais : « variation east, magnetic least » (le magnétique est le plus petit).'
        }
      ]
    },

    /* ===================== 062 RADIONAVIGATION ===================== */
    {
      id: 'atpl-10',
      title: '062 – Radionavigation',
      domain: 'nav',
      duration: 40,
      intro: 'Comprendre les aides radio et satellites qui guident un avion de ligne sans voir le sol : NDB, VOR, DME, ILS, GNSS et la navigation PBN.',
      sections: [
        {
          h: 'NDB, VOR et DME',
          html: '<ul><li><strong>NDB / ADF</strong> : balise en ondes basse et moyenne fréquence (190 à 1 750 kHz). L’aiguille de l’ADF pointe vers la balise. Simple mais sensible aux orages et à l’effet de côte.</li><li><strong>VOR</strong> : balise VHF (108,00 à 117,95 MHz) qui émet 360 <strong>radiales</strong>. La radiale est la route magnétique en <strong>s’éloignant</strong> de la balise (QDR) ; le QDM est la route pour y aller.</li><li><strong>DME</strong> : mesure la <strong>distance oblique</strong> (slant range) entre l’avion et la station, en UHF.</li></ul>',
          fig: 'vor',
          caption: 'VOR : la radiale 090 part vers l’est ; pour rejoindre la balise depuis cette radiale, on prend le QDM 270.'
        },
        {
          h: 'L’ILS : l’atterrissage aux instruments',
          html: '<p>L’<strong>ILS</strong> combine deux faisceaux :</p><ul><li><strong>Localizer</strong> (VHF, 108,10 à 111,95 MHz) : guidage dans l’axe de la piste.</li><li><strong>Glide path</strong> (UHF) : guidage sur une pente d’environ <strong>3°</strong>.</li></ul><p>Sur une pente de 3°, on descend d’environ <strong>300 ft par NM</strong>. Taux de descente ≈ <strong>vitesse sol × 5</strong> : à 140 kt, environ 700 ft/min.</p><p>Catégories : la CAT I permet de descendre jusqu’à 200 ft ; les CAT II et III permettent d’aller plus bas, jusqu’à l’atterrissage automatique par brouillard.</p>',
          fig: 'ils',
          caption: 'ILS : deux « rails invisibles », un horizontal (axe) et un vertical (pente).'
        },
        {
          h: 'GNSS, RNAV et PBN',
          html: '<p>Le <strong>GNSS</strong> (GPS, Galileo…) calcule la position par la distance à plusieurs satellites :</p><ul><li><strong>4 satellites</strong> pour une position 3D (latitude, longitude, altitude + correction de l’horloge du récepteur).</li><li><strong>5 satellites</strong> pour que le <strong>RAIM</strong> détecte un satellite défaillant, 6 pour l’exclure.</li></ul><p>La <strong>RNAV</strong> permet de voler entre des points quelconques, sans passer à la verticale des balises. La <strong>PBN</strong> (navigation fondée sur les performances) définit la précision exigée : <strong>RNAV 1</strong> = précision de 1 NM 95 % du temps ; <strong>RNP</strong> = même chose <strong>plus une surveillance et une alerte à bord</strong>.</p>'
        },
        {
          h: 'Radar primaire et secondaire',
          html: '<ul><li><strong>Radar primaire</strong> : envoie une onde et reçoit l’écho réfléchi. Voit tout, même un avion sans transpondeur, mais ne sait pas qui c’est.</li><li><strong>Radar secondaire (SSR)</strong> : interroge le <strong>transpondeur</strong> de l’avion qui répond. Mode A : code à 4 chiffres ; mode C : altitude-pression ; mode S : adressage individuel et données.</li></ul>'
        }
      ],
      keypoints: [
        'ADF pointe vers le NDB ; VOR donne une radiale (QDR) ; DME donne une distance oblique.',
        'ILS : localizer (axe) + glide (pente de 3°).',
        '3° ≈ 300 ft/NM ; taux de descente ≈ GS × 5.',
        'GNSS : 4 satellites pour une position 3D, 5 pour le RAIM.',
        'RNP = RNAV + surveillance et alerte des performances à bord.',
        'SSR : mode A (code), C (altitude), S (sélectif).'
      ],
      links: [
        { label: 'VOR (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/VHF_omnidirectional_range' },
        { label: 'ILS (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Instrument_landing_system' },
        { label: 'Performance-based navigation (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Performance-based_navigation' }
      ],
      quiz: [
        {
          q: 'Un avion est sur la radiale 090 d’un VOR. Dans quelle direction se trouve-t-il par rapport à la balise ?',
          choices: ['À l’est', 'Au sud', 'À l’ouest', 'Au nord'],
          a: 0,
          exp: 'La radiale est la route magnétique en partant de la balise. Radiale 090 = à l’est de la station. Pour la rejoindre, il faut prendre le cap 270.',
          fig: 'vor'
        },
        {
          q: 'Un avion au FL360 passe à la verticale d’une station DME. Que lit-on environ ?',
          choices: ['0 NM', '3 NM', '6 NM', '36 NM'],
          a: 2,
          exp: 'Le DME mesure la distance oblique. 36 000 ft ≈ 36 000 / 6 076 ≈ 6 NM : à la verticale, il affiche la hauteur, pas zéro.'
        },
        {
          q: 'Sur un ILS à 3°, à une vitesse sol de 140 kt, quel taux de descente prévoir ?',
          choices: ['Environ 1 400 ft/min', 'Environ 700 ft/min', 'Environ 500 ft/min', 'Environ 300 ft/min'],
          a: 1,
          exp: 'Règle pratique : taux de descente ≈ vitesse sol × 5 = 140 × 5 = 700 ft/min. Avec plus de vent de face, la GS baisse et le taux aussi.',
          fig: 'ils'
        },
        {
          q: 'Quelle partie de l’ILS donne le guidage vertical ?',
          choices: ['Le marker extérieur', 'Le DME', 'Le glide path', 'Le localizer'],
          a: 2,
          exp: 'Le glide path (ou glide slope) donne la pente. Le localizer donne l’axe de piste (latéral).'
        },
        {
          q: 'Combien de satellites faut-il au minimum pour une position GNSS en 3 dimensions ?',
          choices: ['2', '3', '4', '6'],
          a: 2,
          exp: 'Trois inconnues de position plus une quatrième : l’erreur de l’horloge du récepteur. Il faut donc 4 satellites. Le RAIM en demande un cinquième.'
        },
        {
          q: 'Quelle est la différence entre RNAV et RNP ?',
          choices: ['La RNP n’utilise pas le GPS', 'Aucune', 'La RNAV est plus précise', 'La RNP exige en plus une surveillance et une alerte des performances à bord'],
          a: 3,
          exp: 'Les deux imposent une précision. La RNP ajoute une fonction qui surveille cette précision et alerte l’équipage si elle n’est plus garantie.'
        },
        {
          q: 'Quel radar peut détecter un avion dont le transpondeur est en panne ?',
          choices: ['Le radar primaire', 'Le radar secondaire', 'Le radar mode S', 'Aucun radar'],
          a: 0,
          exp: 'Le radar primaire reçoit l’écho réfléchi par la carlingue, sans besoin de coopération. Le secondaire n’entend que les transpondeurs.'
        },
        {
          q: 'L’aiguille d’un ADF :',
          choices: ['indique la distance', 'pointe vers la balise NDB', 'pointe vers le nord magnétique', 'indique la radiale'],
          a: 1,
          exp: 'L’ADF est un radiocompas : son aiguille montre la direction de la balise NDB par rapport à l’axe de l’avion.'
        }
      ]
    },

    /* ===================== 070 PROCÉDURES OPÉRATIONNELLES ===================== */
    {
      id: 'atpl-11',
      title: '070 – Procédures opérationnelles',
      domain: 'proc',
      duration: 35,
      intro: 'Les règles de fonctionnement d’une compagnie : MEL, dégivrage, turbulence de sillage, marchandises dangereuses et procédures d’urgence.',
      sections: [
        {
          h: 'Partir avec une panne : la MEL',
          html: '<p>Un avion de ligne a des centaines d’équipements. Peut-on partir si l’un est en panne ? La <strong>MEL</strong> (Minimum Equipment List) répond, équipement par équipement :</p><ul><li>Elle est rédigée par la compagnie à partir de la <strong>MMEL</strong> du constructeur, jamais moins restrictive.</li><li>Pour chaque élément : autorisé ou non, pendant combien de jours, avec quelles procédures (« O » opérationnelles, « M » de maintenance).</li></ul>'
        },
        {
          h: 'Dégivrage et antigivrage au sol',
          html: '<p>Règle du <strong>« clean aircraft »</strong> : on ne décolle jamais avec de la glace, de la neige ou du givre sur les surfaces critiques. Quelques millimètres suffisent à dégrader fortement la portance.</p><ul><li><strong>Type I</strong> : fluide chaud, peu visqueux, pour dégivrer. Protection courte.</li><li><strong>Type II et IV</strong> : fluides épaissis qui restent sur l’aile jusqu’à la rotation. Protection plus longue.</li></ul><p>Le <strong>holdover time</strong> (durée de protection) commence <strong>au début de la dernière application</strong> de fluide.</p>'
        },
        {
          h: 'Turbulence de sillage',
          html: '<p>Chaque aile crée en bout de plume un <strong>tourbillon</strong>. Il est le plus fort derrière un avion <strong>lourd, lent et lisse</strong> (configuration de décollage ou d’atterrissage, volets rentrés au maximum possible).</p><ul><li>Les tourbillons <strong>descendent</strong> puis s’étalent au sol, et dérivent avec le vent.</li><li>Catégories OACI : L (léger), M (moyen), H (lourd), J (super : A380).</li><li>Exemples de séparation radar en approche : moyen derrière lourd <strong>5 NM</strong> ; léger derrière lourd <strong>6 NM</strong>. Au décollage : <strong>2 minutes</strong> derrière un lourd.</li></ul>',
          tip: 'Derrière un gros porteur : restez au-dessus de sa trajectoire et posez-vous après son point de toucher.'
        },
        {
          h: 'Urgences et marchandises dangereuses',
          html: '<ul><li><strong>Codes transpondeur</strong> : 7500 intervention illicite, 7600 panne radio, 7700 urgence.</li><li><strong>Cisaillement de vent</strong> en approche : remise des gaz poussée maximale, assiette selon les consignes, sans changer la configuration (volets, train) tant que le cisaillement n’est pas passé.</li><li><strong>Évacuation</strong> : l’avion est certifié pour être évacué en <strong>90 secondes</strong> avec la moitié des issues.</li><li><strong>Marchandises dangereuses</strong> (annexe 18 et instructions techniques de l’OACI) : le commandant reçoit un document NOTOC qui liste ce qui est à bord et où.</li></ul>'
        }
      ],
      keypoints: [
        'MEL : liste de ce qui peut être en panne au départ, jamais moins restrictive que la MMEL.',
        'Jamais de décollage avec contamination sur les surfaces critiques.',
        'Holdover time : commence au début de la dernière application.',
        'Sillage : pire derrière un avion lourd, lent et lisse ; les tourbillons descendent.',
        '7500 / 7600 / 7700 : illicite / radio / urgence.',
        'Évacuation certifiée en 90 secondes.'
      ],
      links: [
        { label: 'Turbulence de sillage (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Turbulence_de_sillage' },
        { label: 'Minimum Equipment List (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Minimum_equipment_list' }
      ],
      quiz: [
        {
          q: 'Sur quel document la compagnie s’appuie-t-elle pour savoir si l’avion peut partir avec un équipement en panne ?',
          choices: ['Le carnet de route', 'Le plan de vol', 'La MEL', 'Le NOTOC'],
          a: 2,
          exp: 'La MEL précise, pour chaque équipement, si le départ est autorisé, pour combien de temps et avec quelles procédures.'
        },
        {
          q: 'Par rapport à la MMEL du constructeur, la MEL de la compagnie peut être :',
          choices: ['moins restrictive', 'totalement différente', 'facultative', 'aussi ou plus restrictive'],
          a: 3,
          exp: 'La compagnie peut ajouter des restrictions, jamais en enlever. La MMEL est le minimum de sécurité approuvé.'
        },
        {
          q: 'Quand commence le holdover time après un antigivrage ?',
          choices: ['Au début de la dernière application de fluide', 'À la fin du dégivrage', 'Au moment de l’alignement sur la piste', 'Au démarrage des moteurs'],
          a: 0,
          exp: 'Le chrono démarre au début de l’application finale. Si le décollage n’a pas lieu dans ce délai, il faut recommencer.'
        },
        {
          q: 'Derrière quel avion la turbulence de sillage est-elle la plus forte ?',
          choices: ['Léger, rapide, volets sortis', 'Lourd, lent et lisse (volets rentrés)', 'Un hélicoptère au sol', 'Moyen en croisière rapide'],
          a: 1,
          exp: 'Le tourbillon est d’autant plus fort que l’aile porte beaucoup (lourd), à forte incidence (lent) et sans volets pour répartir la portance (lisse).'
        },
        {
          q: 'Comment évoluent les tourbillons de sillage derrière un avion ?',
          choices: ['Ils montent', 'Ils disparaissent en 5 secondes', 'Ils descendent puis s’étalent près du sol', 'Ils restent au même niveau'],
          a: 2,
          exp: 'Ils descendent de quelques centaines de pieds, puis s’écartent près du sol en dérivant avec le vent. D’où le conseil de rester au-dessus de la trajectoire de l’avion qui précède.'
        },
        {
          q: 'Quel code transpondeur affiche-t-on en cas de panne radio ?',
          choices: ['7500', '7600', '7700', '2000'],
          a: 1,
          exp: '75 = « taken alive » (intervention illicite), 76 = « radio fix » (panne radio), 77 = « going to heaven » (urgence).'
        },
        {
          q: 'En approche, l’avion rencontre un cisaillement de vent sévère. Quelle action ?',
          choices: ['Réduire la poussée', 'Sortir tous les volets', 'Rentrer le train immédiatement', 'Poussée maximale et assiette de remise des gaz, sans changer la configuration'],
          a: 3,
          exp: 'Il faut toute l’énergie disponible. Changer la configuration (volets, train) pendant la manœuvre peut faire perdre de la portance au pire moment.'
        },
        {
          q: 'En combien de temps un avion de ligne doit-il pouvoir être évacué pour sa certification ?',
          choices: ['30 secondes', '90 secondes', '3 minutes', '5 minutes'],
          a: 1,
          exp: 'La démonstration de certification impose l’évacuation de tous les occupants en 90 secondes, avec seulement la moitié des issues utilisables.'
        }
      ]
    },

    /* ===================== 081 PRINCIPES DU VOL ===================== */
    {
      id: 'atpl-12',
      title: '081 – Principes du vol',
      domain: 'aero',
      duration: 40,
      intro: 'L’aérodynamique des avions rapides : nombre de Mach, compressibilité, ailes en flèche, coffin corner, stabilité et dispositifs hypersustentateurs.',
      sections: [
        {
          h: 'Rappel : portance et décrochage',
          html: '<p>La portance dépend de la densité de l’air, de la vitesse au carré, de la surface de l’aile et du <strong>coefficient de portance Cz</strong>, qui augmente avec l’<strong>incidence</strong>… jusqu’au décrochage, vers 15 à 16° pour une aile classique.</p><p>Le décrochage dépend de l’<strong>incidence</strong>, pas de la vitesse. Mais en virage, la vitesse de décrochage augmente : <strong>Vs virage = Vs × √n</strong>. À 60° d’inclinaison (n = 2), elle est multipliée par 1,41.</p>',
          fig: 'decrochage',
          caption: 'Au-delà de l’incidence critique, l’écoulement décolle de l’extrados : la portance s’effondre.'
        },
        {
          h: 'Hypersustentateurs',
          html: '<ul><li><strong>Volets</strong> de bord de fuite : augmentent la courbure, donc le <strong>Cz max</strong> ; on vole plus lentement. Mais l’incidence de décrochage <strong>diminue</strong> légèrement.</li><li><strong>Becs</strong> (slats) de bord d’attaque : retardent le décollement et <strong>augmentent l’incidence de décrochage</strong>.</li></ul><p>Ensemble, ils permettent à un avion de 70 tonnes d’atterrir vers 130 kt au lieu de 200.</p>',
          fig: 'profil',
          caption: 'Le profil d’aile : les becs agissent au bord d’attaque, les volets au bord de fuite.'
        },
        {
          h: 'Le vol à grande vitesse : Mach et compressibilité',
          html: '<p>Le <strong>nombre de Mach</strong> = vitesse vraie / vitesse du son. La vitesse du son <strong>dépend uniquement de la température</strong> : environ 661 kt à 15 °C, environ 573 kt à −56,5 °C.</p><ul><li><strong>Mach critique</strong> : le Mach de l’avion pour lequel l’air atteint Mach 1 quelque part sur l’aile (l’extrados accélère l’air). Au-delà, des ondes de choc apparaissent : traînée et vibrations (buffeting).</li><li><strong>Aile en flèche</strong> : seule la composante de vitesse perpendiculaire au bord d’attaque compte ; la flèche <strong>repousse le Mach critique</strong>.</li><li><strong>Mach tuck</strong> : à haut Mach, le centre de poussée recule et l’avion a tendance à piquer.</li></ul>'
        },
        {
          h: 'Coffin corner et stabilité',
          html: '<p>Plus on monte, plus la vitesse de décrochage (en vitesse indiquée) se rapproche de la limite de Mach. Le <strong>coffin corner</strong> est l’altitude où l’écart entre <strong>buffet basse vitesse</strong> (décrochage) et <strong>buffet haute vitesse</strong> (Mach) devient très faible.</p><p><strong>Stabilité longitudinale</strong> : l’avion revient seul à l’équilibre si le CG est <strong>en avant du point neutre</strong>.</p><p>Les ailes en flèche favorisent le <strong>roulis hollandais</strong> (dutch roll) : oscillation combinée lacet-roulis, amortie par l’<strong>amortisseur de lacet</strong> (yaw damper).</p>',
          fig: 'puissance',
          caption: 'Rappel des régimes de vol : en haute altitude, la plage de vitesse utilisable se réduit.'
        }
      ],
      keypoints: [
        'Le décrochage dépend de l’incidence ; Vs virage = Vs × √n.',
        'Volets : Cz max augmente, incidence de décrochage diminue ; becs : incidence de décrochage augmente.',
        'Mach = TAS / vitesse du son, qui dépend seulement de la température.',
        'L’aile en flèche repousse le Mach critique.',
        'Coffin corner : buffet basse et haute vitesse se rejoignent en altitude.',
        'Stabilité : CG devant le point neutre ; yaw damper contre le roulis hollandais.'
      ],
      links: [
        { label: 'Nombre de Mach (Wikipédia)', url: 'https://fr.wikipedia.org/wiki/Nombre_de_Mach' },
        { label: 'Coffin corner (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Coffin_corner_(aerodynamics)' }
      ],
      quiz: [
        {
          q: 'De quoi dépend la vitesse du son ?',
          choices: ['De la température seulement', 'De la pression seulement', 'De la densité seulement', 'De l’altitude-pression et de l’humidité'],
          a: 0,
          exp: 'La vitesse du son dans l’air ne dépend que de la température. Plus il fait froid, plus elle est faible : en altitude, Mach 0,8 correspond à une vitesse vraie plus faible qu’au sol.'
        },
        {
          q: 'Qu’est-ce que le Mach critique ?',
          choices: ['La vitesse maximale de l’avion', 'Le Mach de vol pour lequel l’air atteint Mach 1 quelque part sur l’aile', 'Mach 1', 'Le Mach de décrochage'],
          a: 1,
          exp: 'L’extrados accélère l’air : localement, il atteint Mach 1 alors que l’avion vole à Mach 0,7 ou 0,8. C’est là qu’apparaissent les premières ondes de choc.'
        },
        {
          q: 'Pourquoi les avions de ligne ont-ils des ailes en flèche ?',
          choices: ['Pour augmenter le Cz max', 'Pour améliorer la stabilité en lacet', 'Pour repousser le Mach critique', 'Pour décoller plus court'],
          a: 2,
          exp: 'Seule la composante perpendiculaire au bord d’attaque « voit » la vitesse. Avec la flèche, l’aile se comporte comme si elle volait moins vite : le Mach critique est repoussé.'
        },
        {
          q: 'Un avion décroche à 100 kt en ligne droite. À quelle vitesse décroche-t-il en virage à 60° d’inclinaison ?',
          choices: ['100 kt', '115 kt', '141 kt', '200 kt'],
          a: 2,
          exp: 'À 60°, le facteur de charge vaut 2. Vs virage = Vs × √2 ≈ 100 × 1,41 = 141 kt.',
          fig: 'virage'
        },
        {
          q: 'Quel est l’effet de la sortie des becs de bord d’attaque ?',
          choices: ['Ils réduisent la portance', 'Ils diminuent l’incidence de décrochage', 'Ils augmentent la vitesse maximale', 'Ils augmentent l’incidence de décrochage'],
          a: 3,
          exp: 'Les becs canalisent l’air sur l’extrados et retardent le décollement : l’aile peut voler à une incidence plus grande avant de décrocher.',
          fig: 'decrochage'
        },
        {
          q: 'Qu’appelle-t-on le « coffin corner » ?',
          choices: ['L’altitude où vitesse de décrochage et limite de Mach se rapprochent', 'Une zone interdite de survol', 'Un virage serré à basse altitude', 'Le point le plus bas d’une approche'],
          a: 0,
          exp: 'En haute altitude, trop lent on décroche, trop vite on rencontre le buffet de Mach. Entre les deux, la marge devient très mince.'
        },
        {
          q: 'Quelle condition assure la stabilité longitudinale statique ?',
          choices: ['CG exactement sur le point neutre', 'CG en avant du point neutre', 'CG en arrière du point neutre', 'Aucun lien avec le CG'],
          a: 1,
          exp: 'Avec le CG devant le point neutre, toute perturbation crée un moment qui ramène l’avion à son équilibre. Plus le CG est en avant, plus l’avion est stable.'
        },
        {
          q: 'Quel dispositif amortit le roulis hollandais (dutch roll) ?',
          choices: ['Les becs', 'Le compensateur de profondeur', 'L’amortisseur de lacet (yaw damper)', 'Les spoilers'],
          a: 2,
          exp: 'Le roulis hollandais est une oscillation lacet-roulis typique des ailes en flèche. Le yaw damper commande la gouverne de direction pour l’amortir.'
        }
      ]
    },

    /* ===================== 090 COMMUNICATIONS ===================== */
    {
      id: 'atpl-13',
      title: '090 – Communications',
      domain: 'com',
      duration: 30,
      intro: 'Parler la langue des pilotes de ligne : phraséologie IFR, clairances, collationnements, messages de détresse et procédures de panne radio.',
      sections: [
        {
          h: 'Les bases de la phraséologie',
          html: '<p>Chaque lettre a son mot (alphabet OTAN), certains chiffres se prononcent différemment pour éviter les confusions : <strong>tree</strong> (3), <strong>fife</strong> (5), <strong>niner</strong> (9).</p><ul><li><strong>Roger</strong> : message reçu.</li><li><strong>Wilco</strong> : message compris, je vais m’y conformer.</li><li><strong>Affirm / Negative</strong> : oui / non.</li><li><strong>Standby</strong> : attendez, je vous rappelle.</li></ul><p>Les caps se donnent toujours sur <strong>3 chiffres</strong> (« heading zero niner zero »).</p>',
          fig: 'otan',
          caption: 'L’alphabet aéronautique : indispensable pour épeler les indicatifs et les points de report.'
        },
        {
          h: 'Clairances et collationnement',
          html: '<p>Une <strong>clairance</strong> est une autorisation du contrôle. Le pilote doit la <strong>collationner</strong> (la répéter) pour que le contrôleur vérifie qu’elle a été bien comprise. On collationne obligatoirement :</p><ul><li>les clairances de route ATC ;</li><li>les autorisations d’entrer sur une piste, de décoller, d’atterrir, de traverser ;</li><li>les niveaux, caps, vitesses ;</li><li>les codes transpondeur, calages altimétriques et fréquences.</li></ul><p>Exemple : « Aircalin 101, climb flight level 340 » → « Climb flight level 340, Aircalin 101 ».</p>'
        },
        {
          h: 'Détresse et urgence',
          html: '<ul><li><strong>MAYDAY MAYDAY MAYDAY</strong> : <strong>détresse</strong>, danger grave et imminent, assistance immédiate nécessaire (feu, panne moteur grave, carburant sous la réserve finale).</li><li><strong>PAN PAN, PAN PAN, PAN PAN</strong> : <strong>urgence</strong>, situation préoccupante sans danger immédiat (passager malade, petite panne).</li></ul><p>Le message suit l’ordre : station appelée, indicatif, nature du problème, intentions, position, niveau, cap. La fréquence d’urgence internationale est <strong>121,5 MHz</strong>.</p>',
          tip: 'Mayday vient du français « m’aidez ». Pan vient de « panne ».'
        },
        {
          h: 'Panne radio en IFR',
          html: '<ol><li>Afficher <strong>7600</strong> au transpondeur.</li><li>Continuer à émettre « en l’air » (blind transmission), au cas où l’émetteur fonctionnerait.</li><li>En conditions VMC : poursuivre en VMC et se poser sur l’aérodrome convenable le plus proche.</li><li>En IMC : suivre la procédure OACI ; en environnement radar, maintenir la dernière vitesse et le dernier niveau assignés (ou l’altitude minimale si elle est plus haute) pendant <strong>7 minutes</strong>, puis reprendre le niveau et la route du plan de vol.</li></ol><p>Les procédures locales publiées dans l’AIP peuvent préciser ces règles : on les vérifie toujours en préparation.</p>'
        }
      ],
      keypoints: [
        'Prononciations : tree, fife, niner ; caps sur 3 chiffres.',
        'Roger = reçu ; Wilco = je vais m’y conformer.',
        'Collationner clairances, pistes, niveaux, caps, vitesses, codes, calages, fréquences.',
        'MAYDAY = détresse ; PAN PAN = urgence.',
        '121,5 MHz = fréquence d’urgence.',
        'Panne radio : 7600, et en radar 7 min au dernier niveau assigné.'
      ],
      links: [
        { label: 'Alphabet radio OTAN (Wikipédia)', url: 'https://en.wikipedia.org/wiki/NATO_phonetic_alphabet' },
        { label: 'Mayday (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Mayday' }
      ],
      quiz: [
        {
          q: 'Que signifie « Wilco » ?',
          choices: ['Je ne peux pas', 'Répétez', 'J’ai reçu votre message', 'J’ai compris et je vais m’y conformer'],
          a: 3,
          exp: 'Wilco = « will comply ». Roger signifie seulement que le message est reçu, sans engagement à l’exécuter.'
        },
        {
          q: 'Comment prononce-t-on le chiffre 9 en radiotéléphonie ?',
          choices: ['Niner', 'Nine', 'Nein', 'Neuf'],
          a: 0,
          exp: '« Niner » évite la confusion avec « nein » (non en allemand) et rend le chiffre plus audible dans le bruit.',
          fig: 'otan'
        },
        {
          q: 'Lequel de ces éléments doit obligatoirement être collationné ?',
          choices: ['Un bulletin météo ATIS', 'Un code transpondeur', 'Une information de trafic', 'Un message de bienvenue'],
          a: 1,
          exp: 'Les codes transpondeur, comme les niveaux, caps, calages et fréquences, doivent être répétés : une erreur aurait des conséquences directes.'
        },
        {
          q: 'Un passager fait un malaise, sans danger immédiat pour le vol. Quel message ?',
          choices: ['SECURITE ×3', 'MAYDAY MAYDAY MAYDAY', 'PAN PAN ×3', 'Aucun message'],
          a: 2,
          exp: 'C’est une urgence, pas une détresse : PAN PAN. Le MAYDAY est réservé au danger grave et imminent pour l’avion ou ses occupants.'
        },
        {
          q: 'Quelle est la fréquence d’urgence aéronautique internationale VHF ?',
          choices: ['118,0 MHz', '121,5 MHz', '123,45 MHz', '127,0 MHz'],
          a: 1,
          exp: '121,5 MHz est veillée par de nombreux organismes et avions. 123,45 MHz est une fréquence de dialogue air-air informelle.'
        },
        {
          q: 'Quel code transpondeur en cas de panne de radio ?',
          choices: ['7500', '7600', '7700', '1200'],
          a: 1,
          exp: '7600 indique au contrôle la panne radio : il dégage le trafic autour et attend que l’avion suive la procédure prévue.'
        },
        {
          q: 'Panne radio en IMC dans un environnement radar : pendant combien de temps maintenir le dernier niveau assigné avant de reprendre le plan de vol ?',
          choices: ['20 minutes', '1 minute', 'Jusqu’à l’atterrissage', '7 minutes'],
          a: 3,
          exp: 'La procédure OACI prévoit 7 minutes en environnement radar (20 minutes sans radar), ce qui laisse au contrôle le temps de dégager le trafic.'
        },
        {
          q: 'Comment annonce-t-on un cap de 90° ?',
          choices: ['Heading zero niner zero', 'Heading east', 'Heading ninety', 'Heading niner zero'],
          a: 0,
          exp: 'Les caps se donnent toujours sur trois chiffres, chiffre par chiffre : zero niner zero. Cela évite toute confusion avec une vitesse ou un niveau.'
        }
      ]
    }
  ]
};
