const express=require("express")
const app=express()
require("dotenv").config();
require("./src/confing/databaseConnection")
const port=process.env.PORT || 5001
const todoRouter=require("./src/router/todoRouter")

app.use(express.json())
app.use("/api",todoRouter)



app.get("/",(req,res)=>{
    res.send("hoşgeldiniz");
})

app.listen(port,()=>{
  console.log(`Server ${port} portundan başlatıldı...`);
})