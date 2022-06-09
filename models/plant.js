const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    daysToHarvest: {
        type: Number
    },
    sewByEarliest: {
        type: String,
        enum: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        toUpperCase: true
    },
    sewByLatest: {
        type: String,
        enum: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        toUpperCase: true
    }
})

module.exports = mongoose.model('Plant', PlantSchema)