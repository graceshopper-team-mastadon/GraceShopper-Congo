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
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest/scale-to-width-down/200?cb=20200620223551",
    price: 1,
  },
  {
    name: "Ivysaur",
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/7/73/002Ivysaur.png/revision/latest/scale-to-width-down/200?cb=20140328190847",
    price: 2,
  },
  {
    name: "Venusaur ",
    description:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/a/ae/003Venusaur.png/revision/latest/scale-to-width-down/200?cb=20200731133335",
    price: 3,
  },
  {
    name: "Charmander",
    description:
      "The power of Charmander's flame attacks can be gauged by the size of the flame on its tail.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest/scale-to-width-down/187?cb=20200620223744",
    price: 1,
  },
  {
    name: "Charmeleon",
    description:
      "Charmeleon, like its other evolutionary forms, can naturally breathe fire. Its powers, though, are much greater than Charmander's, but not as great as Charizard's",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/4/4a/005Charmeleon.png/revision/latest/scale-to-width-down/200?cb=20140328191309",
    price: 2,
  },
  {
    name: "Charizard",
    description:
      "The fire on Charizard's tail will change to a bluish-white color if it is furious.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/monster/images/9/95/Charizard.png/revision/latest?cb=20170708221247",
    price: 3,
  },
  {
    name: "Squirtle",
    description:
      "Squirtle is a small, light-blue Pokémon with an appearance similar to a turtle.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
    price: 1,
  },
  {
    name: "Wartortle",
    description:
      "Wartortle is a small, bipedal, turtle-like Pokémon with a similar appearance to that of its pre-evolved form, Squirtle.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/0/0c/008Wartortle.png/revision/latest/scale-to-width-down/200?cb=20140328191553",
    price: 2,
  },
  {
    name: "Blastoise",
    description:
      "Blastoise, like Wartortle and Squirtle, can naturally shoot water, though not from its mouth, but from its large cannons.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/0/02/009Blastoise.png/revision/latest/scale-to-width-down/190?cb=20200731133731",
    price: 3,
  },
  {
    name: "Chikorita",
    description:
      "Chikorita are docile and friendly, spending a lot of time in the sun to soak up the sun's rays.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/b/bf/152Chikorita.png/revision/latest/scale-to-width-down/200?cb=20140329012502",
    price: 1,
  },
  {
    name: "Bayleef",
    description:
      "Around its neck are several small leaves that Bayleef can shoot at opponents.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/c/ca/153Bayleef.png/revision/latest/scale-to-width-down/200?cb=20140329012505",
    price: 2,
  },
  {
    name: "Meganium",
    description:
      "Meganium is a tall, heavy Pokémon with a light green body, a pink, white, and yellow flower around its very long neck, and yellow eyes.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/d/d1/154Meganium.png/revision/latest/scale-to-width-down/200?cb=20200524151818",
    price: 3,
  },
  {
    name: "Cyndaquil",
    description:
      "They are covered with a flame-resistant fur that is dark blue in color on its back to its head and light yellow on its underside.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/9/9b/155Cyndaquil.png/revision/latest/scale-to-width-down/200?cb=20140329012506",
    price: 1,
  },
  {
    name: "Quilava",
    description:
      "Quilava is a more slender version of its pre-evolution, while also resembling a weasel.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/b/b6/156Quilava.png/revision/latest/scale-to-width-down/200?cb=20140329012506",
    price: 2,
  },
  {
    name: "Typhlosion",
    description:
      "Typhlosion looks like a wolverine with a mane of spiky flames around its neck.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/4/47/157Typhlosion.png/revision/latest/scale-to-width-down/200?cb=20140329012507",
    price: 3,
  },
  {
    name: "Totodile",
    description:
      "Totodile is a small Pokémon that appears as a bipedal crocodile. While most of a Totodile's body is blue, they have a yellow, V-shaped marking across their chest, red eyes and spikes that go down its back to its tail.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/d/df/158Totodile.png/revision/latest/scale-to-width-down/200?cb=20140329012507",
    price: 1,
  },
  {
    name: "Croconaw",
    description:
      "Croconaw resembles a crocodile. It has a yellow body with blue spots, which resembles spotted animal skin.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/a/a5/159Croconaw.png/revision/latest/scale-to-width-down/200?cb=20140329012508",
    price: 2,
  },
  {
    name: "Feraligatr",
    description:
      "Feraligatr is a bulky, bipedal, crocodilian Pokémon with blue scales. It has large, powerful jaws lined with several sharp fangs.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/d/d5/160Feraligatr.png/revision/latest/scale-to-width-down/200?cb=20140329012508",
    price: 3,
  },
  {
    name: "Treecko",
    description:
      "They require the least caution or experience out of the three Hoennian starters, given their cool and collected demeanors.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/2/2c/252Treecko.png/revision/latest/scale-to-width-down/200?cb=20201023051357",
    price: 1,
  },
  {
    name: "Grovyle",
    description:
      "Grovyle is a light green, bipedal Pokémon with plant and reptilian features. Its head has a long snout with small nostrils, it also has yellow eyes.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/e/ea/253Grovyle.png/revision/latest/scale-to-width-down/200?cb=20140329020703",
    price: 2,
  },
  {
    name: "Sceptile",
    description:
      "Sceptile is a large, bipedal, reptilian, gecko-like Pokémon that also possess the traits of dinosaurs.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/3/3e/254Sceptile.png/revision/latest/scale-to-width-down/200?cb=20140329020703",
    price: 3,
  },
  {
    name: "Torchic",
    description:
      "Torchic is a small, chick-like Pokémon. Its soft, fluffy plumage is mainly bright orange, with tiny, yellow, developing wings, and a yellow plume of three feathers atop its head.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/9/91/255Torchic.png/revision/latest/scale-to-width-down/200?cb=20201023052610",
    price: 1,
  },
  {
    name: "Combusken",
    description:
      "Combusken is a bipedal bird-like Pokémon that resembles a young chicken or rooster. It is slightly humanoid in body shape.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/2/29/256Combusken.png/revision/latest/scale-to-width-down/200?cb=20140329020704",
    price: 2,
  },
  {
    name: "Blaziken",
    description:
      "Blaziken is a large, bipedal, humanoid bird-like or a humanoid chicken-like Pokémon that resembles a rooster. Its face, lower body, arms, and tail are bright red, with some yellow patches on its chest, and running down its legs and feet.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/9/90/257Blaziken.png/revision/latest/scale-to-width-down/200?cb=20140329020705",
    price: 3,
  },
  {
    name: "Mudkip",
    description:
      "It has a large upright segmented fin atop its head, and large orange cheeks with three pointed whisker-like feelers on each.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/6/60/258Mudkip.png/revision/latest/scale-to-width-down/200?cb=20201023052725",
    price: 1,
  },
  {
    name: "Marshtomp",
    description:
      "It is mainly turquoise blue with a plump orange belly and orange spikes on its cheeks.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/2/27/259Marshtomp.png/revision/latest/scale-to-width-down/200?cb=20140329020706",
    price: 2,
  },
  {
    name: "Swampert",
    description:
      "It has a long bluish/white body with a lighter blue underbelly. It has four appendages that are a cross between legs and fins.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/b/b6/260Swampert.png/revision/latest/scale-to-width-down/200?cb=20140329020706",
    price: 3,
  },
  {
    name: "Turtwig",
    description:
      "Turtwig is a Pokémon and appears to be a green-ish Pokémon with a small twig on its head.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/5/5c/387Turtwig.png/revision/latest/scale-to-width-down/200?cb=20201023052937",
    price: 1,
  },
  {
    name: "Grotle",
    description:
      "Grotle has a large, yellow shell that covers the back, head and short tail.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/5/53/388Grotle.png/revision/latest/scale-to-width-down/200?cb=20140329033211",
    price: 2,
  },
  {
    name: "Torterra",
    description:
      "It has a dark-green shell on its back with a white rim and diamond shape, along with a large tree on top.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/d/df/389Torterra.png/revision/latest/scale-to-width-down/200?cb=20140329033211",
    price: 3,
  },
  {
    name: "Chimchar",
    description:
      "Chimchar has a light-colored stomach with a little swirl at the top on its chest.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/7/76/390Chimchar.png/revision/latest/scale-to-width-down/200?cb=20201023053630",
    price: 1,
  },
  {
    name: "Monferno",
    description:
      "It also possesses beige coloring on its belly, hands, feet, mouth, and ears.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/2/2e/391Monferno.png/revision/latest/scale-to-width-down/200?cb=20140329033212",
    price: 2,
  },
  {
    name: "Infernape",
    description: "Infernape is based upon the ape as cleared from its name.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/f/fb/392Infernape.png/revision/latest/scale-to-width-down/200?cb=20140329033212",
    price: 3,
  },
  {
    name: "Piplup",
    description:
      "Piplup is a chubby, light-blue penguin-like Pokémon, which is covered in thick down (and, presumably, given its plump appearance and real-world penguin biology, thick layers of fatty tissue) to insulate against the cold.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/b/b1/393Piplup.png/revision/latest/scale-to-width-down/132?cb=20211216054546",
    price: 1,
  },
  {
    name: "Prinplup",
    description:
      "On Prinplup's head is a yellow crown that lies above the eyes. Prinplup's chubby torso is a light blue with four white spots, two on each side.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/d/df/394Prinplup.png/revision/latest/scale-to-width-down/200?cb=20140329033213",
    price: 2,
  },
  {
    name: "Empoleion",
    description:
      "Empoleon appears to be a stout, navy blue penguin-like Pokémon with orange webbed feet like ducks have.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/7/7f/395Empoleon.png/revision/latest/scale-to-width-down/200?cb=20140329033214",
    price: 3,
  },
  {
    name: "Snivy",
    description:
      "Snivy is a serpentine creature with mainly a green body, tan stomach and lower head, with the end of its tail being shaped like a leaf as large as its head.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/7/75/495Snivy.png/revision/latest/scale-to-width-down/200?cb=20201023053959",
    price: 1,
  },
  {
    name: "Servine",
    description:
      "Servine is a snake-like Pokémon. The top part of its body is a lush green hue, while its face and plump underbelly are cream-colored.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/7/73/496Servine.png/revision/latest/scale-to-width-down/200?cb=20140329044051",
    price: 2,
  },
  {
    name: "Serperior",
    description:
      "Serperior is a very large reptilian snake-like Pokémon. It has a white neck and face with a pointy snout, with pale-green designs on the top of its head with two yellow leaf-like extensions on the back of its head.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/b/b7/497Serperior.png/revision/latest/scale-to-width-down/200?cb=20140329044051",
    price: 3,
  },
  {
    name: "Tepig",
    description:
      "Tepig is a small quadrupedal mammalian Pokémon that resembles a piglet.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/5/5b/498Tepig.png/revision/latest/scale-to-width-down/200?cb=20201023054106",
    price: 1,
  },
  {
    name: "Pignite",
    description:
      "Pignite is a bipedal pig-like Pokémon that appears to be wearing black spandex tights, similar to a wrestler.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/e/e8/499Pignite.png/revision/latest/scale-to-width-down/200?cb=20140329044052",
    price: 2,
  },
  {
    name: "Emboar",
    description:
      "Emboar is a very large bipedal boar-like Pokémon. It has orange skin seen on the chest and head and flames emanating from around its neck and a small, black spiked tail.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/1/18/500Emboar.png/revision/latest/scale-to-width-down/200?cb=20140329044052",
    price: 3,
  },
  {
    name: "Oshawott",
    description:
      "Oshawott is a bipedal, mammalian sea otter-like Pokémon. It has furs covering its entire body, with white fur on its face and arms, light-blue fur on its chubby torso and a dark blue tail, feet and ears.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/3/3b/501Oshawott.png/revision/latest/scale-to-width-down/200?cb=20201023054214",
    price: 1,
  },
  {
    name: "Dewott",
    description:
      "Dewott is a bipedal otter-like Pokémon. It is mainly light cyan blue in color, with a navy blue apron-like fringe of fur around its thighs that bears two scalchops, which can be removed an used as swords when it battles.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/e/e4/502Dewott.png/revision/latest/scale-to-width-down/200?cb=20140329044053",
    price: 2,
  },
  {
    name: "Samurott",
    description:
      "Samurott is a quadrupedal, aquatic mammalian Pokémon that resembles a sea lion. It is different to its previous evolutions, which were bipedal.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/b/b5/503Samurott.png/revision/latest/scale-to-width-down/200?cb=20140329044054",
    price: 3,
  },
  {
    name: "Potion",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 20 points.",
    category: "medicine",
    inventory: 99,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/d/df/Dream_Potion_Sprite.png",
    price: 745,
  },
  {
    name: "Super Potion",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 50 points.",
    category: "medicine",
    inventory: 20,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/5/57/Dream_Super_Potion_Sprite.png",
    price: 971,
  },
  {
    name: "Hyper Potion",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 200 points.",
    category: "medicine",
    inventory: 95,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/c/c8/Dream_Hyper_Potion_Sprite.png",
    price: 114,
  },
  {
    name: "Max Potion",
    description:
      "A spray-type medicine for treating wounds. It will completely restore the max HP of a single Pokémon.",
    category: "medicine",
    inventory: 63,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/a/a2/Dream_Max_Potion_Sprite.png",
    price: 344,
  },
  {
    name: "Full Restore",
    description:
      "It is an item that fully restores the HP and heals any Status ailments of a Pokémon. It has no effect on a fainted Pokémon.",
    category: "medicine",
    inventory: 73,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/0/0c/Dream_Full_Restore_Sprite.png",
    price: 3000,
  },
  {
    name: "Poke Ball",
    description:
      "It has a simple red and white design, and it's the most known kind of Poké Ball",
    category: "pokeballs",
    inventory: 25,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png",
    price: 518,
  },
  {
    name: "Great Ball",
    description: "It is slightly better than the regular Poké Ball.",
    category: "pokeballs",
    inventory: 55,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/b/bf/Dream_Great_Ball_Sprite.png",
    price: 340,
  },
  {
    name: "Ultra Ball",
    description: "It is twice as good as a regular Poké Ball.",
    category: "pokeballs",
    inventory: 24,
    generation: null,
    imageUrl:
      "https://archives.bulbagarden.net/media/upload/a/a8/Dream_Ultra_Ball_Sprite.png",
    price: 678,
  },
  {
    name: "Feather Ball",
    description:
      "It can be thrown farther than a regular Poké Ball and travels quickly in a straight line instead of flying in an arc, allowing the player to catch faraway and flying Pokémon more easily.",
    category: "pokeballs",
    inventory: 17,
    generation: null,
    imageUrl:
      "https://progameguides.com/wp-content/uploads/2022/01/pokemon-legends-arceus-pokeball-generic.jpg?fit=1200%2C675",
    price: 282,
  },
  {
    name: "Master Ball",
    description:
      "A very rare Poké Ball that never fails in an attempt to catch a Pokémon.",
    category: "pokeballs",
    inventory: 5,
    generation: null,
    imageUrl:
      "https://static.wikia.nocookie.net/nintendo/images/a/a1/Master_Ball_Sprite.png/revision/latest?cb=20110417161310&path-prefix=en",
    price: 99999999,
  },
  {
    name: "Timer Ball",
    description:
      "It can be used to catch a wild Pokémon, being more likely to succeed the longer it has been since the start of the battle.",
    category: "pokeballs",
    inventory: 21,
    generation: null,
    imageUrl:
      "https://static.wikia.nocookie.net/pokemon/images/4/46/Timer_Ball.png/revision/latest?cb=20151003164314",
    price: 740,
  },
  {
    name: "Antidote",
    description: "This can be used to heal a pokemon from poison",
    category: "medicine",
    inventory: 30,
    generation: null,
    imageUrl: "https://www.gamerguides.com/assets/media/15/1336/item_0018.png",
    price: 1000,
  },
  {
    name: "Ice Heal",
    description:
      "The ice heal can be used to cure a Pokemon from a freeze burn.",
    category: "medicine",
    inventory: 69,
    generation: null,
    imageUrl: "https://www.gamerguides.com/assets/media/15/1449/item_0020.png",
    price: 457,
  },
  {
    name: "Burn Heal",
    description: "The burn heal can be used to cure a Pokemon from a burn.",
    category: "medicine",
    inventory: 86,
    generation: null,
    imageUrl: "https://i1.sndcdn.com/artworks-000117633740-5cwgr8-t500x500.jpg",
    price: 139,
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
