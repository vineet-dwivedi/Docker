import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.status(200).json("Welcome To Docker");
})

app.get("/api/health",(req,res)=>{
    res.status(200).json("Server is working totally fine!!");
})

app.get("/api/data",(req,res)=>{
    const data = [{
        id : 1,
        name : 'Vyuk',
        age : '22',
}]
    res.status(200).json(data);
})

export default app;