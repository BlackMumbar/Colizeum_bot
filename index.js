

const TelegramApi = require('node-telegram-bot-api')
const { messageTypes } = require('node-telegram-bot-api/src/telegram')
const { on } = require('nodemon')



const token = '5324569411:AAEL3KJ7zyfaDIs7PgFRyyeWUoPLUmDfzxM'


const bot = new TelegramApi(token,{polling: true})

bot.setMyCommands([
    {command: '/start',                       description: 'Начально приветствие'},
    {command: '/info',                       description: 'информация'},
    {command: '/games',                       description: 'информация по играм на пк'},
    
    
])


bot.on ('message', msg =>{
const text = msg.text;
const chatId = msg.chat.id;






if (text ==='/start'){
    
   bot.sendMessage(chatId,'Привет странник, ты хочешь получить по жепе?');

}

if (text ==='/info'){

   bot.sendMessage(chatId,`Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
}





})
