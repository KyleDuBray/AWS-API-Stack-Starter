import * as path from 'path';

import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';

// A NodeJS specific implementation of a lambda function:
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

export class APIStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'APIQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const restApi = new RestApi(this, 'api', {
      restApiName: 'api',
    });

    // "Container" for the lambda implemented in "user-handler.ts"
    const userFunction = new NodejsFunction(this, 'UserFunction', {
      entry: path.join(__dirname, '../resources/users-handler.ts'),
      handler: 'handler',
    });

    // Create lambda integration out of the "user" function
    const userIntegration = new LambdaIntegration(userFunction);

    // resource creation at root /users
    const userResource = restApi.root.addResource('users');

    // map GET request to lambda
    userResource.addMethod('GET', userIntegration);
  }
}
