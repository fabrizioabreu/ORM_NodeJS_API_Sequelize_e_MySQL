const expres = require('express')
const bodyParser = require('body-parser')

const app = expres()

app.use(bodyParser.json())

const port = 3000

app.get('/teste', (req, res) => {
  res.status(200).send({ mensagem: 'Boas vindas a API' })
})

app.listen(port, () => console.log(`Servidor esta rodando na porta ${port}`))

module.exports = app
