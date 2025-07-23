const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')

app.use(saudacao('guilherme'))

app.use('/opa', (req,res,next)=>{
    console.log('Antes...')
    next();
})

app.get('/opa',(req,res,next)=>{

    res.json([
        {id: 7, name:'ana', position:1},
        {id: 34, name:'Bia', position:2},
        {id: 73, name:'Carlos', position:3},
    ])
    // res.json({
    //     name:'ipad 32gb',
    //     price:1899.00,
    //     discount:0.12
    // })
    // res.send("/opa", "estou bem");

    next()
})

app.use('/opa',(req,res)=>{
    console.log('Será que serei chamado')
})

app.listen(3001, ()=>{ 
})

