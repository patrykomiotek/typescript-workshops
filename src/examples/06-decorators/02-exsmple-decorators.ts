function logTarget(target: any) {
  console.log('Decorator target:', target);
}

@logTarget
class Example {
  @logTarget
  static staticProperty: string;

  @logTarget
  instanceProperty: string;

  @logTarget
  static staticMethod() {}

  @logTarget
  instanceMethod() {}
}
