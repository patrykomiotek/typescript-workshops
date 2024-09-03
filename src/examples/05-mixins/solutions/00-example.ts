type Constructor<T = {}> = new (...args: any[]) => T;

class Animal {
  legs = 5;
}

function Run<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    run() {
      console.log('Bignę!');
    }
  };
}

function Fly<TBase extends Constructor>(base: TBase) {
  return class extends base {
    fly() {
      console.log('lecę!');
    }
  };
}

const genericAnimal = new Animal();
const runningAnimal = Run(Animal);
const flyingRunningAnimal = Fly(Run(Animal));
