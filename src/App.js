import './App.css';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignIn from './components/Auth/Signin';
import SignUp from './components/Auth/Signup';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FoodCards from './components/Food Cards/FoodCards';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/available-foods' element={< FoodCards />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/signin' element={< SignIn />}></Route>
        <Route exact path='/signup' element={< SignUp />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
