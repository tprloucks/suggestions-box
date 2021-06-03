const mongoose = require("mongoose")

const SuggestionSchema = new mongoose.Schema({
    title:{
        type: String
    },

    author:{
        type: String
    },

    suggestion:{
        type: String
    },

    likes:{
        type: Number
    },

    anonymous:{
        type: Boolean
    },

    timeCreated:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("suggestions", SuggestionSchema)