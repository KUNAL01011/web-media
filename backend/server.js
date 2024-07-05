import path from 'path';
import express from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from 'cloudinary';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import notificationRouter from './routes/notification.route.js';
dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET
});

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


app.use(express.json({
    limit:"5mb"
}));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
app.use('/api/posts',postRouter);
app.use('/api/notifications',notificationRouter)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}
app.listen(PORT, ()=> {
    console.log("Server is running on port 8000");
    connectMongoDB();
})