const express = require("express");
const {Post, User, Comment, Rate} = require("../../models/");

const router = express.Router()

// GET /api/post    get all posts from the database
router.get("/", (req,res) =>{
  Post.findAll()
    .then(dbUserData => {
      res.json(dbUserData)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    })
});

// GET /api/post/1    retrieve a specific post based on the id of the user
router.get("/:id", (req,res) =>{
  Post.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/post   add a post to the database
router.post("/", (req,res) =>{
  Post.create({
    id: req.body.id,
    user_id: req.body.user_id,
    post_text: req.body.post_text
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    })
});

// DELETE /api/post/1   remove a specific post from the db
router.delete("/:id", (req, res) =>{
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;