import {Request} from "express"
import {Response} from "express"

class ErrorController{
    errorHandler(err:Error, req:Request, res:Response, next:any){
        res.status(500).send(`Message : ${err}`)
    }
}

export const errorController=new ErrorController();