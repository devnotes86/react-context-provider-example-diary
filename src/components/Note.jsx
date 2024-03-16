import {useContext, useState} from 'react';

export default function Note({note, noteDeleteFn, ...props}) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClickOpenToggle() {
        const newStateOpen = !isOpen;
        setIsOpen(newStateOpen);
    }

    return (
            <li {...props} >
                <h2 onClick={handleClickOpenToggle}>{note.title}</h2>
                {isOpen ? <p>{note.note}</p> : ""} <br /> <span onClick={() => noteDeleteFn(note.id)} className="deleteLink">delete</span> | timestamp: {note.created_dt}
            </li>
    );
}