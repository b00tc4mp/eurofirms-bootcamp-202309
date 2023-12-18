const loadPosts = require("./helpers/loadPosts");
const loadUsers = require("./helpers/loadUsers");

function retrievePosts(userId, callback) {
  // TODO validate input

  loadUsers(function (error, users) {
    if (error) {
      callback(error);

      return;
    }

    const user = users.find(function (user) {
      return user.id === userId;
    });

    if (!user) {
      callback(new Error("invalid user"));

      return;
    }

    loadPosts(function (error, posts) {
        if (error) {
          callback(error);
    
          return;
        }
    
        callback(null, posts);
      });
  });

  
}

module.exports = retrievePosts;
