import Card from "./card.js";

class CardController {
    //working
    async create(req, res) {
        try {
            const{english_word, ukrainian_word} = req.body
            const card = await  Card.create({english_word, ukrainian_word})
            res.status(200).json(card)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    //working
    async update(req, res) {
        try {
            const card = req.body
            const {id} = req.params
            if (!id){
                res.status(400).json({message:'id не вказаний'})
            }
            const updatedCard = await  Card.findByIdAndUpdate(id, card, {new: true})
            return res.json(updatedCard)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    //working
    async delete(req, res) {
        try {
            const{id} = req.params
            const card = await  Card.findByIdAndDelete(id)
            res.status(200).json(card)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    //working
    async getAll(req, res) {
        try {
            const cards = await Card.find()
            res.status(200).json(cards)
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
            const card = await Card.findById(id)
            return res.status(200).json(card)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new CardController();