import { ApolloServer, gql } from "apollo-server";
import { url } from "inspector";


const server = new ApolloServer({})

server.listen().then({ url }) => {
  console.log(`Running on ${url}`)
}