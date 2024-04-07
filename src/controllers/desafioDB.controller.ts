import { Request, Response } from "express"
import { User } from "../models/User"

export const addOrUpdate = async (req: Request, res: Response) => {
    const query = { ...req.query }
    if(query.id == 'null') {
        var user:any = { ...query, id: null }
    } else var user:any = { ...query, id: Number(query.id)  }
    
    console.log(user)
    try {
        if(user.id && user.id != 'null') {
            await User.update({ ...user }, {
                where: { id: user.id }
            })
            res.send('Update')
        }
    
        if((user.id == 'null' || !user.id) && user.nome) {
            await User.create({ ...user, id: null })
            res.send('Create')
        }
    
        // res.send('Done')
    } catch(e) {
        res.send('| Erro |')
    }
}

export const delUser = async (req: Request, res: Response) => {
    const query = { ...req.query }
    const affected = await User.destroy({
        where: { id: Number(query.id) }
    })

    if(affected) res.send('Apagado')
    else res.send('Não foi possível apagar')
}