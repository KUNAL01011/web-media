import express from 'express';
import { deleteNotifications, getNotifications } from '../controllers/notification.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';
const notificationRouter = express.Router();

notificationRouter.get("/",protectRoute,getNotifications);
notificationRouter.delete('/',protectRoute,deleteNotifications);
// notificationRouter.delete('/:id',protectRoute,deleteNotification);
export default notificationRouter;