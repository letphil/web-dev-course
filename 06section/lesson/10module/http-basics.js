window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP Error: " + response.status);
      }

      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("error =", error));
};
