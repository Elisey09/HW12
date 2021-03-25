const students = [
  {
    name: "Mark",
    marks: [100, 65, 88, 90, 50],
    attends: 0,
    avgMark: getAvgMark,
    maxMark: getMaxMark,
    setAttend: setAttend,
    info: getInfo,
  },
  {
    name: "John",
    marks: [83, 10, 65, 0, 50, 83],
    attends: 0,
    avgMark: getAvgMark,
    maxMark: getMaxMark,
    setAttend: setAttend,
    info: getInfo,
  },
  {
    name: "Joel",
    marks: [100, 65, 90, 20],
    attends: 0,
    avgMark: getAvgMark,
    maxMark: getMaxMark,
    setAttend: setAttend,
    info: getInfo,
  },
];

function getAvgMark() {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  let result = sum / this.marks.length;
  return result;
}

TODO://не получается почему-то
// function getAvgMark(marks) {
//     return marks.reduce((total, amount) => (total + amount)) / marks.length;

 students.map((e) => {
  console.log(`${e.name} Средняя оценка:  ${e.avgMark()}`);
});
console.log("____________________________________________________");

function getMaxMark() {
  let result = Math.max(...this.marks);
  return result;
}

students.map((e) => {
  console.log(`${e.name} Максимальная оценка: ${e.maxMark()}`);
});

function setAttend() {
  this.attends++;
}

console.log("____________________________________________________");
students.map((e) => {
  for (let i = 0; i < 2; i++) {
    e.setAttend();
  }
  console.log(` ${e.name} ${e.attends}`);
});

function getInfo() {
  return `
    Имя: ${this.name};
    Средняя оценка: ${this.avgMark()};
    Посещения: ${this.attends};
  `;
}

console.log("____________________________________________________");

students.map((e) => {
  console.log(e.info());
});
