function changeText() {
  document.getElementById("main-heading").textContent = "Dom Manipulation";
}

// getElementById
const heading = document.getElementById("main-heading");
console.log(heading.textContent);

// getElementsByClassName
const paragraphs = document.getElementsByClassName("description");
console.log(paragraphs);

// getElementsByTagName
const buttons = document.getElementsByTagName("button");
console.log(buttons);

// querySelector
const firstParagraph = document.querySelector(".description");
console.log(firstParagraph.textContent);

// querySelectorAll
const allParagraphs = document.querySelectorAll(".description");
allParagraphs.forEach((para) => console.log(para.textContent));

// changing text
heading.textContent = "New Heading";
// innerHTML -> include HTML tags
heading.innerHTML = `
  hey this is a <span style="background-color: yellow">heading</span>
`;

// changing styles with style
heading.style.color = "blue";
heading.style.fontSize = "50px";
heading.style.textAlign = "center";

// creating, adding, and removing elements
const p = document.createElement("p");
p.textContent = "THIS IS A NEW PARAGRAPH";
console.log("p =", p);

// appendChild
document.body.appendChild(p);

// prepend
// document.body.prepend(p);

// remove child

document.body.removeChild(p);

// classList.add classList.remove()

console.log(firstParagraph.classList);
firstParagraph.classList.add("highlight");
firstParagraph.classList.remove("highlight");

// setAttribute
const link = document.createElement("a");
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");
link.textContent = "Visit Google";
document.body.appendChild(link);
