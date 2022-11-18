const { response } = require('express')
const Encuestado = require('../models/encuesta')

const getEncuesta = async (req, res = response) => {
    const { nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.query
    const encuestado = await Encuestado.find()

    res.json({
        msg: "GET API | ENCUESTA",
        encuestado
    })
}

const postEncuesta = async (req, res ) => {
    const { nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body

    const encuestado = new Encuestado ({nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado})
    await encuestado.save()

    res.json({
        msg: "POST API | ENCUESTA",
        encuestado
    })
}

const deleteEncuesta = async (req, res) => {
    const { documentoEncuestado} = req.query
    const encuestado = await Encuestado.findOneAndDelete({documentoEncuestado: documentoEncuestado})

    res.json({
        msg: "DELETE API | ENCUESTA",
        encuestado
    })
}

const putEncuesta = async (req, res) => {
    const { newdocumentoEncuestado, nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuestado = await Encuestado.findOneAndUpdate({documentoEncuestado: documentoEncuestado}, { nombreEncuesta: nombreEncuesta, documentoEncuestado: newdocumentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})

    res.json({
        msg: "PUT API | ENCUESTA",
        encuestado
    })
}

const patchEncuesta = async (req, res) => {
    const {  nombreEncuesta, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    const encuestado = await Encuestado.findOneAndUpdate({nombreEncuesta: nombreEncuesta, documentoEncuestado: documentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})

    res.json({
        msg: "PUT API | ENCUESTA",
        encuestado
    })
    {}
}

module.exports = {
    getEncuesta,
    postEncuesta,
    deleteEncuesta,
    putEncuesta,
    patchEncuesta
}

// http://localhost:3000/api/encuesta?nombreEncuesta=Encuesta de satisfacción&documentoEncuestado=1020110486&edad=18&genero=Masculino&empleado=si