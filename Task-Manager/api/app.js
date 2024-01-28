const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const { mongoose } = require("./db/mongoose");

const bodyParser = require("body-parser");

// Load in Mongoose Models

const { List, Task } = require("./db/models");

//Load Middleware

// CORS HEADERS MIDDLEWARE
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });

// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });

/* Route Handlers */

/* List Routes */

/*
GET /lists
Purpose: Get all list 
*/
app.get("/lists", (req, res) => {
  /* We Want to return an array of all the list in the database */
  List.find({}).then((list) => {
    res.send(list);
  });
});

/*
POST /lists
Purpose: To Create a list
*/
app.post("/lists", (req, res) => {
  // We want to create a new list and return the new list document back to the user(Which includes the ID)
  //The list information (fields ) will be passed in via the JSON request body

  let title = req.body.title;

  let newList = new List({
    title,
  });

  newList.save().then((listDoc) => {
    //Full List Document is returned( Including ID )
    res.send(listDoc);
  });
});

/*
PATH /lists/:id
Purpose: Update a Specific List 
*/

app.patch("/lists/:id", (req, res) => {
  //We want to update the specific list (List of document with id in the URL ) with the new values specified in the JSON body of the request
  List.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(() => {
    res.sendStatus(200);
  });
});

/*
DELETE /lists/:id
Purpose: Delete a Specific List 
*/

app.delete("/lists/:id", (req, res) => {
  //We want to delete the specific list (List of document with id in the URL ) with the new values specified in the JSON body of the request

  List.findByIdAndDelete({
    _id: req.params.id,
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

/*
GET /lists/:listId/tasks
Purpose: Get all tasks in a specific list 

*/

app.get("/lists/:listId/tasks", (req, res) => {
  //We want to return all the task belong to a specific List

  Task.find({
    _listId: req.params.listId,
  }).then((tasks) => {
    res.send(tasks);
  });
});

/*

Useful when we retrive any document of 1 Item specified by ID


app.get("/lists/:listId/tasks/:taskId", (req, res) => {
Task.findOne({
  _id: req.params.taskId,
   _listId: req.params.listId,
 }).then((tasks) => {
   res.send(tasks);
  });
});
*/

/*
POST /lsits/:listId/tasks
purpose: Create a new Task in a Specific List. 
*/

app.post("/lists/:listId/tasks", (req, res) => {
  //We want to create a new task in the list (Sprcified by list ID)
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId,
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  });
});

/*
PATCH /lists/:listId/tasks/:taskId

purpose: Update an existing task specified by taskId

*/

app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
  //We want to update an existing task specified by taskId
  Task.findOneAndUpdate(
    {
      _id: req.params.taskId,
      _listId: req.params.listId,
    },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

/*
DELETE /lists/:listId/tasks/:taskId
purpose: Delete a Task
*/

app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findByIdAndDelete({
    _id: req.params.taskId,
    _listId: req.params.listId,
  }).then((removedTaskDoc) => {
    res.send(removedTaskDoc);
  });
});
app.listen(1827, () => {
  console.log("Server is Listening ");
});
