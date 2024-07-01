import express from 'express';
import { signup,login,logout, getMe } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const authRouter = express.Router();

authRouter.get('/me',protectRoute,getMe);
authRouter.post('/signup',signup);
authRouter.post('/login',login);
authRouter.post('/logout',logout);

export default authRouter