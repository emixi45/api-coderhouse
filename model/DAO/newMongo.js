import mongodb from 'mongodb'
import NewsBaseDAO from './base.js'

const { MongoClient,  ObjectId} = mongodb

class NewMongoDao extends NewsBaseDAO {
    constructor(database, collection) {
        super();
            (async () => {
                console.log('conecction mongo db...')

                const connection = await MongoClient.connect(config.db.connectString, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })

                const db = connection.db(database)
                this._collection = db.collection(collection)
                console.log('DB connected');
            })()
    }
    getNews = async _id => {
        try {
            if(!_id){
                const news = await this._collection.find({}).toArray();
                return news
            }
                console.log('search', _id);
                const newOne = await this._collection.findOne({
                    _id: ObjectId(_id)
            })
            return [newOne]
        } catch (e){
            console.log('error to get news',e);
            return []
        }
    }
    insertNew =async newToInsert => {
        try {
            await this._collection.insertOne(newToInsert)
            return newToInsert
        }catch(e){
            console.log ('error to get news', e);
            return newToInsert
        }
    }
}

export default NewMongoDao