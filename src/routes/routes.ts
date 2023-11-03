import { Router } from "express";
import { createNote, deleteNote,getAllNotes, getSingleNote, updateNote,} from "../controllers/notes";

const notebook_router = Router();


notebook_router.post("/", createNote);
notebook_router.get("/", getAllNotes);
notebook_router.get("/:id", getSingleNote);
notebook_router.put("/", updateNote);
notebook_router.delete("/:id", deleteNote);

export default notebook_router;
