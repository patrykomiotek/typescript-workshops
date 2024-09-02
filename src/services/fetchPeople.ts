// fetch data and return

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
  message: string;
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
