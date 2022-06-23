const express = require('express');
const router = express.Router();

const Mascota = require('../models/pets')

router.get ('/', async (req, res) => {
    
    try{
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)
        console.log("Base de Dato Conectada")
        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
        })

    } catch(error){
        console.log(error)
    }

})


module.exports = router;