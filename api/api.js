import config from '../config/config.js';
import newsFactgoryDAO from "../model/DAO/newFactory.js";

class newApi {
    constructor () {
        this.newDAO = newsFactgoryDAO.get(config.TYPE_DB)

    }
    async getNew (id) {
        return await this.newDAO.getNews(id)
    }
    async insertNew(newToInsert){
        return await this.newDAO.insertNew(newToInsert)
    }
}

export default newApi 