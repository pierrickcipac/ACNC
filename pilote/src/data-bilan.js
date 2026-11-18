window.PARCOURS = window.PARCOURS || {};
window.PARCOURS.bilan = {
  modules: [
    {
      id: 'bilan-1',
      title: 'Le métier et le chemin pour y arriver',
      domain: 'regl',
      duration: 20,
      intro: 'Avant d’ouvrir un livre de navigation, il faut voir la route complète : les étapes, le temps, l’argent, et ce qui peut bloquer.',
      sections: [
        {
          h: 'La route, de zéro au siège de droite',
          html: '<p>Un pilote de ligne commence presque toujours <strong>copilote</strong> (on dit aussi <em>First Officer</em>, assis à droite). Pour y arriver en Europe, il faut une licence de pilote professionnel avec vol aux instruments, une formation au travail en équipage, puis une qualification sur un type d’avion précis.</p><p>L’ULM et le PPL ne sont pas obligatoires pour viser la ligne, mais ils servent de <strong>test grandeur nature</strong> : tu sauras vite si tu aimes piloter, si tu supportes la charge de travail et si tu progresses, pour une fraction du prix.</p>',
          fig: 'parcours',
          caption: 'Les grandes étapes. Les durées sont des ordres de grandeur.'
        },
        {
          h: 'Formation intégrée ou modulaire ?',
          html: '<table class="tbl"><thead><tr><th></th><th>Intégrée</th><th>Modulaire</th></tr></thead><tbody><tr><td>Principe</td><td>Une seule école, de zéro au copilote, à plein temps</td><td>Une étape après l’autre (PPL, ATPL théorique, heures, CPL, IR…), dans des écoles différentes si besoin</td></tr><tr><td>Durée</td><td>Environ 18 à 24 mois</td><td>2 à 4 ans, compatible avec un emploi au début</td></tr><tr><td>Coût (ordre de grandeur)</td><td>Souvent 90 000 à 150 000 €</td><td>Souvent 60 000 à 100 000 €, étalé dans le temps</td></tr><tr><td>Pour toi</td><td>Il faut quitter ton poste</td><td>Tu peux garder ton salaire de DSI pendant le PPL et l’ATPL théorique</td></tr></tbody></table><p>Ces chiffres varient beaucoup selon le pays et l’école : demande toujours un devis détaillé, qualification de type comprise ou non.</p>',
          tip: 'Pour un profil en reconversion avec un bon salaire, le modulaire permet de tester chaque étape avant d’engager la suivante.'
        },
        {
          h: 'Et l’âge ?',
          html: '<p>Il n’y a pas d’âge maximum pour se former. La vraie limite est en bout de carrière : en Europe, un pilote ne peut plus faire de transport commercial au-delà de <strong>65 ans</strong>.</p><p>Si tu as ta qualification de type vers 42 ou 43 ans, cela laisse plus de <strong>20 ans de carrière</strong>, assez pour devenir commandant de bord. Le recrutement est plus difficile qu’à 25 ans (moins de programmes « cadets » ouverts), mais ta maturité, ta gestion du stress et ton expérience de management sont recherchées en équipage.</p>'
        },
        {
          h: 'Ce qui peut vraiment bloquer',
          html: '<ol><li><strong>La santé</strong> : il faut obtenir un certificat médical de <strong>classe 1</strong> auprès d’un centre agréé. C’est la première chose à faire, avant de dépenser un euro en formation.</li><li><strong>L’anglais</strong> : il faut au minimum le niveau OACI 4 (« opérationnel »).</li><li><strong>Le financement</strong> et la <strong>disponibilité</strong> (famille, déménagements, base d’affectation parfois loin de la Nouvelle-Calédonie).</li><li><strong>Les sélections des compagnies</strong> : tests psychotechniques, anglais, entretien, test en simulateur.</li></ol>',
          tip: 'Ordre conseillé : 1) visite médicale classe 1, 2) vol d’initiation, 3) ULM ou PPL, 4) seulement ensuite les gros engagements financiers.'
        }
      ],
      keypoints: [
        'On commence copilote, la qualification de type est faite sur un avion précis (A320, ATR…).',
        'Modulaire = étape par étape, compatible avec un emploi au début ; intégrée = plein temps, plus cher.',
        'Pas d’âge maximum pour se former ; fin du transport commercial à 65 ans.',
        'Premier pas obligatoire avant toute dépense : le certificat médical de classe 1.',
        'Niveau d’anglais OACI 4 minimum.'
      ],
      links: [
        { label: 'EASA : licences de pilote (Part-FCL)', url: 'https://www.easa.europa.eu/en/the-agency/faqs/aircrew' },
        { label: 'DGAC : devenir pilote', url: 'https://www.ecologie.gouv.fr/politiques-publiques/devenir-pilote' }
      ],
      quiz: [
        { q: 'Quelle est la première démarche conseillée avant de financer une formation de pilote de ligne ?', choices: ['Passer l’ATPL théorique', 'Obtenir le certificat médical de classe 1', 'Acheter un simulateur', 'Passer la qualification de type'], a: 1, exp: 'Sans certificat médical de classe 1, aucune licence professionnelle ne sera délivrée. C’est le seul point totalement bloquant qu’on peut vérifier tout de suite, pour quelques centaines d’euros.' },
        { q: 'Jusqu’à quel âge peut-on faire du transport aérien commercial en Europe ?', choices: ['55 ans', '60 ans', '65 ans', 'Pas de limite'], a: 2, exp: 'La limite est 65 ans. En commençant vers 42 ans, il reste plus de 20 ans de carrière.' },
        { q: 'Quel avantage principal a la formation modulaire pour quelqu’un qui travaille ?', choices: ['Elle est plus courte', 'On peut avancer étape par étape et garder son emploi au début', 'Elle dispense de l’ATPL théorique', 'Elle inclut toujours la qualification de type'], a: 1, exp: 'Le modulaire découpe la formation. Le PPL et l’ATPL théorique (à distance) peuvent se faire en gardant un emploi. Elle est en général plus longue, pas plus courte.', fig: 'parcours' },
        { q: 'Qu’est-ce qu’une qualification de type ?', choices: ['Le permis de piloter un avion précis (A320, ATR 72…)', 'Le diplôme de météo', 'La licence ULM', 'Le niveau d’anglais'], a: 0, exp: 'Chaque avion de ligne demande sa propre formation (théorie, simulateur, vols). Les compagnies la financent parfois, ou la font payer au pilote.' },
        { q: 'À quelle place s’assoit en général un débutant en compagnie ?', choices: ['À gauche, commandant de bord', 'À droite, copilote', 'Dans la cabine', 'Au poste de l’instructeur'], a: 1, exp: 'Le commandant de bord est à gauche, le copilote (First Officer) à droite. On devient commandant après plusieurs années et plusieurs milliers d’heures.' },
        { q: 'Quel niveau d’anglais OACI minimum faut-il pour une licence ?', choices: ['Niveau 2', 'Niveau 3', 'Niveau 4', 'Niveau 6 obligatoirement'], a: 2, exp: 'Le niveau 4 (opérationnel) est le minimum. Il doit être revalidé périodiquement ; le niveau 6 (expert) est valable à vie.' },
        { q: 'L’ULM et le PPL sont-ils obligatoires pour devenir pilote de ligne ?', choices: ['Oui, les deux', 'Seulement l’ULM', 'Non, mais ce sont d’excellents tests à coût réduit', 'Seulement en Nouvelle-Calédonie'], a: 2, exp: 'Une formation intégrée part de zéro. Mais faire d’abord un ULM ou un PPL permet de vérifier son goût et ses capacités sans engager 100 000 €. En modulaire, le PPL est la première brique.' },
        { q: 'Que signifie un ATPL « gelé » (frozen) ?', choices: ['Une licence suspendue', 'Les examens théoriques ATPL réussis, la licence ATPL sera délivrée avec l’expérience (1 500 h)', 'Une licence pour pays froids', 'Un échec à l’examen'], a: 1, exp: 'Un jeune copilote vole avec une licence CPL + IR et l’ATPL théorique acquis. La licence ATPL elle-même est délivrée plus tard, avec 1 500 heures de vol notamment.' }
      ]
    },
    {
      id: 'bilan-2',
      title: 'Tests psychotechniques : à quoi s’attendre',
      domain: 'apt',
      duration: 15,
      intro: 'Les écoles et les compagnies testent la rapidité de calcul, l’orientation dans l’espace, la logique et la capacité à faire plusieurs choses à la fois.',
      sections: [
        {
          h: 'Ce qui est mesuré',
          html: '<ul><li><strong>Calcul mental rapide</strong> : vitesses, distances, carburant, sans calculatrice.</li><li><strong>Orientation spatiale</strong> : lire un horizon artificiel, retrouver un cap, visualiser une rotation.</li><li><strong>Logique</strong> : suites de nombres, de figures.</li><li><strong>Mémoire et attention</strong> : retenir une clairance radio, repérer un changement.</li><li><strong>Multitâche</strong> : suivre une cible tout en répondant à des questions.</li><li><strong>Anglais</strong> et <strong>physique de base</strong>.</li></ul><p>Ces tests ne cherchent pas des génies : ils cherchent des personnes <strong>rapides, régulières et calmes</strong>. Ça s’entraîne très bien.</p>'
        },
        {
          h: 'Les formules du calcul mental de pilote',
          html: '<table class="tbl"><tbody><tr><td>Distance</td><td>vitesse × temps (120 kt pendant 30 min = 60 NM)</td></tr><tr><td>Temps</td><td>distance ÷ vitesse (90 NM à 180 kt = 0,5 h = 30 min)</td></tr><tr><td>Facteur de base</td><td>60 ÷ vitesse en kt = minutes par NM (à 120 kt : 0,5 min par NM)</td></tr><tr><td>Cap inverse</td><td>±180° (075° → 255°)</td></tr><tr><td>Règle du 1 sur 60</td><td>1 NM d’écart après 60 NM = 1° d’erreur</td></tr><tr><td>Descente 3°</td><td>vario ≈ vitesse sol × 5 (120 kt → 600 ft/min)</td></tr></tbody></table>',
          tip: 'Pour un cap inverse rapide : ajoute 200 puis retire 20 (075 + 200 − 20 = 255), ou retire 200 et ajoute 20 si le cap dépasse 180.'
        },
        {
          h: 'Lire une position dans l’espace',
          html: '<p>Une question classique : on te montre un horizon artificiel et tu dois dire ce que fait l’avion. Repère d’abord <strong>l’inclinaison</strong> (la ligne d’horizon penche), puis <strong>l’assiette</strong> (la maquette est au-dessus ou au-dessous de la ligne).</p>',
          fig: 'horizon',
          caption: 'Horizon penché, maquette au-dessus : virage à droite en montée.'
        }
      ],
      keypoints: [
        'Les tests mesurent vitesse, précision et calme, pas un QI exceptionnel.',
        'Distance = vitesse × temps ; temps = distance ÷ vitesse.',
        'Cap inverse = ±180°.',
        'Règle du 1 sur 60 : 1 NM d’écart à 60 NM = 1°.',
        'Entraîne-toi tous les jours quelques minutes avec le module « Calcul mental chrono ».'
      ],
      links: [
        { label: 'SKYbrary : sélection des pilotes', url: 'https://skybrary.aero/articles/pilot-selection' }
      ],
      quiz: [
        { q: 'Un avion vole à 120 kt. Quelle distance parcourt-il en 25 minutes ?', choices: ['40 NM', '50 NM', '60 NM', '25 NM'], a: 1, exp: '120 kt = 120 NM par heure = 2 NM par minute. 25 min × 2 = 50 NM.' },
        { q: 'Combien de temps faut-il pour parcourir 75 NM à 150 kt ?', choices: ['20 min', '30 min', '45 min', '50 min'], a: 1, exp: '150 kt = 2,5 NM par minute. 75 ÷ 2,5 = 30 minutes.' },
        { q: 'Quel est le cap inverse de 310° ?', choices: ['110°', '130°', '150°', '230°'], a: 1, exp: '310 − 180 = 130°. Astuce : 310 − 200 + 20 = 130.' },
        { q: 'L’avion consomme 24 L/h. Le vol dure 1 h 45. Combien de litres sont consommés (sans réserve) ?', choices: ['36 L', '40 L', '42 L', '48 L'], a: 2, exp: '1 h 45 = 1,75 h. 24 × 1,75 = 24 + 18 = 42 L.' },
        { q: 'Après 30 NM de vol, tu es 2 NM à droite de ta route prévue. Quelle est l’erreur de cap approximative ?', choices: ['2°', '4°', '6°', '15°'], a: 1, exp: 'Règle du 1 sur 60 : 2 NM à 60 NM ferait 2°. À 30 NM (deux fois plus près), c’est deux fois plus : 4°.' },
        { q: 'Sur l’horizon artificiel, la ligne d’horizon monte vers la droite et la maquette est sous la ligne. Que fait l’avion ?', choices: ['Virage à gauche en montée', 'Virage à droite en descente', 'Virage à droite en montée', 'Vol en palier rectiligne'], a: 1, exp: 'Horizon qui monte à droite = l’avion est incliné à droite. Maquette sous l’horizon = nez bas, donc descente.', fig: 'horizon' },
        { q: 'Suite logique : 2, 6, 12, 20, 30, … ?', choices: ['40', '42', '44', '36'], a: 1, exp: 'Les écarts augmentent de 2 : +4, +6, +8, +10, puis +12. 30 + 12 = 42.' },
        { q: 'À 120 kt de vitesse sol sur une pente de 3°, quel taux de descente viser ?', choices: ['300 ft/min', '600 ft/min', '900 ft/min', '1 200 ft/min'], a: 1, exp: 'Règle pratique pour une pente de 3° : vario ≈ vitesse sol × 5. 120 × 5 = 600 ft/min.' }
      ]
    },
    {
      id: 'bilan-3',
      title: 'L’anglais aéronautique',
      domain: 'com',
      duration: 15,
      intro: 'En ligne, tout se passe en anglais : radio, check-lists, documentation, briefings. Voici le niveau attendu et les mots indispensables.',
      sections: [
        {
          h: 'Les niveaux OACI',
          html: '<table class="tbl"><thead><tr><th>Niveau</th><th>Nom</th><th>Validité</th></tr></thead><tbody><tr><td>4</td><td>Opérationnel (minimum pour voler)</td><td>4 ans</td></tr><tr><td>5</td><td>Avancé</td><td>6 ans</td></tr><tr><td>6</td><td>Expert</td><td>à vie</td></tr></tbody></table><p>On évalue la prononciation, la structure, le vocabulaire, l’aisance, la compréhension et l’interaction. Les compagnies demandent souvent un niveau supérieur au minimum lors de la sélection.</p>'
        },
        {
          h: 'L’alphabet et les chiffres',
          html: '<p>Les lettres s’épellent avec l’alphabet aéronautique. Les chiffres se prononcent un par un : 1016 se dit « one zero one six ». Le 9 se dit <em>niner</em> pour ne pas le confondre avec l’allemand <em>nein</em>, le 3 <em>tree</em>, le 5 <em>fife</em>.</p>',
          fig: 'otan'
        },
        {
          h: 'Les mots qui reviennent tout le temps',
          html: '<table class="tbl"><tbody><tr><td><strong>Roger</strong></td><td>message reçu (ce n’est pas un accord)</td></tr><tr><td><strong>Wilco</strong></td><td>compris, je vais exécuter</td></tr><tr><td><strong>Affirm / Negative</strong></td><td>oui / non</td></tr><tr><td><strong>Say again</strong></td><td>répétez</td></tr><tr><td><strong>Standby</strong></td><td>attendez</td></tr><tr><td><strong>Cleared</strong></td><td>autorisé</td></tr><tr><td><strong>Hold short</strong></td><td>maintenez avant (la piste)</td></tr><tr><td><strong>Go around</strong></td><td>remettez les gaz</td></tr><tr><td><strong>Mayday / Pan Pan</strong></td><td>détresse / urgence</td></tr></tbody></table>'
        }
      ],
      keypoints: [
        'Niveau OACI 4 minimum, valable 4 ans ; niveau 6 valable à vie.',
        'Chiffres prononcés un par un, 9 = niner.',
        'Roger = reçu ; Wilco = reçu et j’exécute.',
        'Mayday = détresse, Pan Pan = urgence.'
      ],
      links: [
        { label: 'OACI : exigences linguistiques', url: 'https://www.icao.int/safety/lpr/Pages/Language-Proficiency-Requirements.aspx' },
        { label: 'SKYbrary : phraséologie', url: 'https://skybrary.aero/articles/phraseology' }
      ],
      quiz: [
        { q: 'Quel niveau OACI est le minimum pour obtenir une licence ?', choices: ['3', '4', '5', '6'], a: 1, exp: 'Le niveau 4 « opérationnel » est le minimum. Le niveau 6 n’a plus besoin d’être revalidé.' },
        { q: 'Comment épeler « NC » à la radio ?', choices: ['Nancy Charles', 'November Charlie', 'Norway Canada', 'Nectar Coco'], a: 1, exp: 'Alphabet aéronautique : N = November, C = Charlie.', fig: 'otan' },
        { q: 'Que veut dire « Wilco » ?', choices: ['Répétez', 'Message reçu et je vais exécuter', 'Non', 'Attendez'], a: 1, exp: '« Wilco » vient de « will comply » : j’ai compris et je m’y conforme. « Roger » dit seulement que le message est reçu.' },
        { q: 'Comment prononce-t-on le chiffre 9 à la radio ?', choices: ['Nine', 'Niner', 'Nein', 'Novem'], a: 1, exp: '« Niner » évite la confusion avec « nein » (non en allemand) et avec « five ».' },
        { q: 'Le contrôleur dit « Hold short of runway 29 ». Que fais-tu ?', choices: ['Tu entres sur la piste', 'Tu t’arrêtes avant la piste 29', 'Tu décolles', 'Tu remets les gaz'], a: 1, exp: '« Hold short » : maintenez-vous avant le point indiqué, sans entrer sur la piste.' },
        { q: 'Quel message signale une situation de DÉTRESSE (danger grave et imminent) ?', choices: ['Pan Pan', 'Mayday', 'Securite', 'Standby'], a: 1, exp: 'Mayday = détresse, demande d’aide immédiate. Pan Pan = urgence sans danger immédiat.' },
        { q: 'Comment annoncer le QNH 1013 ?', choices: ['Ten thirteen', 'One thousand thirteen', 'One zero one tree', 'One oh one three'], a: 2, exp: 'Les chiffres se disent un par un, et le 3 se prononce « tree ».' },
        { q: '« Say again » signifie :', choices: ['Répétez votre message', 'Dites oui', 'Parlez plus vite', 'Changez de fréquence'], a: 0, exp: '« Say again » demande de répéter. On évite « repeat », qui a un autre sens dans le domaine militaire.' }
      ]
    }
  ]
};
