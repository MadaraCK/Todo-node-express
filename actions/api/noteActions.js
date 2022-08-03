const Note = require('../../db/models/note')

class NoteActions {

   async saveNote(req, res) {
        const title = req.body.title;
        const body = req.body.body;

        res.send('strona głowna tytuł:' + title + 'treść' + body);

    }

    getAllNotes(req, res) {
        res.send('API działą')
    }

    getNote(req, res) {
        res.send('info o ')
    }

    updateNote(req, res) {
        res.send('Notatka zaktualizowana')
    }

    deleteNote(req, res) {
        const id = req.params.id;
        res.send('Notatka usunieta id:' + id)
    }
}

module.exports = new NoteActions()