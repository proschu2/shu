const words=[
    {
        'word': 'shu',
        'language': 'cinese',
        'meaning': "mettere l'altro nel proprio cuore."
    },
    {
        'word': 'komorebi',
        'language': 'giapponese',
        'meaning': "quel particolare effetto di luce che si ha quando il sole filtra attraverso le foglie sugli alberi."
    },
    {
        'word': 'počemučka',
        'language': 'russo',
        'meaning':'una persona che fa e si fa troppe domande.'
    },
    {
        'word':'fernweh',
        'language':'tedesco',
        'meaning':'nostalgia di posti lontani, desiderio di viaggiare.'
    },
    {
        'word':'iktsuarpok',
        'language':'inuit',
        'meaning':'la frustrazione che si prova quando si aspetta qualcuno in ritardo.'
    },
    {
        'word':'waldeinsamkeit',
        'language':'tedesco',
        'meaning':'la sensazione di sentirsi come quando si è soli nel bosco.'
    },
    {
        'word':'mamihlapinatapai',
        'language':'yamana',
        'meaning':'il gioco di sguardi di due persone che si piacciono e vorrebbero fare il primo passo, ma hanno paura.'
    },
    {
        'word':'ilunga',
        'language':'tshiluba',
        'meaning':'una persona che la prima volta perdona tutto, la seconda volta è tollerante, ma la terza non ha pietà.'
    },
    {
        'word':'won',
        'language':'coreano',
        'meaning': "la difficoltà di una persona nel rinunciare a un'illusione per guardare in faccia la realtà."
    },  
    {
        'word':'luftmensch',
        'language':'yiddish',
        'meaning':'chi fa costantemente sogni ad occhi aperti.'
    },
    {
        'word':'verschlimmbessern',
        'language':'tedesco',
        'meaning':'peggiorare una situazione cercando di migliorarla.'
    },
    {
        'word':'yakamoz',
        'language':'turco',
        'meaning':"il riflesso della luna sull'acqua."
    },
    {
        'word':'cafuné',
        'language':'portoghese',
        'meaning':"il gesto di passare le dita sui capelli della persona amata."
    },
    {
        'word':'geborenheit',
        'language':'tedesco',
        'meaning':"la sensazione di sicurezza che si prova stando con le persone a cui si vuole bene."
    },
    {
        'word':'geyelligheid',
        'language':'olandese',
        'meaning':"il calore provato stando con le persone a cui si vuole bene."
    },
    {
        'word':'dor',
        'language':'rumeno',
        'meaning':"la sofferenza per la separazione dalla persona amata."
    },
    {
        'word':'begadang',
        'language':'indonesiano',
        'meaning':"restare svegli tutta la notte a parlare."
    },
    {
        'word':'oodal',
        'language':'tamil',
        'meaning':"la finta rabbia che due amanti ostentano dopo un litigio."
    },
    {
        'word':'retrouvailles',
        'language':'francese',
        'meaning':"la gioia di un incontro con una persona amata che avviene dopo una lunga separazione."
    },
    {
        'word':'hoppípolla',
        'language':'islandese',
        'meaning':"saltare nelle pozzanghere."
    },
    {
        'word':'cwtch',
        'language':'gallese',
        'meaning':"non un semplice anbbraccio, ma un abbraccio affettuoso e molto di più, l'abbraccio che diventa un luogo sicuro, quel luogo in cui ci sentiamo veramente a casa, tra le braccia della persona amata."
    },
    {
        'word':'akihi',
        'language':'hawaiano',
        'meaning':"quel momento quanto qualcuno ti dà delle indicazioni stradali o ti spiega come arrivare in un posto e tu ti dimentichi tutto un minuto dopo che hai ringraziato e ti sei incamminato."
    },
    {
        'word':'trepvertreter',
        'language':'yiddish',
        'meaning':"~parole di scala~, la risposta giusta che avresti dovuto dare durante una discussione ma che, come al solito, ti viene in mente quando stai andando via."
    },
    {
        'word':'yuugen',
        'language':'giapponese',
        'meaning':"consapevolezza dell'universo che risveglia un sentimento troppo vasto per le parole, indica una indecifrabile profondità e la bellezza nascosta, il fascino delle cose in penombra che non si riescono a comprendere perfettamente."
    },
    {
        'word':'dap jeong nieo',
        'language':'coreano',
        'meaning':"quando qualcuno ha già deciso che cosa vuole sentirsi dire e vuole che tu risponda come lui desidera."
    },
    {
        'word':'jayus',
        'language':'indonesiano',
        'meaning':"si dice di una cosa che non fa ridere a un punto tale da risultare comica."
    },
    {
        'word':'goya',
        'language':'urdu',
        'meaning':"la sospensione dell'incredulità che serve per farsi coinvolgere da una storia o da un film."
    },
    {
        'word':'vorfreude',
        'language':'tedesco',
        'meaning':"~pre-felicità~, quella felicità che deriva dal pregustare una felicità futura."
    },
    {
        'word':'deserascanço',
        'language':'portoghese',
        'meaning':"quando in modo rocambolesco e con pochi mezzi a disposizione si riesce a risolvere una situazione difficile."
    },
    {
        'word':'nunchi',
        'language':'coreano',
        'meaning':"l'arte di sentire e comprendere l'umore altrui."
    },
    {
        'word':'sisu',
        'language':'finlandese',
        'meaning':"perseveranza psicologica straordinaria nell'affrontare sfide molto lunghe e difficilissime."
    },
    {
        'word':'mbuki-mvuki',
        'language':'bantu',
        'meaning':"il desiderio di levarsi i vestiti e iniziare a ballare."
    },
    {
        'word':'a-un',
        'language':'giapponese',
        'meaning':"quel tipo di communicazione non verbale che c'è tra buoni amici, che si capiscono senza parlare."
    },
    {
        'word':'frisson',
        'language':'francese',
        'meaning':"brivido di paura, piacere ed eccitazione."
    },
    {
        'word':'qarrtsiluni',
        'language':'inuit',
        'meaning':"sedersi con qualcuno al buio aspettando che succeda qualcosa di grosso, una sorte di quiete prima della tempesta."
    },
    {
        'word':'besa',
        'language':'albanese',
        'meaning':"una promessa inviolabile, una parola d'onore, tenere fede a un giuramento."
    },
    {
        'word':'doxa',
        'language':'greco',
        'meaning':"credenza popolare, opinione pubblica."
    },
    {
        'word':'filoxenia',
        'language':'greco',
        'meaning':"amore per gli ospiti o gli stranieri."
    },
    {
        'word':'gjensynsglede',
        'language':'norvegese',
        'meaning':"la felcità di incontrare qualcuno che non vedevi da molto tempo."
    },
    {
        'word':'ming-gat',
        'language':'indonesiano',
        'meaning':"andarsene per sempre senza dire addio."
    },
    {
        'word':'mann vaasanai',
        'language':'tamil',
        'meaning':"l'odore della pioggia sulla terra secca."
    },
    {
        'word':'nja',
        'language':'svedese',
        'meaning':"nè sì né no."
    },
    {
        'word':'onsay',
        'language':'boro',
        'meaning':"fingere di amare."
    },
    {
        'word':'schnappidee',
        'language':'tedesco',
        'meaning':"quel piano astruso e ridicolo che ti viene in mente quando sei ubriaco e che ti porta a combinare disastri irreparabili."
    },
    {
        'word':'torschlusspanik',
        'language':'tedesco',
        'meaning':"la paura che l'avanzare dell'età sia una ~porta che si chiude~ sulla possibilità di essere felici."
    },
    {
        'word':'zhaghzhagh',
        'language':'persiano',
        'meaning':"quando ti battono i denti, per il freddo o per la rabbia."
    },
    {
        'word':'shmegegge',
        'language':'yiddish',
        'meaning':"qualcuno che è sia un deficiente sia un leccaculo."
    },
    {
        'word':'nonplussed',
        'language':'inglese',
        'meaning':"quando provi qualcosa di talmente forte e contrastante che non sei in grado di descriverlo a parole."
    },
    {
        'word':'proairesis',
        'language':'greco',
        'meaning':"la capacità di prendere decisioni e di fare scelte secondo ragione."
    },
    {
        'word':'vybafnout',
        'language':'ceco',
        'meaning':"saltare fuori a sorpresa e urlare buu!."
    },
    {
        'word':'curglaff',
        'language':'scozzese',
        'meaning':"la sensazione di shock e al tempo stesso di rinvigorimento che si ha quando ci si tuffa nell'acqua gelida."
    },
    {
        'word':'utsura-utsura',
        'language':'giapponese',
        'meaning':"stare a metà tra sonno e veglia."
    },
    {
        'word':'kenshō',
        'language':'giapponese',
        'meaning':"momento improvviso e fugace di illuminazione."
    },
    {
        'word':'mokita',
        'language':'kilivila',
        'meaning':"una verità che tutti conoscono ma di cui nessuno parla o che nessuno ammette."
    },
    {
        'word':'turadh',
        'language':'gaelico',
        'meaning':"gli sprazzi di azzurro intenso che si formano tra le nuvole dopo un temporale."
    },
    {
        'word':'ikigai',
        'language':'giapponese',
        'meaning':"quella cosa che ti piace fare e a cui tieni così tanto che ti fa alzare dal letto al mattino."
    },
    {
        'word':'magari',
        'language':'italiano',
        'meaning':"interiezione, ~se solo questa cosa potesse essere vera~."
    },
    {
        'word':'kogarashi',
        'language':'giapponese',
        'meaning':"il primo soffio di vento che annuncia l'inverno."
    },
    {
        'word':'gigil',
        'language':'tagalog',
        'meaning':"la voglia di far male a qualcuno da quanto desideri toccarlo."
    },
    {
        'word':'neach-gaoil',
        'language':'gaelico',
        'meaning':"la persona che vive dentro il tuo cuore."
    },
        
]
export default words