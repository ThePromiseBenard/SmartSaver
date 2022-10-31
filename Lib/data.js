import { hyGraphApi } from "../services";
import { GraphQLClient, gql } from "graphql-request";

const graphQlClient = new GraphQLClient(hyGraphApi);
export const getMembers = async () => {
  const query = gql`
    {
      teamMembers {
        fullName
        id
        photo {
          url(
            transformation: {
              image: { resize: { width: 400, height: 400, fit: crop } }
            }
          )
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

export const getTermsAndCondition = async () => {
  const QUERY = gql`
    {
      termsAndConditions {
        id
        part
        contents {
          markdown
        }
      }
    }
  `;

  const response = await graphQlClient.request(QUERY);
  return response;
};
