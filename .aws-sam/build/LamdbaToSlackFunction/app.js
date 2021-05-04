const axios = require('axios');

exports.lambdaToSlackHandler = async (event, context) => {
    // Get it from webhooks integration
    const url = 'https://hooks.slack.com/services/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';

    const message = JSON.parse(event['Records'][0]['Sns']['Message']);
    
    const payload = {
        'channel': '#milkgate-errors',
        'username': 'cloudwatch-alarm',
        'icon_emoji': '',
        'attachments':[
            {
                'fallback': message.NewStateReason,
                'pretext':message.NewStateReason,
                'color': '#D00000',
                'fields': [      
                    {
                        'title': 'Alarm',
                        'value':message.AlarmName,
                        'short': false,
                    }, 
                    {
                        'title': 'Alarm Description',
                        'value': message.AlarmDescription,
                        'short': false,
                    },
                    {
                        'title': 'Account',
                        'value': message.AWSAccountId,
                        'short': true,
                    },
                    {
                        'title': 'Region',
                        'value': message.Region,
                        'short': true,
                    }
                ],
            }
        ]
    };
    
    const response = await axios.post(url, payload);

    console.log({
        'payload': payload, 
        'status_code': response.status, 
        'response': response.data
    })
};

