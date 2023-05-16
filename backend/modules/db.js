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
    imgUrl: "/static/geese.webp",
  },
  {
    id: 3,
    name: "keyboards",
    description: "Mechanical keyboards and supplies. Ranging from budget keyboards to enthusiast grade high end keyboards.",
    imgUrl: "/static/keyboards.webp",
  },
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
