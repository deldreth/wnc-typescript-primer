interface Test {
  thing: "THING";
}

let test: Test;

// type 'THING' but the value is undefined
const what = test.thing;
