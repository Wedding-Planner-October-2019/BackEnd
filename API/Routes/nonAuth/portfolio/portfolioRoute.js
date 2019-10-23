const express = require("express");

const router = express.Router();

const errorRef = require("../../../../Middleware/errorRef");

const Portfolio = require("../../../Models/portfolioModel");

//get all wedding and user info unprotected
router.get("/", (req, res) => {
  // const { id } = req.params;
  Portfolio.showAll()
    .then(portfolio => {
      res.status(200).json(portfolio);
    })
    .catch(err => {
      res.status(500).json({
        message: "failed to load all of the wedding planners portfolios",
        error: errorRef(err)
      });
    });
});

//get user info and wedding by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Portfolio.showProfile(id).then(portfolio => {
    res.status(200);
  });
});

module.exports = router;
