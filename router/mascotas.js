const express = require('express');
const router = express.Router();

router.get ('/', (req, res) => {
    res.render('mascotas', {
        arrayMascotas: [
            {id: '1', nombre: 'Max', descripcion: 'Max descripcion'},
            {id: '2', nombre: 'Ruby', descripcion: 'Ruby descripcion'},
            {id: '3', nombre: 'Safiro', descripcion: 'Safiro descripcion'},
        ]
    })
})

router.get ('/services', (req, res) => {
    res.render('services', {titleServices: 'dynamic services title'})
})

module.exports = router;