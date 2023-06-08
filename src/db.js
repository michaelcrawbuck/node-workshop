import fs from "node:fs/promises";
const DB_PATH = new URL("../db.json", import.meta.url).pathname;

export const insertDB = async (note) => {
  try {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;
  } catch (err) {
    return (err);
  }
};

export const getDB = async () => {
  try {
    const db = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(db);
  } catch (err) {
    return (err);
  }
};

export const saveDB = async (db) => {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
  } catch (err) {
    return (err);
  }
};
