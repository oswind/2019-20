const VkBot = require('node-vk-bot-api');
const token = require('./token');


const bot = new VkBot(token);

bot.command('/start', (ctx) => {
    ctx.reply('Hello!')
});

bot.command('Начать', (ctx) => {
    const info = 'Ну, начнем! \n ' +
        'Этот бот может отвечать на команды: \n' +
        'Привет \n';
    ctx.reply(info)
});

bot.command('Привет', (ctx) => {
    ctx.reply('Привет!')
});

bot.startPolling(() => {
    console.log('Бот запущен!')
});