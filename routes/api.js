const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions')

router.get('/notes', noteActions.getAllNotes) // pobieranie notatek
router.get('/notes/:id', noteActions.getNote) // pobieranie notatki
router.post('/notes', noteActions.saveNote) // zapisywanie notatki
router.put('/notes/:id', noteActions.updateNote) // edytowanie notatki
router.delete('/notes/:id', noteActions.deleteNote) // usuwanie

module.exports = router;