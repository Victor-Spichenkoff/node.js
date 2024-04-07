import { Request, Response } from "express"
import { sequelize } from "../instances/mysql"
import { User, UserInstance } from "../models/User"
import { Op, where } from "sequelize"


export const testarDB = async (req: Request, res: Response) => {
    try {
        await sequelize.authenticate()
        res.send('Funcionando')
    } catch(e) {
        res.send('Erro:' + e)
    }
}

export const getusers = async (req: Request, res: Response) => {
    const users = await User.findAll({
        attributes: ['nome', ['idade', 'anos'], 'id']
    })
    res.send(JSON.stringify(users))
}

export const createUserFromForm = async (req: Request, res: Response) => {
    //acessar pelo post de um form
    const user = { ...req.body }  
    
    

    // await User.create(user)
    res.send('FOI')
}

export const updateAge = async (req: Request, res: Response) => {
    // const user = await User.findOne({ where: { id: 2 } })
    // if(user) {
    //     user.idade = 12
    //     await user.save()
    // }
    const result = User.update({ idade: 17 }, {
        where: { id: 2 }
    })

    const newUSer =  await User.findOne({ where: { id: 2 } })
    res.send(newUSer)
}