import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.HYGRAPH_API!, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});
