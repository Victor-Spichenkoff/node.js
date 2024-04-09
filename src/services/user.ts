import { Prisma } from "@prisma/client"
import prisma from "../libs/prisma"

export const createUser = async (user: Prisma.UserCreateInput) => {
    try{
        const res = await prisma.user.create({ data: { ...user } })
        if(res.id) return true
    } catch(e) {
        if( e instanceof Prisma.PrismaClientKnownRequestError ) {
            if(e.code == "P2002") throw { status: 400, msg: 'E-mail já usado' }
        }
        throw { status: 500, msg: 'Não foi possível criar' }
    }
}