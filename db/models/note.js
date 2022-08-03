const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
    title:{
        type: String
    },
    body:{
        type: String
    }
});

module.exports = Note;