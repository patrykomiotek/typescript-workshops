import { fetchPeople, type Person } from '../services/fetchPeople';

type LoadFunction<T> = { (): Promise<T> };

// pending
// resolved
// rejected

type Res<T> =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // resolved
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

const getData = async <T>(load: LoadFunction<T>): Promise<Res<T>> => {
  // let isLoading = true;
  // let isError = false;
  // let data: T | undefined;

  // load()
  //   .then((d) => {
  //     data = d;
  //   })
  //   .catch((er) => {
  //     isError = true;
  //   })
  //   .finally(() => {
  //     isLoading = false;
  //   });

  // pending
  const initialState = {
    isLoading: true,
    isError: false,
    data: undefined,
  };

  try {
    const data = await load();

    if (data) {
      // fulfilled
      return {
        data,
        isLoading: false,
        isError: false,
      };
    }

    return {
      isLoading: true,
      isError: false,
      data: undefined,
    };
  } catch (error) {
    // rejected
    return {
      isError: true,
      isLoading: false,
      data: undefined,
    };
  }
};

// const { data, isLoading, isError } = getData<Person>(fetchPeople)
// const { data, isLoading, isError } = getData<Person>(() => fetchPerson(123))

const { data, isLoading, isError } = await getData(fetchPeople); //

if (isLoading) {
  console.log('Loading');
}

if (isError) {
  console.log('Error');
}

const people = data?.results;
people.forEach((item) => {
  console.log(item);
});
