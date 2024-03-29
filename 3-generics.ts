// Identity generic
function identity<T>(arg: T): T {
  return arg;
}

const isGenString = identity<string>("string");
const isGenNumber = identity<number>(1);

// Generic Interfaces
interface GenericClass<T> {
  add: (a: T, b: T) => T;
}

class TestString implements GenericClass<string> {
  add(a: string, b: string) {
    return a + b;
  }
}

class TestNumber implements GenericClass<number> {
  add(a: number, b: number) {
    return a + b;
  }
}

// Generic Constraints
interface Person {
  age: number;
}

function getAgeFailure<T>(person: T): number {
  // Property 'age' does not exist on type 'T'
  return person.age;
}

function getAgePasses<T extends Person>(person: T): number {
  return person.age;
}
