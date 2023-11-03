import { Request, Response } from "express";
import { query } from "../database/dbConnect";
import { v4 as uuidv4 } from "uuid";


const notes: Notebook[] = [];
class Notebook {
  id: string;
  title: string;
  content: string;
  created_at: Date;

  constructor(title: string, content: string) {
    this.id = uuidv4;
    this.title = title;
    this.content = content;
    this.created_at = new Date();
  }
}

// creating a new note
/*export const createNote = async (req: Request, res: Response) => {
  try {
    const { error } = ('there is an error')

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { title, content } = req.body;

    const newNote: string = {
      id: uuidv4(),
      title,
      content,
      createdAt: new Date(),
    };

    const insertQuery = `INSERT INTO notes (_id,title, content, createdAt) VALUES ('${
      newNote.id
    }','${newNote.title}', '${
      newNote.content
    }', '${newNote.createdAt.toISOString()}')`;
    await query(insertQuery);

    res.status(201).json(newNote);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

//logic for getting all notes
export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const queryString = "SELECT * FROM notes";

    const result = await query(queryString);

    const notes: Note[] = result.recordset;

    res.json(notes);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

// getting single note
export const getSingleNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    

    const queryString = `SELECT * FROM notes WHERE _id = '${id}'`;
    // const queryString = `SELECT * FROM note `;

    const result = await query(queryString);

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    const note: Note = result.recordset[0];

    res.status(200).json(note);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};

// updating a note
export const updateNote = async (req: Request, res: Response) => {
  try {
    const { error } = updateNoteSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { id, title, content }: Note = req.body;

    const NewcreatedAt = new Date();

    const updateQuery = `
      UPDATE note
      SET title = '${title}', content = '${content}', createdAt = '${NewcreatedAt.toISOString()}'
      WHERE _id = '${id}'
    `;

    await query(updateQuery);

    res.json({ message: "Note updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error updating note: " + (error as Error).message });
  }
};

//  deleting a note
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ error: "ID is required in the request body." });
    }

    const existingNote = await query(`SELECT * FROM note WHERE _id = '${id}'`);

    if (!existingNote.recordset || existingNote.recordset.length === 0) {
      return res.status(404).json({ error: "Note not found." });
    }

    await query(`DELETE FROM note WHERE _id = '${id}'`);

    return res.status(200).json({ message: "Note deleted successfully." });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
};
*/