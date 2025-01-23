// Characters to use in the password
const characters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+[]{}|;:',.<>?",
};

// Function to generate a random password
function generatePassword(length) {
  const allCharacters =
    characters.lower +
    characters.upper +
    characters.numbers +
    characters.symbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

// Event listener for the button
document.getElementById("generate").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const password = generatePassword(length);
  document.getElementById("password").value = password;
});

// function generateCustomPassword(length, useLower, useUpper, useNumbers, useSymbols) {
//   let characterPool = "";
//   if (useLower) characterPool += characters.lower;
//   if (useUpper) characterPool += characters.upper;
//   if (useNumbers) characterPool += characters.numbers;
//   if (useSymbols) characterPool += characters.symbols;

//   if (!characterPool) return "Please select at least one option!";

//   let password = "";
//   for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characterPool.length);
//       password += characterPool[randomIndex];
//   }

//   return password;
// }
