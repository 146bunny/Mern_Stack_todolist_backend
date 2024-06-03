const {Router}=require("express")
const {getTodo}=require('../controller/TodoController')
const {addTodo}=require('../controller/TodoController')
const {updateTodo}=require('../controller/TodoController')
const {deleteTodo}=require('../controller/TodoController')
const router=Router()



router.get('/',getTodo)
router.post('/add',addTodo)
router.post('/update',updateTodo)
router.post('/delete',deleteTodo)



module.exports=router;