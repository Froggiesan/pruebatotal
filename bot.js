const axios = require('axios').default;
const {Telegraf} = require ('telegraf')
const token = '5333335038:AAFLef7r4URunS-Q64k2pux_Vxw6QPqWiuA'
const bot = new Telegraf(token);
const city = "Palma"
const API_KEY = "18b32e5d7d3c4a7a5ad0d254c16e5326";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Palma&appid=18b32e5d7d3c4a7a5ad0d254c16e5326&units=metric`


const fetchData = async position => {
    
    return await axios.get(url)

}


bot.start((ctx) => {
    ctx.reply("Welcome")
})
// Help command
bot.help((ctx) => {
    ctx.reply("Help!")
})
// Setting command
bot.settings((ctx) => {
    ctx.reply("Settings")
})
// Create customs commands
bot.command(['mycommand','MyCommand','Mycommand'], (ctx => {
    ctx.reply("My custom command!!!")
}))

bot.hears('computer', (ctx) => {
    ctx.reply('Hey im selling computer')
})
/** 
bot.on('text', ctx => {
    ctx.reply('Estas escribiendo')
})
posibilidad de sticker,img etc etc, mirar api

.mention para checkear si se menciona a alguien
*/
const c = ""

bot.hears('clima', (ctx) => {
    fetchData().then((data) => {
        ctx.reply(data.data.main.temp)
    })
    
    
    
})
bot.hears(['fecha','Fecha'], (ctx) => {
    ctx.reply('La fecha de hoy es de:' + '\n' + getDate())
    
})

const onLoad = () => {
    bot.launch()
}

bot.launch();


const getDate = () =>{
    let date = new Date();
    return `${date.getDate()}-${('0' + (date.getMonth() +1)).slice(-2)}-${date.getFullYear()}`
}