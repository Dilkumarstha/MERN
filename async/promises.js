import fs from "fs/promises";

fs.readFile("users.json", "utf8")
  .then((users) => {
    const userList = JSON.parse(users);
    console.log(userList);
    return fs.readFile("posts.json", "utf8");
  })
  .then((posts) => {
    const postList = JSON.parse(posts);
    console.log(postList);
  })
  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("all codes are completed.")
  });
