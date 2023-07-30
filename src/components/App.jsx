import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import CreateArea from "./CreateArea"
import Note from "./Note"

function App() {

    const [notes, setNote] = useState([])


    function addNewNote(newNote) {
        setNote(prev => {
            return [
                ...prev,
                newNote
            ];
        });
    }

    function deleteNote(id) {
        setNote(prev => prev.filter((eachNote, index) => index !== id))
    }

    return (<div>
        <Header />
        <CreateArea onAdd={addNewNote} />
        {notes.map((newNote, index) => <Note delete={deleteNote} key={index} id={index} title={newNote.title} content={newNote.content} />)}
        <Footer />
    </div>);
}

export default App;