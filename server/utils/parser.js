// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");
var Project = require("../models/Project");

module.exports = {
  updateDb : function(req, res){
    Project.remove({}, function (err, rem) {
      var collections = ["projects"];

      for(let i = 1; i < 10; i++){
      //------------------
      // Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
      request("https://www.taprootplus.org/opportunities?utf8=%E2%9C%93&opportunity_keyword=&all=on&project_category_id=20&&page="+i, function(error, response, html) {

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
          var picture = $(element).children("div.project-image").css("background-image");
          picture = picture.replace('url(\'','').replace('\')','');
          picture = picture.replace('url(','').replace(')','');


          
           var link = "https://www.taprootplus.org" + $(element).find("a.project-preview-link").attr("href");
           console.log(link);


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

          let result = {};
          result.picture = picture;
          result.title = title;
          result.link = link;
          result.category = category;
          result.subtitle = subtitle;
          result.duration = duration;
          result.location = location;
          result.note = note;

          Project.create(result);
        });
                // Log the results once you've looped through each of the elements found with cheerio
        //console.log(results);
        console.log("----------- finished, go home");
      });
      }

    });
  }
};
