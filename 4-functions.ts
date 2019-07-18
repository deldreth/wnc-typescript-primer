interface User {
  name: string;
  age: string;
}

type NameAge = [string, number];

function* tuples(users: User[]): IterableIterator<NameAge> {
  for (const user of users) {
    yield [user.name, user.age];
  }
}
