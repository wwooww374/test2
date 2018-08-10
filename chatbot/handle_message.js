// respond


let response;

function handleMessage(sender_psid, received_message) {

    let response;
  
    // Check if the message contains text
    if (received_message.text) {    
  
      // Create the payload for a basic text message
      response = {
        "text": `당신이 보낸 메세지: "${received_message.text}"`
      }
    }  
    
    // Sends the response message
    callSendAPI(sender_psid, response);    
  }
module.exports = handleMessage;