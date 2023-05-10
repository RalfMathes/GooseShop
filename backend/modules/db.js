"use strict";

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

const getItemById = (request, response) => {
  const itemId = parseInt(request.params.itemId);
  return response.status(200).json("getItemById " + itemId);
};

module.exports = {
  getAllCollections,
  getCollectionById,
  getAllCategories,
  getCategoryById,
  getItemById,
};
