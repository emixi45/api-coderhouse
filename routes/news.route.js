import express from 'express';
import newsController from '../controller/news.controller.js';

const route = express.Router()


class NewsRouter {
    constructor () {
        this.newsController = new newsController()
    }
    start() {
        route.get('/:id?', this.newsController.getNews)
        route.post('/', this.newsController.insertNews)
        return route
    }
}

export default NewsRouter