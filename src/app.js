import routes from './routes';

import express from 'express';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.server.use(routes)
    }

    middlewares() {
        this.server.use(express.json());
    }    
}

export default new App().server;