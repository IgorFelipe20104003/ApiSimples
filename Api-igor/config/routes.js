const express = require('express')
const routes = express.Router()

let db = [
    { '1': { Nome: 'Cliente 1', Idade: '20' } }
]

//buscando dados 
routes.get('/', (req, res) => {
    return res.json(db)
})

//inserindo dados
// devemos passar no corpo do json 
/*
[
    {
        "2": {
            "Nome": "Bruno",
            "Idade": "18"
        }
    }
]*/
routes.post('/add', (req, res) => {
    const body = req.body
    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
            return item
    })
    db = newDB
    return res.send(newDB)
})

routes.put('/:id', (req, res) => {
    const id = req.params.id
    db.filter(item => {
        if (!item[id])
            return item
    })
    db.put(body)
    return res.json(body)
})

module.exports = routes