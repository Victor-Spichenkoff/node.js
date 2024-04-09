import { Request, Response } from "express";
import prisma from "../libs/prisma";
import { createUser } from "../services/user";

export const testePrisma = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()

    res.send(users)
}


export const createUserPrisma = async (req: Request, res: Response) => {
    const user = { ...req.body}
    console.log(user)
    
    if(!user.name || !user.email) return res.status(400).send('Dados faltando')

    try {
        await createUser(user)
        return res.sendStatus(203)
    } catch(e: any) { 
        res.status(e.status).send(e.msg)
    }
}