var mongoose = require('mongoose');

var bikeSchema = mongoose.Schema({
    PlateNumber: {
        type: String,
        unique: true,
        required: true
    },
    Model: String,
    KMsTravelled: {
        type: Number,
        required: true
    },
    Rating: {
        type: Number,
        default: 0
    },
    isAvaialble: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Bike", bikeSchema);