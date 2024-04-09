import { PrismaClient } from '@prisma/client'

//pega o global
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }


//se tiver o global o usa, caso ainda não, cria um novo
const prisma =
  globalForPrisma.prisma || new PrismaClient()

  
// não precisa disso em produção
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma