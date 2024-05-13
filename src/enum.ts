export {};

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January); // 1
console.log(Months.February); // 2
console.log(Months.December); // 12

enum Colors {
  RED = "#ff0000",
  GREEN = "#00ff00",
  BLUE = "#0000ff",
  BLACK = "#000000",
}

let green = Colors.GREEN;
console.log(green); // #00ff00
