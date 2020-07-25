const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");

// Game Type
const GameType = new GraphQLObjectType({
  name: "Game",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    released: { type: GraphQLString },
    background_image: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    reviews_count: { type: GraphQLInt },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    game: {
      type: GameType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        name = args.name;
        name = name.replace(/\s+/g, "-").toLowerCase();
        return axios.get(`https://api.rawg.io/api/games/${name}`).then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

// General Type
// const GeneralType = new GraphQLObjectType({
//   name: "General",
//   fields: () => ({
//     next: { type: GraphQLString },
//     previous: { type: GraphQLString },
//     results: { type: new GraphQLList(GameType) },
//   }),
// });

// general: {
//   type: GeneralType,
//   resolve(parent, args) {
//     return axios.get("https://api.rawg.io/api/games").then((res) => res.data);
//   },
// },
