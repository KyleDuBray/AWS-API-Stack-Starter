# AWS CDK API Gateway Boilerplate with TypeScript

This is a project for TypeScript development with AWS CDK and SAM. The API gateway was bootstrapped with `$ cdk init --language typescript` and a Lambda with a /users route was added.

## Getting Started

The following global installations are required:

* [NodeJS](https://nodejs.org/en/download/)
* [Docker](https://docs.docker.com/get-docker/)
* [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)
* [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

Run the following commands:

* `$ npm install` to install project dependencies
* `$ cdk synth`  to emit the synthesized CloudFormation template
* `$ sam local start-api -t ./cdk.out/APIStack.template.json` to run the API gateway locally

The `cdk.json` file tells the CDK Toolkit how to execute your app. You can now use an HTTP client to make a GET request to http://localhost:3000/users to retrieve a list of users.
 
NOTE: On Windows, depending on your shell, you may have to use the full path. Consider adding to your `.bashrc`:
 ```
alias sam="/c/Program\ Files/Amazon/AWSSAMCLI/bin/sam.cmd"
```

## Other Useful Commands

 * `$ npm run build`   compile typescript to js
 * `$ npm run watch`   watch for changes and compile
 * `$ npm run test`    perform the jest unit tests
 * `$ cdk deploy`      deploy this stack to your default AWS account/region
 * `$ cdk diff`        compare deployed stack with current state
