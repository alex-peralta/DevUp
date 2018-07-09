var Project = require("../models/Project");
var Utils = require("../utils/Utils");

module.exports = {
  // this method handles finding all projects in the db
  find: function(req, res) {
    console.log("Gathering saved projects from the db");
    Project.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles adding new project to the db
  insert: function(req, res) {
    console.log("Adding saved project to the db");
    console.log("req.body: ", req.body);
    Project.create(req.body).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles deleting project from the db
  delete: function(req, res) {
    console.log("Deleting a saved project from the db");
    Project.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  update: function(req, res) {
    console.log("Updating projects in db");
    Utils.updateDb(req, res);
  }
};
