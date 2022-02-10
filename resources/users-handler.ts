import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import axios from "axios";

const userUrl = "https://randomuser.me/api";
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const response = await axios.get(userUrl);
  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
};
