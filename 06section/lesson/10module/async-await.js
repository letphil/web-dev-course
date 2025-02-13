// async await

async function getPost(postId = 1) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();
    console.log("data =", data);
  } catch (error) {
    console.error("error =", error);
  }
}

window.onload = getPost();
