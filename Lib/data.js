import { hyGraphApi } from "../services";
import { GraphQLClient, gql } from "graphql-request";

export const getMembers = async () => {
  const graphQlClient = new GraphQLClient(hyGraphApi);

  const query = gql`
    {
      teamMembers {
        fullName
        id
        photo {
          url
          height
          width
        }
        position
      }
    }
  `;
  const response = await graphQlClient.request(query);
  return response;
};
