// enable flags in tsconfig.json:
// "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
// "emitDecoratorMetadata": true,

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class Example {
  @log
  someMethod(arg: number) {
    return arg * 2;
  }
}

const example = new Example();
example.someMethod(5); // Loguje: Wywołanie metody: someMethod z argumentami: 5
