const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        
    },
    message: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const constactUs = mongoose.model("constactUs", ContactUsSchema);

module.exports = constactUs;