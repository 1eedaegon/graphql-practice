import { addPerson, getById, getPeople } from "./db";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
  },
};
export default resolvers;
