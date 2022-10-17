import fs from 'fs'
import NewsBaseDAO from './base.js'
import createNewDTO from '../DTO/news.js'

class newFileDAO extends NewsBaseDAO {
    constructor(filename){
        super()
        this.filename = filename
    }
    async read() {
        return JSON.parse (await fs.promises.readFile(this.filename, 'utf-8'))
    }
    async save() {
        await fs.promises.readFile(this.filename, JSON.stringify(news))
    }

    getNews = async _id => {
        try {
            const news = await this.read()
                if(!_id) return news
                let index = news.findIndex (n => n._id == _id) 
                return index >= 0 ? [news [index]] :[]
        } catch (e){
            console.log('error to get news',e); 
            return []
        }
    }
    insertNew = async newToInsert => {
        try {
            const news = await this.read()
            const _id = this.getNextID(news)

            const datetime = new Date ().toLocaleString()
            const newDTO = createNewDTO(newToInsert, _id , datetime)
            news.push(newDTO)
            await this.save(news)
            return newDTO

        }catch(e){
            console.log ('error to get news', e);
            return {}
        }
    }
}

export default newFileDAO