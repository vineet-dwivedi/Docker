import express from "express";
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json("Welcome to docker!!")
});

app.get("/api/health",(req,res)=>{
    res.status(200).json("New image created")
});

app.get("/api/data",(req,res)=>{
    const data = {
        id: 1,
        name: "Sample",
        description: "Sample data for docker"
    }
    res.status(200).json(data);
})


export default app;