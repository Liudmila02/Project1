import Router from 'express'
import UserController from './UserController.js'
import CardController from './CardController.js'

const router = new Router()
router.get('/', function(req,res) {
    res.sendfile('./view/main_page.html')
})
router.post('/users', UserController.create)
router.get('/users/:id', UserController.getOne)
router.post('/cards', CardController.create)
router.get('/cards', CardController.getAll)
router.get('/cards/:id', CardController.getOne)
router.put('/cards/:id', CardController.update)
router.delete('/cards/:id', CardController.delete)

export default router;