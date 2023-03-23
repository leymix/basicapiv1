const express=require("express");
const todoController=require("../controllers/todoController")
const router=express.Router();
router.post("/todo",todoController.todoAdd)
router.get("/todo",todoController.todoGetAll);
router.put("/todo/:id",todoController.todoUpdate)
router.delete("/todo/:id",todoController.todoDelete)
router.get("/todo/:id",todoController.todoGet)
module.exports=router
