type IsArray<T> = T extends Array<any> ? true : false;
type NumberArrayCheck = IsArray<number[]>; // true
type StringCheck = IsArray<string>; // false
type ObjectCheck = IsArray<{ length: 10 }>; // false

// Przykład użycia w kontekście
function processInput<T>(input: T): IsArray<T> extends true ? T : T[] {
  if (Array.isArray(input)) {
    return input as any; // Już jest tablicą
  } else {
    return [input] as any; // Opakowujemy w tablicę
  }
}

const result1 = processInput([1, 2, 3]); // Typ: number[]
const result2 = processInput('hello'); // Typ: string[]

type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string>; // string
type Num = Flatten<number>; // number
type StrArr = Flatten<string[]>; // string
type NumArr = Flatten<Array<number>>; // number

// Bardziej złożony przykład
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type ResolvedType = UnwrapPromise<Promise<string>>; // string
type NonPromiseType = UnwrapPromise<number>; // number
