import {useContext} from 'react';

import { DiaryContext } from "../store/store.jsx";
export default function NoteForm({note, toggleOpenFn}) {

    const { addNote, items } = useContext(DiaryContext);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('submitted');

        const formElement = document.getElementById("formNote");
        const formData = new FormData(formElement);
        const d = Object.fromEntries(formData.entries());
        console.log(d);

        const uniqueKey = Math.floor(100000000 + Math.random() * 900000000);
        addNote({
            id: uniqueKey.toString(),
            title: d.note_title,
            note: d.note_text,
            created_dt: Math.floor(Date.now() / 1000).toString()
        });

        console.log(items);
        formElement.reset();
        toggleOpenFn();
    }

    return (
            <fieldset>
                <legend>Fill in the form below to add new note</legend>
                <form onSubmit={handleSubmit} id="formNote">
                <p>
                    <input type="text" name="note_title"  /><br />
                    <label htmlFor="note_title">Title</label>
                </p>
                <p>
                    <textarea name="note_text"  cols="80" rows="20" ></textarea><br />
                    <label htmlFor="note_text">Note Text</label>
                </p>
                <p>
                    <button type="submit" onClick={(event) => handleSubmit(event)}>Add Note!</button>
                </p>
                </form>
            </fieldset>
    );
}