
import './App.css';
import Navbar from '../src/components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from '../src/components/Footer/Footer'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Profile from './Pages/SignUp/Profile';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Profile' element={<Profile />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
