export function getAllNotes(req, res) {
  res.status(200).send("Here are your notes");
}

export function createNote(req, res) {
  res.status(201).json({ message: "Note created" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: `Note ${req.params.id} updated` });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: `Note ${req.params.id} deleted` });
}