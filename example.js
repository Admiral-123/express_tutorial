import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.json("welcome here");
})

app.get('/calculator', (req,res)=>{
    
    res.json('calculator coming soon');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);  
    
})