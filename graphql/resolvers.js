const lee = {
  name: "leedaegon",
  age: 30,
  gender: "male",
};
const resolvers = {
  Query: {
    person: () => lee,
  },
};

export default resolvers;
