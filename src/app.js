import  express  from "express";
import  {v4}     from"uuid"
const app = express()
app.use(express.json())

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/tasks', (req, res, next)=>{
    res.json([]);
})

app.post('/tasks',(req,res) => {
    const{tittle,description}= req.body
    res.json({
        tittle,
        description,
        id:v4()
    });
})

export default app;