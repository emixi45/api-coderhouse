import express from 'express'
import config from './config/config.js'
import cors from 'cors'

import NewsRouter from './routes/news.route.js'


const routerNews = new NewsRouter()
const app = express ()

if(config.NODE_ENV == 'develop') app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/news' ,routerNews.start())

const server = app.listen(config.PORT,() => {
    console.log(`server listen on ${config.PORT}(${config.NODE_ENV}) DB:${config.PERS}`);
})
server.on('error ', e => console.log(e))