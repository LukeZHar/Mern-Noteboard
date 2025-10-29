import mongoose from "mongoose";

// Define the Note schema
const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Create and export the Note model
const Note = mongoose.model("Note", NoteSchema);
export default Note;
