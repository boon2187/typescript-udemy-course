export {};

let profile1: object = { name: "Ham" };
profile1 = { birthYear: 1976 };

console.log({ profile1 });

let profile2: { name: string } = { name: "Ninja" };
profile2 = { name: "1980" };

console.log({ profile2 });
