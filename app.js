var groups = require('./config').groups;
var resp = require('./config').resp;
const TelegramBot = require('node-telegram-bot-api');
const token = require('./config').token;
const bot = new TelegramBot(token, {polling: true});


bot.onText(/签到|\/checkin/, (msg) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  
    const chatId = msg.chat.id;
    try {
        if(typeof(groups[chatId]) == "undefined"){
            groups[chatId] = resp;
        }
    } catch(e) {
        console.error('Error caught by catch block:', e);
    }
    
    //console.log(resp);
    bot.sendMessage(chatId, groups[chatId]);
});
// Listen for any kind of message. There are different kinds of
// messages.
//bot.on('message', (msg) => {
  //const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  //bot.sendMessage(chatId, 'Received your message');
//});

