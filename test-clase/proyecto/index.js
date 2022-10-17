const express = require ('express')

const RouterUsers = require('./route')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api', new RouterUsers())

app.listen(8080,()=>{
    console.log('listen..');
 })

