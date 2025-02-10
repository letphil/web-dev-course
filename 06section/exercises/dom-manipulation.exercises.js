// Exercise 1: Change the text content of an element
const changeText = () => {
  const element = document.getElementById("myElement");
  element.textContent = "New Text Content";
};

// Exercise 2: Change the background color of an element
const changeBackgroundColor = () => {
  const element = document.getElementById("myElement");
  element.style.backgroundColor = "lightblue";
};

// Exercise 3: Hide an element
const hideElement = () => {
  const element = document.getElementById("myElement");
  element.style.display = "none";
};

// Exercise 4: Show an element
const showElement = () => {
  const element = document.getElementById("myElement");
  element.style.display = "block";
};

// Exercise 5: Add a new class to an element
const addClass = () => {
  const element = document.getElementById("myElement");
  element.classList.add("newClass");
};

// Exercise 6: Remove a class from an element
const removeClass = () => {
  const element = document.getElementById("myElement");
  element.classList.remove("newClass");
};

// Exercise 7: Toggle a class on an element
const toggleClass = () => {
  const element = document.getElementById("myElement");
  element.classList.toggle("newClass");
};

// Exercise 8: Append a new child element
const appendChildElement = () => {
  const parentElement = document.getElementById("parentElement");
  const newElement = document.createElement("div");
  newElement.textContent = "I am a new child element";
  parentElement.appendChild(newElement);
};

// Exercise 9: Remove a child element
const removeChildElement = () => {
  const parentElement = document.getElementById("parentElement");
  const childElement = document.getElementById("childElement");
  parentElement.removeChild(childElement);
};

// Exercise 10: Change the src attribute of an image
const changeImageSrc = () => {
  const imageElement = document.getElementById("myImage");
  imageElement.src = "newImagePath.jpg";
};
