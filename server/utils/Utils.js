var axios = require("axios");
var cheerio = require("cheerio");
var Project = require("../models/Project");

module.exports = {
	updateDb : function(req, res){
		Project.remove({}, function (err, rem) {

      // Get the website data
      axios.get("https://www.medicalnewstoday.com/").then(function (response) {

        // Load into cheerio for scraping by element(s)
        let $ = cheerio.load(response.data);
        let counter = 0;

        let content = $("li.written");

        $("li.featured").each(function (i, element) {
          content[content.length] = (this);
          content.length = content.length+1;
        });

        $("li.knowledge").each(function (i, element) {
          content[content.length] = (this);
          content.length = content.length+1;
        });

        // Loop through all the results that have article.
        content.each(function (i, element) {
          let result = {};
          result.link = "https://www.medicalnewstoday.com" + $(this).children().first().attr("href");
          result.title = $(this).find("strong").text();
          
          result.summary = $(this).find("em").text();

          
          let duplicate = false;
          

          // Create article only if not a duplicate and all three have values
          if (!duplicate && result.title && result.link && result.summary) {
            Project.create(result);
            counter++;
          }

        });
        // Return number of articles added
        res.json({
          count: counter
        });

      });
    });
	}
};