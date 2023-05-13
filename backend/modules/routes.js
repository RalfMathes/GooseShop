"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
var cors = require('cors');

const database = require("./db");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(cors({
  origin: '*',
  exposedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept' ],
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}));

router.get("/collections", database.getAllCollections);
router.get("/collections/:collectionId", database.getCollectionById);
router.get("/categories", database.getAllCategories);
router.get("/categories/:categoryId", database.getCategoryById);
router.get("/items", database.getAllItems);
router.get("/items/:itemId", database.getItemById);

module.exports = router;
