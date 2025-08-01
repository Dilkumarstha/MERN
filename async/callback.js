// //  callback - function used as a parameter
// //  generally used for async program
// //  Higher order function - thats takes callback fun as a parameter

// import fs from "fs";

// // fs.readFile("users.json","utf8",(uError,users)=>{
// //   if(uError){
// //     console.error(uError);
// //     return uError;
// //   }
// //   const userList = JSON.parse(users);

// //   fs.readFile("posts.json","utf8",(pError,posts)=>{
// //     if(pError){
// //       console.log(pError);
// //       return pError;
// //     }
// //     const postList = JSON.parse(posts);

// //     const result = userList.map((user)=>{
// //    return {
// //     ...user,
// //     posts : postList.map((post)=>user.id == post.id ? post :null).filter(Boolean)

// //    }
// //     })
// // console.log(result)

// //   })

// // })

// fs.readFile("posts.json", "utf8", (pError, posts) => {
//   if (pError) return console.error(pError);
//   const postList = JSON.parse(posts);

//   fs.readFile("users.json", "utf8", (uError, users) => {
//     if (uError) return console.error(uError);
//     const userList = JSON.parse(users);

//     const results = postList.map((post) => {
//       //   const user = userList
//       //       .filter((user) => {return (user.id === post.id)});

//       //   console.log(user)

//       //   if((user.length > 0)){
//       //     return {
//       //     ...post,
//       //     user
//       //   };
//       //   }
//       // }).filter(Boolean);

//       return {
//         ...post,
//         user: userList.filter(user => post.id === user.id ? user : null).filter(Boolean)
//       }

//     })
//     console.log(results)
//   })
// })

// A final Example for callback **********************************************

import fs from "fs";

fs.readFile("users.json", "utf8", (uError, users) => {
  if (uError) return uError;
  console.log(users);
  fs.readFile("posts.json", "utf8", (pError, posts) => {
    if (pError) return pError;
    console.log(posts);

    fs.readFile("comments.json","utf8",(cError,comments)=>{
      if(cError) return cError;
      console.log(comments);
    })
  });
});



// here is the problem of callback hell and it can be fixed by promises : handeling the errors more perfectly