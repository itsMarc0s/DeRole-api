import { Request, Response } from "express";
import CreateUserService from '../../services/user/createUserService'

export type CreateUserRequestBody = {
    id: string;
    name: string;
    username: string;
    email: string;
    password1: string;
    password2: string;
}

export default class CreateUserController{

    public async execute(req: Request, res: Response){
        try{
            const requestData : CreateUserRequestBody = req.body
            const userCreated = await CreateUserService.create(requestData)
            return res.status(200).json(userCreated)
        }catch(e){
            return e instanceof Error ? 
            res.status(400).json(e.message) :
            res.status(500)
        }
    }
}