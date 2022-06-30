import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ToDo from './Components/Pages/ToDo';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/toDo' element={<ToDo></ToDo>}></Route>

      </Routes>

    </>
  );
}

export default App;
