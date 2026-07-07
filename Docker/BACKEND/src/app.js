import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json("Welcome To Docker");
})

app.get("/api/health",(req,res)=>{
    res.status(200).json("Server is working totally fine!!");
})

app.get("/api/users",(req,res)=>{
    const data = [{
        id : 1,
        name : 'Vyuk',
        age : '22',
},{
        id : 2,
        name : 'John',
        age : '25',
},{
        id : 3,
        name : 'Doe',
        age : '30',
}

]
    res.status(200).json(data);
})

export default app;