enum FishColor {
  Gold
}

declare namespace Union {
  interface Animal {
    color: FishColor;
  }

  interface CanSwim {
    swim: () => boolean;
  }

  type Fish = Animal & CanSwim;
}

class Koi implements Union.Fish {
  color: FishColor;

  constructor(color: FishColor) {
    this.color = color;
  }

  swim() {
    return true;
  }
}
