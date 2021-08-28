const words = [
  {
    "word": "a-un",
    "languageIT": "giapponese",
    "meaningIT": "quel tipo di communicazione non verbale che c'è tra buoni amici, che si capiscono senza parlare.",
    "languageEN": "Japanese",
    "meaningEN": "The kind of nonverbal communication that exists between good friends, who understand each other without speaking."
  },
  {
    "word": "akihi",
    "languageIT": "hawaiano",
    "meaningIT": "quel momento quanto qualcuno ti dà delle indicazioni stradali o ti spiega come arrivare in un posto e tu ti dimentichi tutto un minuto dopo che hai ringraziato e ti sei incamminato.",
    "languageEN": "Hawaiian",
    "meaningEN": "That moment when someone gives you directions or explains how to get to a place and you forget all about it a minute after you say thank you and get on your way."
  },
  {
    "word": "begadang",
    "languageIT": "indonesiano",
    "meaningIT": "restare svegli tutta la notte a parlare.",
    "languageEN": "Indonesian",
    "meaningEN": "Staying up all night talking."
  },
  {
    "word": "besa",
    "languageIT": "albanese",
    "meaningIT": "una promessa inviolabile, una parola d'onore, tenere fede a un giuramento.",
    "languageEN": "Albanian",
    "meaningEN": "An inviolable promise, a word of honor, keeping an oath."
  },
  {
    "word": "cafuné",
    "languageIT": "portoghese",
    "meaningIT": "il gesto di passare le dita sui capelli della persona amata.",
    "languageEN": "Portuguese",
    "meaningEN": "The gesture of running your fingers over your loved one's hair."
  },
  {
    "word": "cheiro no cangote",
    "languageIT": "portoghese",
    "meaningIT": "strofinare la punta del naso sul collo della persona amata.",
    "languageEN": "Portuguese",
    "meaningEN": "Rub the tip of your nose on your loved one's neck."
  },
  {
    "word": "culaccino",
    "languageIT": "italiano",
    "meaningIT": "il segno lasciato sul tavolo da un bicchiere freddo.",
    "languageEN": "Italian",
    "meaningEN": "The mark left on the table by a cold glass."
  },
  {
    "word": "curglaff",
    "languageIT": "scozzese",
    "meaningIT": "la sensazione di shock e al tempo stesso di rinvigorimento che si ha quando ci si tuffa nell'acqua gelida.",
    "languageEN": "Scottish",
    "meaningEN": "The feeling of shock and at the same time invigoration that comes with diving into icy water."
  },
  {
    "word": "cwtch",
    "languageIT": "gallese",
    "meaningIT": "non un semplice anbbraccio, ma un abbraccio affettuoso e molto di più, l'abbraccio che diventa un luogo sicuro, quel luogo in cui ci sentiamo veramente a casa, tra le braccia della persona amata.",
    "languageEN": "Welsh",
    "meaningEN": "Not just an embrace, but an affectionate embrace and much more, the embrace that becomes a safe place, that place where we really feel at home, in the arms of the loved one."
  },
  {
    "word": "dap jeong nieo",
    "languageIT": "coreano",
    "meaningIT": "quando qualcuno ha già deciso che cosa vuole sentirsi dire e vuole che tu risponda come lui desidera.",
    "languageEN": "Korean",
    "meaningEN": "When someone has already decided what they want to hear and wants you to respond as they wish."
  },
  {
    "word": "dépaysement",
    "languageIT": "francese",
    "meaningIT": "la sensazione che si sente quando non si è nella propria nazione nativa.",
    "languageEN": "French",
    "meaningEN": "The feeling you get when you're not in your native country."
  },
  {
    "word": "deserascanço",
    "languageIT": "portoghese",
    "meaningIT": "quando in modo rocambolesco e con pochi mezzi a disposizione si riesce a risolvere una situazione difficile.",
    "languageEN": "Portuguese",
    "meaningEN": "When in a daring way and with few means available you manage to resolve a difficult situation."
  },
  {
    "word": "dor",
    "languageIT": "rumeno",
    "meaningIT": "la sofferenza per la separazione dalla persona amata.",
    "languageEN": "Romanian",
    "meaningEN": "The suffering of separation from a loved one."
  },
  {
    "word": "doxa",
    "languageIT": "greco",
    "meaningIT": "credenza popolare, opinione pubblica.",
    "languageEN": "Greek",
    "meaningEN": "Popular belief, public opinion."
  },
  {
    "word": "fernweh",
    "languageIT": "tedesco",
    "meaningIT": "nostalgia di posti lontani, desiderio di viaggiare.",
    "languageEN": "German",
    "meaningEN": "Nostalgia for distant places, desire to travel."
  },
  {
    "word": "filoxenia",
    "languageIT": "greco",
    "meaningIT": "amore per gli ospiti o gli stranieri.",
    "languageEN": "Greek",
    "meaningEN": "Love for guests or strangers."
  },
  {
    "word": "firgun",
    "languageIT": "ebraico",
    "meaningIT": "la gioia semplice e disinteressata per una cosa bella capitata a qualcun altro.",
    "languageEN": "Hebrew",
    "meaningEN": "Simple, unselfish joy over a good thing that happened to someone else."
  },
  {
    "word": "flâner",
    "languageIT": "francese",
    "meaningIT": "girovagare la città senza una meta con il solo scopo di godere delle bellezze.",
    "languageEN": "French",
    "meaningEN": "Wandering around the city aimlessly with the sole purpose of enjoying the sights."
  },
  {
    "word": "flechazo",
    "languageIT": "spagnolo",
    "meaningIT": "colpo di fulmine, amore a prima vista.",
    "languageEN": "Spanish",
    "meaningEN": "Love at first sight."
  },
  {
    "word": "forelsket",
    "languageIT": "danese",
    "meaningIT": "l'euforia che si prova nell'innamorarsi.",
    "languageEN": "Danish",
    "meaningEN": "The exhilaration of falling in love."
  },
  {
    "word": "frisson",
    "languageIT": "francese",
    "meaningIT": "brivido di paura, piacere ed eccitazione.",
    "languageEN": "French",
    "meaningEN": "Thrill of fear, pleasure and excitement."
  },
  {
    "word": "geborenheit",
    "languageIT": "tedesco",
    "meaningIT": "la sensazione di sicurezza che si prova stando con le persone a cui si vuole bene.",
    "languageEN": "German",
    "meaningEN": "The feeling of security that comes from being with people you love."
  },
  {
    "word": "geyelligheid",
    "languageIT": "olandese",
    "meaningIT": "il calore provato stando con le persone a cui si vuole bene.",
    "languageEN": "Dutch",
    "meaningEN": "The warmth felt being with people you love."
  },
  {
    "word": "gezelligheid",
    "languageIT": "olandese",
    "meaningIT": "convivialita’, socievolezza, confort, intimita provati in un luogo o in una situazione.",
    "languageEN": "Dutch",
    "meaningEN": "Conviviality, sociability, comfort, intimacy felt in a place or situation."
  },
  {
    "word": "gigil",
    "languageIT": "tagalog",
    "meaningIT": "la voglia di far male a qualcuno da quanto desideri toccarlo.",
    "languageEN": "Tagalog",
    "meaningEN": "The desire to hurt someone by how much you want to touch them."
  },
  {
    "word": "gjensynsglede",
    "languageIT": "norvegese",
    "meaningIT": "la felcità di incontrare qualcuno che non vedevi da molto tempo.",
    "languageEN": "Norwegian",
    "meaningEN": "The happiness of meeting someone you haven't seen in a long time."
  },
  {
    "word": "gluggaveður",
    "languageIT": "islandese",
    "meaningIT": "il meteo che è bello da vedere ma non da esserci dentro.",
    "languageEN": "Icelandic",
    "meaningEN": "The weather that is beautiful to see but not to be in."
  },
  {
    "word": "goya",
    "languageIT": "urdu",
    "meaningIT": "la sospensione dell'incredulità che serve per farsi coinvolgere da una storia o da un film.",
    "languageEN": "Urdu",
    "meaningEN": "The suspension of disbelief it takes to get caught up in a story or movie."
  },
  {
    "word": "hanyauku",
    "languageIT": "bantu",
    "meaningIT": "camminare a piedi nudi sulla sabbia calda.",
    "languageEN": "Bantu",
    "meaningEN": "Walking barefoot on hot sand."
  },
  {
    "word": "hiraeth",
    "languageIT": "gallese",
    "meaningIT": "essere lontani dal posto dove si vorrebbe essere, ma sapere che quella lontananza è necessaria.",
    "languageEN": "Welsh",
    "meaningEN": "Being far from the place where you want to be, but knowing that that distance is necessary."
  },
  {
    "word": "hoppípolla",
    "languageIT": "islandese",
    "meaningIT": "saltare nelle pozzanghere.",
    "languageEN": "Icelandic",
    "meaningEN": "Jumping in puddles."
  },
  {
    "word": "hyggelig",
    "languageIT": "danese",
    "meaningIT": "un momento o qualcosa di accogliente, amichevole, caldo, piacevole, intimo.",
    "languageEN": "Danish",
    "meaningEN": "A cozy, friendly, warm, pleasant, intimate moment or something."
  },
  {
    "word": "ikigai",
    "languageIT": "giapponese",
    "meaningIT": "quella cosa che ti piace fare e a cui tieni così tanto che ti fa alzare dal letto al mattino.",
    "languageEN": "Japanese",
    "meaningEN": "That thing you love to do and care about so much that it gets you out of bed in the morning."
  },
  {
    "word": "iktsuarpok",
    "languageIT": "inuit",
    "meaningIT": "la frustrazione che si prova quando si aspetta qualcuno in ritardo.",
    "languageEN": "Inuit",
    "meaningEN": "The frustration you feel when waiting for someone to be late."
  },
  {
    "word": "ilunga",
    "languageIT": "tshiluba",
    "meaningIT": "una persona che la prima volta perdona tutto, la seconda volta è tollerante, ma la terza non ha pietà.",
    "languageEN": "Tshiluba",
    "meaningEN": "A person who the first time forgives everything, the second time is tolerant, but the third time has no mercy."
  },
  {
    "word": "jayus",
    "languageIT": "indonesiano",
    "meaningIT": "si dice di una cosa che non fa ridere a un punto tale da risultare comica.",
    "languageEN": "Indonesian",
    "meaningEN": "It is said of something that is not funny to such a degree that it is comical."
  },
  {
    "word": "jijivisha",
    "languageIT": "indiano",
    "meaningIT": "il forte desiderio eterno di vivere e continuare a vivere.",
    "languageEN": "Indian",
    "meaningEN": "The strong eternal desire to live and continue living."
  },
  {
    "word": "kenshō",
    "languageIT": "giapponese",
    "meaningIT": "momento improvviso e fugace di illuminazione.",
    "languageEN": "Japanese",
    "meaningEN": "Sudden and fleeting moment of enlightenment."
  },
  {
    "word": "kilig",
    "languageIT": "tagalog",
    "meaningIT": "sentire le farfalle nelle stomaco quando si incontra la propria cotta.",
    "languageEN": "Tagalog",
    "meaningEN": "Feeling the butterflies in your stomach when you meet your crush."
  },
  {
    "word": "kogarashi",
    "languageIT": "giapponese",
    "meaningIT": "il primo soffio di vento che annuncia l'inverno.",
    "languageEN": "Japanese",
    "meaningEN": "The first breath of wind that announces winter."
  },
  {
    "word": "koi no yokan [恋の予感]",
    "languageIT": "giapponese",
    "meaningIT": "incontrare qualcuno e sapere di essere destinati ad innamorarsi a vicenda.",
    "languageEN": "Japanese",
    "meaningEN": "Meeting someone and knowing you are destined to fall in love with each other."
  },
  {
    "word": "komorebi",
    "languageIT": "giapponese",
    "meaningIT": "quel particolare effetto di luce che si ha quando il sole filtra attraverso le foglie sugli alberi.",
    "languageEN": "Japanese",
    "meaningEN": "That special light effect you get when the sun filters through the leaves on the trees."
  },
  {
    "word": "luftmensch",
    "languageIT": "yiddish",
    "meaningIT": "chi fa costantemente sogni ad occhi aperti.",
    "languageEN": "Yiddish",
    "meaningEN": "Someone who is constantly daydreaming."
  },
  {
    "word": "magari",
    "languageIT": "italiano",
    "meaningIT": "interiezione, ~se solo questa cosa potesse essere vera~.",
    "languageEN": "Italian",
    "meaningEN": "Interjection, ~if only this thing could be true~."
  },
  {
    "word": "mamihlapinatapai",
    "languageIT": "yamana",
    "meaningIT": "il gioco di sguardi di due persone che si piacciono e vorrebbero fare il primo passo, ma hanno paura.",
    "languageEN": "Yamana",
    "meaningEN": "The playful glance of two people who like each other and would like to take the first step, but are afraid."
  },
  {
    "word": "manabamáte",
    "languageIT": "rapa nui",
    "meaningIT": "la mancanza di appetito quando si è innamorati.",
    "languageEN": "Rapa nui",
    "meaningEN": "The lack of appetite when in love."
  },
  {
    "word": "mångata",
    "languageIT": "svedese",
    "meaningIT": "il riflesso della luna sull'acqua.",
    "languageEN": "Swedish",
    "meaningEN": "The reflection of the moon on the water."
  },
  {
    "word": "mann vaasanai",
    "languageIT": "tamil",
    "meaningIT": "l'odore della pioggia sulla terra secca.",
    "languageEN": "Tamil",
    "meaningEN": "The smell of rain on dry earth."
  },
  {
    "word": "mbuki-mvuki",
    "languageIT": "bantu",
    "meaningIT": "il desiderio di levarsi i vestiti e iniziare a ballare.",
    "languageEN": "Bantu",
    "meaningEN": "The desire to take off their clothes and start dancing."
  },
  {
    "word": "merak",
    "languageIT": "serbo",
    "meaningIT": "sentimento di amore profondo per tutto l’universo che nasce dalla capacità di apprezzare le piccole cose, come la vicinanza delle persone a cui vogliamo bene.",
    "languageEN": "Serbian",
    "meaningEN": "Feeling of deep love for the whole universe that comes from the ability to appreciate the little things, such as the closeness of the people we love."
  },
  {
    "word": "ming-gat",
    "languageIT": "indonesiano",
    "meaningIT": "andarsene per sempre senza dire addio.",
    "languageEN": "Indonesian",
    "meaningEN": "Leaving forever without saying goodbye."
  },
  {
    "word": "mo chuisle mo chroí",
    "languageIT": "gaelico",
    "meaningIT": "il battito del cuore.",
    "languageEN": "Gaelic",
    "meaningEN": "The heartbeat."
  },
  {
    "word": "mokita",
    "languageIT": "kilivila",
    "meaningIT": "una verità che tutti conoscono ma di cui nessuno parla o che nessuno ammette.",
    "languageEN": "Kilivila",
    "meaningEN": "A truth that everyone knows but no one talks about or admits."
  },
  {
    "word": "naz",
    "languageIT": "urdu",
    "meaningIT": "l'orgoglio che si prova nel sentirsi amati.",
    "languageEN": "Urdu",
    "meaningEN": "The pride you feel in feeling loved."
  },
  {
    "word": "neach-gaoil",
    "languageIT": "gaelico",
    "meaningIT": "la persona che vive dentro il tuo cuore.",
    "languageEN": "Gaelic",
    "meaningEN": "The person who lives inside your heart."
  },
  {
    "word": "nja",
    "languageIT": "svedese",
    "meaningIT": "nè sì né no.",
    "languageEN": "Swedish",
    "meaningEN": "Neither yes nor no."
  },
  {
    "word": "nonplussed",
    "languageIT": "inglese",
    "meaningIT": "quando provi qualcosa di talmente forte e contrastante che non sei in grado di descriverlo a parole.",
    "languageEN": "English",
    "meaningEN": "When you feel something so strong and conflicting that you are unable to describe it in words."
  },
  {
    "word": "nunchi",
    "languageIT": "coreano",
    "meaningIT": "l'arte di sentire e comprendere l'umore altrui.",
    "languageEN": "Korean",
    "meaningEN": "The art of feeling and understanding someone else's mood."
  },
  {
    "word": "odnoliub",
    "languageIT": "russo",
    "meaningIT": "qualcuno che ha un solo amore nella sua vita.",
    "languageEN": "Russian",
    "meaningEN": "Someone who has only one love in their life."
  },
  {
    "word": "onsay",
    "languageIT": "boro",
    "meaningIT": "fingere di amare.",
    "languageEN": "Boro",
    "meaningEN": "Pretending to love."
  },
  {
    "word": "onsra",
    "languageIT": "boro",
    "meaningIT": "la sensazione agrodolce che l'amore non durerà.",
    "languageEN": "Boro",
    "meaningEN": "The bittersweet feeling that love won't last."
  },
  {
    "word": "oodal",
    "languageIT": "tamil",
    "meaningIT": "la finta rabbia che due amanti ostentano dopo un litigio.",
    "languageEN": "Tamil",
    "meaningEN": "The feigned anger that two lovers flaunt after an argument."
  },
  {
    "word": "panapo'o",
    "languageIT": "hawaiano",
    "meaningIT": "grattarsi la testa per cercare di ricordarsi qualcosa.",
    "languageEN": "Hawaiian",
    "meaningEN": "Scratching his head trying to remember something."
  },
  {
    "word": "počemučka",
    "languageIT": "russo",
    "meaningIT": "una persona che fa e si fa troppe domande.",
    "languageEN": "Russian",
    "meaningEN": "A person asking and asking too many questions."
  },
  {
    "word": "proairesis",
    "languageIT": "greco",
    "meaningIT": "la capacità di prendere decisioni e di fare scelte secondo ragione.",
    "languageEN": "Greek",
    "meaningEN": "The ability to make decisions and choices according to reason."
  },
  {
    "word": "psithirisma",
    "languageIT": "greco",
    "meaningIT": "il suono che fa il vento quando passa fra le foglie.",
    "languageEN": "Greek",
    "meaningEN": "The sound the wind makes when it passes through leaves."
  },
  {
    "word": "qarrtsiluni",
    "languageIT": "inuit",
    "meaningIT": "sedersi con qualcuno al buio aspettando che succeda qualcosa di grosso, una sorte di quiete prima della tempesta.",
    "languageEN": "Inuit",
    "meaningEN": "Sitting with someone in the dark waiting for something big to happen, a kind of quiet before the storm."
  },
  {
    "word": "rè nào [热闹]",
    "languageIT": "cinese",
    "meaningIT": "un posto o una situazione in cui chiunque vorrebbe essere per le vibrazioni che emana.",
    "languageEN": "Chinese",
    "meaningEN": "A place or situation where anyone would like to be because of the vibrations it gives off."
  },
  {
    "word": "retrouvailles",
    "languageIT": "francese",
    "meaningIT": "la gioia di un incontro con una persona amata che avviene dopo una lunga separazione.",
    "languageEN": "French",
    "meaningEN": "The joy of a reunion with a loved one that happens after a long separation."
  },
  {
    "word": "saudade",
    "languageIT": "portoghese",
    "meaningIT": "la sensazione di desiderio per qualcuno o qualcosa che è assente, che si ama ma che potrebbe non tornare mai più.",
    "languageEN": "Portuguese",
    "meaningEN": "The feeling of longing for someone or something that is absent, that you love but may never return."
  },
  {
    "word": "schnappidee",
    "languageIT": "tedesco",
    "meaningIT": "quel piano astruso e ridicolo che ti viene in mente quando sei ubriaco e che ti porta a combinare disastri irreparabili.",
    "languageEN": "German",
    "meaningEN": "That abstruse and ridiculous plan that comes to mind when you're drunk and that leads you to make irreparable disasters."
  },
  {
    "word": "shmegegge",
    "languageIT": "yiddish",
    "meaningIT": "qualcuno che è sia un deficiente sia un leccaculo.",
    "languageEN": "Yiddish",
    "meaningEN": "Someone who is both a moron and an ass-kisser."
  },
  {
    "word": "shu",
    "languageIT": "cinese",
    "meaningIT": "mettere l'altro nel proprio cuore.",
    "languageEN": "Chinese",
    "meaningEN": "Putting the other person in your heart."
  },
  {
    "word": "sisu",
    "languageIT": "finlandese",
    "meaningIT": "perseveranza psicologica straordinaria nell'affrontare sfide molto lunghe e difficilissime.",
    "languageEN": "Finnish",
    "meaningEN": "Extraordinary psychological perseverance in facing very long and very difficult challenges."
  },
  {
    "word": "sobramesa",
    "languageIT": "spagnolo",
    "meaningIT": "il tempo passato a chiacchierare dopo un pasto socializzando con i commensali.",
    "languageEN": "Spanish",
    "meaningEN": "Time spent chatting after a meal socializing with diners."
  },
  {
    "word": "torschlusspanik",
    "languageIT": "tedesco",
    "meaningIT": "la paura che l'avanzare dell'età sia una ~porta che si chiude~ sulla possibilità di essere felici.",
    "languageEN": "German",
    "meaningEN": "Fear that advancing age is a ~closing door~ on the possibility of being happy."
  },
  {
    "word": "toska",
    "languageIT": "russo",
    "meaningIT": "sensazione di grande angoscia spirituale, spesso senza una causa specifica.",
    "languageEN": "Russian",
    "meaningEN": "Feeling of great spiritual anguish, often without a specific cause."
  },
  {
    "word": "trepvertreter",
    "languageIT": "yiddish",
    "meaningIT": "~parole di scala~, la risposta giusta che avresti dovuto dare durante una discussione ma che, come al solito, ti viene in mente quando stai andando via.",
    "languageEN": "Yiddish",
    "meaningEN": "~words of scale~, the right answer you should have given during a discussion but, as usual, it comes to you when you're leaving."
  },
  {
    "word": "turadh",
    "languageIT": "gaelico",
    "meaningIT": "gli sprazzi di azzurro intenso che si formano tra le nuvole dopo un temporale.",
    "languageEN": "Gaelic",
    "meaningEN": "The flashes of deep blue that form in the clouds after a thunderstorm."
  },
  {
    "word": "utepils",
    "languageIT": "norvegese",
    "meaningIT": "stare all’aperto in una giornata di sole bevendo una birra.",
    "languageEN": "Norwegian",
    "meaningEN": "Being outside on a sunny day drinking a beer."
  },
  {
    "word": "utsura-utsura",
    "languageIT": "giapponese",
    "meaningIT": "stare a metà tra sonno e veglia.",
    "languageEN": "Japanese",
    "meaningEN": "Being halfway between sleeping and waking."
  },
  {
    "word": "verschlimmbessern",
    "languageIT": "tedesco",
    "meaningIT": "peggiorare una situazione cercando di migliorarla.",
    "languageEN": "German",
    "meaningEN": "Making a situation worse by trying to make it better."
  },
  {
    "word": "viraha",
    "languageIT": "indiano",
    "meaningIT": "la consapevolezza di amare qualcuno durante un periodo di separazione.",
    "languageEN": "Indian",
    "meaningEN": "The realization that you love someone during a time of separation."
  },
  {
    "word": "vorfreude",
    "languageIT": "tedesco",
    "meaningIT": "~pre-felicità~, quella felicità che deriva dal pregustare una felicità futura.",
    "languageEN": "German",
    "meaningEN": "~pre-happiness~, that happiness that comes from anticipating a future happiness."
  },
  {
    "word": "vybafnout",
    "languageIT": "ceco",
    "meaningIT": "saltare fuori a sorpresa e urlare buu!.",
    "languageEN": "Czech",
    "meaningEN": "Jumping out in surprise and yelling boo."
  },
  {
    "word": "waldeinsamkeit",
    "languageIT": "tedesco",
    "meaningIT": "la sensazione di sentirsi come quando si è soli nel bosco.",
    "languageEN": "German",
    "meaningEN": "The feeling of being alone in the woods."
  },
  {
    "word": "won",
    "languageIT": "coreano",
    "meaningIT": "la difficoltà di una persona nel rinunciare a un'illusione per guardare in faccia la realtà.",
    "languageEN": "Korean",
    "meaningEN": "The difficulty of a person in giving up an illusion to face reality."
  },
  {
    "word": "ya'aburnee",
    "languageIT": "arabo",
    "meaningIT": "la speranza di morire prima di una persona amata, perchè altrimenti sarebbe insopportabile vivere senza di lei.",
    "languageEN": "Arabic",
    "meaningEN": "The hope of dying before a loved one, because otherwise it would be unbearable to live without them."
  },
  {
    "word": "yakamoz",
    "languageIT": "turco",
    "meaningIT": "il riflesso della luna sull'acqua.",
    "languageEN": "Turkish",
    "meaningEN": "The reflection of the moon on the water."
  },
  {
    "word": "yuánfèn [缘分]",
    "languageIT": "cinese",
    "meaningIT": "il caso che fa mettere insieme due persone.",
    "languageEN": "Chinese",
    "meaningEN": "The chance that brings two people together."
  },
  {
    "word": "yuugen",
    "languageIT": "giapponese",
    "meaningIT": "consapevolezza dell'universo che risveglia un sentimento troppo vasto per le parole, indica una indecifrabile profondità e la bellezza nascosta, il fascino delle cose in penombra che non si riescono a comprendere perfettamente.",
    "languageEN": "Japanese",
    "meaningEN": "Awareness of the universe that awakens a feeling too vast for words, indicates an indecipherable depth and the hidden beauty, the fascination of things in half-light that you cannot fully understand."
  },
  {
    "word": "zhaghzhagh",
    "languageIT": "persiano",
    "meaningIT": "quando ti battono i denti, per il freddo o per la rabbia.",
    "languageEN": "Persian",
    "meaningEN": "When your teeth chatter from cold or anger."
  },
  {
    "word": "querencia",
    "languageIT": "spagnolo",
    "meaningIT": "il posto in cui ci si sente pienamente sé stessi e dal quale si trae la forza, perché ci si sente a casa.",
    "languageEN": "Spanish",
    "meaningEN": "The place where you feel fully yourself and from which you draw strength, because you feel at home."
  },
  {
    "word": "notwendigkeit",
    "languageIT": "tedesco",
    "meaningIT": "ciò che non potrebbe essere altrimenti.",
    "languageEN": "German",
    "meaningEN": "What could not be otherwise."
  },
  {
    "word": "matutolypea",
    "languageIT": "inglese",
    "meaningIT": "la tristezza mattutina, l'avvilimento che ti prende ogni tanto appena sveglio e ti fa venire voglia di restare tutto il giorno sotto le coperte, al riparo dal mondo.",
    "languageEN": "English",
    "meaningEN": "The morning sadness, the despondency that sometimes seizes you as soon as you wake up and makes you want to stay under the covers all day, sheltered from the world."
  },
  {
    "word": "caim",
    "languageIT": "scozzese",
    "meaningIT": "un cerchio invisibile di protezione disegnato con la mano intorno a un essere per ricordargli che è amato e considerato, anche nei periodi più neri.",
    "languageEN": "Scottish",
    "meaningEN": "An invisible circle of protection drawn with the hand around a being to remind him that he is loved and considered, even in the darkest times."
  },
  {
    "word": "jung",
    "languageIT": "coreano",
    "meaningIT": "un'amicizia che resta tale anche dopo innumerevoli discussioni.",
    "languageEN": "Korean",
    "meaningEN": "A friendship that remains so even after countless discussions."
  },
  {
    "word": "hadia",
    "languageIT": "etiope",
    "meaningIT": "un affetto così grande e così forte da superare le barriere del tempo e arrivare lo stesso a destinazione, di solito in sogno, e, come una voce, sussurrare parole di richiamo.",
    "languageEN": "Ethiopian",
    "meaningEN": "An affection so great and so strong that it overcomes the barriers of time and still arrives at its destination, usually in a dream, and, like a voice, whispers words of recall."
  },
  {
    "word": "brillenbrillanz",
    "languageIT": "tedesco",
    "meaningIT": "la subitanea, elettrizzante sensazione di vederci chiaro con un paio di occhiali nuovi.",
    "languageEN": "German",
    "meaningEN": "The sudden, electrifying feeling of seeing clearly with a new pair of glasses."
  },
  {
    "word": "daguerrologue",
    "languageIT": "slang inglese",
    "meaningIT": "quando ti metti a guardare vecchie foto e hai un dialogo con il te stesso che eri.",
    "languageEN": "English slang",
    "meaningEN": "When you look at old photos and have a dialogue with the self you were."
  },
  {
    "word": "pâro",
    "languageIT": "slang irlandese",
    "meaningIT": "la sensazione che qualunque cosa tu faccia sia sempre in qualche modo sbagliata.",
    "languageEN": "Irish slang",
    "meaningEN": "The feeling that whatever you do is always somehow wrong."
  },
  {
    "word": "schubladenbrief",
    "languageIT": "tedesco",
    "meaningIT": "la lettera che scrivi e che non spedirai mai.",
    "languageEN": "German",
    "meaningEN": "The letter you write and never send."
  },
  {
    "word": "drachenfutter",
    "languageIT": "tedesco",
    "meaningIT": "il \"regalo del drago\", ossia il regalo che si fa per farsi perdonare qualcosa che si è combinato, ma non ancora confessato.",
    "languageEN": "German",
    "meaningEN": "The \"dragon gift\", that is, the gift you give to yourself to make up for something you have done, but not yet confessed."
  },
  {
    "word": "tuča",
    "languageIT": "russo",
    "meaningIT": "un nuvolone nero che porta pioggia.",
    "languageEN": "Russian",
    "meaningEN": "A black cloud that brings rain."
  },
  {
    "word": "song",
    "languageIT": "lingua parlata a Ifalik, un'isola dell'oceano Pacifico",
    "meaningIT": "la rabbia che ti viene quando hai la percezione di aver subito un'ingiustizia.",
    "languageEN": "Language spoken on ifalik, an island in the pacific ocean",
    "meaningEN": "The anger that comes when you feel you have suffered an injustice."
  },
  {
    "word": "shibui",
    "languageIT": "giapponese",
    "meaningIT": "la bellezza delle cose che invecchiano.",
    "languageEN": "Japanese",
    "meaningEN": "The beauty of things that grow old."
  },
  {
    "word": "augenblicksgott",
    "languageIT": "tedesco",
    "meaningIT": "una divinità minore che ti passa di fianco e in un attimo, il tempo di un battito di ciglia, ti suggerisce una risposta che cercavi da tempo, un ricordo, un'idea, qualcosa che hai passato anni a cercare e poi ci metti un istante solo a trovare.",
    "languageEN": "German",
    "meaningEN": "A minor deity who passes you by and in an instant, the time of a blink of an eye, suggests an answer you've been looking for a long time, a memory, an idea, something you've spent years searching for and then it only takes you a moment to find."
  },
  {
    "word": "amtsangst",
    "languageIT": "tedesco",
    "meaningIT": "irrazionale senso di colpevolezza anche se non hai fatto niente di male.",
    "languageEN": "German",
    "meaningEN": "Irrational sense of guilt even though you have done nothing wrong."
  },
  {
    "word": "straussmanöver",
    "languageIT": "tedesco",
    "meaningIT": "la strategia difensiva a breve termine di negare semplicemente l'evidenza.",
    "languageEN": "German",
    "meaningEN": "Short-term defensive strategy of simply denying the evidence."
  },
  {
    "word": "salagok",
    "languageIT": "inuit",
    "meaningIT": "la neve giovane e nera perché è sporca.",
    "languageEN": "Inuit",
    "meaningEN": "The young, black snow because it's dirty."
  },
  {
    "word": "tiam",
    "languageIT": "farsi",
    "meaningIT": "la scintilla negli occhi quando ci piace qualcuno.",
    "languageEN": "Farsi",
    "meaningEN": "The sparkle in our eyes when we like someone."
  },
  {
    "word": "hajnalpír",
    "languageIT": "ungherese",
    "meaningIT": "il primo rossore che appare in cielo quando il sole comincia a tramontare.",
    "languageEN": "Hungarian",
    "meaningEN": "The first blush that appears in the sky when the sun begins to set."
  },
  {
    "word": "chakravâka",
    "languageIT": "sanscrito",
    "meaningIT": "uccelli acquatici che vivono in coppia che di notte si chiamano a vicenda quando sono separati.",
    "languageEN": "Sanskrit",
    "meaningEN": "Water birds that live in pairs that call to each other at night when they are separated."
  },
  {
    "word": "schwellenangst",
    "languageIT": "tedesco",
    "meaningIT": "la paura di affrontare l'ignoto, di aprire una nuova porta.",
    "languageEN": "German",
    "meaningEN": "The fear of facing the unknown, of opening a new door."
  },
  {
    "word": "warmduscher",
    "languageIT": "tedesco",
    "meaningIT": "chi preferisce sempre una doccia tiepida: una persona che non vuole mai uscire dalla propria zona di comfort, che rifugge sia la troppa felicità sia gli eccessivi dispiaceri.",
    "languageEN": "German",
    "meaningEN": "Who always prefers a lukewarm shower: a person who never wants to get out of their comfort zone, who shuns both too much happiness and excessive sorrow."
  },
  {
    "word": "aerekjaer",
    "languageIT": "norvegese",
    "meaningIT": "un orgoglio eccessivo, portato all'estremo, che può spingere una persona a morire piuttosto che chiedere aiuto.",
    "languageEN": "Norwegian",
    "meaningEN": "Excessive pride, taken to the extreme, which can drive a person to die rather than ask for help."
  },
  {
    "word": "sciamachy",
    "languageIT": "inglese",
    "meaningIT": "lottare contro dei nemici immaginari, contro la propria ombra.",
    "languageEN": "English",
    "meaningEN": "Fighting against imaginary enemies, against one's own shadow."
  },
  {
    "word": "soviest",
    "languageIT": "russo",
    "meaningIT": "il cuore ci detta una cosa, però ne desideriamo un'altra. A quel punto interviene il soviest, che è la voce che ci dice che cosa è giusto fare.",
    "languageEN": "Russian",
    "meaningEN": "The heart dictates one thing, but we desire another. at that point the soviest intervenes, which is the voice that tells us what is right to do."
  },
  {
    "word": "ilinx",
    "languageIT": "greco",
    "meaningIT": "strana eccitazione che si prova a distruggere qualcosa.",
    "languageEN": "Greek",
    "meaningEN": "The strange excitement that comes from destroying something."
  },
  {
    "word": "psithìrisma",
    "languageIT": "greco",
    "meaningIT": "il suono che fa il vento quando passa tra le foglie.",
    "languageEN": "Greek",
    "meaningEN": "The sound the wind makes when it passes through the leaves."
  },
  {
    "word": "lippenhaftung",
    "languageIT": "tedesco",
    "meaningIT": "la persistente sensazione del primo bacio.",
    "languageEN": "German",
    "meaningEN": "The lingering feeling of the first kiss."
  },
  {
    "word": "anagapesis",
    "languageIT": "inglese",
    "meaningIT": "non essere più innamorati della persona che prima si amava.",
    "languageEN": "English",
    "meaningEN": "No longer being in love with the person you used to love."
  },
  {
    "word": "gymnophoria",
    "languageIT": "inglese",
    "meaningIT": "la sensazione che una persona ti spogli a livello mentale.",
    "languageEN": "English",
    "meaningEN": "The feeling of a person undressing you on a mental level."
  },
  {
    "word": "nagashime",
    "languageIT": "giapponese",
    "meaningIT": "guardare furtivamente una persona, distogliere gli occhi, poi guardarla di nuovo per esser certi di aver attirato la sua attenzione.",
    "languageEN": "Japanese",
    "meaningEN": "Looking furtively at a person, averting your eyes, then looking at them again to make sure you have their attention."
  },
  {
    "word": "huijijiyi",
    "languageIT": "mandarino",
    "meaningIT": "non andare dal medico per paura di scoprire di essere malati.",
    "languageEN": "Mandarin",
    "meaningEN": "Not going to the doctor for fear of finding out you are sick."
  },
  {
    "word": "fylleangst",
    "languageIT": "norvegese",
    "meaningIT": "la paura di aver fatto qualcosa che non sai cos'è.",
    "languageEN": "Norwegian",
    "meaningEN": "Fear of doing something you don't know what it is."
  },
  {
    "word": "haragei",
    "languageIT": "giapponese",
    "meaningIT": "parlare in modo chiaro, inequivocabile, ma senza usare le parole: la connessione che si crea a volte fra alcune persone che riescono a comunicare semplicemente a piccoli gesti, sguardi; una sorta di telepatia dettata dall'affetto o da una particolare affinità elettiva.",
    "languageEN": "Japanese",
    "meaningEN": "Speak clearly, unequivocally, but without using words: the connection that is sometimes created between some people who can communicate simply with small gestures, glances; a kind of telepathy dictated by affection or a particular elective affinity."
  },
  {
    "word": "tacenda",
    "languageIT": "latino",
    "meaningIT": "le cose che bisogna tacere, che è meglio non dire direttamente.",
    "languageEN": "Latin",
    "meaningEN": "The things you need to keep silent, that it is better not to say directly."
  },
  {
    "word": "glossofobia",
    "languageIT": "italiano",
    "meaningIT": "la paura di parlare in pubblico.",
    "languageEN": "Italian",
    "meaningEN": "The fear of speaking in public."
  },
  {
    "word": "ataoso",
    "languageIT": "spagnolo centroamericano",
    "meaningIT": "una persona che riesce a trovare problemi ovunque. Qualcuno che perfino quando va tutto liscio si preoccupa perché gli sembra strano che vada tutto liscio.",
    "languageEN": "Central american spanish",
    "meaningEN": "Someone who can find problems everywhere. someone who even when everything is going smoothly worries because it seems strange to him that everything is going smoothly."
  },
  {
    "word": "kacakka",
    "languageIT": "lingua tulu dell'India",
    "meaningIT": "il rumore della pietra che cade nel fango.",
    "languageEN": "Tulu language of india",
    "meaningEN": "The sound of stone falling into mud."
  },
  {
    "word": "blart",
    "languageIT": "gaelico",
    "meaningIT": "cadere dritti nel fango.",
    "languageEN": "Gaelic",
    "meaningEN": "Fall straight into the mud."
  },
  {
    "word": "atorarse",
    "languageIT": "messicano",
    "meaningIT": "quando cadi perché smetti di funzionare, perché senti che hai il motore che ti va in panne e lì è come sfaldarsi.",
    "languageEN": "Mexican",
    "meaningEN": "When you fall because you stop working, because you feel like your engine is failing you and that's when it's like falling apart."
  },
  {
    "word": "kìrìpa",
    "languageIT": "senegalese",
    "meaningIT": "cadere e finire in ginocchio, quindi in qualche modo cadere e perdere tutto quello che avevi.",
    "languageEN": "Senegalese",
    "meaningEN": "Falling and ending up on your knees, so somehow falling and losing everything you had."
  },
  {
    "word": "ijirashii",
    "languageIT": "giapponese",
    "meaningIT": "il restare colpiti e commossi nel vedere che una persona parte in svantaggio ma riesce a superare un ostacolo o a portare a termine un'impresa degna di elogi.",
    "languageEN": "Japanese",
    "meaningEN": "The being impressed and moved to see that a person starts at a disadvantage but manages to overcome an obstacle or complete a feat worthy of praise."
  },
  {
    "word": "aizō",
    "languageIT": "giapponese",
    "meaningIT": "amore e odio, o odio e amore. Tutto insieme.",
    "languageEN": "Japanese",
    "meaningEN": "Love and hate, or hate and love. all at once."
  },
  {
    "word": "żal",
    "languageIT": "polacco",
    "meaningIT": "la rabbia e insieme la malinconia che scaturiscono da una perdita irreparabile.",
    "languageEN": "Polish",
    "meaningEN": "The anger and melancholy that come with irreparable loss."
  },
  {
    "word": "kaukokaipuu",
    "languageIT": "finlandese",
    "meaningIT": "la nostalgia di un posto in cui non siamo mai stati.",
    "languageEN": "Finnish",
    "meaningEN": "The nostalgia for a place we've never been."
  },
  {
    "word": "sonntagsleerung",
    "languageIT": "tedesco",
    "meaningIT": "la depressione della domenica pomeriggio.",
    "languageEN": "German",
    "meaningEN": "The sunday afternoon depression."
  },
  {
    "word": "kekau",
    "languageIT": "indonesiano",
    "meaningIT": "svegliarsi da un incubo.",
    "languageEN": "Indonesian",
    "meaningEN": "Waking up from a nightmare."
  },
  {
    "word": "basorexia",
    "languageIT": "inglese",
    "meaningIT": "il desiderio irrefrenabile di baciare qualcuno.",
    "languageEN": "English",
    "meaningEN": "The overwhelming desire to kiss someone."
  },
  {
    "word": "karelụ",
    "languageIT": "hindi",
    "meaningIT": "quei segni sulla pelle che ti vengono quando indossi qualcosa di troppo stretto.",
    "languageEN": "Hindi",
    "meaningEN": "Those marks on your skin that come when you wear something too tight."
  },
  {
    "word": "abhiman",
    "languageIT": "sanscrito",
    "meaningIT": "quella rabbia che proviamo quando a farci del male è qualcuno che amiamo, quando qualcuno che amiamo ci provoca un dolore e al tempo stesso non riusciamo a fare a meno di amarlo.",
    "languageEN": "Sanskrit",
    "meaningEN": "That anger we feel when someone we love hurts us, when someone we love causes us pain and at the same time we can't help but love them."
  },
  {
    "word": "samlunano",
    "languageIT": "esperanto",
    "meaningIT": "chi viene dalla stessa luna: si dice di persone che sono strane per tutti, ma che fra di loro si riconoscono.",
    "languageEN": "Esperanto",
    "meaningEN": "Who comes from the same moon: it is said of people who are strange to everyone, but that among themselves they recognize each other."
  },
  {
    "word": "bloßë",
    "languageIT": "tedesco",
    "meaningIT": "mettersi a nudo, scoprire il proprio punto debole. I tedeschi la usano nella scherma, proprio per indicare il momento in cui permetti al tuo avversario di colpirti e farti male.",
    "languageEN": "German",
    "meaningEN": "To lay oneself bare, to discover one's weakness. the germans use it in fencing, precisely to indicate the moment when you allow your opponent to hit you and hurt you."
  },
  {
    "word": "mononoke",
    "languageIT": "giapponese",
    "meaningIT": "una situazione assurda, inspiegabile razionalmente.",
    "languageEN": "Japanese",
    "meaningEN": "An absurd situation, inexplicable rationally."
  },
  {
    "word": "kairòs",
    "languageIT": "greco",
    "meaningIT": "l'esatto istante, il momento giusto, quello irripetibile che accade una volta soltanto e poi non accade più.",
    "languageEN": "Greek",
    "meaningEN": "The exact moment, the right moment, the unrepeatable one that happens only once and then never happens again."
  },
  {
    "word": "ohrwurm",
    "languageIT": "tedesco",
    "meaningIT": "quel ritornello, quella canzone, quella musica che senti al mattino e poi non te la levi più dalla testa.",
    "languageEN": "German",
    "meaningEN": "That refrain, that song, that music that you hear in the morning and then you can't get it out of your head."
  },
  {
    "word": "fremdschämen",
    "languageIT": "tedesco",
    "meaningIT": "l'imbarazzo che proviamo quando a finire in una situazione incresciosa è un nostro amico o amica, una specie di vergogna di riflesso.",
    "languageEN": "German",
    "meaningEN": "The embarrassment we feel when one of our friends ends up in an unfortunate situation, a kind of reflex shame."
  },
  {
    "word": "kyrvänsyylä",
    "languageIT": "finlandese",
    "meaningIT": "che ha le pustole sul pene.",
    "languageEN": "Finnish",
    "meaningEN": "Who has pustules on his penis."
  },
  {
    "word": "kùkulabbi",
    "languageIT": "islandese",
    "meaningIT": "una merda che cammina su due gambe.",
    "languageEN": "Icelandic",
    "meaningEN": "A shit that walks on two legs."
  },
  {
    "word": "schnüffler",
    "languageIT": "tedesco",
    "meaningIT": "significa uno a cui piace frugare nella merda.",
    "languageEN": "German",
    "meaningEN": "Means one who likes to poke around in shit."
  },
  {
    "word": "govnoed",
    "languageIT": "russo",
    "meaningIT": "uno a cui piace mangiare la merda.",
    "languageEN": "Russian",
    "meaningEN": "One who likes to eat shit."
  },
  {
    "word": "asaṃkhyeya",
    "languageIT": "sanscrito",
    "meaningIT": "impossibile da contare, il numero più alto che si possa concepire.",
    "languageEN": "Sanskrit",
    "meaningEN": "Impossible to count, the highest number one can conceive of."
  },
  {
    "word": "pūangi",
    "languageIT": "maori",
    "meaningIT": "la sensazione di avere lo stomaco in fondo ai piedi, tipica di quando sei in aereo e ci sono dei cali di pressione o quando sali sulle montagne russe.",
    "languageEN": "Maori",
    "meaningEN": "The feeling of having your stomach in the bottom of your feet, typical of when you're on a plane and there are drops in pressure or when you get on a roller coaster."
  },
  {
    "word": "alkhilaba",
    "languageIT": "arabo",
    "meaningIT": "quella sensazione di quando il cuore è d'accordo e dice di sì, mentre c'è al tempo stesso l'oscura cavità addominale che dice di no.",
    "languageEN": "Arabic",
    "meaningEN": "That feeling when your heart agrees and says yes, while at the same time there is the dark abdominal cavity that says no."
  },
  {
    "word": "meraki",
    "languageIT": "greco",
    "meaningIT": "quando ti impegni così tanto nel fare qualcosa che poi, quando hai finito, dentro ci vedi una parte di te.",
    "languageEN": "Greek",
    "meaningEN": "When you put so much effort into doing something that when you're done, you see a part of you in it."
  },
  {
    "word": "buksvåger",
    "languageIT": "svedese",
    "meaningIT": "due persone che si conoscono e che hanno avuto lo stesso ragazzo.",
    "languageEN": "Swedish",
    "meaningEN": "Two people who know each other and have had the same boyfriend."
  },
  {
    "word": "dokidoki",
    "languageIT": "giapponese",
    "meaningIT": "quei battiti accelerati del cuore a causa di una brutta sorpresa.",
    "languageEN": "Japanese",
    "meaningEN": "Those accelerated heartbeats because of a bad surprise."
  },
  {
    "word": "muwaswas",
    "languageIT": "arabo",
    "meaningIT": "quando sei ossessionato dalle tue delusioni.",
    "languageEN": "Arabic",
    "meaningEN": "When you obsess over your disappointments."
  },
  {
    "word": "lìtost",
    "languageIT": "ceco",
    "meaningIT": "quella specie di rabbia che ti viene per chi ti sorprende in un momento difficile, o in un momento in cui fai qualcosa di sbagliato.",
    "languageEN": "Czech",
    "meaningEN": "That kind of rage you get over whoever surprises you at a bad time, or at a time when you do something wrong."
  },
  {
    "word": "alessitimia",
    "languageIT": "italiano",
    "meaningIT": "l'incapacità di dare un nome a quello che si prova, una specie di analfabetismo sentimentale.",
    "languageEN": "Italian",
    "meaningEN": "The inability to name what you feel, a kind of sentimental illiteracy."
  },
  {
    "word": "eheren",
    "languageIT": "tuareg",
    "meaningIT": "quella linea bianca che spunta all'orizzonte al termine della notte.",
    "languageEN": "Tuareg",
    "meaningEN": "That white line that pops up on the horizon at the end of the night."
  },
  {
    "word": "latah",
    "languageIT": "indonesiano",
    "meaningIT": "l'abitudine incontrollabile a dire cose imbarazzanti.",
    "languageEN": "Indonesian",
    "meaningEN": "The uncontrollable habit of saying embarrassing things."
  },
  {
    "word": "lalochezia",
    "languageIT": "inglese",
    "meaningIT": "il senso di sollievo che si prova dopo aver imprecato o usato un linguaggio volgare.",
    "languageEN": "English",
    "meaningEN": "The sense of relief you feel after swearing or using foul language."
  },
  {
    "word": "koi no yokan",
    "languageIT": "giapponese",
    "meaningIT": "quando vedi una persona e anche senza conoscerla senti che tu e lei siete in qualche modo destinati a stare insieme. Neanche ci devi parlare, ci scambi solo mezzo sguardo, e già sei sicuro che succederà così, come una premonizione.",
    "languageEN": "Japanese",
    "meaningEN": "When you see someone and even without knowing them you feel that you and they are somehow meant to be together. you don't even have to talk to them, you just exchange half a glance, and you're already sure it's going to happen like that, like a premonition."
  },
  {
    "word": "oime",
    "languageIT": "giapponese",
    "meaningIT": "quel disagio che si prova quando qualcuno ci ha fatto un regalo o un favore e non ci siamo ancora sdebitati.",
    "languageEN": "Japanese",
    "meaningEN": "That discomfort you feel when someone has given you a gift or a favor and you haven't paid them back yet."
  },
  {
    "word": "bammelbegierde",
    "languageIT": "tedesco",
    "meaningIT": "l'attrazione inesorabile che a volte tutti abbiamo per qualcosa di cui abbiamo paura o che riteniamo potenzialmente spiacevole.",
    "languageEN": "German",
    "meaningEN": "The unrelenting attraction we all have at times to something we are afraid of or feel is potentially unpleasant."
  },
  {
    "word": "greng-jay",
    "languageIT": "thailandese",
    "meaningIT": "quando sei riluttante o proprio addirittura ti rifiuti di accettare l'offerta di aiuto da parte di qualcuno per via del disagio che gli provocheresti.",
    "languageEN": "Thai",
    "meaningEN": "When you are reluctant or even refuse to accept someone's offer of help because of the discomfort you would cause them."
  },
  {
    "word": "textpectation",
    "languageIT": "inglese",
    "meaningIT": "il senso di ansia avvertito in attesa della risposta al messaggio inviato.",
    "languageEN": "English",
    "meaningEN": "The sense of anxiety felt while waiting for a response to the message you sent."
  },
  {
    "word": "oogstrelend",
    "languageIT": "olandese",
    "meaningIT": "accarezzare con lo sguardo, solo con lo sguardo.",
    "languageEN": "Dutch",
    "meaningEN": "Fondling with your gaze, just with your gaze."
  },
  {
    "word": "monachopsis",
    "languageIT": "inglese",
    "meaningIT": "la persistente sensazione che, ovunque vai, sei comunque fuori posto.",
    "languageEN": "English",
    "meaningEN": "The persistent feeling that, wherever you go, you're out of place anyway."
  },
  {
    "word": "whānau",
    "languageIT": "maori",
    "meaningIT": "la famiglia oltre la famiglia, le persone che senti come famiglia anche senza che ci sia alcun legame di sangue.",
    "languageEN": "Maori",
    "meaningEN": "The family beyond family, the people you feel are family even without any blood ties."
  },
  {
    "word": "aimonomia",
    "languageIT": "inglese",
    "meaningIT": "la paura di dare un nome a qualcosa, perché senti che se glielo dai, poi un po' quella cosa sparisce, perde la sua magia.",
    "languageEN": "English",
    "meaningEN": "The fear of giving a name to something, because you feel that if you give it a name, then it disappears, it loses its magic."
  }
]
export default words