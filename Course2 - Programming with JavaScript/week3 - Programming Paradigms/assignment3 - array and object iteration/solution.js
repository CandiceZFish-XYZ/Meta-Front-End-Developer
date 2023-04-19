// Task: Iterate Over an Array
let dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

// step 1: create logDairy()
function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

// test the output
logDairy();

// some given code
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

// step 2: create birdCan()
function birdCan() {
  for (let key of Object.keys(bird)) {
    console.log(key + ": " + bird[key]);
  }
}

// test the output
birdCan();

// step 3: create animalCan()
function animalCan() {
  for (let key in bird) {
    console.log(key + ": " + bird[key]);
  }
}

// test the output
animalCan();
