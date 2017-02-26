// var TelegramBot = require('node-telegram-bot-api'),
//     // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
//     telegram = new TelegramBot("314144501:AAFBk0mhB_2Ubqpo8AIgLjrnODWIr0wqREE", { polling: true });

// telegram.on("text", (message) => {
//   telegram.sendMessage(message.chat.id, "Hello world");
// });

const Telegraf = require('telegraf');
const token = "314144501:AAFBk0mhB_2Ubqpo8AIgLjrnODWIr0wqREE";
const app = new Telegraf(token);

app.use((ctx, next) => {
  const start = new Date()
  return next().then(() => {
    const ms = new Date() - start
    console.log('Response time %sms', ms)
    console.log(ctx.message)
  })
});

app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
});

app.hears('hi', (ctx) => ctx.reply('Hey there!'));

app.on('sticker', (ctx) => ctx.reply('👍'));

app.catch((err) => {
  console.log('Ooops', err)
})

app.startPolling();