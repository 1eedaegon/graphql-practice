import { addPerson, delPerson, getById, getPeople } from "./db";
import { getMovieDetail, getMovies } from "./api";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id),
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovieDetail(id),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPerson(name, age, gender),
    delPerson: (_, { id }) => delPerson(id),
  },
};
export default resolvers;
