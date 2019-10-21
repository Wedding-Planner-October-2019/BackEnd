const router = require("express").Router();
const Weddings = require("../../../API/Models/weddingModel");
const errorRef = require("../../../Middleware/errorRef");

//get all user wedding

router.get("/", (req, res) => {
  Weddings.find()
    .then(wedding => {
      res.status(200).json(wedding);
    })
    .catch(err => {
      res.status(500).json({
        message: "failed to load all of the wedding post",
        error: errorRef(err)
      });
    });
});

//get wedding by ID

router.get("/id");

//post wedding

router.post("/");

//edit wedding

router.post("/:id");

//delete wedding

router.delete("/:id");

module.exports = router;
