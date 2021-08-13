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
];
export default words;
