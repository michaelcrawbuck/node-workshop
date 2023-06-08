import { insertDB, saveDB, getDB } from "./db.js";

export const newNote = async (content, tags) => {
  try {
    const note = {
      tags,
      id: Date.now(),
      content
    }
    await insertDB(note);
    return note;
  } catch (err) {
    return (err);
  }
};

export const getAllNotes = async () => {
  try {
    const { notes } = await getDB();
    return notes;
  } catch (err) {
    return (err);
  }
};

export const findNotes = async (filter) => {
  try {
    const { notes } = await getDB();
    return notes.filter((note) => note.content.toLowerCase().includes(filter.toLowerCase()));
  } catch (err) {
    return (err);
  }
};

export const removeNote = async (id) => {
  try {
    const { notes } = await getDB();
    const match = notes.find((note) => note.id === id);

    if (match) {
      const newNotes = notes.filter((note) => note.id !== id);
      await saveDB({ notes: newNotes });
      return (id);
    }
  } catch (err) {
    return (err);
  }
};


export const removeAllNotes = async () => {
  try {
    return (await saveDB({notes: []}));
  } catch (err) {
    return (err);
  }
}
