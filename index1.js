let age = 20;

if (age >= 21) {
  console.log("Have fun");
} else {
  console.log("take a lap jabroni");
}

let good = 10;

if (good < 100) {
  console.log("< 100");
} else if (good === 100) {
  console.log("100 even");
} else {
  console.log("over 100");
}

let featuredPost = ["PLO", "Hold em", "short deck"];
let otherPost = ["Joey", 33, true];
featuredPost.push("BlackJack");
let newMessage = "PLO 8";
featuredPost.push(newMessage);
otherPost.push(3);
featuredPost.pop();

let cards = [7, 5];
cards.push(6);

for (let i = 10; i <= 20; i += 2) {
  console.log(i);
}

for (let i = 0; i < 100; i += 10) {
  console.log(i);
}

for (let i = 0; i < cards.length; i++) {
  console.log(cards);
}

let sentence = ["hello", "there", "okay"];

console.log(featuredPost[2]);
console.log(featuredPost[1]);
console.log(featuredPost[0]);
console.log(featuredPost[3]);
console.log(featuredPost.length);
console.log(otherPost);
console.log(cards);
console.log(featuredPost);

let play1Time = 102;
let play2Time = 107;

function getFasted() {
  if (play1Time < play2Time) {
    return play1Time;
  } else if (play2Time < play1Time) {
    return play2Time;
  } else {
    return play1Time;
  }
}

let fastestRace = getFasted();
console.log(fastestRace);

let randomNum = Math.floor(Math.random() * 12);
console.log(randomNum);

const rollDice = () => {
  let diceNum = Math.floor(Math.random() * 6) + 1;
  console.log(diceNum);
  return diceNum;
};

rollDice();
console.log(rollDice());

let course = [
  {
    title: "Somewhere over the rainbow",
    person: "Jim",
    lessons: "2 Hours",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"],
  },
  {
    title: "Somewhere",
    person: "Bill",
    lessons: "4 Hours",
    length: 120,
    level: 3,
    isFree: true,
    tags: ["html", "css", "react"],
  },
];
let str = JSON.stringify(course);
console.log(str);
console.log(course);

// console.log(course.level);
// console.log(course.tags);
// console.log(course["tags"]);
