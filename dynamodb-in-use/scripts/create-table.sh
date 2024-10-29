#!/bin/bash

# Run the AWS command to create the DynamoDB table
aws dynamodb create-table --cli-input-json file://table-script.json --endpoint-url http://localhost:4566