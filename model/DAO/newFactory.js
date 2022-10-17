import newMemoryDAO from "./newMemory.js";
import newFileDAO from './newFile.js'
import newMongoDAO from './newMongo.js'

class newsFactgoryDAO {
    static get(type) {
        switch (type) {
            case 'memory': return new newMemoryDAO()
            case 'file': return new newFileDAO(process.cwd() + '/news.json')
            case 'mongo': return new newMongoDAO(config.db.name, config.db.collection)
            
            default: return new newMemoryDAO()
        }
    }
}
export default newsFactgoryDAO