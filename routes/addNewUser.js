var express = require("express");
var router = express.Router();

const { MongoClient } = require("mongodb");

router.get("/", function (req, res, next) {
  console.log("Request from 'react: ", req.body);

  // MongoClient.connect(
  //   "mongodb+srv://admin:admin@thesisdb.ln4vv.mongodb.net/Users?retryWrites=true&w=majority",
  //   function (err, db) {
  //     if (err) throw err;
  //     var dbo = db.db("Users");
  //     dbo.collection("Details").insertOne(
  //       {
  //         ...req.body,
  //       },
  //       function (err, result) {
  //         if (err) throw err;
  //         res.json(result);
  //         db.close();
  //       }
  //     );
  //   }
  // );
});

module.exports = router;
