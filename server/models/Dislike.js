const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dislikeSchema = mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sellerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true })


const Dislike = mongoose.model('Dislike', dislikeSchema);

module.exports = { Dislike }