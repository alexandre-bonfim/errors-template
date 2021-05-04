// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';

exports.errorHandler = async (event, context) => {
    //     try {
    //         // const ret = await axios(url);
    //         response = {
    //             'statusCode': 200,
    //             'body': JSON.stringify({
    //                 message: 'hello world',
    //                 // location: ret.data.trim()
    //             })
    //         }
    //     } catch (err) {
    //         console.log(err);
    //         return err;
    //     }

    //     return response
    // };

    if (event.queryStringParameters && event.queryStringParameters.throw === '500') {
        console.error('5XX triggered...');
        return {
            'statusCode': 500,
            'body': JSON.stringify({
                message: `store path only accept Post method, tried: ${event.httpMethod}`
            })
        };
    }

    if (event.queryStringParameters && event.queryStringParameters.throw === '400') {
        console.error('4XX triggered...');
        return {
            'statusCode': 400,
            'body': JSON.stringify({
                message: `store path only accept Post method, tried: ${event.httpMethod}`
            })
        };
    }
};