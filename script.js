const questions = [
  {
    "question": "Quel est le rôle principal de la physique ?",
    "options": [
      "Participer à l’évolution de la science et de la technologie",
      "Étudier uniquement les êtres vivants",
      "Remplacer les mathématiques",
      "Étudier uniquement les roches"
    ],
    "answer": 0
  },
  {
    "question": "Dans quel domaine la physique intervient-elle ?",
    "options": [
      "Littérature",
      "Grammaire",
      "Histoire ancienne uniquement",
      "Médecine"
    ],
    "answer": 3
  },
  {
    "question": "Dans quel autre domaine la physique intervient-elle ?",
    "options": [
      "Peinture uniquement",
      "Linguistique",
      "Astronomie",
      "Poésie"
    ],
    "answer": 2
  },
  {
    "question": "La physique intervient-elle dans l’industrie ?",
    "options": [
      "Uniquement dans la musique",
      "Oui",
      "Non",
      "Uniquement dans le sport"
    ],
    "answer": 1
  },
  {
    "question": "La physique intervient-elle dans le domaine de l’énergie ?",
    "options": [
      "Oui",
      "Non",
      "Jamais",
      "Seulement en médecine"
    ],
    "answer": 0
  },
  {
    "question": "Quelle activité fait partie du travail du physicien ?",
    "options": [
      "Écrire des romans",
      "Traduire des textes",
      "Classer les espèces végétales uniquement",
      "Observer les phénomènes physiques"
    ],
    "answer": 3
  },
  {
    "question": "Que cherche le physicien à faire après l’observation d’un phénomène ?",
    "options": [
      "Le rendre invisible",
      "Le remplacer par une opinion",
      "L’étudier et l’expliquer",
      "L’ignorer"
    ],
    "answer": 2
  },
  {
    "question": "Le physicien contribue au développement de quoi ?",
    "options": [
      "La décoration",
      "La recherche scientifique",
      "La fiction littéraire",
      "La mode"
    ],
    "answer": 1
  },
  {
    "question": "À quoi le physicien contribue-t-il concernant l’environnement ?",
    "options": [
      "À résoudre des problèmes environnementaux",
      "À augmenter systématiquement la pollution",
      "À supprimer les observations",
      "À éviter toute recherche"
    ],
    "answer": 0
  },
  {
    "question": "Que cherche-t-on à trouver dans le domaine de l’énergie ?",
    "options": [
      "Des sources de poésie",
      "Des espèces animales",
      "Des langues anciennes",
      "Des sources d’énergie"
    ],
    "answer": 3
  },
  {
    "question": "Quelles grandeurs permettent d’étudier l’évolution d’un système ?",
    "options": [
      "Les opinions des observateurs",
      "Les noms des chercheurs",
      "Les grandeurs physiques adaptées à l’étude",
      "Les couleurs des objets uniquement"
    ],
    "answer": 2
  },
  {
    "question": "Quels paramètres peuvent commander l’évolution d’un système ?",
    "options": [
      "Les unités littéraires",
      "Les paramètres extérieurs",
      "Les titres des chapitres",
      "Les couleurs du cahier"
    ],
    "answer": 1
  },
  {
    "question": "L’évolution d’un système peut-elle être caractérisée par un temps caractéristique ?",
    "options": [
      "Oui",
      "Non",
      "Seulement pour les solides",
      "Jamais"
    ],
    "answer": 0
  },
  {
    "question": "Quel rôle les conditions initiales jouent-elles dans l’évolution étudiée ?",
    "options": [
      "Elles n’existent pas en physique",
      "Elles remplacent le temps",
      "Elles définissent la couleur du système",
      "Elles influencent l’évolution du système"
    ],
    "answer": 3
  },
  {
    "question": "Une évolution physique peut-elle être lente ou rapide ?",
    "options": [
      "Seulement lente",
      "Seulement rapide",
      "Oui",
      "Non"
    ],
    "answer": 2
  },
  {
    "question": "Une évolution physique peut-elle être totale ou limitée ?",
    "options": [
      "Seulement limitée",
      "Oui",
      "Non",
      "Seulement totale"
    ],
    "answer": 1
  },
  {
    "question": "Une évolution physique peut-elle être uniforme ou variée ?",
    "options": [
      "Oui",
      "Non",
      "Seulement uniforme",
      "Seulement variée"
    ],
    "answer": 0
  },
  {
    "question": "Qu’est-ce qu’une onde mécanique ?",
    "options": [
      "Le déplacement permanent de matière dans le vide",
      "Une transformation chimique",
      "Une émission de lumière uniquement",
      "La propagation d’une perturbation dans un milieu matériel élastique"
    ],
    "answer": 3
  },
  {
    "question": "La propagation d’une onde mécanique nécessite-t-elle un milieu matériel ?",
    "options": [
      "Uniquement dans le vide",
      "Uniquement dans l’air chaud",
      "Oui",
      "Non"
    ],
    "answer": 2
  },
  {
    "question": "Une onde mécanique transporte-t-elle la matière ?",
    "options": [
      "Seulement dans un solide",
      "Non",
      "Oui, toujours",
      "Oui, entièrement"
    ],
    "answer": 1
  },
  {
    "question": "Dans quel type de milieu une onde mécanique se propage-t-elle ?",
    "options": [
      "Un milieu matériel élastique",
      "Le vide uniquement",
      "Un milieu sans matière",
      "Un milieu nécessairement liquide"
    ],
    "answer": 0
  },
  {
    "question": "Dans une onde transversale, la déformation est-elle perpendiculaire à la propagation ?",
    "options": [
      "Non",
      "Elle est toujours parallèle",
      "Elle est sans direction",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "Dans une onde longitudinale, la déformation est-elle parallèle à la propagation ?",
    "options": [
      "Elle est perpendiculaire",
      "Elle est circulaire uniquement",
      "Oui",
      "Non"
    ],
    "answer": 2
  },
  {
    "question": "Comment se caractérise une onde transversale ?",
    "options": [
      "Transport de matière",
      "Déformation perpendiculaire à la propagation",
      "Déformation parallèle à la propagation",
      "Absence de perturbation"
    ],
    "answer": 1
  },
  {
    "question": "Comment se caractérise une onde longitudinale ?",
    "options": [
      "Déformation parallèle à la propagation",
      "Déformation perpendiculaire à la propagation",
      "Propagation sans milieu",
      "Déplacement global du milieu"
    ],
    "answer": 0
  },
  {
    "question": "Une onde qui se propage dans une seule direction est-elle monodimensionnelle ?",
    "options": [
      "Non",
      "Elle est tridimensionnelle",
      "Elle est nécessairement sonore",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "Dans combien de dimensions une onde bidimensionnelle se propage-t-elle ?",
    "options": [
      "Trois",
      "Quatre",
      "Deux",
      "Une"
    ],
    "answer": 2
  },
  {
    "question": "Dans quel espace une onde tridimensionnelle se propage-t-elle ?",
    "options": [
      "Sur un cercle uniquement",
      "Dans l’espace à trois dimensions",
      "Sur une seule ligne",
      "Dans un plan uniquement"
    ],
    "answer": 1
  },
  {
    "question": "Une onde sonore est-elle mécanique ?",
    "options": [
      "Oui",
      "Non",
      "Elle est lumineuse",
      "Elle est nucléaire"
    ],
    "answer": 0
  },
  {
    "question": "Quel est le caractère dimensionnel de l’onde sonore selon le cours ?",
    "options": [
      "Monodimensionnelle",
      "Bidimensionnelle",
      "Sans dimension",
      "Tridimensionnelle"
    ],
    "answer": 3
  },
  {
    "question": "Quel est le caractère de propagation d’une onde sonore ?",
    "options": [
      "Immobile",
      "Électrique",
      "Longitudinal",
      "Transversal uniquement"
    ],
    "answer": 2
  },
  {
    "question": "La propagation du son nécessite-t-elle un milieu matériel ?",
    "options": [
      "Seulement dans l’espace",
      "Oui",
      "Non",
      "Seulement dans le vide"
    ],
    "answer": 1
  },
  {
    "question": "Deux ondes mécaniques peuvent-elles se superposer ?",
    "options": [
      "Oui",
      "Non",
      "Uniquement si elles ont des fréquences différentes",
      "Uniquement dans le vide"
    ],
    "answer": 0
  },
  {
    "question": "Que se passe-t-il lorsque deux ondes mécaniques se superposent ?",
    "options": [
      "Elles disparaissent toujours",
      "Elles transportent la matière",
      "Elles deviennent lumineuses",
      "Elles peuvent se superposer sans se perturber"
    ],
    "answer": 3
  },
  {
    "question": "Que représente la célérité d’une onde ?",
    "options": [
      "Son amplitude uniquement",
      "Sa température",
      "Sa vitesse de propagation",
      "Sa masse"
    ],
    "answer": 2
  },
  {
    "question": "Quelle relation donne la célérité d’une onde ?",
    "options": [
      "v = d + Δt",
      "v = d / Δt",
      "v = d × Δt",
      "v = Δt / d"
    ],
    "answer": 1
  },
  {
    "question": "Quelle est l’unité SI de la célérité ?",
    "options": [
      "m/s",
      "kg",
      "s",
      "Hz"
    ],
    "answer": 0
  },
  {
    "question": "Que représente d dans la relation v = d / Δt ?",
    "options": [
      "La durée du parcours",
      "La fréquence",
      "La période",
      "La distance parcourue par l’onde"
    ],
    "answer": 3
  },
  {
    "question": "Que représente Δt dans la relation v = d / Δt ?",
    "options": [
      "La longueur d’onde",
      "L’amplitude",
      "La durée du parcours",
      "La distance parcourue"
    ],
    "answer": 2
  },
  {
    "question": "Quelle est l’unité de la durée Δt ?",
    "options": [
      "Mètre par seconde (m/s)",
      "Seconde (s)",
      "Mètre (m)",
      "Hertz (Hz)"
    ],
    "answer": 1
  },
  {
    "question": "Comment évolue la célérité lorsque l’élasticité du milieu augmente ?",
    "options": [
      "Elle augmente",
      "Elle diminue",
      "Elle reste toujours nulle",
      "Elle devient négative"
    ],
    "answer": 0
  },
  {
    "question": "Quel est l’effet d’une grande inertie du milieu sur la célérité ?",
    "options": [
      "La célérité augmente toujours",
      "La célérité devient infinie",
      "Aucun effet selon le cours",
      "La célérité devient plus faible"
    ],
    "answer": 3
  },
  {
    "question": "Que représente le retard temporel τ ?",
    "options": [
      "La fréquence de la source",
      "L’amplitude de l’onde",
      "Le décalage temporel entre deux points",
      "La distance entre deux points"
    ],
    "answer": 2
  },
  {
    "question": "Quelle relation exprime le retard temporel ?",
    "options": [
      "τ = MM′ + v",
      "τ = MM′ / v",
      "τ = v × MM′",
      "τ = v / MM′"
    ],
    "answer": 1
  },
  {
    "question": "Quelle est l’unité du retard temporel ?",
    "options": [
      "Seconde (s)",
      "Mètre (m)",
      "Hertz (Hz)",
      "Newton (N)"
    ],
    "answer": 0
  },
  {
    "question": "Que représente MM′ ?",
    "options": [
      "La durée de propagation",
      "La fréquence de l’onde",
      "La masse du milieu",
      "La distance entre M et M′"
    ],
    "answer": 3
  },
  {
    "question": "Comment le point M′ reproduit-il le mouvement du point M ?",
    "options": [
      "Sans aucun décalage",
      "Avec une fréquence toujours différente",
      "Avec un retard temporel τ",
      "Avec une avance constante"
    ],
    "answer": 2
  },
  {
    "question": "Quelle relation relie les élongations de M et M′ ?",
    "options": [
      "YM′(t) = 0",
      "YM′(t) = YM(t − τ)",
      "YM′(t) = YM(t + τ)",
      "YM′(t) = τ × YM(t)"
    ],
    "answer": 1
  },
  {
    "question": "Que signifie une onde mécanique progressive périodique ?",
    "options": [
      "Une perturbation qui se répète identiquement à intervalles de temps égaux",
      "Une perturbation qui ne se répète jamais",
      "Une onde qui transporte la matière",
      "Une onde qui se propage uniquement dans le vide"
    ],
    "answer": 0
  },
  {
    "question": "À quelle condition une onde est-elle périodique ?",
    "options": [
      "La perturbation s’arrête immédiatement",
      "La vitesse est toujours nulle",
      "Le milieu est nécessairement solide",
      "La perturbation se répète à intervalles de temps identiques"
    ],
    "answer": 3
  },
  {
    "question": "Quand une onde progressive périodique est-elle sinusoïdale ?",
    "options": [
      "Lorsque la matière se déplace",
      "Lorsque la fréquence est nulle",
      "Lorsque la perturbation varie sinusoïdalement en fonction du temps",
      "Lorsque la perturbation est constante"
    ],
    "answer": 2
  },
  {
    "question": "Que représente la longueur d’onde λ ?",
    "options": [
      "La vitesse du son",
      "La distance entre deux points consécutifs en phase",
      "La durée d’une oscillation",
      "Le nombre d’oscillations par seconde"
    ],
    "answer": 1
  },
  {
    "question": "Quelle est l’unité de la longueur d’onde ?",
    "options": [
      "Mètre (m)",
      "Seconde (s)",
      "Hertz (Hz)",
      "Ampère (A)"
    ],
    "answer": 0
  },
  {
    "question": "Que représente la période T ?",
    "options": [
      "La distance entre deux crêtes",
      "La vitesse de propagation",
      "Le nombre de points du milieu",
      "La durée séparant deux états vibratoires identiques successifs"
    ],
    "answer": 3
  },
  {
    "question": "Quelle est l’unité de la période ?",
    "options": [
      "Hertz (Hz)",
      "Mètre par seconde (m/s)",
      "Seconde (s)",
      "Mètre (m)"
    ],
    "answer": 2
  },
  {
    "question": "Que représente la fréquence N ?",
    "options": [
      "La masse de la source",
      "Le nombre de périodes par unité de temps",
      "La distance parcourue",
      "La durée totale du cours"
    ],
    "answer": 1
  },
  {
    "question": "Quelle relation lie la fréquence à la période ?",
    "options": [
      "N = 1 / T",
      "N = T",
      "N = T²",
      "N = 1 + T"
    ],
    "answer": 0
  },
  {
    "question": "Quelle est l’unité de la fréquence ?",
    "options": [
      "Mètre (m)",
      "Seconde (s)",
      "Joule (J)",
      "Hertz (Hz)"
    ],
    "answer": 3
  },
  {
    "question": "Quelle relation donne la vitesse d’une onde périodique ?",
    "options": [
      "v = T / λ",
      "v = λ + T",
      "v = λ / T",
      "v = λ × T"
    ],
    "answer": 2
  },
  {
    "question": "Quelle autre expression de la vitesse d’une onde périodique est correcte ?",
    "options": [
      "v = N + λ",
      "v = N × λ",
      "v = N / λ",
      "v = λ − N"
    ],
    "answer": 1
  },
  {
    "question": "Dans la relation v = λ / T, que représente λ ?",
    "options": [
      "La longueur d’onde",
      "La période",
      "La fréquence",
      "Le retard temporel"
    ],
    "answer": 0
  },
  {
    "question": "Dans la relation v = λ / T, que représente T ?",
    "options": [
      "La longueur d’onde",
      "La célérité",
      "La distance",
      "La période"
    ],
    "answer": 3
  },
  {
    "question": "Quand deux points vibrent-ils en phase ?",
    "options": [
      "Lorsqu’ils sont immobiles",
      "Lorsque leurs fréquences sont différentes",
      "Lorsque leur distance est un multiple entier de λ",
      "Lorsque leur distance vaut toujours λ/2"
    ],
    "answer": 2
  },
  {
    "question": "Quelle relation caractérise deux points en phase ?",
    "options": [
      "M₁M₂ = 2λ + 1",
      "M₁M₂ = kλ",
      "M₁M₂ = (2k + 1)λ/2",
      "M₁M₂ = λ/4"
    ],
    "answer": 1
  },
  {
    "question": "Quand deux points vibrent-ils en opposition de phase ?",
    "options": [
      "Lorsque leur distance est un multiple impair de λ/2",
      "Lorsque leur distance est un multiple entier de λ",
      "Lorsqu’ils ont une distance nulle uniquement",
      "Lorsqu’ils ont des périodes différentes"
    ],
    "answer": 0
  },
  {
    "question": "Quelle relation caractérise l’opposition de phase ?",
    "options": [
      "M₁M₂ = kλ",
      "M₁M₂ = λ²",
      "M₁M₂ = 2kλ",
      "M₁M₂ = (2k + 1)λ/2"
    ],
    "answer": 3
  },
  {
    "question": "Que se produit-il lorsqu’une onde mécanique franchit un obstacle ou traverse une ouverture ?",
    "options": [
      "La matière disparaît",
      "La fréquence devient nulle",
      "Une diffraction peut se produire",
      "Une radioactivité apparaît"
    ],
    "answer": 2
  },
  {
    "question": "Quel phénomène peut apparaître lorsqu’une onde traverse une ouverture ?",
    "options": [
      "La condensation",
      "La diffraction",
      "La fusion",
      "La réfraction nucléaire"
    ],
    "answer": 1
  },
  {
    "question": "Quelle condition favorise la diffraction selon le cours ?",
    "options": [
      "a ≤ λ",
      "a > λ",
      "a = 10λ",
      "λ = 0"
    ],
    "answer": 0
  },
  {
    "question": "Que représente a dans la condition a ≤ λ ?",
    "options": [
      "La période",
      "La fréquence",
      "La célérité",
      "La dimension de l’ouverture ou de l’obstacle"
    ],
    "answer": 3
  },
  {
    "question": "Après diffraction, quelle grandeur reste identique à celle de l’onde incidente ?",
    "options": [
      "La direction uniquement",
      "L’amplitude nécessairement",
      "La fréquence",
      "La masse"
    ],
    "answer": 2
  },
  {
    "question": "Les ondes incidente et diffractée ont-elles la même célérité dans le même milieu ?",
    "options": [
      "Seulement si elles sont sonores",
      "Oui",
      "Non",
      "Jamais"
    ],
    "answer": 1
  },
  {
    "question": "Les ondes incidente et diffractée ont-elles la même longueur d’onde dans le même milieu ?",
    "options": [
      "Oui",
      "Non",
      "Toujours une longueur double",
      "Toujours une longueur nulle"
    ],
    "answer": 0
  },
  {
    "question": "Qu’est-ce qu’un milieu dispersif ?",
    "options": [
      "Un milieu où la célérité est toujours nulle",
      "Un milieu sans matière",
      "Un milieu où la fréquence disparaît",
      "Un milieu où la célérité dépend de la fréquence"
    ],
    "answer": 3
  },
  {
    "question": "Dans un milieu dispersif, de quoi dépend la vitesse de propagation ?",
    "options": [
      "Uniquement de la couleur du milieu",
      "Du nom de l’onde",
      "De la fréquence de la source",
      "Uniquement de la masse de la source"
    ],
    "answer": 2
  },
  {
    "question": "Qu’est-ce qu’un stroboscope ?",
    "options": [
      "Un type de lentille",
      "Un flash électronique à fréquence réglable",
      "Un appareil qui mesure uniquement la masse",
      "Une source sonore"
    ],
    "answer": 1
  },
  {
    "question": "À quoi sert le stroboscope ?",
    "options": [
      "À étudier les phénomènes périodiques rapides",
      "À mesurer la masse d’un noyau",
      "À produire une onde sonore",
      "À arrêter définitivement une onde"
    ],
    "answer": 0
  },
  {
    "question": "La fréquence du stroboscope est-elle réglable ?",
    "options": [
      "Non",
      "Elle est toujours nulle",
      "Elle est toujours égale à 1 Hz",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "Quand obtient-on une immobilité apparente de l’onde avec un stroboscope ?",
    "options": [
      "Lorsque Ns = 0",
      "Lorsque Ns est toujours différente de N",
      "Lorsque Ns = kN, avec k entier naturel non nul",
      "Lorsque Ns = N/3 uniquement"
    ],
    "answer": 2
  },
  {
    "question": "Que représente Ns ?",
    "options": [
      "La période de l’onde uniquement",
      "La fréquence du stroboscope",
      "La longueur d’onde",
      "La célérité"
    ],
    "answer": 1
  },
  {
    "question": "Que représente N dans la relation Ns = kN ?",
    "options": [
      "La fréquence de l’onde étudiée",
      "La distance parcourue",
      "La masse du milieu",
      "Le retard temporel"
    ],
    "answer": 0
  },
  {
    "question": "Une onde périodique se répète-t-elle à des intervalles de temps égaux ?",
    "options": [
      "Non",
      "Seulement dans le vide",
      "Seulement si elle est sonore",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "La longueur d’onde est-elle une périodicité spatiale ?",
    "options": [
      "C’est une périodicité temporelle",
      "C’est une fréquence",
      "Oui",
      "Non"
    ],
    "answer": 2
  },
  {
    "question": "La période T est-elle une périodicité temporelle ?",
    "options": [
      "C’est une distance",
      "Oui",
      "Non",
      "C’est une périodicité spatiale"
    ],
    "answer": 1
  },
  {
    "question": "Deux points séparés par une longueur d’onde vibrent-ils en phase ?",
    "options": [
      "Oui",
      "Non",
      "En opposition de phase",
      "Ils ne vibrent jamais"
    ],
    "answer": 0
  },
  {
    "question": "Deux points séparés par λ/2 vibrent-ils en opposition de phase ?",
    "options": [
      "Non",
      "Toujours en phase",
      "Ils ont des fréquences différentes",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "Si la fréquence augmente dans un milieu dispersif, la célérité peut-elle changer ?",
    "options": [
      "Elle reste nécessairement constante",
      "Elle devient toujours nulle",
      "Oui",
      "Non"
    ],
    "answer": 2
  },
  {
    "question": "Une onde sonore peut-elle se propager dans le vide ?",
    "options": [
      "Uniquement si elle est périodique",
      "Non",
      "Oui",
      "Uniquement à haute fréquence"
    ],
    "answer": 1
  },
  {
    "question": "Une onde mécanique progressive correspond-elle à la propagation d’une perturbation ?",
    "options": [
      "Oui",
      "Non",
      "À un transport global de matière",
      "À une transformation chimique"
    ],
    "answer": 0
  },
  {
    "question": "La célérité dépend-elle de l’élasticité du milieu ?",
    "options": [
      "Non",
      "Uniquement de la couleur",
      "Uniquement de la fréquence dans tous les milieux",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "La célérité diminue-t-elle lorsque l’inertie du milieu augmente ?",
    "options": [
      "Elle augmente toujours",
      "Elle devient infinie",
      "Oui",
      "Non"
    ],
    "answer": 2
  },
  {
    "question": "Le retard temporel augmente-t-il si la distance MM′ augmente, à célérité constante ?",
    "options": [
      "Il ne dépend jamais de la distance",
      "Oui",
      "Non",
      "Il devient nul"
    ],
    "answer": 1
  },
  {
    "question": "La fréquence est-elle l’inverse de la période ?",
    "options": [
      "Oui",
      "Non",
      "Elle est égale à la période au carré",
      "Elle est la somme de la période et de la longueur d’onde"
    ],
    "answer": 0
  },
  {
    "question": "Une onde sinusoïdale est-elle une onde progressive périodique particulière ?",
    "options": [
      "Non",
      "Elle est toujours apériodique",
      "Elle ne se propage pas",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "La diffraction modifie-t-elle la fréquence de l’onde dans le même milieu ?",
    "options": [
      "Elle la divise par deux",
      "Elle l’annule",
      "Non",
      "Oui, toujours"
    ],
    "answer": 2
  },
  {
    "question": "La diffraction peut-elle être observée au passage d’une ouverture ?",
    "options": [
      "Uniquement avec la lumière",
      "Oui",
      "Non",
      "Uniquement dans le vide"
    ],
    "answer": 1
  },
  {
    "question": "Quel paramètre compare-t-on à la longueur d’onde pour prévoir la diffraction ?",
    "options": [
      "La largeur a de l’ouverture",
      "La masse du milieu",
      "La période du stroboscope",
      "La température de la source"
    ],
    "answer": 0
  },
  {
    "question": "La vitesse d’une onde périodique peut-elle s’écrire Nλ ?",
    "options": [
      "Non",
      "Elle s’écrit N/λ",
      "Elle s’écrit λ − N",
      "Oui"
    ],
    "answer": 3
  },
  {
    "question": "Quel est le symbole utilisé pour la longueur d’onde ?",
    "options": [
      "Δt",
      "N",
      "λ",
      "τ"
    ],
    "answer": 2
  },
  {
    "question": "Quel est le symbole utilisé pour la période ?",
    "options": [
      "d",
      "T",
      "λ",
      "v"
    ],
    "answer": 1
  }
];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const questionCount = document.getElementById('question-count');
const questionNumber = document.getElementById('question-number');
const scoreElement = document.getElementById('score');
const answeredElement = document.getElementById('answered');
const progressBar = document.getElementById('progress-bar');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const quizCard = document.getElementById('quiz-card');
const resultCard = document.getElementById('result-card');

let currentIndex = 0;
let score = 0;
let answered = 0;
let selected = false;

function renderQuestion() {
  selected = false;
  const current = questions[currentIndex];
  questionText.textContent = current.question;
  questionCount.textContent = `${currentIndex + 1} / ${questions.length}`;
  questionNumber.textContent = `QUESTION ${String(currentIndex + 1).padStart(2, '0')}`;
  scoreElement.textContent = score;
  answeredElement.textContent = `${answered} / ${questions.length}`;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;
  feedback.textContent = '';
  feedback.className = 'feedback';
  nextButton.disabled = true;
  nextButton.innerHTML = currentIndex === questions.length - 1
    ? 'Voir mon résultat <span>✓</span>'
    : 'Question suivante <span>→</span>';

  optionsContainer.innerHTML = '';
  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector('span:last-child').textContent = option;
    button.addEventListener('click', () => chooseAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function chooseAnswer(choice) {
  if (selected) return;
  selected = true;
  answered++;
  const correct = questions[currentIndex].answer;
  const buttons = [...optionsContainer.querySelectorAll('.option')];

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === correct) button.classList.add('correct');
    if (index === choice && choice !== correct) button.classList.add('wrong');
  });

  if (choice === correct) {
    score++;
    feedback.textContent = 'Bonne réponse !';
    feedback.className = 'feedback good';
  } else {
    feedback.textContent = `Réponse incorrecte. La bonne réponse est ${String.fromCharCode(65 + correct)}.`;
    feedback.className = 'feedback bad';
  }

  scoreElement.textContent = score;
  answeredElement.textContent = `${answered} / ${questions.length}`;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;
  nextButton.disabled = false;
}

function showResults() {
  quizCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
  document.getElementById('final-score').textContent = score;
  const percent = score / questions.length * 100;
  let message = 'Continuez vos efforts : révisez le cours et recommencez pour progresser.';
  if (percent >= 90) message = 'Excellent travail ! Vous maîtrisez très bien les notions de ces pages.';
  else if (percent >= 75) message = 'Très bon résultat ! Quelques révisions vous permettront de consolider vos acquis.';
  else if (percent >= 50) message = 'Bon début. Reprenez les notions à revoir et essayez une nouvelle fois.';
  document.getElementById('result-message').textContent = message;
}

nextButton.addEventListener('click', () => {
  if (!selected) return;
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
});

document.getElementById('restart-btn').addEventListener('click', () => {
  currentIndex = 0;
  score = 0;
  answered = 0;
  resultCard.classList.add('hidden');
  quizCard.classList.remove('hidden');
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderQuestion();
