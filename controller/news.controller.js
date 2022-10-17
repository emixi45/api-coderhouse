import newApi from "../api/api.js";

class newsController {
    constructor () {
        this.newApi = new newApi()

    }
    getNews = async (req,res)=> {
        try {
            const id = req.params.id
            const news = await this.newApi.getNew(id)
            res.json(news)
        }catch(e){
            console.log('error to get news', e);
            res.send(e)

        }
    }
    insertNews = async (req,res)=> {
        try {
            const newToSave = req.body
            const newSaved = await this.newApi.insertNew(newToSave)
            res.json(newSaved)

        }catch(e){
            console.log('error to get news', e);
            res.send(e)
        }
    }
}

export default newsController