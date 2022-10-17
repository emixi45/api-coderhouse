class News {
    constructor(tittle, body, author,imagen,email,views){
        this.tittle= tittle
        this.body= body
        this.author= author
        this.imagen= imagen
        this.email= email
        this.views= views
    }
    static validate(newsValidate, req){
        return true
    }
}
export default News