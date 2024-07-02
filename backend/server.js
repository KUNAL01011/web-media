import express from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';
import {v2 as cloudinary} from 'cloudinary';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_SECRET
});

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
app.use('/api/posts',postRouter);

app.listen(PORT, ()=> {
    console.log("Server is running on port 8000");
    connectMongoDB();
})