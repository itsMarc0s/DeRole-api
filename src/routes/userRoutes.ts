import express from 'express'

import CreateUserController from '../controllers/user/createUserController';
import DeleteUserController from '../controllers/user/deleteUserController';
import FindUserController from '../controllers/user/findUserController';
import UpdateUserController from '../controllers/user/updateUserController';

const router = express.Router();

router.post('/', async (req, res)=>{
    const controller = new CreateUserController()
    return await controller.execute(req, res)
})

router.get('/:userId', async (req, res)=>{
    const controller = new FindUserController()
    return await controller.execute(req, res)
})

router.put('/:userId', async (req, res)=>{
    const controller = new UpdateUserController()
    return await controller.execute(req, res)
})

router.delete('/:userId', async (req, res)=>{
    const controller = new DeleteUserController()
    return await controller.execute(req, res)
})

export default router