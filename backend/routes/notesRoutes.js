import express from 'express';

const router = express.Router();

// Endpoints
// Get all notes
router.get("/", (req, res) => {
  res.status(200).send("Here are your notes");
});

// Create a new note
router.post("/", (req, res) => {
  res.status(201).json({ message: "Note created" });
});

// Update a note
router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Note ${req.params.id} updated` });
});

// Delete a note
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Note ${req.params.id} deleted` });
});

export default router;