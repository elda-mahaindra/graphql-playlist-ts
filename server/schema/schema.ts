import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";

import BookType from "./book";

// dummy data
const books = [
  { name: "Name of The Wind", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        // code to get data from db / other source
        return books.find((book) => book.id === args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
