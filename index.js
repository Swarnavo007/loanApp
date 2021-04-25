const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const mongoURI="mongodb+srv://projectA:projectA@cluster0.pqujx.mongodb.net/backend";
const routes=require('./routes/userRoutes');
const cors=require('cors');

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('MongoDB connected');
})
.catch(err=>{
    console.log(err);
})

app.use(cors());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})
app.use(bodyParser.json());

app.use('/user',routes);
app.use("/uploads", express.static("uploads"));

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{

    console.log(`Server listening at ${PORT}`);
});