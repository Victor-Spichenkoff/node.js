//Criar:
//type (estrutura)
//schema (usado no mongoose (infos de default, unique, obrigatorio...))
//model

import { Schema, model, connection, Model } from "mongoose";

type UserType = {
    // id é opcional colocar aqui
    nome: string
    idade: number
    interesses: string[]
}

const schema = new Schema<UserType>({
    nome: { type: String, required: true},
    idade: Number,
    interesses: [String]
    // objeto: {
    //     campo1: String
    //     campo2: Number
    // }
})
// só tipo == aceita eles (eles ou menos, mas não mais)





// Model
const modelName: string = "User"


export default (connection && connection.models[modelName]) 
? connection.models[modelName] /*só retorna*/
: model<UserType>(modelName, schema) //cria uma nova