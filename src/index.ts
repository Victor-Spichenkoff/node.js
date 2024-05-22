import express, {Request, Response, urlencoded} from 'express'
const cors = require('cors')
import mustacheExpress from 'mustache-express'
import dotenv from 'dotenv'
import path from 'path'
import router from './config/routes'
import bodyParser from 'body-parser'
import { mongoConnect } from './database/mongo'
import { getAllMongo } from './controllers/mongo.controller'
const app = express() 

//configura as variaveis de ambiente
dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.set('mustache', mustacheExpress())
// app.set('view engine', 'mustache')
// app.set('views', path.join(__dirname, 'views'))


//Mongo:
mongoConnect()

getAllMongo()

app.use(urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))


app.use(router)


const porta = process.env.PORT
app.listen(porta, () => console.log(`Rodando na porta ${porta}`))

