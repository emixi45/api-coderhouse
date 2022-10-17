import dotenv from 'dotenv'
import path from 'path'


dotenv.config({
    path : path.resolve(process.cwd(), `./config/${process.env.NODE_ENV}.env`)
})


export default {
    NODE_ENV: process.env.NODE_ENV || 'develop',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 8080,
    //men - file - mongo
    PERS: process.env.PERS || 'MEM',
    db:{
        name: 'ecommerce',
        collection: 'products',
        connectString: 'mongodb://127.0.0.1/',
        projection: {__v: 0}
    }
    
}
