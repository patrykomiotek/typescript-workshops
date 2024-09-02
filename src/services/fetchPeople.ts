// fetch data and return
// Napisz funkcję getData, która zwróci 3 wartości: data, isLoading, isError
// w zalezności od stanu Promisu. Promise słuzyl do pobierania danych.

interface ApiSuccess<T> {
  count: number;
  results: T;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errorMessage?: string;
}

class ApiError extends Error {
  // #1
  declare message: string;
  // #2 message: string;
  // constructor() {
  //   super();
  //   this.message = 'one'
  // }
  // #3 message: string = 'sth';
  // #4
  // constructor(public message: string) {
  //   super();
  // }
  // doSth() {
  //   this.message = 'new value'
  // }
}

interface Person {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
}

interface Starship {
  id: string;
  name: string;
}

const fetchPeople = async () => {
  try {
    const response = await fetch('https://swapi.dev/api/people');
    // return response.json(); // Promise
    return (await response.json()) as ApiSuccess<Person[]>;
  } catch (error) {
    if (error instanceof ApiError) {
      // log sth
      // } else if (error instanceof ) { AxiosError, ZodError,
    } else {
      // general error
    }
  }
};

const fetchPerson = async (id: number) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    // return response.json(); // Promise
    return (await response.json()) as ApiSuccess<Person>;
  } catch (error) {
    if (error instanceof ApiError) {
      // log sth
      // } else if (error instanceof ) { AxiosError, ZodError,
    } else {
      // general error
    }
  }
};

const fetchStarship = async (id: number): Promise<ApiResponse<Starship>> => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    // return response.json(); // Promise
    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    if (error instanceof ApiError) {
      // log sth
      // } else if (error instanceof ) { AxiosError, ZodError,
    } else {
      // general error
    }

    return {
      success: false,
      errorMessage: 'Some message',
    };
  }
};
