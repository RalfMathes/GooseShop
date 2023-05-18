"use strict";

const itemsJson = [
  {
    id: 1,
    categoryId: 1,
    collectionId: 1,
    name: "knife",
    description: "A high quality kitchen knife made out of high carbon steel. Perfect for every cook, novice or advanced",
    price: 15.99,
    imgUrl: "/static/goose.svg",
    tags: ["knife", "goose"],
  },
  {
    id: 2,
    categoryId: 2,
    collectionId: 1,
    name: "goose plush",
    description: "A goose plush made with love. No geese were harmed or bothered in the manufacturing of this product.",
    price: 17.99,
    imgUrl: "/static/goose.svg",
    tags: ["plush", "goose"],
  },
  {
    id: 3,
    categoryId: 2,
    collectionId: 1,
    name: "goose energy drink",
    description: "A high caffeine energy drink. Only suitable for human consumption.",
    price: 3,
    imgUrl: "/static/goose.svg",
    tags: ["energy drink", "goose"],
  },
  {
    id: 4,
    categoryId: 2,
    collectionId: 1,
    name: "goose turbo",
    description: "Replacement turbo charger. Works with geese and swans. Not compatible with ducks.",
    price: 115.99,
    imgUrl: "/static/goose.svg",
    tags: ["engine supply", "goose"],
  },
  {
    id: 5,
    categoryId: 3,
    collectionId: 2,
    name: "mechanical keyboard",
    description: "A mechanical keyboard with mx style switches and cherry keycaps.",
    price: 220.99,
    imgUrl: "/static/keyboard.jpeg",
    tags: ["mechanical keyboard"],
  },
  {
    id: 6,
    categoryId: 3,
    collectionId: 2,
    name: "keyboard switches",
    description: "Replacement switches for mx style mechanical keyboards.",
    price: 6.99,
    imgUrl: "/static/switches.webp",
    tags: ["mechanical keyboard", "mechanical keyboard supply"],
  },
  {
    id: 7,
    categoryId: 3,
    collectionId: 2,
    name: "keycaps",
    description: "Replacement keycaps for mx switches. Available in cherry profile.",
    price: 12.99,
    imgUrl: "/static/keycaps.webp",
    tags: ["mechanical keyboard", "mechanical keyboard supply"],
  },
  {
    id: 8,
    categoryId: 4,
    collectionId: 1,
    name: "debug gosling",
    description: "Oh gosh, i hope i got all the edge cases. What is this? Might this be a little gosling? And not just any gosling, it's a debug gosling! And he brings a very long wall of text with himself. But wouldn't you know that is exactly what we want! A good hearty wall of text to test out if everything works. Did you know a baby goose is called a gosling? I sure didn't. I just learned that you call it gosling a few moments ago, but then again, you might be reading this looooooong after i commited this entry. Unfortunately he can't be in the goose catgory because this is not a relational database and this little gosling has a lot of work to do. So while we're at it, how are you doing? I hope fine, i can't answer if that wasn't the case. So anway i thought this would be a tad more entertaining than just boring old lorem ipsum, and hey, you might have learned what a gosling is. But now i gotta go and take care of the actual debugging. I will leave you this little debugging gosling as a companion. He might grow up to be a big healthy debugging goose, who knows...",
    price: 13.37,
    imgUrl: "/static/gosling.jpeg",
    tags: ["debugging", "gosling", "oddly enough not in the goose category..."],
  },
];

const categoriesJson = [
  {
    id: 1,
    name: "knives",
    description: "All kinds of knives. Kitchen knives, EDC knives, outdoot knives, goose knives. We have something for everyone.",
    imgUrl: "/static/knives.jpeg",
  },
  {
    id: 2,
    name: "goose",
    description: "Goose related products. Everything that makes your goose happy, from goose plushies to knives (Don't give your goose a knife).",
    imgUrl: "/static/goose.jpeg",
  },
  {
    id: 3,
    name: "keyboards",
    description: "Mechanical keyboards and supplies. Ranging from budget keyboards to enthusiast grade high end keyboards.",
    imgUrl: "/static/keyboards.webp",
  },
  {
    id: 4,
    name: "debug",
    description: "The debug category. If you can read this, you are either looking ad the backend code, or you are reading a commit. At the time of writing the description of categories are not being displayed anywhere. I could just have skipped giving categories descriptions altogether but i guess it's better to have them and not use them than to not have them and then needing them.",
    imgUrl: "/static/debug.webp",
  }
]
const collectionsJson = [
  {
    id: 1,
    name: "goose",
    description: "The goose collection features a selection of products for geese and geese enthusiasts. Everything that makes a little goose's heart honk. Take a look around and find something for your feathered companion",
    imgUrl: "/static/goose_collection.webp",
  },
  {
    id: 2,
    name: "not-goose",
    description: "Geese are just not your thing? This is the collection for you. Nothing in this collection will have anything to do with geese. No swans no feathers. We're not ducking around and you can find out. The products in these collection are hand picked by people who just can't be bothered with feathers or beaks.",
    imgUrl: "/static/not_goose_collection.webp",
  },
]

const getAllCollections = (request, response) => {
  return response.status(200).json(collectionsJson);
};

const getCollectionById = (request, response) => {
  const collectionId = parseInt(request.params.collectionId);
  return response.status(200).json("getCollectionById " + collectionId);
};

const getAllCategories = (request, response) => {
  return response.status(200).json(categoriesJson);
};

const getCategoryById = (request, response) => {
  const categoryId = parseInt(request.params.categoryId);
  return response.status(200).json("getCategoryById " + categoryId);
};

const getAllItems = (request, response) => {
  return response.status(200).json(itemsJson);
};

const getItemById = (request, response) => {
  const itemId = parseInt(request.params.itemId);
  return response.status(200).json("getItemById " + itemId);
};

module.exports = {
  getAllCollections,
  getCollectionById,
  getAllCategories,
  getCategoryById,
  getAllItems,
  getItemById,
};
