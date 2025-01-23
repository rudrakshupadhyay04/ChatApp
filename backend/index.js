import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './utils/db.js';

dotenv.config();
const app = express();


app.get('/', (req,res) => {
    return res.status(200).json({
        message: "I am from backend",
        success: true
    })
})

//common middlewares
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    Credentials:true
};
app.use(cors(corsOptions));


const port = process.env.PORT ;
app.listen(port, () => {
    connectDb();
    console.log(`server is running at port ${port}`);
});
