import { fetchPeople, type Person } from '../services/fetchPeople';

type LoadFunction<T> = { (): Promise<T> };

type Res<T> = {
  data?: T;
  isLoading: boolean;
  isError: boolean;
};

const getData = <T>(load: LoadFunction<T>): Res<T> => {
  let isLoading = true;
  let isError = false;
  let data: T | undefined;

  load()
    .then((d) => {
      data = d;
    })
    .catch((er) => {
      isError = true;
    })
    .finally(() => {
      isLoading = false;
    });

  return {
    isError,
    data,
    isLoading,
  };
};

// const { data, isLoading, isError } = getData<Person>(fetchPeople)
// const { data, isLoading, isError } = getData<Person>(() => fetchPerson(123))

const { data, isLoading, isError } = getData(fetchPeople);
const people = data?.results;

if (isLoading) {
  console.log('Loading');
}

if (isError) {
  console.log('Error');
}

people.forEach((item) => {
  console.log(item);
});
