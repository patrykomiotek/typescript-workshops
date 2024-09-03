const log = (target: any) => {
  console.log('Target: ', target);
};

class Car {
  model: string;

  drive() {
    console.log('I am driving');
  }
}
