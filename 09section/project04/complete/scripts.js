const brands = [
  {
    iconName: "adobe",
    brandName: "Adobe",
    color: "#ff0000",
  },
  {
    iconName: "airbnb",
    brandName: "Airbnb",
    color: "#fd5c63",
  },
  {
    iconName: "amazon",
    brandName: "Amazon",
    color: "#333333",
  },
  {
    iconName: "android",
    brandName: "Android",
    color: "#a4c639",
  },
  {
    iconName: "angellist",
    brandName: "AngelList",
    color: "#000000",
  },
  {
    iconName: "angular",
    brandName: "Angular",
    color: "#b52e31",
  },
  {
    iconName: "app-store-ios",
    brandName: "App Store",
    color: "#5fc9f8",
  },
  {
    iconName: "apple",
    brandName: "Apple",
    color: "#aaaaaa",
  },
  {
    iconName: "bitcoin",
    brandName: "Bitcoin",
    color: "#d4af37",
  },
  {
    iconName: "blackberry",
    brandName: "BlackBerry",
    color: "#000000",
  },
  {
    iconName: "blogger",
    brandName: "Blogger",
    color: "#f57d00",
  },
  {
    iconName: "bluetooth",
    brandName: "Bluetooth",
    color: "#3b5998",
  },
  {
    iconName: "bootstrap",
    brandName: "Bootstrap",
    color: "#553c7b",
  },
  {
    iconName: "chrome",
    brandName: "Google Chrome",
    color: "#333333",
  },
  {
    iconName: "codepen",
    brandName: "CodePen",
    color: "#111111",
  },
  {
    iconName: "cpanel",
    brandName: "cPanel",
    color: "#ff6c2c",
  },
  {
    iconName: "css3-alt",
    brandName: "CSS3",
    color: "#264de4",
  },
  {
    iconName: "dev",
    brandName: "Dev",
    color: "#111111",
  },
  {
    iconName: "dhl",
    brandName: "DHL",
    color: "#ba0c2f",
  },
  {
    iconName: "digital-ocean",
    brandName: "DigitalOcean",
    color: "#008bcf",
  },
  {
    iconName: "discord",
    brandName: "Discord",
    color: "#7289da",
  },
  {
    iconName: "docker",
    brandName: "Docker",
    color: "#0db7ed",
  },
  {
    iconName: "dribbble",
    brandName: "Dribbble",
    color: "#ea4c89",
  },
  {
    iconName: "dropbox",
    brandName: "Dropbox",
    color: "#007ee5",
  },
  {
    iconName: "drupal",
    brandName: "Drupal",
    color: "#0077c0",
  },
  {
    iconName: "ebay",
    brandName: "eBay",
    color: "#333333",
  },
  {
    iconName: "edge",
    brandName: "Microsoft Edge",
    color: "#0078d7",
  },
  {
    iconName: "ember",
    brandName: "Ember.js",
    color: "#f23819",
  },
  {
    iconName: "ethereum",
    brandName: "Ethereum",
    color: "#666666",
  },
  {
    iconName: "etsy",
    brandName: "Etsy",
    color: "#d5641c",
  },
  {
    iconName: "evernote",
    brandName: "Evernote",
    color: "#2dbe60",
  },
  {
    iconName: "facebook-square",
    brandName: "Facebook",
    color: "#3b5998",
  },
  {
    iconName: "fedex",
    brandName: "FedEx",
    color: "#4d148c",
  },
  {
    iconName: "firefox",
    brandName: "Firefox",
    color: "#e66000",
  },
  {
    iconName: "font-awesome",
    brandName: "Font Awesome",
    color: "#228ae6",
  },
  {
    iconName: "free-code-camp",
    brandName: "freeCodeCamp",
    color: "#006400",
  },
  {
    iconName: "git-alt",
    brandName: "Git",
    color: "#f1502f",
  },
  {
    iconName: "github",
    brandName: "GitHub",
    color: "#333333",
  },
  {
    iconName: "google",
    brandName: "Google",
    color: "#333333",
  },
  {
    iconName: "google-play",
    brandName: "Google Play",
    color: "#3bccff",
  },
  {
    iconName: "grunt",
    brandName: "Grunt",
    color: "#fba919",
  },
  {
    iconName: "gulp",
    brandName: "gulp.js",
    color: "#db4446",
  },
  {
    iconName: "html5",
    brandName: "HTML5",
    color: "#e34f26",
  },
  {
    iconName: "imdb",
    brandName: "IMDb",
    color: "#dba506",
  },
  {
    iconName: "instagram",
    brandName: "Instagram",
    color: "#e1306c",
  },
  {
    iconName: "internet-explorer",
    brandName: "Internet Explorer",
    color: "#1ebbee",
  },
  {
    iconName: "itunes",
    brandName: "iTunes",
    color: "#ea4cc0",
  },
  {
    iconName: "java",
    brandName: "Java",
    color: "#5382a1",
  },
  {
    iconName: "js-square",
    brandName: "JavaScript",
    color: "#333333",
  },
  {
    iconName: "jsfiddle",
    brandName: "JSFiddle",
    color: "#333333",
  },
  {
    iconName: "kickstarter",
    brandName: "Kickstarter",
    color: "#2bde73",
  },
  {
    iconName: "laravel",
    brandName: "Laravel",
    color: "#f55247",
  },
  {
    iconName: "less",
    brandName: "Less",
    color: "#00316e",
  },
  {
    iconName: "linkedin",
    brandName: "LinkedIn",
    color: "#0077b5",
  },
  {
    iconName: "linux",
    brandName: "Linux",
    color: "#000000",
  },
  {
    iconName: "mailchimp",
    brandName: "Mailchimp",
    color: "#239ab9",
  },
  {
    iconName: "medium",
    brandName: "Medium",
    color: "#00ab6c",
  },
  {
    iconName: "meetup",
    brandName: "Meetup",
    color: "#e0393e",
  },
  {
    iconName: "microsoft",
    brandName: "Microsoft",
    color: "#111111",
  },
  {
    iconName: "napster",
    brandName: "Napster",
    color: "#111111",
  },
  {
    iconName: "node",
    brandName: "Node.js",
    color: "#68a063",
  },
  {
    iconName: "npm",
    brandName: "npm",
    color: "#cc3534",
  },
  {
    iconName: "opera",
    brandName: "Opera",
    color: "#cc0f16",
  },
  {
    iconName: "patreon",
    brandName: "Patreon",
    color: "#f96854",
  },
  {
    iconName: "paypal",
    brandName: "PayPal",
    color: "#003087",
  },
  {
    iconName: "php",
    brandName: "PHP",
    color: "#8892be",
  },
  {
    iconName: "pinterest",
    brandName: "Pinterest",
    color: "#bd081c",
  },
  {
    iconName: "playstation",
    brandName: "PlayStation",
    color: "#003087",
  },
  {
    iconName: "product-hunt",
    brandName: "Product Hunt",
    color: "#da552f",
  },
  {
    iconName: "python",
    brandName: "Python",
    color: "#4584b6",
  },
  {
    iconName: "quora",
    brandName: "Quora",
    color: "#a82400",
  },
  {
    iconName: "react",
    brandName: "React",
    color: "#00d8ff",
  },
  {
    iconName: "reddit",
    brandName: "reddit",
    color: "#ff4500",
  },
  {
    iconName: "safari",
    brandName: "Safari",
    color: "#0fb5ee",
  },
  {
    iconName: "sass",
    brandName: "Sass",
    color: "#cd6799",
  },
  {
    iconName: "skype",
    brandName: "Skype",
    color: "#00aff0",
  },
  {
    iconName: "slack",
    brandName: "Slack",
    color: "#3eb991",
  },
  {
    iconName: "snapchat-square",
    brandName: "Snapchat",
    color: "#fffc00",
  },
  {
    iconName: "soundcloud",
    brandName: "SoundCloud",
    color: "#ff8800",
  },
  {
    iconName: "spotify",
    brandName: "Spotify",
    color: "#1db954",
  },
  {
    iconName: "squarespace",
    brandName: "Squarespace",
    color: "#222222",
  },
  {
    iconName: "stack-overflow",
    brandName: "Stack Overflow",
    color: "#f48024",
  },
  {
    iconName: "stripe",
    brandName: "Stripe",
    color: "#00afe1",
  },
  {
    iconName: "trello",
    brandName: "Trello",
    color: "#0079bf",
  },
  {
    iconName: "tripadvisor",
    brandName: "TripAdvisor",
    color: "#00af87",
  },
  {
    iconName: "twitch",
    brandName: "Twitch",
    color: "#6441a5",
  },
  {
    iconName: "twitter",
    brandName: "Twitter",
    color: "#1da1f2",
  },
  {
    iconName: "uber",
    brandName: "Uber",
    color: "#09091a",
  },
  {
    iconName: "viber",
    brandName: "Viber",
    color: "#59267c",
  },
  {
    iconName: "vimeo",
    brandName: "Vimeo",
    color: "#1ab7ea",
  },
  {
    iconName: "vk",
    brandName: "VKontakte",
    color: "#45668e",
  },
  {
    iconName: "vuejs",
    brandName: "Vue.js",
    color: "#42b883",
  },
  {
    iconName: "whatsapp",
    brandName: "WhatsApp",
    color: "#075e54",
  },
  {
    iconName: "wikipedia-w",
    brandName: "Wikipedia",
    color: "#000000",
  },
  {
    iconName: "windows",
    brandName: "Microsoft Windows",
    color: "#0078d7",
  },
  {
    iconName: "wix",
    brandName: "Wix.com",
    color: "#333333",
  },
  {
    iconName: "wordpress",
    brandName: "WordPress",
    color: "#21759b",
  },
  {
    iconName: "xbox",
    brandName: "Xbox",
    color: "#52b043",
  },
  {
    iconName: "yahoo",
    brandName: "Yahoo!",
    color: "#410093",
  },
  {
    iconName: "youtube",
    brandName: "YouTube",
    color: "#ff0000",
  },
];
let correct = 0;
let total = 0;
const totalDraggableItems = 5;
const totalMatchingPairs = 5; // Should be <= totalDraggableItems

const scoreSection = document.querySelector(".score");
const correctSpan = scoreSection.querySelector(".correct");
const totalSpan = scoreSection.querySelector(".total");
const playAgainBtn = scoreSection.querySelector("#play-again-btn");

const draggableItems = document.querySelector(".draggable-items");
const matchingPairs = document.querySelector(".matching-pairs");
let draggableElements;
let droppableElements;

initiateGame();

function initiateGame() {
  const randomDraggableBrands = generateRandomItemsArray(
    totalDraggableItems,
    brands
  );
  const randomDroppableBrands =
    totalMatchingPairs < totalDraggableItems
      ? generateRandomItemsArray(totalMatchingPairs, randomDraggableBrands)
      : randomDraggableBrands;
  const alphabeticallySortedRandomDroppableBrands = [
    ...randomDroppableBrands,
  ].sort((a, b) =>
    a.brandName.toLowerCase().localeCompare(b.brandName.toLowerCase())
  );

  // Create "draggable-items" and append to DOM
  for (let i = 0; i < randomDraggableBrands.length; i++) {
    draggableItems.insertAdjacentHTML(
      "beforeend",
      `
<i class="fab fa-${randomDraggableBrands[i].iconName} draggable" draggable="true" style="color: ${randomDraggableBrands[i].color};" id="${randomDraggableBrands[i].iconName}"></i>
`
    );
  }

  // Create "matching-pairs" and append to DOM
  for (let i = 0; i < alphabeticallySortedRandomDroppableBrands.length; i++) {
    matchingPairs.insertAdjacentHTML(
      "beforeend",
      `
<div class="matching-pair">
  <span class="label">${alphabeticallySortedRandomDroppableBrands[i].brandName}</span>
  <span class="droppable" data-brand="${alphabeticallySortedRandomDroppableBrands[i].iconName}"></span>
</div>
`
    );
  }

  draggableElements = document.querySelectorAll(".draggable");
  droppableElements = document.querySelectorAll(".droppable");

  draggableElements.forEach((elem) => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
  });

  droppableElements.forEach((elem) => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
  });
}

// Drag and Drop Functions

//Events fired on the drag target

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain"
}

//Events fired on the drop target

function dragEnter(event) {
  if (
    event.target.classList &&
    event.target.classList.contains("droppable") &&
    !event.target.classList.contains("dropped")
  ) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if (
    event.target.classList &&
    event.target.classList.contains("droppable") &&
    !event.target.classList.contains("dropped")
  ) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if (
    event.target.classList &&
    event.target.classList.contains("droppable") &&
    !event.target.classList.contains("dropped")
  ) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable-hover");
  const draggableElementBrand = event.dataTransfer.getData("text");
  const droppableElementBrand = event.target.getAttribute("data-brand");
  const isCorrectMatching = draggableElementBrand === droppableElementBrand;
  total++;
  if (isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementBrand);
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.innerHTML = `<i class="fab fa-${draggableElementBrand}" style="color: ${draggableElement.style.color};"></i>`;
    correct++;
  }
  scoreSection.style.opacity = 0;
  setTimeout(() => {
    correctSpan.textContent = correct;
    totalSpan.textContent = total;
    scoreSection.style.opacity = 1;
  }, 200);
  if (correct === Math.min(totalMatchingPairs, totalDraggableItems)) {
    // Game Over!!
    playAgainBtn.style.display = "block";
    setTimeout(() => {
      playAgainBtn.classList.add("play-again-btn-entrance");
    }, 200);
  }
}

// Other Event Listeners
playAgainBtn.addEventListener("click", playAgainBtnClick);
function playAgainBtnClick() {
  playAgainBtn.classList.remove("play-again-btn-entrance");
  correct = 0;
  total = 0;
  draggableItems.style.opacity = 0;
  matchingPairs.style.opacity = 0;
  setTimeout(() => {
    scoreSection.style.opacity = 0;
  }, 100);
  setTimeout(() => {
    playAgainBtn.style.display = "none";
    while (draggableItems.firstChild)
      draggableItems.removeChild(draggableItems.firstChild);
    while (matchingPairs.firstChild)
      matchingPairs.removeChild(matchingPairs.firstChild);
    initiateGame();
    correctSpan.textContent = correct;
    totalSpan.textContent = total;
    draggableItems.style.opacity = 1;
    matchingPairs.style.opacity = 1;
    scoreSection.style.opacity = 1;
  }, 500);
}

// Auxiliary functions
function generateRandomItemsArray(n, originalArray) {
  let res = [];
  let clonedArray = [...originalArray];
  if (n > clonedArray.length) n = clonedArray.length;
  for (let i = 1; i <= n; i++) {
    const randomIndex = Math.floor(Math.random() * clonedArray.length);
    res.push(clonedArray[randomIndex]);
    clonedArray.splice(randomIndex, 1);
  }
  return res;
}
