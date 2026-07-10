import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.status(200).json({message: 'Hello from the backend!'});
});

app.get('/api/data', (req, res) => {
    const data = [{
        id:1,
        name: 'Coffee',
    },{
        id:2,
        name: 'Tea',
    }]
    res.status(200).json(data);
});

export default app;