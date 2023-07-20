const express = require("express");

const router = express.Router();

const articlesControllers = require("./controllers/articlesControllers");
const productControllers = require("./controllers/productControllers");
const authControllers = require("./controllers/authControllers");

const { checkUserData } = require("./services/auth");
const { checkUser } = require("./services/jwt");

router.get("/articles", articlesControllers.browse);
router.get("/articles/:id", articlesControllers.read);
router.put("/articles/:id", checkUser, articlesControllers.edit);
router.post("/articles", articlesControllers.add);
router.delete("/articles/:id", checkUser, articlesControllers.destroy);

router.get("/vins", productControllers.browse);
router.get("/vins/:id", productControllers.read);
router.put("/vins/:id", checkUser, productControllers.edit);
router.post("/vins", checkUser, productControllers.add);
// router.delete("/vins/:id", checkUser, productControllers.destroy);

router.post("/login", checkUserData, authControllers.login);

module.exports = router;
