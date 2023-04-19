// Task 1: Code a Person class
class Person {
  constructor(name, age, energy) {
    this.name = name ?? "Tom";
    this.age = age ?? 20;
    this.energy = energy ?? 110;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

// Task 2: Code a Worker class
class Worker extends Person {
  constructor(name, age, energy, xp, hourlyWage) {
    super(name, age, energy);
    this.xp = xp ?? 0;
    this.hourlyWage = hourlyWage ?? 10;
  }

  goToWork() {
    this.xp += 10;
  }
}

// Task 3: Code a intern object
function createIntern() {
  const intern = new Worker("Bob", 21, 110, 0, 10);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object
function createManager() {
  const manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}

// const i = createManager();
// console.log(i);