// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");
var mongojs = require("mongojs");
var Project = require("../models/Project");

module.exports = {
  updateDb : function(req, res){
    Project.remove({}, function (err, rem) {
      var databaseUrl = "devApp";
      var collections = ["projects"];

      // Hook mongojs configuration to the db variable
      var db = mongojs(databaseUrl, collections);
      db.on("error", function(error) {
        console.log("Database Error:", error);
      });

      //------------------
      // Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
      request("https://www.taprootplus.org/opportunities?utf8=%E2%9C%93&opportunity_keyword=Website&project_category_id=20&issue_area=", function(error, response, html) {

        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(html);

        // An empty array to save the data that we'll scrape
        //var results = [];

        // With cheerio, find each p-tag with the "title" class
        // (i: iterator. element: the current element)
        console.log("-----------");

        $("div.panel.grid-panel").each(function(i, element) {
           // console.log($(element).text());
          // Save the text of the element in a "title" variable
          var picture = $(element).children("div.project-image").css("background-image").slice(5, -2).replace(/"/g, "");
          
           var link = $(element).find("a.project-preview-link").attr("href");

            var category = $(element).find("span.label.secondary.project-category").text();


          var title = $(element).find("h1.project-heading").text();

          var subtitle = $(element).find("h2.project-subheading").text();

          var duration;
          var location;
          var note;
          $(element).find("span.icon-list-text").each(function(i, element2) {
            if (i==0)
              duration=$(element2).text();
            else
            if (i==1)
              location=$(element2).text();
            else
              note=$(element2).text();
          });

          // In the currently selected element, look at its child elements (i.e., its a-tags),
          // then save the values for any "href" attributes that the child elements may have


          // Save these results in an object that we'll push into the results array we defined earlier
          /*results.push({
            picture: picture,
            title: title,
            link: link,
            categry: category,
            subtitle: subtitle,
            duration: duration,
            location: location,
            note: note
          });*/

          db.projects.insert({
            picture: picture,
            title: title,
            link: link,
            category: category,
            subtitle: subtitle,
            duration: duration,
            location: location,
            note: note
          },
              function(err, inserted) {
                if (err) {
                  // Log the error if one is encountered during the query
                  console.log(err);
                }
                else {
                  // Otherwise, log the inserted data
                  console.log(inserted);
                }
              });
        });

        // Log the results once you've looped through each of the elements found with cheerio
        //console.log(results);
        console.log("----------- finished, go home");
      });
    });
  }
};
