import Note from './Note.jsx';
import {useContext} from "react";
import {DiaryContext} from "../store/store.jsx";
export default function DiaryNotesList(){

    const {items, deleteNote} = useContext(DiaryContext);

    return (
        <>
        <h1>Diary notes list:</h1>
        <ul>
            {items.map((note) => (
                <Note key={note.id}
                      noteDeleteFn={() => deleteNote(note.id)}
                      note={note} >
                </Note> ))}
        </ul>
        </>
    );
}