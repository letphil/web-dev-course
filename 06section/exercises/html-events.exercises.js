// Function to change the text of a paragraph when a button is clicked
function changeText() {
  document.getElementById("myParagraph").innerHTML = "Text has been changed!";
}

// Function to display an alert when the mouse is over a specific element
function mouseOver() {
  alert("Mouse is over the element!");
}

// Function to log a message when a key is pressed
function keyPress() {
  console.log("A key was pressed!");
}

// Adding event listeners to the elements
document.getElementById("myButton").addEventListener("click", changeText);
document.getElementById("myElement").addEventListener("mouseover", mouseOver);
document.addEventListener("keypress", keyPress);
