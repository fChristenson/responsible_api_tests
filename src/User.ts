export interface IUser {
  name: string;
  age: number;
}

export const User = (name: string, age: number): IUser => {
  return {
    name,
    age
  };
};
