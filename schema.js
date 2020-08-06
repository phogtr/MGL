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
    results: { type: new GraphQLList(GamesType) },
  }),
});

// Games Type
const GamesType = new GraphQLObjectType({
  name: "Games",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    released: { type: GraphQLString },
    background_image: { type: GraphQLString },
    rating: { type: GraphQLFloat },
  }),
});

const GamesDetailType = new GraphQLObjectType({
  name: "GamesDetail",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    released: { type: GraphQLString },
    background_image: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    reviews_count: { type: GraphQLInt },
    description: { type: GraphQLString },
    updated: { type: GraphQLString },
    developers: { type: new GraphQLList(DevelopersType) },
  }),
});

const DevelopersType = new GraphQLObjectType({
  name: "Developers",
  fields: () => ({
    name: { type: GraphQLString },
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
      type: GamesDetailType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        // name = args.name;
        // name = name.replace(/\s+/g, "-").toLowerCase();
        return axios.get(`https://api.rawg.io/api/games/${args.id}`).then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
