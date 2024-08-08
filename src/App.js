import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoginPageNew from './pages/LoginPageNew'
import RegisterPageNew from './pages/RegisterPageNew';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast'
import SummaryAiTools from './pages/SummaryAiTools';

function App() {
  return (
    <div >

        <Navbar></Navbar>
        <Toaster />
        <Routes>
            <Route path='/' element ={<Home></Home>}></Route>
            <Route path ='/login' element={<LoginPageNew></LoginPageNew>}></Route>
            <Route path ='/register' element={<RegisterPageNew></RegisterPageNew>}></Route>
            <Route path ='/summary' element={<SummaryAiTools></SummaryAiTools>}></Route>
        </Routes>
    </div>
  );
}

export default App;
