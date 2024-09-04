export const log = (
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method: ${propertyKey} with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
};

const sealed = (constructor: Function) => {
  console.log('I am sealing object');
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

const freezed = (constructor: Function) => {
  console.log('I am freezing object');
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
};

class NonExtendableClass {
  private constructor() {}

  static create() {
    return new NonExtendableClass();
  }
}

@freezed
export class BankAccount {
  // protected balance: number = 0;
  public balance: number = 0;

  @log
  deposit(amount: number) {
    this.balance += amount;
  }

  @log
  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return;
    }

    throw new Error('Not enough money!');
  }

  getBalance() {
    return this.balance;
  }
}

// const account = new BankAccount();
// account.deposit(500);
// account.withdraw(500);
