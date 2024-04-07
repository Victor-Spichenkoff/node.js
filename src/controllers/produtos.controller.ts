import { Request, Response } from "express"
import { Product } from "../models/ProductsModel"

export const sendProducts = (req: Request, res: Response) => {
    const dados = Product.getAll()

    res.send(dados)
}