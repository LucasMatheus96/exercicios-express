const express = require('express')
const app = express()
const saudacao = require('./saudacaoMid')
const bodyParser = require('body-parser')
const usuarioApi = require('./api/usuario')
const produto = require('./api/produto')

produto(app,'com paremetro')
app.post('/usuario', usuarioApi.salvar)
app.get('/usuario',usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(saudacao('guilherme'))

app.use('/opa', (req,res,next)=>{
    console.log('Antes...')
    next();
})

app.get('/clientes/relatorio',(req,res)=>{
    res.send(`Cliente relatório: completo${req.query.completo} ano = ${req.query.ano}`)
})


app.get('/clientes/:id',(req,res)=>{
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo', (req,res)=> {
   res.send(req.body)
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

