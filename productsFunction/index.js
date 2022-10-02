const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const scan = async ()=>{
    const scanResults = await dynamo.scan({
        TableName: process.env.TABLE_NAME
    }).promise();
    return scanResults;
}

exports.handler = async (event) => {
    const scanResults = await scan()
   
    
     return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: scanResults.Items
      }
    ),
  };
};


// https://575vzbjikl.execute-api.eu-west-1.amazonaws.com/default/productsFunction


