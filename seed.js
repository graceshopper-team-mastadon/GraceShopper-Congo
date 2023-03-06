const { db } = require("./server/db/index.js");
const Product = require("./server/db/models/Product");
const User = require("./server/db/models/User");

const products = [
  {
    name: "Bulbasaur",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    price: 1,
  },
  {
    name: "Ivysaur",
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    price: 2,
  },
  {
    name: "Venusaur ",
    description:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    price: 3,
  },
  {
    name: "Potion",
    description: "Unspecified fracture of unspecified talus",
    category: "medicine",
    inventory: 99,
    generation: null,
    imageUrl: "https://robohash.org/omnisadoptio.png?size=50x50&set=set1",
    price: 745,
  },
  {
    name: "Super Potion",
    description: "Prph tear of medial meniscus, current injury, l knee, init",
    category: "medicine",
    inventory: 20,
    generation: null,
    imageUrl: "https://robohash.org/assumendaillosunt.png?size=50x50&set=set1",
    price: 971,
  },
  {
    name: "Hyper Potion",
    description: "Fissured, notched and cleft nose",
    category: "medicine",
    inventory: 95,
    generation: null,
    imageUrl: "https://robohash.org/beataequaserror.png?size=50x50&set=set1",
    price: 114,
  },
  {
    name: "Max Potion",
    description: "Hydroxyapatite deposition disease, right hand",
    category: "medicine",
    inventory: 63,
    generation: null,
    imageUrl:
      "https://robohash.org/quaeratreprehenderiteligendi.png?size=50x50&set=set1",
    price: 344,
  },
  {
    name: "Full Restore",
    description: "Mumps arthritis",
    category: "medicine",
    inventory: 73,
    generation: null,
    imageUrl: "https://robohash.org/maioresidporro.png?size=50x50&set=set1",
    price: 794,
  },
  {
    name: "Poke Ball",
    description: "Burn of right eyelid and periocular area",
    category: "pokeballs",
    inventory: 25,
    generation: null,
    imageUrl:
      "https://robohash.org/utconsequaturmolestiae.png?size=50x50&set=set1",
    price: 518,
  },
  {
    name: "Great Ball",
    description: "Disp fx of shaft of third metacarpal bone, left hand",
    category: "pokeballs",
    inventory: 55,
    generation: null,
    imageUrl: "https://robohash.org/similiqueestiste.png?size=50x50&set=set1",
    price: 340,
  },
  {
    name: "Ultra Ball",
    description: "Conduct disorder, adolescent-onset type",
    category: "pokeballs",
    inventory: 24,
    generation: null,
    imageUrl: "https://robohash.org/quiminimavero.png?size=50x50&set=set1",
    price: 678,
  },
  {
    name: "Feather Ball",
    description: "Insect bite (nonvenomous), right lower leg, init encntr",
    category: "pokeballs",
    inventory: 17,
    generation: null,
    imageUrl:
      "https://robohash.org/aliquamnatusofficia.png?size=50x50&set=set1",
    price: 282,
  },
  {
    name: "Master Ball",
    description: "Displ transverse fx shaft of unsp ulna, 7thK",
    category: "pokeballs",
    inventory: 5,
    generation: null,
    imageUrl: "https://robohash.org/exnihilrepudiandae.png?size=50x50&set=set1",
    price: 99999999,
  },
  {
    name: "Timer Ball",
    description: "Acquired absence of left wrist",
    category: "pokeballs",
    inventory: 21,
    generation: null,
    imageUrl: "https://robohash.org/etmolestiaeveniam.png?size=50x50&set=set1",
    price: 740,
  },
  {
    name: "Antidote",
    description: "Other injury of esophagus (thoracic part), initial encounter",
    category: "medicine",
    inventory: 30,
    generation: null,
    imageUrl: "https://robohash.org/eiusdictaullam.png?size=50x50&set=set1",
    price: 1000,
  },
  {
    name: "Ice Heal",
    description: "Laceration without foreign body of unsp elbow, sequela",
    category: "medicine",
    inventory: 69,
    generation: null,
    imageUrl:
      "https://robohash.org/dolorumtemporibusconsequatur.png?size=50x50&set=set1",
    price: 457,
  },
  {
    name: "Burn Heal",
    description: "Foster-Kennedy syndrome, right eye",
    category: "medicine",
    inventory: 86,
    generation: null,
    imageUrl: "https://robohash.org/idhicquia.png?size=50x50&set=set1",
    price: 139,
  },
  {
    name: "Ford",
    description: "Unsp pedl cyclst inj in clsn w statnry object nontraf, subs",
    category: "Delaware",
    inventory: 15,
    generation: null,
    imageUrl:
      "https://robohash.org/voluptatumquiaaliquid.png?size=50x50&set=set1",
    price: 994,
  },
  {
    name: "Jeep",
    description: "Disp fx of base of second MC bone. left hand, sequela",
    category: "Panamanian",
    inventory: 50,
    generation: null,
    imageUrl:
      "https://robohash.org/officiisdoloribuslibero.png?size=50x50&set=set1",
    price: 207,
  },
  {
    name: "Chrysler",
    description: "Abrasion, right foot",
    category: "Delaware",
    inventory: 19,
    generation: null,
    imageUrl: "https://robohash.org/modiodioquidem.png?size=50x50&set=set1",
    price: 452,
  },
  {
    name: "Buick",
    description: "Nondisp fx of proximal phalanx of right little finger",
    category: "Paiute",
    inventory: 63,
    generation: null,
    imageUrl: "https://robohash.org/quossapienteex.png?size=50x50&set=set1",
    price: 865,
  },
  {
    name: "Toyota",
    description: "Other retained radioactive fragments",
    category: "Paiute",
    inventory: 6,
    generation: null,
    imageUrl:
      "https://robohash.org/voluptatesillumdolore.png?size=50x50&set=set1",
    price: 275,
  },
  {
    name: "Chevrolet",
    description: "Athscl nonbiol bypass of the right leg w ulceration of thigh",
    category: "American Indian",
    inventory: 42,
    generation: null,
    imageUrl:
      "https://robohash.org/excepturisimiliqueex.png?size=50x50&set=set1",
    price: 611,
  },
  {
    name: "Nissan",
    description: "Encounter for attention to colostomy",
    category: "Native Hawaiian and Other Pacific Islander (NHPI)",
    inventory: 78,
    generation: null,
    imageUrl: "https://robohash.org/quibusdamquisaepe.png?size=50x50&set=set1",
    price: 765,
  },
  {
    name: "Mitsubishi",
    description: "Multiple fractures of ribs, left side, sequela",
    category: "Central American",
    inventory: 10,
    generation: null,
    imageUrl:
      "https://robohash.org/dignissimosesseaspernatur.png?size=50x50&set=set1",
    price: 590,
  },
  {
    name: "Porsche",
    description: "Sltr-haris Type IV physl fx upr end l tibia, 7thK",
    category: "Cheyenne",
    inventory: 68,
    generation: null,
    imageUrl:
      "https://robohash.org/utvoluptatedeleniti.png?size=50x50&set=set1",
    price: 967,
  },
  {
    name: "Suzuki",
    description: "Unsp fx unsp low leg, subs for opn fx type I/2 w delay heal",
    category: "Nicaraguan",
    inventory: 17,
    generation: null,
    imageUrl: "https://robohash.org/utsequineque.png?size=50x50&set=set1",
    price: 207,
  },
  {
    name: "Lotus",
    description: "Malignant melanoma of unspecified lower limb, including hip",
    category: "Kiowa",
    inventory: 73,
    generation: null,
    imageUrl:
      "https://robohash.org/temporibusautratione.png?size=50x50&set=set1",
    price: 266,
  },
  {
    name: "Kia",
    description: "Superficial foreign body of left index finger, sequela",
    category: "Eskimo",
    inventory: 9,
    generation: null,
    imageUrl: "https://robohash.org/pariatureumquo.png?size=50x50&set=set1",
    price: 829,
  },
  {
    name: "Ford",
    description: "Unspecified injury of axillary artery, left side, sequela",
    category: "Guamanian",
    inventory: 43,
    generation: null,
    imageUrl:
      "https://robohash.org/voluptatesrepudiandaeeos.png?size=50x50&set=set1",
    price: 511,
  },
  {
    name: "Subaru",
    description: "Toxic effect of pesticides, accidental (unintentional), init",
    category: "Navajo",
    inventory: 60,
    generation: null,
    imageUrl:
      "https://robohash.org/eaqueconsequunturfugiat.png?size=50x50&set=set1",
    price: 611,
  },
  {
    name: "MINI",
    description: "Breakdown of urinary electronic stimulator device, init",
    category: "Yuman",
    inventory: 93,
    generation: null,
    imageUrl:
      "https://robohash.org/eaquenihilrecusandae.png?size=50x50&set=set1",
    price: 966,
  },
  {
    name: "Kia",
    description: "Displ bimalleol fx l low leg, 7thN",
    category: "Osage",
    inventory: 55,
    generation: null,
    imageUrl: "https://robohash.org/consequatureumut.png?size=50x50&set=set1",
    price: 124,
  },
  {
    name: "Toyota",
    description: "Pedl cyc driver inj in clsn w rail trn/veh in traf, sequela",
    category: "Vietnamese",
    inventory: 62,
    generation: null,
    imageUrl: "https://robohash.org/maioresautharum.png?size=50x50&set=set1",
    price: 969,
  },
  {
    name: "Land Rover",
    description: "Nondisp fx of pisiform, unsp wrist, subs for fx w nonunion",
    category: "Salvadoran",
    inventory: 58,
    generation: null,
    imageUrl: "https://robohash.org/nequeanimiqui.png?size=50x50&set=set1",
    price: 562,
  },
  {
    name: "Kia",
    description: "Fx unsp prt of nk of l femr, 7thJ",
    category: "Navajo",
    inventory: 78,
    generation: null,
    imageUrl: "https://robohash.org/doloresabet.png?size=50x50&set=set1",
    price: 806,
  },
  {
    name: "Ford",
    description: "Pathological fracture, left tibia, subs for fx w nonunion",
    category: "Chippewa",
    inventory: 84,
    generation: null,
    imageUrl: "https://robohash.org/aeaenim.png?size=50x50&set=set1",
    price: 130,
  },
  {
    name: "Pontiac",
    description: "Nondisp fx of 4th metatarsal bone, r ft, 7thK",
    category: "Colville",
    inventory: 79,
    generation: null,
    imageUrl:
      "https://robohash.org/evenietrepudiandaeut.png?size=50x50&set=set1",
    price: 789,
  },
  {
    name: "Porsche",
    description: "Vascular abnormalities of conjunctiva, bilateral",
    category: "Micronesian",
    inventory: 29,
    generation: null,
    imageUrl:
      "https://robohash.org/omnisoptionecessitatibus.png?size=50x50&set=set1",
    price: 947,
  },
  {
    name: "Ford",
    description: "Fracture of alveolus of maxilla, sequela",
    category: "Chickasaw",
    inventory: 51,
    generation: null,
    imageUrl:
      "https://robohash.org/consequaturdolorvoluptatem.png?size=50x50&set=set1",
    price: 369,
  },
];

const users = [
  {
    username: "Andrew",
    name: "Andrew A.",
    password: "1",
    email: "andrew@gmail.com",
    address: "Andrew St 123",
    role: "ADMIN",
  },
  {
    username: "Nica",
    name: "Nica W.",
    password: "NicaB",
    email: "nica@gmail.com",
    address: "Nica St 321",
    role: "ADMIN",
  },
  {
    username: "AlexB",
    name: "Alex B.",
    password: "AlexA",
    email: "alexB@gmail.com",
    address: "Alex St 404",
    role: "MEMBER",
  },
  {
    username: "MichelleZ",
    name: "Michelle Z.",
    password: "MichelleA",
    email: "michelle@gmail.com",
    address: "Michelle St 123",
    role: "MEMBER",
  },
  {
    username: "jonStewart",
    name: "Jon Stewart",
    password: "Jon1",
    email: "theproblem@gmail.com",
    address: "New York",
    role: "MEMBER",
  },
  {
    username: "trevorNoah",
    name: "Trevor Noah",
    password: "Trevor1",
    email: "dailyshow@gmail.com",
    address: "N/A",
    role: "MEMBER",
  },
  {
    username: "kamalaharris",
    name: "Kamala Harris",
    password: "Kamala1",
    email: "veep@gmail.com",
    address: "Washington, DC",
    role: "MEMBER",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    console.log("Seeding is good!");
    db.close();
  } catch (err) {
    console.error("NOT GOOD NOT GOOD!");
    console.error(err);
    db.close();
  }
};

seed();
