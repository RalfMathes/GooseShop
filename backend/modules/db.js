"use strict";

const itemsJson = [
  {
    id: 1,
    categoryId: 1,
    collectionId: 1,
    name: "knife",
    price: 15.99,
    imgUrl: "/static/goose.svg",
    tags: ["knife", "goose"],
  },
  {
    id: 2,
    categoryId: 2,
    collectionId: 1,
    name: "goose plush",
    price: 17.99,
    imgUrl: "/static/goose.svg",
    tags: ["plush", "goose"],
  },
  {
    id: 3,
    categoryId: 2,
    collectionId: 1,
    name: "goose energy drink",
    price: 3,
    imgUrl: "/static/goose.svg",
    tags: ["energy drink", "goose"],
  },
  {
    id: 4,
    categoryId: 2,
    collectionId: 1,
    name: "goose turbo",
    price: 115.99,
    imgUrl: "/static/goose.svg",
    tags: ["engine supply", "goose"],
  },
  {
    id: 5,
    categoryId: 3,
    collectionId: 2,
    name: "mechanical keyboard",
    price: 220.99,
    imgUrl: "/static/keyboard.jpeg",
    tags: ["mechanical keyboard"],
  },
  {
    id: 6,
    categoryId: 3,
    collectionId: 2,
    name: "keyboard switches",
    price: 6.99,
    imgUrl: "/static/switches.webp",
    tags: ["mechanical keyboard", "mechanical keyboard supply"],
  },
  {
    id: 7,
    categoryId: 3,
    collectionId: 2,
    name: "keycaps",
    price: 12.99,
    imgUrl: "/static/keycaps.webp",
    tags: ["mechanical keyboard", "mechanical keyboard supply"],
  },
];

const categoriesJson = [
  {
    id: 1,
    name: "knives",
    imgUrl: "/static/knives.jpeg",
  },
  {
    id: 2,
    name: "goose",
    imgUrl: "/static/geese.webp",
  },
  {
    id: 3,
    name: "keyboards",
    imgUrl: "/static/keyboards.webp",
  },
]
const collectionsJson = [
  {
    id: 1,
    name: "goose",
    imgUrl: "/static/goose_collection.webp",
  },
  {
    id: 2,
    name: "not-goose",
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
