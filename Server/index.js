const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const token = '7827483429:AAG1BCVzl2hOz8SBqGT1pWNoWAc2VQTDsXU'
const FILE_PATH = './chatIds.json';
const webAppUrl = 'https://extraordinary-sunburst-038b24.netlify.app'
const bot = new TelegramBot(token, {polling: true});
let chatArray = []


if (fs.existsSync(FILE_PATH)) {
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    chatArray = JSON.parse(data); // Загружаем chatId из файла
}

function addChatId(chatId) {
    if (!chatArray.includes(chatId)) {
        chatArray.push(chatId); // Добавляем chatId в массив

        // Сохраняем массив в файл
        fs.writeFileSync(FILE_PATH, JSON.stringify(chatArray, null, 2), 'utf8');
        console.log(`Добавлен chatId: ${chatId}`);
    } else {
        console.log(`chatId ${chatId} уже существует.`);
    }
}

function broadcastMessage(message) {
    chatArray.forEach((chatId) => {
        bot.sendMessage(chatId, message, {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Играть в LexanKombat', web_app: {url: webAppUrl}}]
                ]
            }
        }).catch((err) => {
            console.error(`Не удалось отправить сообщение пользователю ${chatId}:`, err);
        });
    });


}

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    addChatId(chatId)
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Играй по кнопке ниже', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Играть в LexanKombat', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }

});

