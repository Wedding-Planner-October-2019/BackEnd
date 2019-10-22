const router = require("express").Router();
const Weddings = require("../../../API/Models/weddingModel");
const errorRef = require("../../../Middleware/errorRef");
const validatePostContent = require("../../../Middleware/validatePostContent");

//get all user wedding

router.get("/", (req, res) => {
  Weddings.find(req.params.id)
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

//get user's wedding by ID
router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  Weddings.findByUserId(userId)
    .then(wedding => {
      console.log(wedding);
      if (wedding.length > 0) {
        res.status(200).json(wedding);
      } else {
        res.status(400).json({
          message: "The user with this specified ID doesn't exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "The User's wedding post information couldn't be retrieved.",
        error: errorRef(err)
      });
    });
});

//get single wedding by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Weddings.findById(id)
    .then(wedding => {
      console.log(wedding);
      if (wedding.length > 0) {
        res.status(200).json(wedding);
      } else {
        res.status(400).json({
          message: "The wedding with this specified ID doesn't exist.",
          error: errorRef(err)
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "The wedding post information couldn't be retrieved.",
        error: errorRef(err)
      });
    });
});
//post wedding to specific user
router.post("/user/:id", validatePostContent, (req, res) => {
  const userId = req.params.id;
  const weddingPost = req.body;
  Weddings.add(userId, weddingPost)
    .then(weddingPost => {
      res.status(201).json(weddingPost);
    })
    .catch(err => {
      res.status(500).json({
        message: "failed to create wedding post",
        error: errorRef(err)
      });
    });
});
//edit wedding

router.put("/:id");

//delete wedding

router.delete("/:id");

module.exports = router;
