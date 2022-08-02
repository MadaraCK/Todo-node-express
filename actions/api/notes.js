const Note = require('../../db/models/note')

module.exports = {
    saveNote(req, res) {
        const newNote = new Note({
            title: 'zrobic cos',
            body: 'test notatksssi'
        })
        newNote.save().then(() => {
            console.log('notatka została zapisana')
        });
        res.send('strona głowna')
    }
}