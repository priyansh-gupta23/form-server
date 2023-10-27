const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8080;

// app.use(cors());
app.use(cors({credentials:true, origin: true}));

app.get("/", (req,res)=>{
    res.json({message:"Hello World!!"})
})

app.listen(8080,()=>{
    console.log(`Server started at PORT ${PORT}. \nTo access simply visit : http://localhost:${PORT}/`);
})