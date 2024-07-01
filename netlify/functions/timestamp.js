// netlify/functions/timestamp.js

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      Data: {
        timestamp: new Date().toISOString()
      }
    })
  };
};