import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import ToDo from './Components/Pages/ToDo';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import CompleteTask from './Components/Pages/CompleteTask';
import Calendar from './Components/Pages/Calender/Calendar';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/toDo' element={<ToDo></ToDo>}></Route>
        <Route path='/completeTask' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>

    </>
  );
}

export default App;
