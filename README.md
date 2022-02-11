# AWS CDK API gateway boilerplate with TypeScript

This is a project for TypeScript development with AWS CDK and SAM. It contains boilerplate for an API gateway.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Getting started

The following global installations are required:

* [NodeJS](https://nodejs.org/en/download/)
* [Docker](https://docs.docker.com/get-docker/)
* [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
* [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

Run the following commands:

 * `$ npm install` to install project dependencies
 * `$ cdk synth`  to emit the synthesized CloudFormation template
 * `$ sam local start-api -t ./cdk.out/APIStack.template.json` to run the API gateway locally

You can now use an HTTP client to make a GET request to http://localhost:3000/users to retrieve a list of users.

## Other useful commands

 * `$ npm run build`   compile typescript to js
 * `$ npm run watch`   watch for changes and compile
 * `$ npm run test`    perform the jest unit tests
 * `$ cdk deploy`      deploy this stack to your default AWS account/region
 * `$ cdk diff`        compare deployed stack with current state
