const { db } = require("./server/db/index.js");
const Product = require("./server/db/models/Product");
const User = require("./server/db/models/User")

const products = [{
    name: "Bulbasaur",
    description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    category: "I",
    inventory: 100,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    price: 1
}, {
    name: "Ivysaur",
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    category: "I",
    inventory: 100,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    price: 2
}, {
    name: "Venusaur ",
    description: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    category: "I",
    inventory: 100,
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    price: 3
}]

const users = [{
    username: "Andrew",
    password: "1",
    email: "andrew@gmail.com",
    address: "Andrew St 123",
    role: "ADMIN"
},
{
    username: "Nica",
    password: "NicaB",
    email: "nica@gmail.com",
    address: "Nica St 321",
    role: "ADMIN"
}, {
    username: "AlexB",
    password: "AlexA",
    email: "alexB@gmail.com",
    address: "Alex St 404",
    role: "MEMBER"
},
{
    username: "MichelleZ",
    password: "MichelleA",
    email: "michelle@gmail.com",
    address: "Michelle St 123",
    role: "MEMBER"
}
]

const seed = async () => {
    try {
        await db.sync({ force: true });
        await Promise.all(products.map(product => {
            return Product.create(product)
        }));
        await Promise.all(users.map(user => {
            return User.create(user)
        }));

        console.log('Seeding is good!')
        db.close()
    }
    catch (err) {
        console.error('NOT GOOD NOT GOOD!')
        console.error(err)
        db.close()
    }
}

seed()