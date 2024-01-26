//This file will handle connection logic to the Mongo DB

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Task-Manager", {})
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((e) => {
    console.log("Error Establishing Connection with the DB");
    console.log(e);
  });

//To Prevent Depriciation Warnings  (From MongoDB native Drivers)

//mongoose.set('useCreateIndex', true);
//mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
