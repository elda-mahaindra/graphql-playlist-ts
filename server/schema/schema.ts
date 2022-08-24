import { GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql";

import BookType from "./book";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        // code to get data from db / other source
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
