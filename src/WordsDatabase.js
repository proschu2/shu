const words = [
  {
    word: "a-un",
    language: "giapponese",
    meaning:
      "quel tipo di communicazione non verbale che c'è tra buoni amici, che si capiscono senza parlare.",
  },
  {
    word: "akihi",
    language: "hawaiano",
    meaning:
      "quel momento quanto qualcuno ti dà delle indicazioni stradali o ti spiega come arrivare in un posto e tu ti dimentichi tutto un minuto dopo che hai ringraziato e ti sei incamminato.",
  },
  {
    word: "begadang",
    language: "indonesiano",
    meaning: "restare svegli tutta la notte a parlare.",
  },
  {
    word: "besa",
    language: "albanese",
    meaning:
      "una promessa inviolabile, una parola d'onore, tenere fede a un giuramento.",
  },
  {
    word: "cafuné",
    language: "portoghese",
    meaning: "il gesto di passare le dita sui capelli della persona amata.",
  },
  {
    word: "cheiro no cangote",
    language: "portoghese",
    meaning: "strofinare la punta del naso sul collo della persona amata.",
  },
  {
    word: "culaccino",
    language: "italiano",
    meaning: "il segno lasciato sul tavolo da un bicchiere freddo.",
  },
  {
    word: "curglaff",
    language: "scozzese",
    meaning:
      "la sensazione di shock e al tempo stesso di rinvigorimento che si ha quando ci si tuffa nell'acqua gelida.",
  },
  {
    word: "cwtch",
    language: "gallese",
    meaning:
      "non un semplice anbbraccio, ma un abbraccio affettuoso e molto di più, l'abbraccio che diventa un luogo sicuro, quel luogo in cui ci sentiamo veramente a casa, tra le braccia della persona amata.",
  },
  {
    word: "dap jeong nieo",
    language: "coreano",
    meaning:
      "quando qualcuno ha già deciso che cosa vuole sentirsi dire e vuole che tu risponda come lui desidera.",
  },
  {
    word: "dépaysement",
    language: "francese",
    meaning:
      "la sensazione che si sente quando non si è nella propria nazione nativa.",
  },
  {
    word: "deserascanço",
    language: "portoghese",
    meaning:
      "quando in modo rocambolesco e con pochi mezzi a disposizione si riesce a risolvere una situazione difficile.",
  },
  {
    word: "dor",
    language: "rumeno",
    meaning: "la sofferenza per la separazione dalla persona amata.",
  },
  {
    word: "doxa",
    language: "greco",
    meaning: "credenza popolare, opinione pubblica.",
  },
  {
    word: "fernweh",
    language: "tedesco",
    meaning: "nostalgia di posti lontani, desiderio di viaggiare.",
  },
  {
    word: "filoxenia",
    language: "greco",
    meaning: "amore per gli ospiti o gli stranieri.",
  },
  {
    word: "firgun",
    language: "ebraico",
    meaning:
      "la gioia semplice e disinteressata per una cosa bella capitata a qualcun altro.",
  },
  {
    word: "flâner",
    language: "francese",
    meaning:
      "girovagare la città senza una meta con il solo scopo di godere delle bellezze.",
  },
  {
    word: "flechazo",
    language: "spagnolo",
    meaning: "colpo di fulmine, amore a prima vista.",
  },
  {
    word: "forelsket",
    language: "danese",
    meaning: "l'euforia che si prova nell'innamorarsi.",
  },
  {
    word: "frisson",
    language: "francese",
    meaning: "brivido di paura, piacere ed eccitazione.",
  },
  {
    word: "geborenheit",
    language: "tedesco",
    meaning:
      "la sensazione di sicurezza che si prova stando con le persone a cui si vuole bene.",
  },
  {
    word: "geyelligheid",
    language: "olandese",
    meaning: "il calore provato stando con le persone a cui si vuole bene.",
  },
  {
    word: "gezelligheid",
    language: "olandese",
    meaning:
      "convivialita’, socievolezza, confort, intimita provati in un luogo o in una situazione.",
  },
  {
    word: "gigil",
    language: "tagalog",
    meaning: "la voglia di far male a qualcuno da quanto desideri toccarlo.",
  },
  {
    word: "gjensynsglede",
    language: "norvegese",
    meaning: "la felcità di incontrare qualcuno che non vedevi da molto tempo.",
  },
  {
    word: "gluggaveður",
    language: "islandese",
    meaning: "il meteo che è bello da vedere ma non da esserci dentro.",
  },
  {
    word: "goya",
    language: "urdu",
    meaning:
      "la sospensione dell'incredulità che serve per farsi coinvolgere da una storia o da un film.",
  },
  {
    word: "hanyauku",
    language: "bantu",
    meaning: "camminare a piedi nudi sulla sabbia calda.",
  },
  {
    word: "hiraeth",
    language: "gallese",
    meaning:
      "essere lontani dal posto dove si vorrebbe essere, ma sapere che quella lontananza è necessaria.",
  },
  {
    word: "hoppípolla",
    language: "islandese",
    meaning: "saltare nelle pozzanghere.",
  },
  {
    word: "hyggelig",
    language: "danese",
    meaning:
      "un momento o qualcosa di accogliente, amichevole, caldo, piacevole, intimo.",
  },
  {
    word: "ikigai",
    language: "giapponese",
    meaning:
      "quella cosa che ti piace fare e a cui tieni così tanto che ti fa alzare dal letto al mattino.",
  },
  {
    word: "iktsuarpok",
    language: "inuit",
    meaning:
      "la frustrazione che si prova quando si aspetta qualcuno in ritardo.",
  },
  {
    word: "ilunga",
    language: "tshiluba",
    meaning:
      "una persona che la prima volta perdona tutto, la seconda volta è tollerante, ma la terza non ha pietà.",
  },
  {
    word: "jayus",
    language: "indonesiano",
    meaning:
      "si dice di una cosa che non fa ridere a un punto tale da risultare comica.",
  },
  {
    word: "jijivisha",
    language: "indiano",
    meaning: "il forte desiderio eterno di vivere e continuare a vivere.",
  },
  {
    word: "kenshō",
    language: "giapponese",
    meaning: "momento improvviso e fugace di illuminazione.",
  },
  {
    word: "kilig",
    language: "tagalog",
    meaning:
      "sentire le farfalle nelle stomaco quando si incontra la propria cotta.",
  },
  {
    word: "kogarashi",
    language: "giapponese",
    meaning: "il primo soffio di vento che annuncia l'inverno.",
  },
  {
    word: "koi no yokan [恋の予感]",
    language: "giapponese",
    meaning:
      "incontrare qualcuno e sapere di essere destinati ad innamorarsi a vicenda.",
  },
  {
    word: "komorebi",
    language: "giapponese",
    meaning:
      "quel particolare effetto di luce che si ha quando il sole filtra attraverso le foglie sugli alberi.",
  },
  {
    word: "luftmensch",
    language: "yiddish",
    meaning: "chi fa costantemente sogni ad occhi aperti.",
  },
  {
    word: "magari",
    language: "italiano",
    meaning: "interiezione, ~se solo questa cosa potesse essere vera~.",
  },
  {
    word: "mamihlapinatapai",
    language: "yamana",
    meaning:
      "il gioco di sguardi di due persone che si piacciono e vorrebbero fare il primo passo, ma hanno paura.",
  },
  {
    word: "manabamáte",
    language: "rapa nui",
    meaning: "la mancanza di appetito quando si è innamorati.",
  },
  {
    word: "mångata",
    language: "svedese",
    meaning: "il riflesso della luna sull'acqua.",
  },
  {
    word: "mann vaasanai",
    language: "tamil",
    meaning: "l'odore della pioggia sulla terra secca.",
  },
  {
    word: "mbuki-mvuki",
    language: "bantu",
    meaning: "il desiderio di levarsi i vestiti e iniziare a ballare.",
  },
  {
    word: "merak",
    language: "serbo",
    meaning:
      "sentimento di amore profondo per tutto l’universo che nasce dalla capacità di apprezzare le piccole cose, come la vicinanza delle persone a cui vogliamo bene.",
  },
  {
    word: "ming-gat",
    language: "indonesiano",
    meaning: "andarsene per sempre senza dire addio.",
  },
  {
    word: "mo chuisle mo chroí",
    language: "gaelico",
    meaning: "il battito del cuore.",
  },
  {
    word: "mokita",
    language: "kilivila",
    meaning:
      "una verità che tutti conoscono ma di cui nessuno parla o che nessuno ammette.",
  },
  {
    word: "naz",
    language: "urdu",
    meaning: "l'orgoglio che si prova nel sentirsi amati.",
  },
  {
    word: "neach-gaoil",
    language: "gaelico",
    meaning: "la persona che vive dentro il tuo cuore.",
  },
  { word: "nja", language: "svedese", meaning: "nè sì né no." },
  {
    word: "nonplussed",
    language: "inglese",
    meaning:
      "quando provi qualcosa di talmente forte e contrastante che non sei in grado di descriverlo a parole.",
  },
  {
    word: "nunchi",
    language: "coreano",
    meaning: "l'arte di sentire e comprendere l'umore altrui.",
  },
  {
    word: "odnoliub",
    language: "russo",
    meaning: "qualcuno che ha un solo amore nella sua vita.",
  },
  { word: "onsay", language: "boro", meaning: "fingere di amare." },
  {
    word: "onsra",
    language: "boro",
    meaning: "la sensazione agrodolce che l'amore non durerà.",
  },
  {
    word: "oodal",
    language: "tamil",
    meaning: "la finta rabbia che due amanti ostentano dopo un litigio.",
  },
  {
    word: "panapo'o",
    language: "hawaiano",
    meaning: "grattarsi la testa per cercare di ricordarsi qualcosa.",
  },
  {
    word: "počemučka",
    language: "russo",
    meaning: "una persona che fa e si fa troppe domande.",
  },
  {
    word: "proairesis",
    language: "greco",
    meaning:
      "la capacità di prendere decisioni e di fare scelte secondo ragione.",
  },
  {
    word: "psithirisma",
    language: "greco",
    meaning: "il suono che fa il vento quando passa fra le foglie.",
  },
  {
    word: "qarrtsiluni",
    language: "inuit",
    meaning:
      "sedersi con qualcuno al buio aspettando che succeda qualcosa di grosso, una sorte di quiete prima della tempesta.",
  },
  {
    word: "rè nào [热闹]",
    language: "cinese",
    meaning:
      "un posto o una situazione in cui chiunque vorrebbe essere per le vibrazioni che emana.",
  },
  {
    word: "retrouvailles",
    language: "francese",
    meaning:
      "la gioia di un incontro con una persona amata che avviene dopo una lunga separazione.",
  },
  {
    word: "saudade",
    language: "portoghese",
    meaning:
      "la sensazione di desiderio per qualcuno o qualcosa che è assente, che si ama ma che potrebbe non tornare mai più.",
  },
  {
    word: "schnappidee",
    language: "tedesco",
    meaning:
      "quel piano astruso e ridicolo che ti viene in mente quando sei ubriaco e che ti porta a combinare disastri irreparabili.",
  },
  {
    word: "shmegegge",
    language: "yiddish",
    meaning: "qualcuno che è sia un deficiente sia un leccaculo.",
  },
  {
    word: "shu",
    language: "cinese",
    meaning: "mettere l'altro nel proprio cuore.",
  },
  {
    word: "sisu",
    language: "finlandese",
    meaning:
      "perseveranza psicologica straordinaria nell'affrontare sfide molto lunghe e difficilissime.",
  },
  {
    word: "sobramesa",
    language: "spagnolo",
    meaning:
      "il tempo passato a chiacchierare dopo un pasto socializzando con i commensali.",
  },
  {
    word: "torschlusspanik",
    language: "tedesco",
    meaning:
      "la paura che l'avanzare dell'età sia una ~porta che si chiude~ sulla possibilità di essere felici.",
  },
  {
    word: "toska",
    language: "russo",
    meaning:
      "sensazione di grande angoscia spirituale, spesso senza una causa specifica.",
  },
  {
    word: "trepvertreter",
    language: "yiddish",
    meaning:
      "~parole di scala~, la risposta giusta che avresti dovuto dare durante una discussione ma che, come al solito, ti viene in mente quando stai andando via.",
  },
  {
    word: "turadh",
    language: "gaelico",
    meaning:
      "gli sprazzi di azzurro intenso che si formano tra le nuvole dopo un temporale.",
  },
  {
    word: "utepils",
    language: "norvegese",
    meaning: "stare all’aperto in una giornata di sole bevendo una birra.",
  },
  {
    word: "utsura-utsura",
    language: "giapponese",
    meaning: "stare a metà tra sonno e veglia.",
  },
  {
    word: "verschlimmbessern",
    language: "tedesco",
    meaning: "peggiorare una situazione cercando di migliorarla.",
  },
  {
    word: "viraha",
    language: "indiano",
    meaning:
      "la consapevolezza di amare qualcuno durante un periodo di separazione.",
  },
  {
    word: "vorfreude",
    language: "tedesco",
    meaning:
      "~pre-felicità~, quella felicità che deriva dal pregustare una felicità futura.",
  },
  {
    word: "vybafnout",
    language: "ceco",
    meaning: "saltare fuori a sorpresa e urlare buu!.",
  },
  {
    word: "waldeinsamkeit",
    language: "tedesco",
    meaning: "la sensazione di sentirsi come quando si è soli nel bosco.",
  },
  {
    word: "won",
    language: "coreano",
    meaning:
      "la difficoltà di una persona nel rinunciare a un'illusione per guardare in faccia la realtà.",
  },
  {
    word: "ya'aburnee",
    language: "arabo",
    meaning:
      "la speranza di morire prima di una persona amata, perchè altrimenti sarebbe insopportabile vivere senza di lei.",
  },
  {
    word: "yakamoz",
    language: "turco",
    meaning: "il riflesso della luna sull'acqua.",
  },
  {
    word: "yuánfèn [缘分]",
    language: "cinese",
    meaning: "il caso che fa mettere insieme due persone.",
  },
  {
    word: "yuugen",
    language: "giapponese",
    meaning:
      "consapevolezza dell'universo che risveglia un sentimento troppo vasto per le parole, indica una indecifrabile profondità e la bellezza nascosta, il fascino delle cose in penombra che non si riescono a comprendere perfettamente.",
  },
  {
    word: "zhaghzhagh",
    language: "persiano",
    meaning: "quando ti battono i denti, per il freddo o per la rabbia.",
  },
  {
    word: "querencia",
    language: "spagnolo",
    meaning:
      "il posto in cui ci si sente pienamente sé stessi e dal quale si trae la forza, perché ci si sente a casa.",
  },
  {
    word: "notwendigkeit",
    language: "tedesco",
    meaning: "ciò che non potrebbe essere altrimenti.",
  },
  {
    word: "matutolypea",
    language: "inglese",
    meaning:
      "la tristezza mattutina, l'avvilimento che ti prende ogni tanto appena sveglio e ti fa venire voglia di restare tutto il giorno sotto le coperte, al riparo dal mondo.",
  },
  {
    word: "caim",
    language: "scozzese",
    meaning:
      "un cerchio invisibile di protezione disegnato con la mano intorno a un essere per ricordargli che è amato e considerato, anche nei periodi più neri.",
  },
  {
    word: "jung",
    language: "coreano",
    meaning: "un'amicizia che resta tale anche dopo innumerevoli discussioni.",
  },
  {
    word: "hadia",
    language: "etiope",
    meaning:
      "un affetto così grande e così forte da superare le barriere del tempo e arrivare lo stesso a destinazione, di solito in sogno, e, come una voce, sussurrare parole di richiamo.",
  },
  {
    word: "brillenbrillanz",
    language: "tedesco",
    meaning:
      "la subitanea, elettrizzante sensazione di vederci chiaro con un paio di occhiali nuovi.",
  },
  {
    word: "daguerrologue",
    language: "slang inglese",
    meaning:
      "quando ti metti a guardare vecchie foto e hai un dialogo con il te stesso che eri.",
  },
  {
    word: "pâro",
    language: "slang irlandese",
    meaning:
      "la sensazione che qualunque cosa tu faccia sia sempre in qualche modo sbagliata.",
  },
  {
    word: "schubladenbrief",
    language: "tedesco",
    meaning: "la lettera che scrivi e che non spedirai mai.",
  },
  {
    word: "drachenfutter",
    language: "tedesco",
    meaning:
      'il "regalo del drago", ossia il regalo che si fa per farsi perdonare qualcosa che si è combinato, ma non ancora confessato.',
  },
  {
    word: "tuča",
    language: "russo",
    meaning: "un nuvolone nero che porta pioggia.",
  },
  {
    word: "song",
    language: "lingua parlata a Ifalik, un'isola dell'oceano Pacifico",
    meaning:
      "la rabbia che ti viene quando hai la percezione di aver subito un'ingiustizia.",
  },
  {
    word: "shibui",
    language: "giapponese",
    meaning: "la bellezza delle cose che invecchiano.",
  },
  {
    word: "augenblicksgott",
    language: "tedesco",
    meaning:
      "una divinità minore che ti passa di fianco e in un attimo, il tempo di un battito di ciglia, ti suggerisce una risposta che cercavi da tempo, un ricordo, un'idea, qualcosa che hai passato anni a cercare e poi ci metti un istante solo a trovare.",
  },
  {
    word: "amtsangst",
    language: "tedesco",
    meaning:
      "irrazionale senso di colpevolezza anche se non hai fatto niente di male.",
  },
  {
    word: "straussmanöver",
    language: "tedesco",
    meaning:
      "la strategia difensiva a breve termine di negare semplicemente l'evidenza.",
  },
  {
    word: "salagok",
    language: "inuit",
    meaning: "la neve giovane e nera perché è sporca.",
  },
  {
    word: "tiam",
    language: "farsi",
    meaning: "la scintilla negli occhi quando ci piace qualcuno.",
  },
  {
    word: "hajnalpír",
    language: "ungherese",
    meaning:
      "il primo rossore che appare in cielo quando il sole comincia a tramontare.",
  },
  {
    word: "chakravâka",
    language: "sanscrito",
    meaning:
      "uccelli acquatici che vivono in coppia che di notte si chiamano a vicenda quando sono separati.",
  },
  {
    word: "schwellenangst",
    language: "tedesco",
    meaning: "la paura di affrontare l'ignoto, di aprire una nuova porta.",
  },
  {
    word: "warmduscher",
    language: "tedesco",
    meaning:
      "chi preferisce sempre una doccia tiepida: una persona che non vuole mai uscire dalla propria zona di comfort, che rifugge sia la troppa felicità sia gli eccessivi dispiaceri.",
  },
  {
    word: "aerekjaer",
    language: "norvegese",
    meaning:
      "un orgoglio eccessivo, portato all'estremo, che può spingere una persona a morire piuttosto che chiedere aiuto.",
  },
  {
    word: "sciamachy",
    language: "inglese",
    meaning: "lottare contro dei nemici immaginari, contro la propria ombra.",
  },
  {
    word: "soviest",
    language: "russo",
    meaning:
      "il cuore ci detta una cosa, però ne desideriamo un'altra. A quel punto interviene il soviest, che è la voce che ci dice che cosa è giusto fare.",
  },
  {
    word: "ilinx",
    language: "greco",
    meaning: "strana eccitazione che si prova a distruggere qualcosa.",
  },
  {
    word: "psithìrisma",
    language: "greco",
    meaning: "il suono che fa il vento quando passa tra le foglie.",
  },
  {
    word: "lippenhaftung",
    language: "tedesco",
    meaning: "la persistente sensazione del primo bacio.",
  },
  {
    word: "anagapesis",
    language: "inglese",
    meaning: "non essere più innamorati della persona che prima si amava.",
  },
  {
    word: "gymnophoria",
    language: "inglese",
    meaning: "la sensazione che una persona ti spogli a livello mentale.",
  },
  {
    word: "nagashime",
    language: "giapponese",
    meaning:
      "guardare furtivamente una persona, distogliere gli occhi, poi guardarla di nuovo per esser certi di aver attirato la sua attenzione.",
  },
  {
    word: "huijijiyi",
    language: "mandarino",
    meaning: "non andare dal medico per paura di scoprire di essere malati.",
  },
  {
    word: "fylleangst",
    language: "norvegese",
    meaning: "la paura di aver fatto qualcosa che non sai cos'è.",
  },
  {
    word: "haragei",
    language: "giapponese",
    meaning:
      "parlare in modo chiaro, inequivocabile, ma senza usare le parole: la connessione che si crea a volte fra alcune persone che riescono a comunicare semplicemente a piccoli gesti, sguardi; una sorta di telepatia dettata dall'affetto o da una particolare affinità elettiva.",
  },
  {
    word: "tacenda",
    language: "latino",
    meaning: "le cose che bisogna tacere, che è meglio non dire direttamente.",
  },
  {
    word: "glossofobia",
    language: "italiano",
    meaning: "la paura di parlare in pubblico.",
  },
  {
    word: "ataoso",
    language: "spagnolo centroamericano",
    meaning:
      "una persona che riesce a trovare problemi ovunque. Qualcuno che perfino quando va tutto liscio si preoccupa perché gli sembra strano che vada tutto liscio.",
  },
  {
    word: "kacakka",
    language: "lingua tulu dell'India",
    meaning: "il rumore della pietra che cade nel fango.",
  },
  { word: "blart", language: "gaelico", meaning: "cadere dritti nel fango." },
  {
    word: "atorarse",
    language: "messicano",
    meaning:
      "quando cadi perché smetti di funzionare, perché senti che hai il motore che ti va in panne e lì è come sfaldarsi.",
  },
  {
    word: "kìrìpa",
    language: "senegalese",
    meaning:
      "cadere e finire in ginocchio, quindi in qualche modo cadere e perdere tutto quello che avevi.",
  },
  {
    word: "ijirashii",
    language: "giapponese",
    meaning:
      "il restare colpiti e commossi nel vedere che una persona parte in svantaggio ma riesce a superare un ostacolo o a portare a termine un'impresa degna di elogi.",
  },
  {
    word: "aizō",
    language: "giapponese",
    meaning: "amore e odio, o odio e amore. Tutto insieme.",
  },
  {
    word: "żal",
    language: "polacco",
    meaning:
      "la rabbia e insieme la malinconia che scaturiscono da una perdita irreparabile.",
  },
  {
    word: "kaukokaipuu",
    language: "finlandese",
    meaning: "la nostalgia di un posto in cui non siamo mai stati.",
  },
  {
    word: "sonntagsleerung",
    language: "tedesco",
    meaning: "la depressione della domenica pomeriggio.",
  },
  {
    word: "kekau",
    language: "indonesiano",
    meaning: "svegliarsi da un incubo.",
  },
  {
    word: "basorexia",
    language: "inglese",
    meaning: "il desiderio irrefrenabile di baciare qualcuno.",
  },
  {
    word: "karelụ",
    language: "hindi",
    meaning:
      "quei segni sulla pelle che ti vengono quando indossi qualcosa di troppo stretto.",
  },
  {
    word: "abhiman",
    language: "sanscrito",
    meaning:
      "quella rabbia che proviamo quando a farci del male è qualcuno che amiamo, quando qualcuno che amiamo ci provoca un dolore e al tempo stesso non riusciamo a fare a meno di amarlo.",
  },
  {
    word: "samlunano",
    language: "esperanto",
    meaning:
      "chi viene dalla stessa luna: si dice di persone che sono strane per tutti, ma che fra di loro si riconoscono.",
  },
  {
    word: "bloßë",
    language: "tedesco",
    meaning:
      "mettersi a nudo, scoprire il proprio punto debole. I tedeschi la usano nella scherma, proprio per indicare il momento in cui permetti al tuo avversario di colpirti e farti male.",
  },
  {
    word: "mononoke",
    language: "giapponese",
    meaning: "una situazione assurda, inspiegabile razionalmente.",
  },
  {
    word: "kairòs",
    language: "greco",
    meaning:
      "l'esatto istante, il momento giusto, quello irripetibile che accade una volta soltanto e poi non accade più.",
  },
  {
    word: "ohrwurm",
    language: "tedesco",
    meaning:
      "quel ritornello, quella canzone, quella musica che senti al mattino e poi non te la levi più dalla testa.",
  },
  {
    word: "fremdschämen",
    language: "tedesco",
    meaning:
      "l'imbarazzo che proviamo quando a finire in una situazione incresciosa è un nostro amico o amica, una specie di vergogna di riflesso.",
  },
  {
    word: "kyrvänsyylä",
    language: "finlandese",
    meaning: "che ha le pustole sul pene.",
  },
  {
    word: "kùkulabbi",
    language: "islandese",
    meaning: "una merda che cammina su due gambe.",
  },
  {
    word: "schnüffler",
    language: "tedesco",
    meaning: "significa uno a cui piace frugare nella merda.",
  },
  {
    word: "govnoed",
    language: "russo",
    meaning: "uno a cui piace mangiare la merda.",
  },
  {
    word: "asaṃkhyeya",
    language: "sanscrito",
    meaning:
      "impossibile da contare, il numero più alto che si possa concepire.",
  },
  {
    word: "pūangi",
    language: "maori",
    meaning:
      "la sensazione di avere lo stomaco in fondo ai piedi, tipica di quando sei in aereo e ci sono dei cali di pressione o quando sali sulle montagne russe.",
  },
  {
    word: "alkhilaba",
    language: "arabo",
    meaning:
      "quella sensazione di quando il cuore è d'accordo e dice di sì, mentre c'è al tempo stesso l'oscura cavità addominale che dice di no.",
  },
  {
    word: "meraki",
    language: "greco",
    meaning:
      "quando ti impegni così tanto nel fare qualcosa che poi, quando hai finito, dentro ci vedi una parte di te.",
  },
  {
    word: "buksvåger",
    language: "svedese",
    meaning:
      "due persone che si conoscono e che hanno avuto lo stesso ragazzo.",
  },
  {
    word: "dokidoki",
    language: "giapponese",
    meaning:
      "quei battiti accelerati del cuore a causa di una brutta sorpresa.",
  },
  {
    word: "muwaswas",
    language: "arabo",
    meaning: "quando sei ossessionato dalle tue delusioni.",
  },
  {
    word: "lìtost",
    language: "ceco",
    meaning:
      "quella specie di rabbia che ti viene per chi ti sorprende in un momento difficile, o in un momento in cui fai qualcosa di sbagliato.",
  },
  {
    word: "alessitimia",
    language: "italiano",
    meaning:
      "l'incapacità di dare un nome a quello che si prova, una specie di analfabetismo sentimentale.",
  },
  {
    word: "eheren",
    language: "tuareg",
    meaning:
      "quella linea bianca che spunta all'orizzonte al termine della notte.",
  },
  {
    word: "latah",
    language: "indonesiano",
    meaning: "l'abitudine incontrollabile a dire cose imbarazzanti.",
  },
  {
    word: "lalochezia",
    language: "inglese",
    meaning:
      "il senso di sollievo che si prova dopo aver imprecato o usato un linguaggio volgare.",
  },
  {
    word: "koi no yokan",
    language: "giapponese",
    meaning:
      "quando vedi una persona e anche senza conoscerla senti che tu e lei siete in qualche modo destinati a stare insieme. Neanche ci devi parlare, ci scambi solo mezzo sguardo, e già sei sicuro che succederà così, come una premonizione.",
  },
  {
    word: "oime",
    language: "giapponese",
    meaning:
      "quel disagio che si prova quando qualcuno ci ha fatto un regalo o un favore e non ci siamo ancora sdebitati.",
  },
  {
    word: "bammelbegierde",
    language: "tedesco",
    meaning:
      "l'attrazione inesorabile che a volte tutti abbiamo per qualcosa di cui abbiamo paura o che riteniamo potenzialmente spiacevole.",
  },
  {
    word: "greng-jay",
    language: "thailandese",
    meaning:
      "quando sei riluttante o proprio addirittura ti rifiuti di accettare l'offerta di aiuto da parte di qualcuno per via del disagio che gli provocheresti.",
  },
  {
    word: "textpectation",
    language: "inglese",
    meaning:
      "il senso di ansia avvertito in attesa della risposta al messaggio inviato.",
  },
  {
    word: "oogstrelend",
    language: "olandese",
    meaning: "accarezzare con lo sguardo, solo con lo sguardo.",
  },
  {
    word: "monachopsis",
    language: "inglese",
    meaning:
      "la persistente sensazione che, ovunque vai, sei comunque fuori posto.",
  },
  {
    word: "whānau",
    language: "maori",
    meaning:
      "la famiglia oltre la famiglia, le persone che senti come famiglia anche senza che ci sia alcun legame di sangue.",
  },
  {
    word: "aimonomia",
    language: "inglese",
    meaning:
      "la paura di dare un nome a qualcosa, perché senti che se glielo dai, poi un po' quella cosa sparisce, perde la sua magia.",
  },
];
export default words;
