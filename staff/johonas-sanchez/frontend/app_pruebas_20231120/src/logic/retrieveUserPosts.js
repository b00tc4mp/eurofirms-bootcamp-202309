import { validateText } from "../utils/validators";
import db from "../data/managers";

function retrieveUserPosts(userId, userProfileId) {
  validateText(userId, "user id");
  validateText(userProfileId, "user profile id");

  const user = db.findUserById(userId);

  if (!user) throw new Error("User not found");

  const userProfile = db.findUserById(userProfileId)

  if (!userProfile) throw new Error("User not found");

  const posts = db
    .getPosts()
    .reverse()
    .filter(function (post) {
      return post.author === userProfile.id;
    });

  posts.forEach(function (post) {
    post.author = {
      id: userProfile.id,
      name: userProfile.name,
    };

    post.liked = post.likes.includes(userId);

    post.saved = user.saved.includes(post.id);
  });

  return posts;
}

export default retrieveUserPosts;
