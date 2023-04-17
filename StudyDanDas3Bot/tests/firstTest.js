const env = require('../.env')
const Telegraf = require('telegraf')

console.log('env')
console.log(env)

const bot = new Telegraf(env.token)

bot.start(context =>{
    const from = context.update.message.from
    console.log(from)
    context.reply('Hello!!!')
})

bot.startPolling();