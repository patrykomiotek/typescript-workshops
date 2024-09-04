let x = 'hello'; // typ string
let y = 'hello' as const; // typ "hello" (dosłowny typ string)

const obj = { foo: 'bar' } as const;
obj.foo = 'baz'; // Błąd: Cannot assign to 'foo' because it is a read-only property

const arr = [1, 2, 3] as const; // typ: readonly [1, 2, 3]
arr.push(4); // Błąd: Property 'push' does not exist on type 'readonly [1, 2, 3]'

const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;

const COLORS = {
  RED: '#FF0000',
  GREEN: '#00FF00',
  BLUE: '#0000FF',
} as const;

type Color = (typeof COLORS)[keyof typeof COLORS]; // typ: "#FF0000" | "#00FF00" | "#0000FF"

const x = 5;
const y = x as const; // Błąd: A 'const' assertion can only be applied to a string, number, boolean, array, or object literal.

const nested = {
  arr: [1, 2, 3],
} as const;
nested.arr.push(4); // To nadal działa (choć nie powinno)
