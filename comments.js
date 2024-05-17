Synthesizing 9/10 solutions (Duplicate hidden)

Accept solutions
Suggestion 1
//create web server for comments

//====================================


//Import module

const express = require("express");

const router = express.Router();

const uuid = require("uuid");

let users = require("../../Users");

 

router.get("/", (req, res) => {

  res.json(users);

});

 

router.get("/:id", (req, res) => {

  const found = users.some(user => user.id === parseInt(req.params.id));

 

  if (found) {

    res.json(users.filter(user => user.id === parseInt(req.params.id)));

  } else {

    res.sendStatus(400);

  }

});

 

router.post("/", (req, res) => {

  const newUser = {

    id: uuid.v4(),

    name: req.body.name,

    email: req.body.email

  };

 

  if (!newUser.name || !newUser.email) {

    return res.sendStatus(400);

  }

  users.push(newUser);

  res.json(users);

});

//Update User

router.put("/:id", (req, res) => {

  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {

    const updateUser = req.body;

    users.forEach(user => {

      if (user.id === parseInt(req.params.id)) {

        user.name = updateUser.name ? updateUser.name : user.name;

        user.email = updateUser.email ? updateUser.email : user.email;

        res.json({ msg: "User updated", user });

      }

    });

  } else {

    res.sendStatus(400);

  }

});

 

//Delete User

router.delete("/:id", (req, res) => {

  const found = users.some(user => user.id === parseInt(req.params.id))

  if (found) {

    users = users.filter(user => user.id !== parseInt(req.params.id))

    res.json({

      msg: "User deleted",

      users

    });

  } else {

    res.sendStatus(400);

  }

});

 

module.exports = router;

Import the necessary modules in this file:
Import express to create API routes
Import uuid to generate ids for new users
Import users to use user data
router.get(‘/’): This route displays the users’ data in the API response
router.get(‘/:id’): We define this route to search for a user’s data using their ID. It returns the data if found; otherwise, it sends an error message
router.post(‘/’): This is a POST API request that enables us to add a user into the student management system
router.put(‘/:id’): We define another API route that takes in the ID of a particular user, and then updates the data of that user if found; otherwise, it sends an error message
router.delete(‘/:id’): Finally, create the last route for our Node.js application that takes in a 