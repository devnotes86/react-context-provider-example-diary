import { createContext, useReducer } from 'react';

export const DiaryContext = createContext({
    items: [],
    addNote: () => { },
    deleteNote: () => { }
});

function diaryReducer(state, action) {

    if (action.type === 'ADD_NOTE') {

        const updatedItems = [...state.items];
        updatedItems.push({
            id: action.payload.id,
            title: action.payload.title,
            note: action.payload.note,
            created_dt: action.payload.created_dt
        });

        localStorage.setItem('diary', JSON.stringify(updatedItems))

        return {
            ...state,
            items: updatedItems,
        };

    } else if (action.type === 'DELETE_NOTE') {

            const updatedItems = [...state.items];
            const itemsAfterDeletingElement = updatedItems.filter(x => x.id !== action.payload);
            localStorage.setItem('diary', JSON.stringify(itemsAfterDeletingElement))

            return {
                ...state,
                items: itemsAfterDeletingElement,
            };

        } else if (action.type === 'LIST_NOTES') {
    }

    return state;
}


function getInitialState() {
    const notes = localStorage.getItem('diary')
    return notes ? JSON.parse(notes) : []
}

export default function DiaryContextProvider({ children }) {

    const [diaryState, diaryDispatch] = useReducer(diaryReducer, { items: getInitialState() });

    function handleAddNote(noteObject) {
        diaryDispatch({
            type: 'ADD_NOTE',
            payload: noteObject
        });
    }

    function handleDeleteNote(id) {
        diaryDispatch({
            type: 'DELETE_NOTE',
            payload: id
        });
    }

    const contextValue = {
        items: diaryState.items,
        addNote: handleAddNote,
        deleteNote: handleDeleteNote
    }

    return <DiaryContext.Provider value={contextValue}>
        {children}
    </DiaryContext.Provider>

}