const Telegraf = require('telegraf')

const app = new Telegraf("314144501:AAFBk0mhB_2Ubqpo8AIgLjrnODWIr0wqREE")
app.command('start', (ctx) => ctx.reply('Hey'))
app.on('sticker', (ctx) => ctx.reply('👍'))
app.startPolling()

