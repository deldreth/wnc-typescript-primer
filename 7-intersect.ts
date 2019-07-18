enum Cls {
  Aves,
  Mammalia
}

interface DarkAnimal {
  classification: Cls;
}

interface Bat extends DarkAnimal {
  classification: Cls.Mammalia;
}

interface Bird extends DarkAnimal {
  classification: Cls.Aves;
}

type FlyingAnimal = Bat | Bird;

// darkAnimal is of type Bat
const darkAnimal: FlyingAnimal = {
  classification: Cls.Mammalia
};
