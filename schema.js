require("dotenv").config();
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
    count: { type: GraphQLInt },
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

// Game Detail Type
const GamesDetailType = new GraphQLObjectType({
  name: "GamesDetail",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    released: { type: GraphQLString },
    background_image: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    reviews_count: { type: GraphQLInt },
    description_raw: { type: GraphQLString },
    updated: { type: GraphQLString },
    website: { type: GraphQLString },
    reddit_url: { type: GraphQLString },
    developers: { type: new GraphQLList(DevelopersType) },
    publishers: { type: new GraphQLList(PublishersType) },
    genres: { type: new GraphQLList(GenresType) },
    platforms: { type: new GraphQLList(PlatformsElemType) },
    clip: { type: ClipType },
  }),
});

// Developers Type
const DevelopersType = new GraphQLObjectType({
  name: "Developers",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

// Genres Type
const GenresType = new GraphQLObjectType({
  name: "Genres",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const PublishersType = new GraphQLObjectType({
  name: "Publishers",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const PlatformsElemType = new GraphQLObjectType({
  name: "PlatformsElem",
  fields: () => ({
    platform: { type: PlatformsType },
  }),
});

const PlatformsType = new GraphQLObjectType({
  name: "Platforms",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const ClipType = new GraphQLObjectType({
  name: "Clip",
  fields: () => ({
    clip: { type: GraphQLString },
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
        return axios
          .get(`https://api.rawg.io/api/games?key=${process.env.MY_KEY}&page=${args.num}`)
          .then((res) => res.data);
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
        return axios
          .get(`https://api.rawg.io/api/games/${args.id}?key=${process.env.MY_KEY}`)
          .then((res) => res.data);
      },
    },
    filter: {
      type: PageType,
      args: {
        num: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.rawg.io/api/games?key=${process.env.MY_KEY}&page=${args.num}&search=${args.name}&search_precise=true&ordering=-added`
          )
          .then((res) => res.data);
      },
    },
    released: {
      type: PageType,
      args: {
        dateFrom: { type: GraphQLString },
        dateTo: { type: GraphQLString },
        num: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(
            `https://api.rawg.io/api/games?dates=${args.dateFrom}%2C${args.dateTo}&page=${args.num}`
          )
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

// released within month https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30
// popular within month/year https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added
// `https://api.rawg.io/api/games?dates=${args.dateFrom}%2C${args.dateTo}&key=${process.env.MY_KEY}&page=${args.num}`
