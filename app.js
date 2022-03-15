// Conecta o express e pegando o model do arquivo personagens
const express = require("express")
const cors = require('cors')
const app = express();
const personagens = require('./models/personagens');
app.use(cors());
app.use(express.json())


// Fazer co mque o express receba em json

// Buscar dados
app.get('/listar', async(req, res)=> {
    // função para listar do banco
   const users =  await personagens.findAll();
    console.log("All users:", JSON.stringify(users, null, 2))
    return res.json(users)

})

// ADD Dados

app.post('/adicionar', async(req, res)=> {
   // console.log(req.body)
// Função para criar 
await personagens.create(req.body).then(()=>{

    return res.json({
        erro:false,
        mensagem: "Usuario cadastrado com sucesso"
    })
}).catch((erro)=>{
    return res.status(400).json({
        erro:true,
        mensagem:"Erro: Usuario não cadastrado " + erro
    })

})
  
})

app.listen(3000,function(){
    console.log("servidor rodando")
})


