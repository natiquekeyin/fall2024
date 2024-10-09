window.addEventListener("DOMContentLoaded", function () {
  let posts = [
    { title: "Post1", author: "Author1", body: "Body1" },
    { title: "Post2", author: "Author2", body: "Body2" },
    { title: "Post3", author: "Author3", body: "Body3" },
  ];

  function createPost(post) {
    setTimeout(function () {
      posts.push(post);
    }, 3000);
  }

  function getPosts() {
    setTimeout(function () {
      let output = "";
      posts.forEach((post) => {
        // document.querySelector("#data").innerText += post.body;
        output += `<li>Post: ${post.title}</li><li>Author:${post.author}</li><li>Body:${post.body}</li> -----------------`;
      });
      document.querySelector("#data").innerHTML = output;
    }, 1000);
  }

  createPost({ title: "Post4", author: "Author4", body: "Body4" }); //taking 3 seconds to execute..
  getPosts();
});
