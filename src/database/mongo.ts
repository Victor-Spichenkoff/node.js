import { connect } from "mongoose"
import dotenv from 'dotenv'

dotenv.config()


export const mongoConnect = async () => {
    try {
        await connect(process.env.MONGO_URL as string)
        console.log("Mongo DB Conectado")
    } catch (e) {
        console.log("Erro na conexão mongo db:")
        console.log(e)
    }
}