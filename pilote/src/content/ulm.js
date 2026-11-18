window.PARCOURS = window.PARCOURS || {};
window.PARCOURS.ulm = {
  modules: [
    /* ------------------------------------------------------------------ */
    {
      id: 'ulm-1',
      title: 'Le brevet ULM, mode d’emploi',
      domain: 'regl',
      duration: 20,
      intro: 'Comprendre ce qu’est un ULM, comment on obtient le brevet multiaxes et ce qu’il permet de faire.',
      sections: [
        {
          h: 'Un ULM, c’est quoi ?',
          html: '<p>ULM veut dire <strong>Ultra-Léger Motorisé</strong>. C’est un aéronef très léger, simple, avec une réglementation allégée par rapport à l’avion « certifié ». C’est la porte d’entrée la plus accessible et la moins chère pour apprendre à piloter.</p><p>En France, il existe <strong>6 classes d’ULM</strong> :</p><table class="tbl"><tr><th>Classe</th><th>Nom</th><th>En bref</th></tr><tr><td>1</td><td>Paramoteur</td><td>Une voile souple et un moteur dans le dos</td></tr><tr><td>2</td><td>Pendulaire</td><td>Une aile delta, on pilote en déplaçant le poids</td></tr><tr><td>3</td><td><strong>Multiaxes</strong></td><td>Ressemble à un petit avion : manche, palonnier, gouvernes</td></tr><tr><td>4</td><td>Autogire</td><td>Un rotor libre qui tourne avec le vent relatif</td></tr><tr><td>5</td><td>Aérostat ultraléger</td><td>Petit ballon ou dirigeable</td></tr><tr><td>6</td><td>Hélicoptère ULM</td><td>Un hélicoptère très léger</td></tr></table><p>Pour un futur pilote de ligne, la <strong>classe 3 (multiaxes)</strong> est la bonne : on y apprend exactement les mêmes gestes que sur un avion.</p>',
          tip: 'Multiaxes = « mini-avion ». Les réflexes appris ici (assiette, vitesse, tour de piste, radio) servent jusqu’au cockpit d’un A320.'
        },
        {
          h: 'Les conditions pour se lancer',
          html: '<ul><li><strong>Âge</strong> : on peut commencer jeune (le brevet est accessible dès 15 ans). À 40 ans, aucun souci.</li><li><strong>Aptitude médicale</strong> : un certificat médical de non contre-indication, délivré par un médecin. C’est beaucoup plus simple que le certificat médical aéronautique exigé pour la licence avion.</li><li><strong>Examen théorique</strong> : un QCM officiel passé en centre d’examen (environ 40 questions, réussite à partir d’environ 75 % de bonnes réponses). Il couvre réglementation, météo, aérodynamique, navigation, connaissance de la machine et facteurs humains.</li><li><strong>Formation pratique</strong> : avec un instructeur ULM. Il n’y a pas de nombre d’heures minimum imposé : c’est l’instructeur qui juge que vous êtes prêt, puis un test en vol valide le brevet.</li></ul><p>Comptez en général quelques dizaines d’heures de vol pour un adulte motivé qui vole régulièrement.</p>',
          tip: 'Volez souvent et régulièrement (idéalement chaque semaine) : on progresse beaucoup plus vite qu’avec des leçons espacées d’un mois.'
        },
        {
          h: 'Brevet, licence et qualifications',
          html: '<ol><li>Le <strong>brevet</strong> prouve que vous savez piloter (théorie + pratique).</li><li>La <strong>licence de pilote ULM</strong>, délivrée par l’aviation civile, vous autorise à voler seul en commandant de bord.</li><li>Des <strong>qualifications</strong> s’ajoutent ensuite : <em>emport de passager</em> (après une expérience minimale en solo), <em>radiotéléphonie</em> pour parler avec les contrôleurs, <em>remorquage</em>, etc.</li></ol><p>Chaque classe d’ULM se valide séparément : le brevet multiaxes ne permet pas de piloter un pendulaire.</p>'
        },
        {
          h: 'Ce qu’on peut faire (et ne pas faire)',
          html: '<ul><li>Voler <strong>de jour</strong>, en <strong>vol à vue (VFR)</strong>, hors des nuages et en voyant le sol.</li><li>Faire des balades et des navigations, emmener un passager une fois la qualification obtenue.</li><li>Pas de transport public payant : l’ULM est une activité de loisir.</li></ul><p>En <strong>Nouvelle-Calédonie</strong>, l’aviation civile dispose de sa propre direction et certaines règles locales peuvent différer : renseignez-vous auprès d’un club local avant de vous inscrire.</p>',
          tip: 'L’ULM ne donne pas d’équivalence directe pour le PPL, mais l’expérience acquise accélère nettement la formation avion.'
        }
      ],
      keypoints: [
        'ULM = Ultra-Léger Motorisé, 6 classes ; la classe 3 « multiaxes » ressemble à un avion.',
        'Médical : simple certificat de non contre-indication d’un médecin.',
        'Théorie : QCM officiel ; pratique : formation avec instructeur, sans minimum d’heures imposé.',
        'Le brevet valide la compétence, la licence autorise à voler seul ; l’emport de passager est une qualification en plus.',
        'Vol de jour, à vue, hors nuages, pour le loisir.'
      ],
      links: [
        { label: 'FFPLUM – Fédération française d’ULM', url: 'https://www.ffplum.fr/' },
        { label: 'Wikipédia – Ultra-léger motorisé', url: 'https://fr.wikipedia.org/wiki/Ultra-l%C3%A9ger_motoris%C3%A9' }
      ],
      quiz: [
        {
          q: 'Quelle classe d’ULM ressemble le plus à un avion classique (manche, palonnier, gouvernes) ?',
          choices: ['Classe 1 – Paramoteur', 'Classe 2 – Pendulaire', 'Classe 3 – Multiaxes', 'Classe 4 – Autogire'],
          a: 2,
          exp: 'Le multiaxes se pilote avec des gouvernes sur 3 axes, exactement comme un avion. Le pendulaire se pilote en déplaçant son poids sous une aile delta : c’est un autre geste.'
        },
        {
          q: 'Pour la formation pratique ULM, combien d’heures de vol minimum la réglementation impose-t-elle ?',
          choices: ['45 heures', '20 heures', 'Aucun minimum : c’est l’instructeur qui juge', '100 heures'],
          a: 2,
          exp: 'En ULM, il n’y a pas de minimum d’heures réglementaire : l’instructeur présente l’élève au test quand il le juge prêt. Les 45 heures correspondent au minimum du PPL avion.'
        },
        {
          q: 'Quelle aptitude médicale faut-il pour piloter un ULM ?',
          choices: ['Un certificat médical classe 1', 'Un certificat de non contre-indication délivré par un médecin', 'Aucune', 'Un certificat classe 2 obligatoire'],
          a: 1,
          exp: 'Pour l’ULM, un certificat médical de non contre-indication suffit. Les certificats classe 2 (PPL) et classe 1 (pilote professionnel) relèvent des licences avion.'
        },
        {
          q: 'Avec un brevet multiaxes tout juste obtenu, puis-je emmener immédiatement un ami ?',
          choices: ['Oui, le brevet l’inclut', 'Non, il faut d’abord la qualification d’emport de passager', 'Oui, si c’est gratuit', 'Oui, seulement en tour de piste'],
          a: 1,
          exp: 'L’emport de passager est une qualification à part, obtenue après une expérience minimale en solo. Elle protège le passager d’un pilote encore inexpérimenté.'
        },
        {
          q: 'Un ULM peut-il, en règle générale, voler de nuit ou dans les nuages ?',
          choices: ['Oui, avec un GPS', 'Non : vol de jour, à vue, hors nuages', 'Oui, de nuit seulement', 'Oui, dans les nuages s’il y a un horizon artificiel'],
          a: 1,
          exp: 'L’ULM vole en VFR de jour : il faut voir le sol et rester hors des nuages. Le vol dans les nuages (IFR) demande une qualification aux instruments et un avion équipé, ce sera le cœur de l’ATPL.'
        },
        {
          q: 'Quelle est la différence entre le brevet et la licence ?',
          choices: ['Aucune, ce sont deux mots pour la même chose', 'Le brevet prouve la compétence ; la licence autorise à voler en commandant de bord', 'La licence est pour l’ULM, le brevet pour l’avion', 'Le brevet n’existe qu’en Nouvelle-Calédonie'],
          a: 1,
          exp: 'Le brevet sanctionne la réussite (théorie + test en vol). La licence est le titre délivré par l’autorité qui vous autorise à exercer comme pilote.'
        },
        {
          q: 'Le brevet multiaxes permet-il aussi de piloter un pendulaire ?',
          choices: ['Oui, tous les ULM se valent', 'Non, chaque classe se valide séparément', 'Oui, après 10 heures de vol', 'Oui, mais seulement en double commande'],
          a: 1,
          exp: 'Chaque classe a sa technique de pilotage propre. Il faut une formation complémentaire et une extension pour changer de classe.'
        },
        {
          q: 'Un vol ULM « tour de baie » vendu à des touristes inconnus, c’est :',
          choices: ['Autorisé avec le brevet de base', 'Du transport public : interdit avec une simple licence de loisir', 'Autorisé si le pilote a plus de 40 ans', 'Autorisé le week-end'],
          a: 1,
          exp: 'Transporter des personnes contre rémunération relève d’activités encadrées. Une licence de loisir ne le permet pas : c’est justement ce que la licence professionnelle (CPL puis ATPL) autorisera.'
        }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'ulm-2',
      title: 'Pourquoi un avion vole',
      domain: 'aero',
      duration: 30,
      intro: 'Les 4 forces, le rôle de l’aile, l’incidence, le décrochage et le vol plané expliqués simplement.',
      sections: [
        {
          h: 'Les 4 forces',
          html: '<p>En vol, quatre forces s’appliquent en permanence sur l’avion :</p><ul><li><strong>Portance</strong> (vers le haut) : créée par l’aile, elle porte l’avion.</li><li><strong>Poids</strong> (vers le bas) : la masse de l’avion attirée par la Terre.</li><li><strong>Traction</strong> (vers l’avant) : donnée par l’hélice et le moteur.</li><li><strong>Traînée</strong> (vers l’arrière) : la résistance de l’air.</li></ul><p>En <strong>vol rectiligne à vitesse constante</strong>, ces forces s’équilibrent deux à deux : portance = poids, traction = traînée.</p>',
          fig: 'forces',
          caption: 'Les 4 forces s’équilibrent en vol stabilisé.',
          tip: 'Moyen mnémotechnique : « 2 couples ennemis » – Portance contre Poids, Traction contre Traînée.'
        },
        {
          h: 'L’aile et sa portance',
          html: '<p>Le <strong>profil</strong> de l’aile est bombé dessus (<em>extrados</em>) et plus plat dessous (<em>intrados</em>). La ligne qui relie le <em>bord d’attaque</em> au <em>bord de fuite</em> s’appelle la <strong>corde</strong>.</p><p>L’air est dévié vers le bas par l’aile : en retour, l’aile est poussée vers le haut. L’extrados est en <strong>dépression</strong> (il « aspire »), l’intrados en légère <strong>surpression</strong>. L’extrados fournit la plus grosse part de la portance.</p><p>La portance dépend de : la <strong>densité de l’air</strong>, la <strong>surface</strong> de l’aile, le <strong>carré de la vitesse</strong>, et un coefficient lié à l’<strong>incidence</strong> (le Cz).</p><p><code>Portance = ½ × ρ × S × V² × Cz</code></p>',
          fig: 'profil',
          caption: 'Profil d’aile : corde, extrados, intrados, angle d’incidence.',
          tip: 'Vitesse × 2 = portance × 4. C’est pour cela que la vitesse est vitale près du sol.'
        },
        {
          h: 'L’incidence, et le décrochage',
          html: '<p>L’<strong>angle d’incidence</strong> est l’angle entre la corde de l’aile et le <strong>vent relatif</strong> (le flux d’air qui arrive sur l’aile). Ce n’est pas l’assiette (l’angle du nez par rapport à l’horizon).</p><p>Quand l’incidence augmente, la portance augmente… jusqu’à un angle critique (souvent autour de 15 à 16°). Au-delà, les filets d’air se décollent de l’extrados : la portance chute brutalement. C’est le <strong>décrochage</strong>.</p><ul><li>Le décrochage dépend de l’<strong>incidence</strong>, pas directement de la vitesse.</li><li>Signes annonciateurs : commandes molles, vibrations (buffeting), avertisseur sonore si installé.</li><li>Sortie : <strong>rendre la main</strong> (manche vers l’avant pour diminuer l’incidence), puis remettre de la puissance, ailes horizontales au palonnier.</li></ul>',
          fig: 'decrochage',
          caption: 'Le Cz augmente avec l’incidence jusqu’au décrochage, puis s’effondre.',
          tip: 'Réflexe vital : au décrochage, on pousse d’abord. Tirer davantage aggrave la situation.'
        },
        {
          h: 'Le plané et la finesse',
          html: '<p>Moteur coupé, un avion ne tombe pas comme une pierre : il <strong>plane</strong>. La <strong>finesse</strong> mesure cette capacité : c’est le rapport entre la distance parcourue et la hauteur perdue.</p><p>Exemple : finesse 10 → avec 1 000 m de hauteur, on parcourt environ 10 km sans vent. Beaucoup d’ULM multiaxes ont une finesse proche de 8 à 12.</p><p>La finesse maximale est obtenue à une vitesse précise, la <strong>vitesse de meilleure finesse</strong>, indiquée dans le manuel de vol. C’est la vitesse à prendre immédiatement en cas de panne moteur.</p>',
          fig: 'finesse',
          caption: 'Finesse = distance / hauteur.',
          tip: 'Vent de face, on plane moins loin ; vent arrière, on plane plus loin.'
        }
      ],
      keypoints: [
        '4 forces : portance/poids, traction/traînée ; équilibrées en vol stabilisé.',
        'La portance vient surtout de la dépression sur l’extrados et varie avec le carré de la vitesse.',
        'Incidence = angle entre la corde et le vent relatif ; ne pas confondre avec l’assiette.',
        'Le décrochage survient à une incidence critique (~15°), à n’importe quelle vitesse.',
        'Sortie de décrochage : diminuer l’incidence (pousser), puis puissance.',
        'Finesse = distance parcourue / hauteur perdue ; en panne, prendre la vitesse de meilleure finesse.'
      ],
      links: [
        { label: 'Wikipédia – Portance (aérodynamique)', url: 'https://fr.wikipedia.org/wiki/Portance_(a%C3%A9rodynamique)' },
        { label: 'Wikipédia – Décrochage (aéronautique)', url: 'https://fr.wikipedia.org/wiki/D%C3%A9crochage_(a%C3%A9ronautique)' },
        { label: 'NASA – Beginner’s Guide to Aeronautics (en anglais, très visuel)', url: 'https://www.grc.nasa.gov/www/k-12/airplane/' }
      ],
      quiz: [
        {
          q: 'En vol horizontal à vitesse constante, quelle force équilibre le poids ?',
          choices: ['La traction', 'La portance', 'La traînée', 'Aucune'],
          a: 1,
          exp: 'Le poids tire vers le bas, la portance pousse vers le haut. En vol stabilisé, elles sont égales. La traction équilibre la traînée.',
          fig: 'forces'
        },
        {
          q: 'Si la vitesse double (le reste inchangé), la portance est multipliée par :',
          choices: ['2', '4', '8', '1,41'],
          a: 1,
          exp: 'La portance est proportionnelle au carré de la vitesse : 2² = 4. Inversement, si la vitesse diminue de moitié, la portance est divisée par 4.'
        },
        {
          q: 'L’angle d’incidence est l’angle entre :',
          choices: ['Le nez de l’avion et l’horizon', 'La corde de l’aile et le vent relatif', 'L’aile et le fuselage', 'La trajectoire et le sol'],
          a: 1,
          exp: 'L’incidence se mesure entre la corde et le vent relatif. L’angle entre le nez et l’horizon est l’assiette : on peut avoir une assiette faible et une incidence forte (en descente lente par exemple).',
          fig: 'profil'
        },
        {
          q: 'Quelle partie de l’aile produit la plus grande part de la portance ?',
          choices: ['L’intrados (dessous)', 'L’extrados (dessus) par dépression', 'Le bord de fuite', 'Le saumon d’aile'],
          a: 1,
          exp: 'La dépression sur l’extrados « aspire » l’aile vers le haut et fournit la majeure partie de la portance. L’intrados ajoute une plus petite surpression.',
          fig: 'profil'
        },
        {
          q: 'Un avion peut-il décrocher à grande vitesse ?',
          choices: ['Non, jamais', 'Oui, si l’incidence critique est dépassée (ressource brutale, virage très serré)', 'Seulement moteur coupé', 'Seulement en montée'],
          a: 1,
          exp: 'Le décrochage dépend de l’incidence. En tirant brutalement sur le manche, on peut dépasser l’incidence critique même vite : c’est le décrochage dynamique.',
          fig: 'decrochage'
        },
        {
          q: 'L’avion vibre, les commandes deviennent molles, l’avertisseur retentit. Premier geste ?',
          choices: ['Tirer sur le manche pour remonter', 'Rendre la main (manche vers l’avant) pour diminuer l’incidence', 'Réduire tous les gaz', 'Braquer les ailerons à fond'],
          a: 1,
          exp: 'Ce sont les signes d’un décrochage. On diminue d’abord l’incidence en poussant, puis on remet la puissance et on garde les ailes à plat au palonnier. Tirer aggrave le décrochage.',
          fig: 'decrochage'
        },
        {
          q: 'Un ULM de finesse 10 tombe en panne à 600 m de hauteur, sans vent. Distance de plané approximative ?',
          choices: ['600 m', '3 km', '6 km', '10 km'],
          a: 2,
          exp: 'Distance = finesse × hauteur = 10 × 600 m = 6 000 m, soit 6 km. Avec du vent de face, elle serait plus courte.',
          fig: 'finesse'
        },
        {
          q: 'Moteur en panne, quelle vitesse prendre pour aller le plus loin possible ?',
          choices: ['La vitesse maximale', 'La vitesse de meilleure finesse', 'La vitesse de décrochage', 'La vitesse de croisière habituelle'],
          a: 1,
          exp: 'La vitesse de meilleure finesse donne la plus grande distance pour la hauteur disponible. Elle est indiquée dans le manuel de vol : à connaître par cœur.',
          fig: 'finesse'
        }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'ulm-3',
      title: 'Les commandes et le pilotage',
      domain: 'aero',
      duration: 30,
      intro: 'Comment le manche et le palonnier font bouger l’avion autour de ses 3 axes, et comment bien virer.',
      sections: [
        {
          h: 'Les 3 axes et leurs commandes',
          html: '<table class="tbl"><tr><th>Mouvement</th><th>Axe</th><th>Commande</th><th>Gouverne</th></tr><tr><td><strong>Roulis</strong> (pencher les ailes)</td><td>Axe longitudinal (nez-queue)</td><td>Manche à gauche / à droite</td><td>Ailerons</td></tr><tr><td><strong>Tangage</strong> (lever/baisser le nez)</td><td>Axe transversal (aile-aile)</td><td>Manche avant / arrière</td><td>Gouverne de profondeur</td></tr><tr><td><strong>Lacet</strong> (nez à gauche/droite)</td><td>Axe vertical</td><td>Palonnier (pieds)</td><td>Gouverne de direction</td></tr></table><p>Les trois axes se croisent au <strong>centre de gravité</strong>.</p>',
          fig: 'axes',
          caption: 'Roulis, tangage, lacet : les 3 rotations de l’avion.',
          tip: 'Manche = mains = ailerons et profondeur ; pieds = direction. Comme un vélo pour les mains, un skate pour les pieds.'
        },
        {
          h: 'Les gouvernes et le compensateur',
          html: '<ul><li><strong>Ailerons</strong> : au bout des ailes, ils bougent en sens opposé. Manche à droite : l’aileron droit monte, le gauche descend, l’avion s’incline à droite.</li><li><strong>Profondeur</strong> : sur l’empennage horizontal. Tirer : le nez monte.</li><li><strong>Direction</strong> : sur la dérive. Pied droit : le nez part à droite.</li><li><strong>Volets</strong> : près du fuselage, ils sortent ensemble pour voler plus lentement (décollage, atterrissage).</li><li><strong>Compensateur (trim)</strong> : petite surface ou ressort qui supprime l’effort au manche. On règle l’assiette avec le manche, puis on « trime » pour ne plus forcer.</li></ul>',
          fig: 'gouvernes',
          caption: 'Vue de dessus : ailerons, volets, profondeur, direction, compensateur.'
        },
        {
          h: 'Effets primaires, effets secondaires, lacet inverse',
          html: '<p>Chaque commande a un <strong>effet primaire</strong> (celui recherché) et un <strong>effet secondaire</strong> :</p><ul><li>Le <strong>roulis</strong> provoque du <strong>lacet</strong> : en s’inclinant, l’avion finit par tourner du côté de l’inclinaison.</li><li>Le <strong>lacet</strong> provoque du <strong>roulis</strong> : un coup de pied à droite fait pencher l’avion à droite.</li></ul><p><strong>Le lacet inverse</strong> : quand on braque les ailerons, l’aileron qui descend crée plus de traînée. Résultat : au début du virage, le nez part du mauvais côté. On le corrige en mettant du <strong>pied du côté du virage</strong> en même temps que le manche.</p><p>La <strong>bille</strong> (coordinateur de virage) indique si le vol est symétrique. Règle : <strong>« le pied chasse la bille »</strong> – si la bille est à droite, on met du pied à droite.</p>',
          tip: 'Virage propre = manche + pied du même côté, en même temps, bille au centre.'
        },
        {
          h: 'Le virage et le facteur de charge',
          html: '<p>Pour virer, on incline l’avion : la portance s’incline aussi et une partie sert à tourner. Il reste moins de portance verticale : il faut <strong>tirer un peu</strong> sur le manche pour ne pas descendre.</p><p>Le <strong>facteur de charge</strong> (n) indique combien de fois votre poids « apparent » est multiplié : <code>n = 1 / cos(inclinaison)</code>.</p><table class="tbl"><tr><th>Inclinaison</th><th>Facteur de charge</th><th>Vitesse de décrochage</th></tr><tr><td>0°</td><td>1</td><td>× 1</td></tr><tr><td>30°</td><td>1,15</td><td>× 1,07</td></tr><tr><td>45°</td><td>1,41</td><td>× 1,19</td></tr><tr><td>60°</td><td>2</td><td>× 1,41</td></tr></table><p>Plus on incline, plus la vitesse de décrochage augmente. Un virage serré, lent et près du sol (typiquement en dernier virage avant la finale) est un piège classique.</p>',
          fig: 'virage',
          caption: 'En virage, la portance s’incline ; n = 1/cos(inclinaison).'
        },
        {
          h: 'Assiette, puissance, vitesse',
          html: '<p>Une règle simple guide tout le pilotage :</p><p><strong>Assiette + Puissance = Performance</strong>.</p><ul><li>À puissance fixe, lever le nez fait ralentir et monter ; baisser le nez fait accélérer et descendre.</li><li>On pilote d’abord <strong>en regardant dehors</strong> : la position du capot par rapport à l’horizon donne l’assiette. Les instruments confirment.</li></ul>',
          tip: 'Regarder dehors 80 % du temps, les instruments 20 %. C’est la base du vol à vue.'
        }
      ],
      keypoints: [
        'Roulis = ailerons (manche latéral) ; tangage = profondeur (manche avant/arrière) ; lacet = direction (palonnier).',
        'Le compensateur supprime l’effort au manche, il ne remplace pas le pilotage.',
        'Lacet inverse : au début d’un virage, le nez part du mauvais côté ; on le corrige au pied.',
        '« Le pied chasse la bille » pour un vol symétrique.',
        'n = 1/cos(inclinaison) : 60° → 2 g, et la vitesse de décrochage augmente de 41 %.',
        'Assiette + Puissance = Performance.'
      ],
      links: [
        { label: 'Wikipédia – Gouverne', url: 'https://fr.wikipedia.org/wiki/Gouverne' },
        { label: 'Wikipédia – Facteur de charge', url: 'https://fr.wikipedia.org/wiki/Facteur_de_charge_(a%C3%A9ronautique)' }
      ],
      quiz: [
        {
          q: 'Je pousse le manche vers la droite. Quel mouvement principal fait l’avion ?',
          choices: ['Il monte', 'Il s’incline à droite (roulis)', 'Le nez part à droite sans s’incliner', 'Il accélère'],
          a: 1,
          exp: 'Le manche latéral commande les ailerons, donc le roulis. L’avion s’incline à droite ; c’est ensuite l’inclinaison qui le fait tourner.',
          fig: 'axes'
        },
        {
          q: 'Quelle gouverne commande le tangage ?',
          choices: ['Les ailerons', 'La gouverne de direction', 'La gouverne de profondeur', 'Les volets'],
          a: 2,
          exp: 'La profondeur, sur l’empennage horizontal, fait monter ou descendre le nez. Elle est actionnée par le manche avant/arrière.',
          fig: 'gouvernes'
        },
        {
          q: 'À quoi sert le compensateur (trim) ?',
          choices: ['À augmenter la vitesse maximale', 'À annuler l’effort au manche pour une assiette donnée', 'À freiner au sol', 'À remplacer le palonnier'],
          a: 1,
          exp: 'On place d’abord l’avion à l’assiette voulue avec le manche, puis on trime pour ne plus avoir à forcer. Le vol devient plus précis et moins fatigant.',
          fig: 'gouvernes'
        },
        {
          q: 'Au début d’un virage à gauche aux ailerons seuls, le nez part un peu à droite. Comment s’appelle ce phénomène ?',
          choices: ['Le décrochage', 'Le lacet inverse', 'L’effet de sol', 'Le roulis induit'],
          a: 1,
          exp: 'L’aileron baissé (ici à droite) crée plus de traînée et tire le nez du côté opposé au virage. On compense avec du pied du côté du virage (pied gauche).'
        },
        {
          q: 'La bille du coordinateur est décalée à gauche. Que faire ?',
          choices: ['Mettre du pied à droite', 'Mettre du pied à gauche', 'Pousser le manche', 'Réduire la puissance'],
          a: 1,
          exp: 'Règle : le pied chasse la bille. Bille à gauche → pied gauche, jusqu’à ce qu’elle revienne au centre.',
          fig: 'six'
        },
        {
          q: 'En virage à 60° d’inclinaison en palier, le facteur de charge vaut :',
          choices: ['1', '1,41', '2', '3'],
          a: 2,
          exp: 'n = 1/cos(60°) = 1/0,5 = 2. Vous « pesez » deux fois votre poids et l’avion aussi : sa vitesse de décrochage est multipliée par √2 ≈ 1,41.',
          fig: 'virage'
        },
        {
          q: 'Pourquoi un virage serré à basse vitesse près du sol est-il dangereux ?',
          choices: ['Le moteur peut caler', 'La vitesse de décrochage augmente avec l’inclinaison', 'La radio ne passe plus', 'Les volets se rentrent seuls'],
          a: 1,
          exp: 'En virage, le facteur de charge augmente donc la vitesse de décrochage aussi. Lent et incliné, on peut décrocher sans hauteur pour récupérer : c’est une cause classique d’accident en dernier virage.',
          fig: 'virage'
        },
        {
          q: 'À puissance constante, je lève le nez (assiette à cabrer). Que se passe-t-il ?',
          choices: ['La vitesse augmente', 'La vitesse diminue et l’avion monte', 'Rien ne change', 'L’avion descend plus vite'],
          a: 1,
          exp: 'Assiette + Puissance = Performance. À puissance fixe, plus d’assiette = moins de vitesse et une trajectoire qui monte (jusqu’au décrochage si on exagère).'
        }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'ulm-4',
      title: 'L’avion et son moteur',
      domain: 'tech',
      duration: 30,
      intro: 'Structure, moteur 4 temps, carburant, givrage carburateur et instruments de base.',
      sections: [
        {
          h: 'La structure de la machine',
          html: '<ul><li><strong>Fuselage</strong> : le corps, qui porte le cockpit et relie tout le reste.</li><li><strong>Voilure</strong> : les ailes (haute ou basse selon les modèles).</li><li><strong>Empennages</strong> : à l’arrière, le plan horizontal (stabilisateur + profondeur) et la dérive (+ direction). Ils stabilisent l’avion comme les plumes d’une flèche.</li><li><strong>Train d’atterrissage</strong> : tricycle (roulette de nez) ou classique (roulette de queue, plus délicat à piloter au sol).</li><li><strong>Groupe motopropulseur</strong> : moteur + hélice.</li></ul><p>Les ULM modernes sont souvent en composite, en aluminium ou en tubes et toile.</p>'
        },
        {
          h: 'Le moteur 4 temps (type Rotax 912)',
          html: '<p>La plupart des ULM multiaxes modernes utilisent un moteur <strong>Rotax 912</strong> : 4 cylindres à plat, 4 temps, refroidi par air et liquide, environ 80 ou 100 ch. Un cycle se fait en 4 temps :</p><ol><li><strong>Admission</strong> : le piston descend, aspire le mélange air + essence.</li><li><strong>Compression</strong> : le piston remonte et comprime le mélange.</li><li><strong>Combustion-détente</strong> : la bougie allume, l’explosion repousse le piston (seul temps moteur).</li><li><strong>Échappement</strong> : le piston remonte et chasse les gaz brûlés.</li></ol><p>L’allumage est <strong>doublé</strong> (deux bougies par cylindre, deux circuits indépendants) pour la sécurité : on les teste séparément avant le décollage (essai « magnétos » ou allumages).</p>',
          fig: 'moteur',
          caption: 'Admission, compression, combustion-détente, échappement.',
          tip: 'Mnémotechnique : « J’aspire, je comprime, j’explose, je rejette ».'
        },
        {
          h: 'Carburant et givrage carburateur',
          html: '<p>Les moteurs Rotax acceptent en général l’<strong>essence auto sans plomb</strong> (SP95/SP98 selon le manuel) ou l’<strong>avgas 100LL</strong> avec des précautions d’entretien. Toujours vérifier dans le manuel du moteur.</p><p>Avant chaque vol : vérifier la <strong>quantité</strong> (à vue, pas seulement à la jauge) et faire une <strong>purge</strong> pour détecter l’eau.</p><p><strong>Givrage carburateur</strong> : dans le carburateur, l’air accélère et la vaporisation de l’essence refroidit fortement. Avec de l’<strong>air humide</strong>, de la glace peut se former, même par 20 à 25 °C dehors. Le moteur perd des tours, tourne irrégulièrement, puis peut s’arrêter.</p><ul><li>Risque maximal : air humide, températures douces, puissance réduite (descente).</li><li>Remède : <strong>réchauffage carburateur</strong> s’il est installé ; sur certaines installations, l’admission est réchauffée en permanence : vérifie le manuel de ton appareil.</li></ul>',
          tip: 'Climat tropical humide de Nouvelle-Calédonie : le givrage carburateur n’est pas réservé aux pays froids.'
        },
        {
          h: 'Les instruments de base',
          html: '<p>Les avions présentent souvent 6 instruments en « T » (sur un ULM, il y en a parfois moins, ou un écran unique) :</p><table class="tbl"><tr><th>Instrument</th><th>Ce qu’il indique</th><th>Fonctionne avec</th></tr><tr><td>Anémomètre</td><td>Vitesse par rapport à l’air</td><td>Tube de Pitot + prise statique</td></tr><tr><td>Horizon artificiel</td><td>Assiette et inclinaison</td><td>Gyroscope</td></tr><tr><td>Altimètre</td><td>Altitude (selon le calage)</td><td>Prise statique</td></tr><tr><td>Coordinateur de virage / bille</td><td>Taux de virage, symétrie</td><td>Gyroscope + bille</td></tr><tr><td>Conservateur de cap</td><td>Cap</td><td>Gyroscope (recalé sur le compas)</td></tr><tr><td>Variomètre</td><td>Vitesse verticale</td><td>Prise statique</td></tr></table>',
          fig: 'six',
          caption: 'Les 6 instruments de base.'
        },
        {
          h: 'Lire l’anémomètre',
          html: '<p>Les arcs de couleur donnent les vitesses clés :</p><ul><li><strong>Arc blanc</strong> : plage d’utilisation des volets (de VSO, décrochage volets sortis, à VFE, vitesse max volets sortis).</li><li><strong>Arc vert</strong> : utilisation normale (de VS1, décrochage en lisse, à VNO).</li><li><strong>Arc jaune</strong> : seulement en air calme (de VNO à VNE).</li><li><strong>Trait rouge</strong> : <strong>VNE</strong>, vitesse à ne jamais dépasser.</li></ul><p>Si le tube de Pitot est bouché (insecte, housse oubliée !), l’anémomètre devient faux : d’où l’importance de la visite prévol.</p>',
          fig: 'anemo',
          caption: 'Arcs blanc, vert, jaune et trait rouge.',
          tip: 'Housse de Pitot oubliée = anémomètre à zéro au décollage. Rangez toujours la housse avec la clé de l’avion.'
        }
      ],
      keypoints: [
        'Fuselage, voilure, empennages, train, groupe motopropulseur.',
        'Moteur 4 temps : admission, compression, combustion-détente, échappement ; allumage doublé.',
        'Carburant : vérifier quantité à vue et purger avant chaque vol.',
        'Givrage carburateur possible par temps doux et humide, surtout à puissance réduite.',
        'Anémomètre : Pitot + statique ; altimètre et variomètre : statique ; horizon, cap, virage : gyroscopes.',
        'Arc blanc = volets, vert = normal, jaune = air calme, trait rouge = VNE.'
      ],
      links: [
        { label: 'Wikipédia – Rotax 912', url: 'https://fr.wikipedia.org/wiki/Rotax_912' },
        { label: 'Wikipédia – Moteur à quatre temps', url: 'https://fr.wikipedia.org/wiki/Cycle_de_Beau_de_Rochas' }
      ],
      quiz: [
        {
          q: 'Lors de quel temps le moteur produit-il de l’énergie ?',
          choices: ['Admission', 'Compression', 'Combustion-détente', 'Échappement'],
          a: 2,
          exp: 'Seule la combustion-détente pousse le piston. Les trois autres temps consomment un peu d’énergie, fournie par l’inertie du vilebrequin.',
          fig: 'moteur'
        },
        {
          q: 'Pourquoi le moteur a-t-il deux circuits d’allumage ?',
          choices: ['Pour consommer moins', 'Pour la sécurité : si un circuit tombe en panne, l’autre suffit', 'Pour démarrer plus vite', 'C’est obligatoire uniquement la nuit'],
          a: 1,
          exp: 'La redondance est un principe clé en aviation. Avant le décollage, on teste chaque circuit séparément : une chute de régime trop forte signale un problème.'
        },
        {
          q: 'Il fait 22 °C, l’air est très humide, vous êtes en descente moteur réduit. Le régime baisse doucement. Cause probable ?',
          choices: ['Givrage carburateur', 'Panne d’essence certaine', 'Décrochage', 'Hélice cassée'],
          a: 0,
          exp: 'Le givrage carburateur survient par temps doux et humide, surtout à puissance réduite. Appliquer le réchauffage carburateur (si installé) : le moteur peut d’abord tousser avant de reprendre.'
        },
        {
          q: 'Avant le vol, comment vérifier la quantité de carburant ?',
          choices: ['La jauge suffit toujours', 'À vue dans les réservoirs, en recoupant avec la jauge', 'En secouant l’avion', 'Ce n’est pas nécessaire pour un vol local'],
          a: 1,
          exp: 'Les jauges peuvent être imprécises. On vérifie visuellement, on purge pour détecter l’eau, et on calcule ce dont on a besoin avec une réserve.'
        },
        {
          q: 'Quel instrument utilise le tube de Pitot ?',
          choices: ['L’altimètre', 'L’anémomètre', 'L’horizon artificiel', 'Le compas'],
          a: 1,
          exp: 'L’anémomètre compare la pression totale (Pitot) et la pression statique : la différence donne la vitesse. Altimètre et variomètre n’utilisent que la prise statique.',
          fig: 'six'
        },
        {
          q: 'Sur l’anémomètre, que signifie le trait rouge ?',
          choices: ['La vitesse de décrochage', 'La VNE, vitesse à ne jamais dépasser', 'La vitesse de croisière', 'La vitesse max volets sortis'],
          a: 1,
          exp: 'Au-delà de la VNE, la structure peut être endommagée (flottement des gouvernes, rupture). Le début de l’arc blanc indique le décrochage volets sortis (VSO).',
          fig: 'anemo'
        },
        {
          q: 'Quelle plage correspond à l’utilisation des volets ?',
          choices: ['Arc vert', 'Arc blanc', 'Arc jaune', 'Au-delà du trait rouge'],
          a: 1,
          exp: 'L’arc blanc va de VSO (décrochage volets sortis) à VFE (vitesse maximale volets sortis). Sortir les volets au-dessus de VFE peut les endommager.',
          fig: 'anemo'
        },
        {
          q: 'L’horizon artificiel fonctionne grâce à :',
          choices: ['La prise statique', 'Un gyroscope', 'Le tube de Pitot', 'Le GPS uniquement'],
          a: 1,
          exp: 'Un gyroscope garde sa position dans l’espace : l’instrument affiche ainsi l’assiette et l’inclinaison, même sans voir l’horizon réel.',
          fig: 'horizon'
        }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'ulm-5',
      title: 'Météo du pilote ULM',
      domain: 'meteo',
      duration: 35,
      intro: 'L’atmosphère, le vent, les nuages, le brouillard, l’aérologie et la lecture d’un METAR.',
      sections: [
        {
          h: 'L’atmosphère standard',
          html: '<p>Pour que tous les instruments parlent le même langage, on utilise une atmosphère « type » (l’atmosphère standard) :</p><ul><li>Au niveau de la mer : <strong>1013,25 hPa</strong> et <strong>15 °C</strong>.</li><li>La température baisse d’environ <strong>2 °C tous les 1 000 ft</strong> (6,5 °C par km).</li><li>Près du sol, la pression baisse d’environ <strong>1 hPa tous les 28 ft</strong> (environ 8,5 m).</li></ul><p>Air chaud et altitude = air moins dense = l’avion décolle sur une plus grande distance et monte moins bien. Par une journée chaude à Nouméa, la performance baisse.</p>',
          fig: 'atmosphere',
          caption: 'Atmosphère standard : 1013,25 hPa, 15 °C, -2 °C/1000 ft.'
        },
        {
          h: 'Le vent et la pression',
          html: '<p>Le vent souffle des hautes pressions (<strong>anticyclones</strong>) vers les basses pressions (<strong>dépressions</strong>), dévié par la rotation de la Terre.</p><ul><li><strong>Hémisphère nord</strong> : rotation dans le sens des aiguilles d’une montre autour d’un anticyclone, sens inverse autour d’une dépression.</li><li><strong>Hémisphère sud (Nouvelle-Calédonie)</strong> : c’est l’inverse ! Les dépressions (et les cyclones) tournent dans le sens des aiguilles d’une montre.</li></ul><p>Le vent est toujours donné par la direction <strong>d’où il vient</strong> : un vent du 120° vient du sud-est (c’est typiquement l’alizé en Nouvelle-Calédonie).</p>',
          fig: 'isobares',
          caption: 'Sens de rotation autour des anticyclones et dépressions selon l’hémisphère.',
          tip: 'Vent du 120 = il vient du 120. Comme on dit « vent du nord » : il vient du nord.'
        },
        {
          h: 'Nuages et brouillard',
          html: '<p>Un nuage se forme quand l’air refroidit jusqu’à sa <strong>température de point de rosée</strong> : la vapeur d’eau se condense. Plus la température et le point de rosée sont proches, plus le risque de nuages bas ou de brouillard est fort.</p><ul><li><strong>Nuages élevés</strong> (Ci, Cc, Cs) : cristaux de glace, pas gênants pour l’ULM.</li><li><strong>Nuages moyens</strong> (Ac, As).</li><li><strong>Nuages bas</strong> (St, Sc, Ns) : plafonds bas, pluie continue : on reste au sol.</li><li><strong>Nuages à développement vertical</strong> (Cu, <strong>Cb</strong>) : le cumulonimbus est l’ennemi n°1 : orages, grêle, rafales violentes, turbulence extrême. On s’en tient très loin.</li></ul><p><strong>Brouillard</strong> (visibilité inférieure à 1 km) : le brouillard de rayonnement se forme par nuit claire, vent faible et air humide, et se dissipe souvent en matinée.</p>',
          fig: 'nuages',
          caption: 'Les étages de nuages.'
        },
        {
          h: 'Aérologie : thermiques, brises, relief',
          html: '<ul><li><strong>Thermiques</strong> : le sol chauffé par le soleil fait monter des bulles d’air chaud. En milieu de journée, le vol devient « secoué ».</li><li><strong>Brises</strong> : le jour, brise de mer (de la mer vers la terre) ; la nuit, brise de terre (de la terre vers la mer).</li><li><strong>Relief</strong> : sous le vent d’une montagne, l’air descend et tourbillonne (rabattants, rotors). Avec l’alizé, les zones sous le vent de la chaîne centrale peuvent être très turbulentes.</li><li><strong>Cisaillement de vent</strong> : changement brutal de vent en force ou en direction, dangereux en finale.</li></ul>',
          tip: 'Pour les premiers vols, privilégier le matin ou la fin d’après-midi : l’air est plus calme.'
        },
        {
          h: 'Lire un METAR et savoir quand voler',
          html: '<p>Le <strong>METAR</strong> est l’observation météo d’un aérodrome, codée. Exemple :</p><p><code>METAR NWWW 180000Z 12012KT 9999 FEW020 SCT040 26/19 Q1016 NOSIG</code></p><table class="tbl"><tr><th>Code</th><th>Sens</th></tr><tr><td>NWWW</td><td>La Tontouta</td></tr><tr><td>180000Z</td><td>Le 18 à 00h00 UTC (heure Z)</td></tr><tr><td>12012KT</td><td>Vent du 120° pour 12 nœuds</td></tr><tr><td>9999</td><td>Visibilité 10 km ou plus</td></tr><tr><td>FEW020</td><td>Quelques nuages à 2 000 ft</td></tr><tr><td>SCT040</td><td>Nuages épars à 4 000 ft</td></tr><tr><td>26/19</td><td>Température 26 °C, point de rosée 19 °C</td></tr><tr><td>Q1016</td><td>QNH 1016 hPa</td></tr><tr><td>NOSIG</td><td>Pas de changement significatif prévu</td></tr></table><p>Nébulosité en octas : <strong>FEW</strong> 1-2, <strong>SCT</strong> 3-4, <strong>BKN</strong> 5-7, <strong>OVC</strong> 8. Le <strong>TAF</strong> est la <em>prévision</em> de l’aérodrome, sur le même principe.</p><p>Pour voler à vue, il faut des conditions <strong>VMC</strong> : une bonne visibilité, rester hors des nuages et voir le sol. Les valeurs exactes dépendent de l’espace aérien et de l’altitude ; à basse hauteur en espace non contrôlé, retenez au minimum <strong>hors nuages et vue du sol</strong>, avec plusieurs kilomètres de visibilité.</p>',
          fig: 'metar',
          caption: 'Un METAR décodé pas à pas.',
          tip: 'Heure Z = UTC. En Nouvelle-Calédonie, heure locale = UTC + 11.'
        }
      ],
      keypoints: [
        'Atmosphère standard : 1013,25 hPa, 15 °C, -2 °C/1000 ft.',
        'Chaleur et altitude réduisent les performances de l’avion.',
        'Le vent est donné d’où il vient ; en hémisphère sud, les dépressions tournent dans le sens horaire.',
        'Température proche du point de rosée = risque de nuages bas ou de brouillard.',
        'Le cumulonimbus (Cb) est le danger météo n°1 : on l’évite largement.',
        'METAR = observation ; TAF = prévision ; heure en UTC (Z).'
      ],
      links: [
        { label: 'Météo-France Aviation (Aéroweb)', url: 'https://aviation.meteo.fr/' },
        { label: 'Wikipédia – METAR', url: 'https://fr.wikipedia.org/wiki/METAR' },
        { label: 'Wikipédia – Atmosphère normalisée', url: 'https://fr.wikipedia.org/wiki/Atmosph%C3%A8re_normalis%C3%A9e' }
      ],
      quiz: [
        {
          q: 'Dans l’atmosphère standard, quelle est la pression au niveau de la mer ?',
          choices: ['1000 hPa', '1013,25 hPa', '1020 hPa', '760 hPa'],
          a: 1,
          exp: '1013,25 hPa et 15 °C au niveau de la mer : ce sont les valeurs de référence. (760 est la même pression mais en mmHg.)',
          fig: 'atmosphere'
        },
        {
          q: 'Au sol il fait 25 °C. Selon l’atmosphère standard, quelle température environ à 5 000 ft ?',
          choices: ['15 °C', '20 °C', '35 °C', '5 °C'],
          a: 0,
          exp: 'La température baisse d’environ 2 °C par 1 000 ft : 5 × 2 = 10 °C de moins, donc environ 15 °C.',
          fig: 'atmosphere'
        },
        {
          q: 'Un METAR indique 12012KT. Cela signifie :',
          choices: ['Vent allant vers le 120° à 12 km/h', 'Vent venant du 120° à 12 nœuds', 'Visibilité 12 km', 'Rafales à 120 nœuds'],
          a: 1,
          exp: 'Les 3 premiers chiffres = direction d’où vient le vent (120°), les 2 suivants = force en nœuds (KT). 1 nœud ≈ 1,85 km/h.',
          fig: 'metar'
        },
        {
          q: 'Température 22 °C, point de rosée 21 °C, vent nul, petit matin. Quel risque ?',
          choices: ['Orage violent', 'Brouillard ou nuages très bas', 'Givrage des ailes', 'Aucun'],
          a: 1,
          exp: 'Quand température et point de rosée sont très proches, l’air est presque saturé : la moindre baisse de température forme du brouillard ou des stratus bas.'
        },
        {
          q: 'Quel nuage est le plus dangereux pour un ULM ?',
          choices: ['Cirrus', 'Altocumulus', 'Cumulonimbus', 'Cumulus de beau temps'],
          a: 2,
          exp: 'Le cumulonimbus apporte orages, grêle, rafales et turbulences extrêmes, jusqu’à plusieurs kilomètres autour. On ne s’en approche jamais.',
          fig: 'nuages'
        },
        {
          q: 'En Nouvelle-Calédonie (hémisphère sud), autour d’une dépression le vent tourne :',
          choices: ['Dans le sens inverse des aiguilles d’une montre', 'Dans le sens des aiguilles d’une montre', 'Il ne tourne pas', 'Ça dépend de l’heure'],
          a: 1,
          exp: 'La déviation due à la rotation de la Terre s’inverse dans l’hémisphère sud : les dépressions et cyclones y tournent dans le sens horaire. Les manuels européens décrivent l’hémisphère nord, attention au piège.',
          fig: 'isobares'
        },
        {
          q: 'Que signifie BKN010 dans un METAR ?',
          choices: ['Quelques nuages à 100 ft', 'Ciel fragmenté (5 à 7 octas) à 1 000 ft', 'Ciel couvert à 10 000 ft', 'Brouillard à 10 m'],
          a: 1,
          exp: 'BKN = broken, 5 à 7 octas de ciel couvert. La hauteur est en centaines de pieds : 010 = 1 000 ft. Un plafond si bas rend le vol à vue très difficile.',
          fig: 'metar'
        },
        {
          q: 'Pourquoi préférer voler tôt le matin pour les premières leçons ?',
          choices: ['Les avions consomment moins', 'L’air est généralement plus calme, avec moins de thermiques', 'La radio fonctionne mieux', 'C’est obligatoire'],
          a: 1,
          exp: 'Le soleil chauffe le sol au fil de la journée et crée des thermiques qui secouent l’avion. Le matin et le soir, l’air est souvent plus stable et plus agréable pour apprendre.'
        }
      ]
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'ulm-6',
      title: 'Circuit, sécurité et règles du vol',
      domain: 'proc',
      duration: 35,
      intro: 'Le tour de piste, les pistes, les priorités, les espaces aériens, la radio, les facteurs humains et la panne moteur.',
      sections: [
        {
          h: 'Les pistes et le QFU',
          html: '<p>Une piste est nommée par son <strong>orientation magnétique</strong> arrondie à la dizaine, sans le dernier zéro : une piste orientée 260° s’appelle <strong>26</strong>. Son autre extrémité est orientée 080° : c’est la piste <strong>08</strong> (toujours 18 d’écart).</p><p>Le <strong>QFU</strong> est l’orientation magnétique exacte de la piste en service. On décolle et on atterrit <strong>face au vent</strong> : cela réduit la vitesse par rapport au sol et la distance nécessaire.</p>',
          fig: 'pistes',
          caption: 'Numérotation des pistes et QFU.',
          tip: 'Pour trouver la piste opposée : ajouter ou retirer 18. 26 ↔ 08, 11 ↔ 29.'
        },
        {
          h: 'Le tour de piste',
          html: '<p>Le <strong>tour de piste</strong> (circuit) est le rectangle standard autour de la piste, souvent à <strong>main gauche</strong> (virages à gauche) :</p><ol><li><strong>Montée initiale</strong> dans l’axe après le décollage.</li><li><strong>Vent traversier</strong> : premier virage, perpendiculaire à la piste.</li><li><strong>Vent arrière</strong> : parallèle à la piste, en sens inverse. On y fait les vérifications avant atterrissage.</li><li><strong>Étape de base</strong> : perpendiculaire, on commence la descente.</li><li><strong>Finale</strong> : dans l’axe, jusqu’à l’atterrissage.</li></ol><p>Le sens et la hauteur du tour de piste sont publiés sur la <strong>carte VAC</strong> de l’aérodrome (souvent 1 000 ft sol pour les avions, parfois plus bas pour les ULM).</p>',
          fig: 'tdp',
          caption: 'Tour de piste main gauche.'
        },
        {
          h: 'Vent traversier, priorités et hauteurs',
          html: '<p>Quand le vent n’est pas dans l’axe, il a une <strong>composante traversière</strong>. Règle pratique selon l’angle entre vent et piste : 30° → la moitié du vent ; 45° → 0,7 ; 60° → 0,9 ; 90° → tout le vent. Chaque machine a un vent traversier maximal démontré.</p><p><strong>Règles de priorité</strong> (anticollision) :</p><ul><li>Deux aéronefs convergents : celui qui vient de <strong>droite</strong> est prioritaire.</li><li>Face à face : chacun s’écarte <strong>vers sa droite</strong>.</li><li>Dépassement : on dépasse <strong>par la droite</strong>.</li><li>En finale : l’aéronef le plus bas est prioritaire ; un aéronef qui atterrit est prioritaire sur ceux en vol ou au sol.</li><li>Les moins manœuvrants sont prioritaires (ballon, planeur…).</li></ul><p><strong>Hauteur minimale</strong> : en dehors des décollages et atterrissages, rester au moins à 500 ft (150 m) au-dessus du sol, de l’eau ou des obstacles, et nettement plus haut au-dessus des villes et rassemblements.</p>',
          fig: 'traversier',
          caption: 'Composante de vent traversier selon l’angle.'
        },
        {
          h: 'Espaces aériens et radio',
          html: '<p>Le ciel est découpé en <strong>espaces aériens</strong> de classe A à G :</p><ul><li><strong>Classe G</strong> : non contrôlé, on y vole librement en respectant les règles.</li><li><strong>CTR</strong> (zone de contrôle, depuis le sol autour d’un aérodrome contrôlé) et <strong>TMA</strong> (au-dessus, plus large) : il faut une <strong>clairance</strong> du contrôleur avant d’entrer.</li><li>Zones <strong>P</strong> (interdites), <strong>R</strong> (réglementées), <strong>D</strong> (dangereuses).</li></ul><p>Tout est sur les cartes aéronautiques publiées par le SIA. On prépare toujours son vol avec une carte à jour.</p><p><strong>Radio de base</strong> : un message suit l’ordre <em>qui j’appelle, qui je suis, où je suis, ce que je fais</em>. Sur un terrain sans contrôleur, on annonce ses positions en <strong>auto-information</strong>. Fréquence de détresse : <strong>121,5 MHz</strong>. Codes transpondeur d’urgence : <strong>7700</strong> (urgence), <strong>7600</strong> (panne radio), <strong>7500</strong> (intervention illicite).</p>',
          fig: 'espaces',
          caption: 'Coupe simplifiée des espaces aériens.',
          tip: 'Transpondeur : 75 = « on vous prend » (détournement), 76 = « radio fichue », 77 = « au secours ».'
        },
        {
          h: 'Facteurs humains, check-lists et panne moteur',
          html: '<p>Avant chaque vol, on se teste avec <strong>IMSAFE</strong> :</p><ul><li><strong>I</strong>llness – suis-je malade ?</li><li><strong>M</strong>edication – ai-je pris des médicaments ?</li><li><strong>S</strong>tress – suis-je préoccupé ?</li><li><strong>A</strong>lcohol – ai-je bu (au moins 8 h entre le dernier verre et le vol, et un taux d’alcool proche de zéro) ?</li><li><strong>F</strong>atigue – ai-je assez dormi ?</li><li><strong>E</strong>ating / Emotion – ai-je mangé, suis-je calme ?</li></ul><p>Attention à la <strong>pression de l’objectif</strong> (« il faut rentrer ce soir ») : c’est un grand pourvoyeur d’accidents. Les <strong>check-lists</strong> évitent les oublis : visite prévol, mise en route, avant décollage, avant atterrissage.</p><p><strong>Panne moteur en vol</strong> :</p><ol><li><strong>Vitesse</strong> de meilleure finesse immédiatement.</li><li><strong>Choisir un terrain</strong> : face au vent, sans obstacles ni lignes électriques, dans la distance de plané.</li><li><strong>Actions</strong> : essence (robinet, pompe), allumages, réchauffage carburateur ; tenter un redémarrage si la hauteur le permet.</li><li><strong>Message</strong> : MAYDAY sur la fréquence en cours ou 121,5 ; transpondeur 7700.</li><li><strong>Sécuriser</strong> avant l’impact : coupure essence et contacts, ceintures serrées.</li></ol>',
          tip: 'Ordre de priorité en toutes circonstances : Aviate, Navigate, Communicate. Piloter d’abord, toujours.'
        }
      ],
      keypoints: [
        'Piste 26 = orientée vers 260° magnétique ; l’autre bout est la 08.',
        'Tour de piste : montée initiale, vent traversier, vent arrière, étape de base, finale.',
        'On décolle et atterrit face au vent ; vent à 30° de l’axe = moitié en traversier.',
        'Priorité à droite, croisement en s’écartant à droite, dépassement par la droite.',
        'CTR/TMA = clairance obligatoire ; 121,5 MHz détresse ; 7700/7600/7500.',
        'IMSAFE avant chaque vol ; en panne : vitesse, terrain, actions, message, sécurisation.'
      ],
      links: [
        { label: 'SIA – Cartes VAC et informations aéronautiques', url: 'https://www.sia.aviation-civile.gouv.fr/' },
        { label: 'Wikipédia – Circuit d’aérodrome', url: 'https://fr.wikipedia.org/wiki/Tour_de_piste' },
        { label: 'Wikipédia – Classes d’espace aérien', url: 'https://fr.wikipedia.org/wiki/Espace_a%C3%A9rien' }
      ],
      quiz: [
        {
          q: 'La piste 11 a pour piste opposée :',
          choices: ['La piste 22', 'La piste 29', 'La piste 01', 'La piste 31'],
          a: 1,
          exp: 'Les deux extrémités d’une piste diffèrent de 180°, soit 18 dans le numéro : 11 + 18 = 29.',
          fig: 'pistes'
        },
        {
          q: 'Dans quel ordre se succèdent les branches d’un tour de piste ?',
          choices: ['Finale, base, vent arrière, vent traversier', 'Montée initiale, vent traversier, vent arrière, étape de base, finale', 'Vent arrière, vent traversier, finale, base', 'Montée initiale, base, vent arrière, finale'],
          a: 1,
          exp: 'Après le décollage : montée dans l’axe, premier virage (vent traversier), parallèle à la piste en sens inverse (vent arrière), virage en base, puis finale.',
          fig: 'tdp'
        },
        {
          q: 'Vent de 20 kt à 30° de l’axe de piste. Composante traversière ?',
          choices: ['5 kt', '10 kt', '14 kt', '20 kt'],
          a: 1,
          exp: 'À 30°, la composante traversière vaut environ la moitié du vent : 20 × 0,5 = 10 kt.',
          fig: 'traversier'
        },
        {
          q: 'Un autre avion arrive par votre droite, à la même altitude, sur une route convergente. Qui est prioritaire ?',
          choices: ['Vous', 'L’avion venant de droite', 'Le plus rapide', 'Le plus gros'],
          a: 1,
          exp: 'Comme sur la route, priorité à droite. Vous devez manœuvrer pour l’éviter, en passant derrière lui.'
        },
        {
          q: 'Avant d’entrer dans une CTR, il faut :',
          choices: ['Rien, c’est libre', 'Obtenir une clairance du contrôle', 'Allumer les phares', 'Voler à moins de 500 ft'],
          a: 1,
          exp: 'Une CTR est un espace contrôlé autour d’un aérodrome. Sans clairance, on n’y entre pas : il faut donc une radio et la qualification correspondante.',
          fig: 'espaces'
        },
        {
          q: 'Quel code transpondeur afficher en cas de panne radio ?',
          choices: ['7000', '7500', '7600', '7700'],
          a: 2,
          exp: '7600 = panne radio. 7700 = urgence générale, 7500 = intervention illicite. 7000 est le code VFR standard en France.'
        },
        {
          q: 'Vous avez dormi 4 heures et vous avez un vol prévu à 7 h. Selon IMSAFE :',
          choices: ['Aucun problème si la météo est belle', 'La fatigue est un motif valable pour reporter le vol', 'Un café suffit', 'On vole mais seulement en tour de piste'],
          a: 1,
          exp: 'La fatigue dégrade le jugement et les réflexes comme l’alcool. Le bon pilote sait renoncer : c’est une compétence, pas un échec.'
        },
        {
          q: 'Panne moteur à 1 500 ft. Quelle est la toute première action ?',
          choices: ['Appeler MAYDAY', 'Prendre la vitesse de meilleure finesse', 'Chercher la panne dans le manuel', 'Couper la radio'],
          a: 1,
          exp: 'Aviate, Navigate, Communicate : d’abord piloter. Sans la bonne vitesse, on perd de la hauteur inutilement ou on risque le décrochage. Ensuite : terrain, actions, message.',
          fig: 'finesse'
        }
      ]
    }
  ]
};
