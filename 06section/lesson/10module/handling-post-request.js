const newPost = {
  title: "NEW POST",
  body: "THIS IS A NEW POST",
  userId: 1,
};

async function makeNewPost(newPostPayload) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPostPayload),
    });
    // .then((r) => r.json())
    // .then((d) => console.log(d))
    // .catch((error) => console.error(error));
    const data = await res.json();
    console.log("Created new post:", data);
  } catch (error) {
    console.error("error =", error);
  }
}

const button = document.createElement("button");

button.addEventListener("click", function () {
  makeNewPost(newPost);
});
button.textContent = "Create Post";
document.body.appendChild(button);
