"use strict";

const itemsJson = [
  {
    id: 1,
    name: "knife",
    price: 15.99,
    imgUrl: "/static/goose.svg",
  },
  {
    id: 2,
    name: "goose plush",
    price: 17.99,
    imgUrl: "/static/goose.svg",
  },
  {
    id: 3,
    name: "goose energy drink",
    price: 3,
    imgUrl: "/static/goose.svg",
  },
  {
    id: 4,
    name: "goose turbo",
    price: 115.99,
    imgUrl: "/static/goose.svg",
  },
];

const getAllCollections = (request, response) => {
  return response.status(200).json("getAllCollections");
};

const getCollectionById = (request, response) => {
  const collectionId = parseInt(request.params.collectionId);
  return response.status(200).json("getCollectionById " + collectionId);
};

const getAllCategories = (request, response) => {
  return response.status(200).json("getAllCategories");
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
