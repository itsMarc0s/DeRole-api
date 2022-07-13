import { Request, Response } from "express";
import DeleteUserService from "../../services/user/deleteUserService.ts";

export default class DeleteUserController{

    public async execute(req: Request, res: Response){
        try{
            const userDeleted = await DeleteUserService.deleteById(req.params.userId)
            return res.status(200).json(userDeleted)
        }catch(e){
            return e instanceof Error ? 
            res.status(400).json(e.message) :
            res.status(500)
        }
    }
}