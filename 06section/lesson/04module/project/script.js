function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function assignGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// get user input
// const score1 = parseFloat(prompt("Enter first score:"));
// const score2 = parseFloat(prompt("Enter second score:"));
// const score3 = parseFloat(prompt("Enter third score:"));
const scores = [];
for (let i = 0; i < 3; i++) {
  const score = prompt(`Enter Score ${i + 1}:`);
  scores.push(parseInt(score));
}

const average = calculateAverage(...scores);
const grade = assignGrade(average);

console.log(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);
