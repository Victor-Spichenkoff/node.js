import { Request, Response, Router } from "express";
import { sendProducts } from "../controllers/produtos.controller";
import { createUserFromForm, getusers, testarDB, updateAge } from "../controllers/testeDB.controller";
import { addOrUpdate, delUser } from "../controllers/desafioDB.controller";


const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.render('index')
})


// *********************
//Testes Data Base
//****************** */
router.get('/testardb', testarDB)

router.get('/getUsers', getusers)

router.get('/produtos', sendProducts)

router.post('/createUser', createUserFromForm)

router.get('/updateuser', updateAge)

router.get('/addUpdate', addOrUpdate)

router.get('/delUser', delUser)
export default router