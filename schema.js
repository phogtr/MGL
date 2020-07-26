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

// Page Type
const PageType = new GraphQLObjectType({
  name: "Page",
  fields: () => ({
    results: { type: new GraphQLList(GameType) },
  }),
});

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
    page: {
      type: PageType,
      args: {
        num: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios.get(`https://api.rawg.io/api/games?page=${args.num}`).then((res) => res.data);
      },
    },
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
