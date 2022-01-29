import User from "./user.js";

class UserController {
    //working
    async create(req, res) {
        try {
            const{name, email, password} = req.body
            const user = await  User.create({name, email, password})
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    //working
    async getOne(req, res) {
        try {
            const{id} = req.params  
            if (!id) {
                res.status(400).json({message:'id не вказаний'})
            }   
            const user = await User.findById(id)
            return res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
  
}

export default new UserController();