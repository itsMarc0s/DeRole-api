import { Request, Response } from "express";
import FindUserService from "../../services/user/findUserService.ts";

export default class FindUserController{

    public async execute(req: Request, res: Response){
        try{
            const userFound = await FindUserService.findById(req.params.userId)
            return res.status(200).json(userFound)
        }catch(e){
            return e instanceof Error ? 
            res.status(400).json(e.message) :
            res.status(500)
        }
    }
}