export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result: never = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// const foo: never = null;
