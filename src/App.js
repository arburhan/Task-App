import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ToDo from './Components/Pages/ToDo';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/toDo' element={<ToDo></ToDo>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>

      </Routes>

    </>
  );
}

export default App;
