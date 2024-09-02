import { expect, it } from 'vitest';

export const getName = (params: { first: string; last: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it('Should work with just the first name', () => {
  const name = getName({
    first: 'Joe',
  });

  expect(name).toEqual('Joe');
});

it('Should work with the first and last name', () => {
  const name = getName({
    first: 'Joe',
    last: 'Doe',
  });

  expect(name).toEqual('Joe Doe');
});
