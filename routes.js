const express = require('express');
const router = express.Router()
module.exports = router;
const modeloTarefa = require('../models/tarefa');

router.post('/post', async (req, res) => {
 const objetoTarefa = new modeloTarefa({
 descricao: req.body.descricao,
 statusRealizada: req.body.statusRealizada
 })
 try {
 const tarefaSalva = await objetoTarefa.save();
 res.status(200).json(tarefaSalva)
 }
 catch (error) {
 res.status(400).json({ message: error.message })
 }
})
router.get('/getAll', async (req, res) => {
 try {
 const resultados = await modeloTarefa.find();
 res.json(resultados)
 }
 catch (error) {
 res.status(500).json({ message: error.message })
 }
})
