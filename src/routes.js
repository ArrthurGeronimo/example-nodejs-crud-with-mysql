const express = require('express');
const routes = express.Router();

routes.get('/',(req, res) => {
    res.send('Rota Raíz da API')
})

const ExampleController = require('./controllers/ExampleController');
routes.get('/example', ExampleController.index);
routes.post('/example', ExampleController.store);
routes.get('/example/:id', ExampleController.show);
routes.put('/example/:id', ExampleController.update);
routes.delete('/example/:id', ExampleController.destroy);

module.exports = routes;