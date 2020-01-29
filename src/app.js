const routes = require('./routes');

const express = require('express');

class App (
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.server.use()
    }

    middlewares() {
        this.server.use(express.json());
    }    
)

module.exports = new App().server;