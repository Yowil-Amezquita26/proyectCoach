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

router.get ('/newTask', (req, res) => {
    res.render('newTask')
})

router.post('/', async (req, res) =>{
    const body = req.body
    try{
        // const mascotaDB = new Mascota(body)
        // await mascotaDB.save()
        await Mascota.create(body)
        // console.log(mascotaDB)
        res.redirect('mascotas')
    }catch(error){
        console.log(error)
    }
})

router.get('/:id', async (req, res) =>{
    
    const id = req.params.id
    console.log(id, 'holamundo')

    try {
        const mascotaDB = await Mascota.findOne({_id: id})
        console.log(mascotaDB)
        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        res.render('detalle', {
            mensaje: 'No se encuentra',
            error: true
        })
        console.log(error)
    }
})

router.delete('/:id', async(req,res) => {
    const id = req.params.id;
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });
        if (mascotaDB) {
            res.json({
                estado: true,
                mensaje: 'Deleted'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'failed to delete'
            })
        }
    } catch (error) {
        console.log(error)
        
    }
})

router.put('/:id', async (req,res) =>{
    const id = req.params.id;
    const body = req.body;

    try {

        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { usefindAndModify: false});
        console.log(mascotaDB)

        res.json({
            estado: true,
            mensaje: 'Updated'
        })
    } catch (error) {
        res.json({
            estado: false,
            mensaje: 'Couldn`t update'
        })
    }
})


module.exports = router;