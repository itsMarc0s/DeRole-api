import { Request, Response } from "express";
import UpdateUserService from "../../services/user/updateUserService";

export type UpdateUserRequestBody = {
    name?: string;
    username?: string;
    email?: string;
    profileImage?: string,
}

export default class UpdateUserController{

    public async execute(req: Request, res: Response){
        try{

            const updatedProps : UpdateUserRequestBody = {...req.body}

            const updatedUser = await UpdateUserService.update(req.params.userId, updatedProps)
            return res.status(200).json(updatedUser)
        }catch(e){
            return e instanceof Error ? 
            res.status(400).json(e.message) :
            res.status(500)
        }
    }
}