import { useState, useEffect } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import Header from "./components/Header";
import Footer from "./components/Footer";
import noteAPI from "./services/note.service";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const data = (await noteAPI.getAll()).data.notes;
      setNotes(data);
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

  const deleteAll = async () => {
    try {
      await noteAPI.deleteAll();
    console.log("deletedALL");
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
      {notes.map((note, i) => (
        <Note
          key={i}
          id={note._id}
          title={note.title}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}

      <Footer/>
    </div>
  );
};

export default App;
