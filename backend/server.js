import express from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'
import connectMongoDB from './db/connectMongoDB.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/auth",authRouter)

app.listen(PORT, ()=> {
    console.log("Server is running on port 8000");
    connectMongoDB();
})