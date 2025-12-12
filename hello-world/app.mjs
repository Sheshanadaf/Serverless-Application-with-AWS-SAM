// Import AWS SDK in ES Module syntax
import AWS from "aws-sdk";

/**
 * Lambda handler
 */
export const lambdaHandler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
    }),
  };

  console.log("event", event);

  const s3ObjectKey = event.Records[0].s3.object.key;
  const s3TimeStamp = event.Records[0].eventTime;

  // Create DynamoDB service object
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

  const params = {
    TableName: "lambda-SAM-APP-HelloWorldFunctionTable-1UMDXMDSQ0WFU",
    Item: {
      id: { S: s3ObjectKey }, // S = String
      timestamp: { S: s3TimeStamp },
    },
  };

  try {
    const data = await ddb.putItem(params).promise();
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }

  return response;
};
