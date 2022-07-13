import express from 'express'
const router = express.Router();
import userRoutes from './userRoutes'

router.use('/user', userRoutes)

export default router