// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignIn from './Pages/Login/SignIn';
import RequierAuth from './Pages/RequierAuth';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequierAuth>
            <Appointment></Appointment>
          </RequierAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;