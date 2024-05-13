export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ["Tokyo", "Osaka", "Kyoto"];

// excersize
let strings: Array<string> = ["TypeScript", "JavaScript", "CoffeeScript"];

let nijigenHairetsu: Array<Array<number>> = [
  [50, 100],
  [150, 300],
];

let nijigenHairetsu2: Array<Array<number | string>> = [
  [50, "japan"],
  [150, 300],
];

let hairetsu: (string | number | boolean)[] = [1, false, "Japan"];
let hairetsu2: Array<string | number | boolean> = [1, false, "Japan"];
