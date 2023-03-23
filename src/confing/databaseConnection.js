const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Veritabanına Başarılıyla bağlandı");
})
.catch((err)=>{
    console.log("VEritabanına Bağlanamadı:"+err);
})