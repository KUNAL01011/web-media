import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { followUnfollowUser, getSuggestedUser, getUserProfile, updateUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get("/profile/:username",protectRoute,getUserProfile);
userRouter.get('/suggested',protectRoute,getSuggestedUser)
userRouter.post('/follow/:id',protectRoute,followUnfollowUser);
userRouter.post('/update',protectRoute,updateUser);


export default userRouter;