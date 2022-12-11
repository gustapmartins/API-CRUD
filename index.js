import express from 'express'
import cors from 'cors'
import routes from './src/Routes/index.js'

const app = express()
app.use(express.json())
app.use(cors())

routes(app)

app.listen(8080, () => console.log('Rodando na Porta 8080'))