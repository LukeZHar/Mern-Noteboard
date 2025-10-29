import express from 'express';

const router = express.Router();

// Endpoints
// Get all notes
router.get("/", getAllNotes);

// Create a new note
router.post("/", createNote);

// Update a note
router.put("/:id", updateNote);

// Delete a note
router.delete("/:id", deleteNote);

export default router;