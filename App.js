import { useState } from "react";
import ToDoList from "./component/TodoList";
import TodoForm from "./component/todoform";
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import  {BrowserRouter, Routes,Route} from 'react-router-dom' 
import Home from "./component/Home/Home";
import NavBar from "./component/Navbar/Navbar";
import NoteForm from "./component/NoteForm/Noteform";
import NoteList from "./component/NoteList/Notelist";
function App() {
  const [notes ,setNotes]=useState([]);
  const addNote=(text)=>{
   setNotes([...notes,{title:text,createdOn:new Date()}])
   }
const remove=(index)=>{
  notes.splice(index,1);
  
  setNotes([...notes]);
console.log(notes)
}
  return (
  <>
    <div>

    <Provider store={store}>
  <BrowserRouter>
    <NavBar/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/todo" element={<>
    <h1>To Dos</h1>
       <TodoForm  />
      <ToDoList />
   </>}/>
   <Route path="/notes" element={<>
    <h1>Notes</h1>
   <NoteForm onCreateNote={addNote}/>
   <NoteList notes={notes} onRemove={remove} />
   </>}/>
      </Routes>
    </BrowserRouter>
      </Provider>
    </div>
</>
    );
}

export default App;
