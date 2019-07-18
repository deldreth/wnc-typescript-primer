// Closest type

let three = 3;
// Type 'false' is not assignable
// to type 'number'
three = false;

// inferred type (string | number)[]
let nameAgeHeight = ["John", 23, 128];

nameAgeHeight = ["Jane", "Doe", 323];

// Type 'false' is not assignable
// to type 'string | number'
nameAgeHeight = ["Sally", false];
