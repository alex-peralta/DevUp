var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: String,
  date: Date,
  summary : String,
  link: String
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;

