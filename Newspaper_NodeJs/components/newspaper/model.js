const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const newspaper_schema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    category_id: { type: Schema.Types.ObjectId, ref: 'category' },
    date: { type: Date },
    time: { type: String },
    contents: { type: String },
    image: { type: String },
});

module.exports = mongoose.model('newspaper', newspaper_schema);