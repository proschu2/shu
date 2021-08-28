const words = [
  {
    word: "a-un",
    language: "Japanese",
    meaning:
      "The kind of nonverbal communication that exists between good friends, who understand each other without speaking.",
  },
  {
    word: "akihi",
    language: "Hawaiian",
    meaning:
      "That moment when someone gives you directions or explains how to get to a place and you forget all about it a minute after you say thank you and get on your way.",
  },
  {
    word: "begadang",
    language: "Indonesian",
    meaning: "Staying up all night talking.",
  },
  {
    word: "besa",
    language: "Albanian",
    meaning: "An inviolable promise, a word of honor, keeping an oath.",
  },
  {
    word: "cafuné",
    language: "Portuguese",
    meaning: "The gesture of running your fingers over your loved one's hair.",
  },
  {
    word: "cheiro no cangote",
    language: "Portuguese",
    meaning: "Rub the tip of your nose on your loved one's neck.",
  },
  {
    word: "culaccino",
    language: "Italian",
    meaning: "The mark left on the table by a cold glass.",
  },
  {
    word: "curglaff",
    language: "Scottish",
    meaning:
      "The feeling of shock and at the same time invigoration that comes with diving into icy water.",
  },
  {
    word: "cwtch",
    language: "Welsh",
    meaning:
      "Not just an embrace, but an affectionate embrace and much more, the embrace that becomes a safe place, that place where we really feel at home, in the arms of the loved one.",
  },
  {
    word: "dap jeong nieo",
    language: "Korean",
    meaning:
      "When someone has already decided what they want to hear and wants you to respond as they wish.",
  },
  {
    word: "dépaysement",
    language: "French",
    meaning: "The feeling you get when you're not in your native country.",
  },
  {
    word: "deserascanço",
    language: "Portuguese",
    meaning:
      "When in a daring way and with few means available you manage to resolve a difficult situation.",
  },
  {
    word: "dor",
    language: "Romanian",
    meaning: "The suffering of separation from a loved one.",
  },
  {
    word: "doxa",
    language: "Greek",
    meaning: "Popular belief, public opinion.",
  },
  {
    word: "fernweh",
    language: "German",
    meaning: "Nostalgia for distant places, desire to travel.",
  },
  {
    word: "filoxenia",
    language: "Greek",
    meaning: "Love for guests or strangers.",
  },
  {
    word: "firgun",
    language: "Hebrew",
    meaning:
      "Simple, unselfish joy over a good thing that happened to someone else.",
  },
  {
    word: "flâner",
    language: "French",
    meaning:
      "Wandering around the city aimlessly with the sole purpose of enjoying the sights.",
  },
  { word: "flechazo", language: "Spanish", meaning: "Love at first sight." },
  {
    word: "forelsket",
    language: "Danish",
    meaning: "The exhilaration of falling in love.",
  },
  {
    word: "frisson",
    language: "French",
    meaning: "Thrill of fear, pleasure and excitement.",
  },
  {
    word: "geborenheit",
    language: "German",
    meaning:
      "The feeling of security that comes from being with people you love.",
  },
  {
    word: "geyelligheid",
    language: "Dutch",
    meaning: "The warmth felt being with people you love.",
  },
  {
    word: "gezelligheid",
    language: "Dutch",
    meaning:
      "Conviviality, sociability, comfort, intimacy felt in a place or situation.",
  },
  {
    word: "gigil",
    language: "Tagalog",
    meaning: "The desire to hurt someone by how much you want to touch them.",
  },
  {
    word: "gjensynsglede",
    language: "Norwegian",
    meaning:
      "The happiness of meeting someone you haven't seen in a long time.",
  },
  {
    word: "gluggaveður",
    language: "Icelandic",
    meaning: "The weather that is beautiful to see but not to be in.",
  },
  {
    word: "goya",
    language: "Urdu",
    meaning:
      "The suspension of disbelief it takes to get caught up in a story or movie.",
  },
  {
    word: "hanyauku",
    language: "Bantu",
    meaning: "Walking barefoot on hot sand.",
  },
  {
    word: "hiraeth",
    language: "Welsh",
    meaning:
      "Being far from the place where you want to be, but knowing that that distance is necessary.",
  },
  { word: "hoppípolla", language: "Icelandic", meaning: "Jumping in puddles." },
  {
    word: "hyggelig",
    language: "Danish",
    meaning: "A cozy, friendly, warm, pleasant, intimate moment or something.",
  },
  {
    word: "ikigai",
    language: "Japanese",
    meaning:
      "That thing you love to do and care about so much that it gets you out of bed in the morning.",
  },
  {
    word: "iktsuarpok",
    language: "Inuit",
    meaning: "The frustration you feel when waiting for someone to be late.",
  },
  {
    word: "ilunga",
    language: "Tshiluba",
    meaning:
      "A person who the first time forgives everything, the second time is tolerant, but the third time has no mercy.",
  },
  {
    word: "jayus",
    language: "Indonesian",
    meaning:
      "It is said of something that is not funny to such a degree that it is comical.",
  },
  {
    word: "jijivisha",
    language: "Indian",
    meaning: "The strong eternal desire to live and continue living.",
  },
  {
    word: "kenshō",
    language: "Japanese",
    meaning: "Sudden and fleeting moment of enlightenment.",
  },
  {
    word: "kilig",
    language: "Tagalog",
    meaning:
      "Feeling the butterflies in your stomach when you meet your crush.",
  },
  {
    word: "kogarashi",
    language: "Japanese",
    meaning: "The first breath of wind that announces winter.",
  },
  {
    word: "koi no yokan [恋の予感]",
    language: "Japanese",
    meaning:
      "Meeting someone and knowing you are destined to fall in love with each other.",
  },
  {
    word: "komorebi",
    language: "Japanese",
    meaning:
      "That special light effect you get when the sun filters through the leaves on the trees.",
  },
  {
    word: "luftmensch",
    language: "Yiddish",
    meaning: "Someone who is constantly daydreaming.",
  },
  {
    word: "magari",
    language: "Italian",
    meaning: "Interjection, ~if only this thing could be true~.",
  },
  {
    word: "mamihlapinatapai",
    language: "Yamana",
    meaning:
      "The playful glance of two people who like each other and would like to take the first step, but are afraid.",
  },
  {
    word: "manabamáte",
    language: "Rapa nui",
    meaning: "The lack of appetite when in love.",
  },
  {
    word: "mångata",
    language: "Swedish",
    meaning: "The reflection of the moon on the water.",
  },
  {
    word: "mann vaasanai",
    language: "Tamil",
    meaning: "The smell of rain on dry earth.",
  },
  {
    word: "mbuki-mvuki",
    language: "Bantu",
    meaning: "The desire to take off their clothes and start dancing.",
  },
  {
    word: "merak",
    language: "Serbian",
    meaning:
      "Feeling of deep love for the whole universe that comes from the ability to appreciate the little things, such as the closeness of the people we love.",
  },
  {
    word: "ming-gat",
    language: "Indonesian",
    meaning: "Leaving forever without saying goodbye.",
  },
  {
    word: "mo chuisle mo chroí",
    language: "Gaelic",
    meaning: "The heartbeat.",
  },
  {
    word: "mokita",
    language: "Kilivila",
    meaning: "A truth that everyone knows but no one talks about or admits.",
  },
  {
    word: "naz",
    language: "Urdu",
    meaning: "The pride you feel in feeling loved.",
  },
  {
    word: "neach-gaoil",
    language: "Gaelic",
    meaning: "The person who lives inside your heart.",
  },
  { word: "nja", language: "Swedish", meaning: "Neither yes nor no." },
  {
    word: "nonplussed",
    language: "English",
    meaning:
      "When you feel something so strong and conflicting that you are unable to describe it in words.",
  },
  {
    word: "nunchi",
    language: "Korean",
    meaning: "The art of feeling and understanding someone else's mood.",
  },
  {
    word: "odnoliub",
    language: "Russian",
    meaning: "Someone who has only one love in their life.",
  },
  { word: "onsay", language: "Boro", meaning: "Pretending to love." },
  {
    word: "onsra",
    language: "Boro",
    meaning: "The bittersweet feeling that love won't last.",
  },
  {
    word: "oodal",
    language: "Tamil",
    meaning: "The feigned anger that two lovers flaunt after an argument.",
  },
  {
    word: "panapo'o",
    language: "Hawaiian",
    meaning: "Scratching his head trying to remember something.",
  },
  {
    word: "počemučka",
    language: "Russian",
    meaning: "A person asking and asking too many questions.",
  },
  {
    word: "proairesis",
    language: "Greek",
    meaning: "The ability to make decisions and choices according to reason.",
  },
  {
    word: "psithirisma",
    language: "Greek",
    meaning: "The sound the wind makes when it passes through leaves.",
  },
  {
    word: "qarrtsiluni",
    language: "Inuit",
    meaning:
      "Sitting with someone in the dark waiting for something big to happen, a kind of quiet before the storm.",
  },
  {
    word: "rè nào [热闹]",
    language: "Chinese",
    meaning:
      "A place or situation where anyone would like to be because of the vibrations it gives off.",
  },
  {
    word: "retrouvailles",
    language: "French",
    meaning:
      "The joy of a reunion with a loved one that happens after a long separation.",
  },
  {
    word: "saudade",
    language: "Portuguese",
    meaning:
      "The feeling of longing for someone or something that is absent, that you love but may never return.",
  },
  {
    word: "schnappidee",
    language: "German",
    meaning:
      "That abstruse and ridiculous plan that comes to mind when you're drunk and that leads you to make irreparable disasters.",
  },
  {
    word: "shmegegge",
    language: "Yiddish",
    meaning: "Someone who is both a moron and an ass-kisser.",
  },
  {
    word: "shu",
    language: "Chinese",
    meaning: "Putting the other person in your heart.",
  },
  {
    word: "sisu",
    language: "Finnish",
    meaning:
      "Extraordinary psychological perseverance in facing very long and very difficult challenges.",
  },
  {
    word: "sobramesa",
    language: "Spanish",
    meaning: "Time spent chatting after a meal socializing with diners.",
  },
  {
    word: "torschlusspanik",
    language: "German",
    meaning:
      "Fear that advancing age is a ~closing door~ on the possibility of being happy.",
  },
  {
    word: "toska",
    language: "Russian",
    meaning:
      "Feeling of great spiritual anguish, often without a specific cause.",
  },
  {
    word: "trepvertreter",
    language: "Yiddish",
    meaning:
      "~words of scale~, the right answer you should have given during a discussion but, as usual, it comes to you when you're leaving.",
  },
  {
    word: "turadh",
    language: "Gaelic",
    meaning:
      "The flashes of deep blue that form in the clouds after a thunderstorm.",
  },
  {
    word: "utepils",
    language: "Norwegian",
    meaning: "Being outside on a sunny day drinking a beer.",
  },
  {
    word: "utsura-utsura",
    language: "Japanese",
    meaning: "Being halfway between sleeping and waking.",
  },
  {
    word: "verschlimmbessern",
    language: "German",
    meaning: "Making a situation worse by trying to make it better.",
  },
  {
    word: "viraha",
    language: "Indian",
    meaning:
      "The realization that you love someone during a time of separation.",
  },
  {
    word: "vorfreude",
    language: "German",
    meaning:
      "~pre-happiness~, that happiness that comes from anticipating a future happiness.",
  },
  {
    word: "vybafnout",
    language: "Czech",
    meaning: "Jumping out in surprise and yelling boo.",
  },
  {
    word: "waldeinsamkeit",
    language: "German",
    meaning: "The feeling of being alone in the woods.",
  },
  {
    word: "won",
    language: "Korean",
    meaning:
      "The difficulty of a person in giving up an illusion to face reality.",
  },
  {
    word: "ya'aburnee",
    language: "Arabic",
    meaning:
      "The hope of dying before a loved one, because otherwise it would be unbearable to live without them.",
  },
  {
    word: "yakamoz",
    language: "Turkish",
    meaning: "The reflection of the moon on the water.",
  },
  {
    word: "yuánfèn [缘分]",
    language: "Chinese",
    meaning: "The chance that brings two people together.",
  },
  {
    word: "yuugen",
    language: "Japanese",
    meaning:
      "Awareness of the universe that awakens a feeling too vast for words, indicates an indecipherable depth and the hidden beauty, the fascination of things in half-light that you cannot fully understand.",
  },
  {
    word: "zhaghzhagh",
    language: "Persian",
    meaning: "When your teeth chatter from cold or anger.",
  },
  {
    word: "querencia",
    language: "Spanish",
    meaning:
      "The place where you feel fully yourself and from which you draw strength, because you feel at home.",
  },
  {
    word: "notwendigkeit",
    language: "German",
    meaning: "What could not be otherwise.",
  },
  {
    word: "matutolypea",
    language: "English",
    meaning:
      "The morning sadness, the despondency that sometimes seizes you as soon as you wake up and makes you want to stay under the covers all day, sheltered from the world.",
  },
  {
    word: "caim",
    language: "Scottish",
    meaning:
      "An invisible circle of protection drawn with the hand around a being to remind him that he is loved and considered, even in the darkest times.",
  },
  {
    word: "jung",
    language: "Korean",
    meaning: "A friendship that remains so even after countless discussions.",
  },
  {
    word: "hadia",
    language: "Ethiopian",
    meaning:
      "An affection so great and so strong that it overcomes the barriers of time and still arrives at its destination, usually in a dream, and, like a voice, whispers words of recall.",
  },
  {
    word: "brillenbrillanz",
    language: "German",
    meaning:
      "The sudden, electrifying feeling of seeing clearly with a new pair of glasses.",
  },
  {
    word: "daguerrologue",
    language: "English slang",
    meaning:
      "When you look at old photos and have a dialogue with the self you were.",
  },
  {
    word: "pâro",
    language: "Irish slang",
    meaning: "The feeling that whatever you do is always somehow wrong.",
  },
  {
    word: "schubladenbrief",
    language: "German",
    meaning: "The letter you write and never send.",
  },
  {
    word: "drachenfutter",
    language: "German",
    meaning:
      'The "dragon gift", that is, the gift you give to yourself to make up for something you have done, but not yet confessed.',
  },
  {
    word: "tuča",
    language: "Russian",
    meaning: "A black cloud that brings rain.",
  },
  {
    word: "song",
    language: "Language spoken on ifalik, an island in the pacific ocean",
    meaning:
      "The anger that comes when you feel you have suffered an injustice.",
  },
  {
    word: "shibui",
    language: "Japanese",
    meaning: "The beauty of things that grow old.",
  },
  {
    word: "augenblicksgott",
    language: "German",
    meaning:
      "A minor deity who passes you by and in an instant, the time of a blink of an eye, suggests an answer you've been looking for a long time, a memory, an idea, something you've spent years searching for and then it only takes you a moment to find.",
  },
  {
    word: "amtsangst",
    language: "German",
    meaning:
      "Irrational sense of guilt even though you have done nothing wrong.",
  },
  {
    word: "straussmanöver",
    language: "German",
    meaning: "Short-term defensive strategy of simply denying the evidence.",
  },
  {
    word: "salagok",
    language: "Inuit",
    meaning: "The young, black snow because it's dirty.",
  },
  {
    word: "tiam",
    language: "Farsi",
    meaning: "The sparkle in our eyes when we like someone.",
  },
  {
    word: "hajnalpír",
    language: "Hungarian",
    meaning:
      "The first blush that appears in the sky when the sun begins to set.",
  },
  {
    word: "chakravâka",
    language: "Sanskrit",
    meaning:
      "Water birds that live in pairs that call to each other at night when they are separated.",
  },
  {
    word: "schwellenangst",
    language: "German",
    meaning: "The fear of facing the unknown, of opening a new door.",
  },
  {
    word: "warmduscher",
    language: "German",
    meaning:
      "Who always prefers a lukewarm shower: a person who never wants to get out of their comfort zone, who shuns both too much happiness and excessive sorrow.",
  },
  {
    word: "aerekjaer",
    language: "Norwegian",
    meaning:
      "Excessive pride, taken to the extreme, which can drive a person to die rather than ask for help.",
  },
  {
    word: "sciamachy",
    language: "English",
    meaning: "Fighting against imaginary enemies, against one's own shadow.",
  },
  {
    word: "soviest",
    language: "Russian",
    meaning:
      "The heart dictates one thing, but we desire another. at that point the soviest intervenes, which is the voice that tells us what is right to do.",
  },
  {
    word: "ilinx",
    language: "Greek",
    meaning: "The strange excitement that comes from destroying something.",
  },
  {
    word: "psithìrisma",
    language: "Greek",
    meaning: "The sound the wind makes when it passes through the leaves.",
  },
  {
    word: "lippenhaftung",
    language: "German",
    meaning: "The lingering feeling of the first kiss.",
  },
  {
    word: "anagapesis",
    language: "English",
    meaning: "No longer being in love with the person you used to love.",
  },
  {
    word: "gymnophoria",
    language: "English",
    meaning: "The feeling of a person undressing you on a mental level.",
  },
  {
    word: "nagashime",
    language: "Japanese",
    meaning:
      "Looking furtively at a person, averting your eyes, then looking at them again to make sure you have their attention.",
  },
  {
    word: "huijijiyi",
    language: "Mandarin",
    meaning: "Not going to the doctor for fear of finding out you are sick.",
  },
  {
    word: "fylleangst",
    language: "Norwegian",
    meaning: "Fear of doing something you don't know what it is.",
  },
  {
    word: "haragei",
    language: "Japanese",
    meaning:
      "Speak clearly, unequivocally, but without using words: the connection that is sometimes created between some people who can communicate simply with small gestures, glances; a kind of telepathy dictated by affection or a particular elective affinity.",
  },
  {
    word: "tacenda",
    language: "Latin",
    meaning:
      "The things you need to keep silent, that it is better not to say directly.",
  },
  {
    word: "glossofobia",
    language: "Italian",
    meaning: "The fear of speaking in public.",
  },
  {
    word: "ataoso",
    language: "Central american spanish",
    meaning:
      "Someone who can find problems everywhere. someone who even when everything is going smoothly worries because it seems strange to him that everything is going smoothly.",
  },
  {
    word: "kacakka",
    language: "Tulu language of india",
    meaning: "The sound of stone falling into mud.",
  },
  { word: "blart", language: "Gaelic", meaning: "Fall straight into the mud." },
  {
    word: "atorarse",
    language: "Mexican",
    meaning:
      "When you fall because you stop working, because you feel like your engine is failing you and that's when it's like falling apart.",
  },
  {
    word: "kìrìpa",
    language: "Senegalese",
    meaning:
      "Falling and ending up on your knees, so somehow falling and losing everything you had.",
  },
  {
    word: "ijirashii",
    language: "Japanese",
    meaning:
      "The being impressed and moved to see that a person starts at a disadvantage but manages to overcome an obstacle or complete a feat worthy of praise.",
  },
  {
    word: "aizō",
    language: "Japanese",
    meaning: "Love and hate, or hate and love. all at once.",
  },
  {
    word: "żal",
    language: "Polish",
    meaning: "The anger and melancholy that come with irreparable loss.",
  },
  {
    word: "kaukokaipuu",
    language: "Finnish",
    meaning: "The nostalgia for a place we've never been.",
  },
  {
    word: "sonntagsleerung",
    language: "German",
    meaning: "The sunday afternoon depression.",
  },
  {
    word: "kekau",
    language: "Indonesian",
    meaning: "Waking up from a nightmare.",
  },
  {
    word: "basorexia",
    language: "English",
    meaning: "The overwhelming desire to kiss someone.",
  },
  {
    word: "karelụ",
    language: "Hindi",
    meaning:
      "Those marks on your skin that come when you wear something too tight.",
  },
  {
    word: "abhiman",
    language: "Sanskrit",
    meaning:
      "That anger we feel when someone we love hurts us, when someone we love causes us pain and at the same time we can't help but love them.",
  },
  {
    word: "samlunano",
    language: "Esperanto",
    meaning:
      "Who comes from the same moon: it is said of people who are strange to everyone, but that among themselves they recognize each other.",
  },
  {
    word: "bloßë",
    language: "German",
    meaning:
      "To lay oneself bare, to discover one's weakness. the germans use it in fencing, precisely to indicate the moment when you allow your opponent to hit you and hurt you.",
  },
  {
    word: "mononoke",
    language: "Japanese",
    meaning: "An absurd situation, inexplicable rationally.",
  },
  {
    word: "kairòs",
    language: "Greek",
    meaning:
      "The exact moment, the right moment, the unrepeatable one that happens only once and then never happens again.",
  },
  {
    word: "ohrwurm",
    language: "German",
    meaning:
      "That refrain, that song, that music that you hear in the morning and then you can't get it out of your head.",
  },
  {
    word: "fremdschämen",
    language: "German",
    meaning:
      "The embarrassment we feel when one of our friends ends up in an unfortunate situation, a kind of reflex shame.",
  },
  {
    word: "kyrvänsyylä",
    language: "Finnish",
    meaning: "Who has pustules on his penis.",
  },
  {
    word: "kùkulabbi",
    language: "Icelandic",
    meaning: "A shit that walks on two legs.",
  },
  {
    word: "schnüffler",
    language: "German",
    meaning: "Means one who likes to poke around in shit.",
  },
  {
    word: "govnoed",
    language: "Russian",
    meaning: "One who likes to eat shit.",
  },
  {
    word: "asaṃkhyeya",
    language: "Sanskrit",
    meaning: "Impossible to count, the highest number one can conceive of.",
  },
  {
    word: "pūangi",
    language: "Maori",
    meaning:
      "The feeling of having your stomach in the bottom of your feet, typical of when you're on a plane and there are drops in pressure or when you get on a roller coaster.",
  },
  {
    word: "alkhilaba",
    language: "Arabic",
    meaning:
      "That feeling when your heart agrees and says yes, while at the same time there is the dark abdominal cavity that says no.",
  },
  {
    word: "meraki",
    language: "Greek",
    meaning:
      "When you put so much effort into doing something that when you're done, you see a part of you in it.",
  },
  {
    word: "buksvåger",
    language: "Swedish",
    meaning: "Two people who know each other and have had the same boyfriend.",
  },
  {
    word: "dokidoki",
    language: "Japanese",
    meaning: "Those accelerated heartbeats because of a bad surprise.",
  },
  {
    word: "muwaswas",
    language: "Arabic",
    meaning: "When you obsess over your disappointments.",
  },
  {
    word: "lìtost",
    language: "Czech",
    meaning:
      "That kind of rage you get over whoever surprises you at a bad time, or at a time when you do something wrong.",
  },
  {
    word: "alessitimia",
    language: "Italian",
    meaning:
      "The inability to name what you feel, a kind of sentimental illiteracy.",
  },
  {
    word: "eheren",
    language: "Tuareg",
    meaning:
      "That white line that pops up on the horizon at the end of the night.",
  },
  {
    word: "latah",
    language: "Indonesian",
    meaning: "The uncontrollable habit of saying embarrassing things.",
  },
  {
    word: "lalochezia",
    language: "English",
    meaning:
      "The sense of relief you feel after swearing or using foul language.",
  },
  {
    word: "koi no yokan",
    language: "Japanese",
    meaning:
      "When you see someone and even without knowing them you feel that you and they are somehow meant to be together. you don't even have to talk to them, you just exchange half a glance, and you're already sure it's going to happen like that, like a premonition.",
  },
  {
    word: "oime",
    language: "Japanese",
    meaning:
      "That discomfort you feel when someone has given you a gift or a favor and you haven't paid them back yet.",
  },
  {
    word: "bammelbegierde",
    language: "German",
    meaning:
      "The unrelenting attraction we all have at times to something we are afraid of or feel is potentially unpleasant.",
  },
  {
    word: "greng-jay",
    language: "Thai",
    meaning:
      "When you are reluctant or even refuse to accept someone's offer of help because of the discomfort you would cause them.",
  },
  {
    word: "textpectation",
    language: "English",
    meaning:
      "The sense of anxiety felt while waiting for a response to the message you sent.",
  },
  {
    word: "oogstrelend",
    language: "Dutch",
    meaning: "Fondling with your gaze, just with your gaze.",
  },
  {
    word: "monachopsis",
    language: "English",
    meaning:
      "The persistent feeling that, wherever you go, you're out of place anyway.",
  },
  {
    word: "whānau",
    language: "Maori",
    meaning:
      "The family beyond family, the people you feel are family even without any blood ties.",
  },
  {
    word: "aimonomia",
    language: "English",
    meaning:
      "The fear of giving a name to something, because you feel that if you give it a name, then it disappears, it loses its magic.",
  },
];
export default words;
