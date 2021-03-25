import { v4 as uuidv4 } from "uuid";
// Users
const people = [];
export const getPeople = () => people;
export const getById = (id) => people.filter((person) => person.id === id)[0];
export const addPerson = (name, age, gender) => {
  const newPerson = { id: uuidv4(), name, age, gender };
  people.push(newPerson);
  return newPerson;
};
export const delPerson = (id) => {
  const idx = people.findIndex((person) => person.id === id);
  if (idx > -1) {
    people.splice(idx, 1);
    return true;
  }
  return false;
};
const mockPeople = [
  { id: "0", name: "lee", age: 30, gender: "male" },
  { id: "1", name: "kim", age: 21, gender: "female" },
  { id: "2", name: "park", age: 29, gender: "male" },
  { id: "3", name: "lee", age: 25, gender: "female" },
];
mockPeople.map(({ name, age, gender }) => addPerson(name, age, gender));
