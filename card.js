import mongoose from 'mongoose';

const Card = new mongoose.Schema({
    english_word: {type: String, required: true},
    ukrainian_word: {type: String, required: true},
})

export default mongoose.model('Card', Card)