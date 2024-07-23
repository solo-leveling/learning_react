const hein = {
  name: "Hein Htet",
  age: 25,
  education: "Japan",
  greet: function () {
    console.log(
      `Hello,It is me,${this.name} and my age is ${this.age} years old and Studying in ${this.education}.`
    );
  },
};

// hein.greet();
hein.growOld = function () {
  this.age += 1;
};
// console.log(hein.age);
hein.growOld();
// console.log(hein.age);

const types = {
  target: "For Elders",
  sports: [
    {
      name: "soccers",
      time: 180,
    },
    {
      name: "Golf",
      time: 150,
    },
    {
      name: "Swimming",
      time: 60,
    },
  ],
};

console.log(types);
