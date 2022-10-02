const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const query = async(id)=>{
    const queryResults = await dynamo.query({
        TableName: process.env.TABLE_NAME,
        KeyConditionExpression: 'id = :id',
        ExpressionAttributeValues: {':id': id},
    }).promise()
    return queryResults;
}

exports.handler = async (event) => {
   
    const { id} = event.queryStringParameters

    
   const queryResults = await query(id)
     
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({data: queryResults.Items}),
    };
    return response;
};


// https://575vzbjikl.execute-api.eu-west-1.amazonaws.com/default/productsFunctionbyId?id=65br3d6a-f8ed-4f5b-a492-0af4b71bf24w