"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const database = require("./db");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/collection", database.getAllCollections);
router.get("/collection/:collectionId", database.getCollectionById);
router.get("/category", database.getAllCategories);
router.get("/category/:categoryId", database.getCategoryById);
router.get("/item/:itemId", database.getItemById);

module.exports = router;
