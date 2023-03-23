const todo=require("../modals/todoModel")

const todoAdd=async(req,res)=>{
    try {
        const _todo =await todo.findOne({name:req.body.name})
        if(_todo){
            return res.status(400).json({
                success:false,
                message:"Bu isimde kayıt mevcut"
            })
        }
        const todoAdd=new todo(req.body)
        await todoAdd.save()
        .then(()=>{
            return res.status(201).json(todoAdd)
            })
            .catch((err)=>{
                return res.status(400).json({
                    success:false,
                    message:"kayıt oluşturulurken hata çıktı: "+ err
                })
            })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"kayıt oluşturulamadı !" +error
        })
    }


   
}

const todoGetAll=async (req,res)=>{
    try {
        const {page}=req.query
        const limit=4
        const skip=Number(page-1)*limit
        const todoGetAll=await todo.find({}).limit(limit).skip(skip)
        return res.status(200).json({
        success:true,
        data:todoGetAll
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Kayıt getirelemedi:"+error
        })
    }

}
const todoUpdate=async(req,res)=>{
    const{id}=req.params
try {
    const todoUpdate=await todo.findByIdAndUpdate(id,req.body)
    if(todoUpdate){
        return res.status(200).json({
            succes:true,
            message:"güncelleme başarılı"
        })
    }
    else return res.status(400).json({
        succes:"false",
        message:"kayıt güncellenemedi !"

    })
    
    
} catch (error) {
    return res.status(500).json({
        success:false,
        message:"kayıt güncellemedi ! : "+error

    })
}
}

const todoDelete=async(req,res)=>{
    const {id}=req.params
try {
const todoDelete=await todo.findByIdAndDelete(id)
if (todoDelete) {
    return res.status(200).json({
        succes:true,
        message:"kayıtı başarılıyla silindi"
    })
}
else return res.status(400).json({
    succes:false,
    message:"kayıt silinemedi"
})
    
} catch (error) {
     return res.status(500).json({
        succes:false,
        message:"delete işlemi başarısız: "+error
    })
}

}
const todoGet=async (req,res)=>{
    const {id}=req.params
    const todoGet= await todo.findById(id)
    if(todoGet){
        return res.status(200).json({
            succes:true,
            data:todoGet
        })
    }
    else{
        return res.status({
            succes:false,
            message:"kayıt bulunamadı !"
        })
    }

}
module.exports={
    
    todoAdd,
    todoGetAll,
    todoUpdate,
    todoDelete,
    todoGet

    
}