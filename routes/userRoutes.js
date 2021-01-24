const express = require('express');
const UserController = require('../controllers/UserController');

const api = express.Router();

api.get('/bienvenido', (req, res) => {
    
    console.log('Llego a la ruta bienvenido...');
});

api.post('/', UserController.create);
api.put('/:idUser', UserController.update);
api.delete('/:idUser', UserController.remove);
api.get('/allUser/:role', UserController.getAllUsers);

module.exports = api; 
