import axios from "axios";

const api = {
  
  update: function() {
    console.log("API update call");
    return axios.get("/api/update");
  },
  // Retrieves saved articles from the db
  getProjects: function() {
    return axios.get("/api/saved");
  },
  // Saves a new article to the db
  saveArticle: function(articleObj) {
    return axios.post("/api/saved", articleObj);
  }/*,
  // Deletes an article from the db
  deleteArticle: function(id) {
    return axios.delete("/api/saved/${id}");
  }*/
};

export default api;