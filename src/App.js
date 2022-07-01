import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import CompleteTask from './Components/Pages/Completed Task/CompleteTask';
import Calendar from './Components/Pages/Calender/Calendar';
import Home from './Components/Pages/Home';
import Todo from './Components/Pages/ToDo/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/toDo' element={<Todo></Todo>}></Route>
        <Route path='/completeTask' element={<CompleteTask></CompleteTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
