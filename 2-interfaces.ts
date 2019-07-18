enum Color {
  Red,
  Orange,
  Yellow,
  Green,
  Blue,
  Indigo,
  Violet
}

enum Direction {
  Up,
  Down,
  Left,
  Right
}

declare namespace Interfaces {
  interface Animal {
    color: Color;
    readonly age: number;
  }

  interface Fish extends Animal {
    swim: (direction: Direction) => boolean;
  }

  interface Bird extends Animal {
    fly: (direction: Direction) => boolean;
  }
}

const betta: Interfaces.Fish = {
  color: Color.Blue,
  age: 4,
  swim: direction => {
    if (direction === Direction.Up) {
      return true;
    }

    return false;
  }
};
