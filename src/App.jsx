import { useState } from 'react'
 import './App.css'
import DiaryNotesList from "./components/DiaryNotesList.jsx";
import NoteForm from "./components/NoteForm.jsx";
import DiaryContextProvider from "./store/store.jsx";

function App() {

  const [formOpen, setFormOpen] = useState(false);

  function toggleFormOpen(){
    setFormOpen((prev) => !prev);
  }

  return (
      <>
          <header>
          </header>
          <section>
              <DiaryContextProvider>
                        {!formOpen ? (<button onClick={toggleFormOpen}>Add New item</button>) : ""}

                        {formOpen ? (
                        <div  className="formDiv" >
                            <NoteForm toggleOpenFn={toggleFormOpen}></NoteForm>
                        </div>)
                            : ""}

                      <div >
                          <DiaryNotesList></DiaryNotesList>
                      </div>

              </DiaryContextProvider>
          </section>

          <footer></footer>
      </>
  )
}

export default App
