import { useState, useEffect } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import noteAPI from "./services/note.service";
import Note from "./components/Note";
import {CircularProgress } from '@mui/material';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const getNotes = async () => {
    try {
      const data = (await noteAPI.getAll()).data.notes;
      setNotes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      await noteAPI.delete(id);
      console.log("deleted");
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const addNote = async (data) => {
    try {
      await noteAPI.create(data);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <Header />
      <InputArea addNote={addNote} />
      {loading
        ? <div className="spiner">< CircularProgress /></div>
        : notes.map((note, i) => (
            <Note
              key={i}
              id={note._id}
              title={note.title}
              text={note.text}
              deleteNote={deleteNote}
            />
          ))}
      <Footer />
    </div>
  );
};

export default App;

