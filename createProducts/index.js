const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const put = async (item)=>{
    return await dynamo.put({
        TableName: process.env.TABLE_NAME,
        Item: item
    }).promise()
  
}

 const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }

exports.handler = async (event) => {
    const { title,description,price} = JSON.parse(event.body)
   
     const item = {id:uuid(),title:title,description:description, price:price}
    
    await put(item)
    
 
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('product create'),
    };
    return response;
};


// https://575vzbjikl.execute-api.eu-west-1.amazonaws.com/default/createProduct