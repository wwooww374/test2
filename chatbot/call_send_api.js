function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
  
    // Send the HTTP request to the Messenger Platform
    request({
      "uri": "https://graph.facebook.com/v2.6/me/messages",
      // 원래는 환경변수 설정
      "qs": { "access_token": "EAAgHaJ6wjtMBAJ4XT7yxOvwJA8sv0azB2CC5RnqTcwfZC4trd9d5hx8htJKgcr32Jo0wSarXYUQtC9d70TKgLWZAbLy6Fhq9EnnhAdcU5fxqvIlEgVLkZAcHH3X8nlcZBChvG7S4wD1Aayb5mNgOEpipsqKEVxfUnZCMdDUbu31uTl64nCpTe" },
      "method": "POST",
      "json": request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('message sent!')
      } else {
        console.error("Unable to send message:" + err);
      }
    }); 
  }

  module.exports = callSendAPI;