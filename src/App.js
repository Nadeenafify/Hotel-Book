import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import SingleHotel from './Pages/SingleHotel';
import BookHotel from './Pages/BookHotel';
import HotelsPage from './Pages/HotelsPage';
import Contact from './Pages/Contact';
import OfferHotels from './Pages/OfferHotels';
import Login from"./Pages/Login"
import SignUp from './Pages/SignUp';
import Favourite from './Pages/Favourite';



function App() {
  return (
    <>
     
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='hotel' element={<SingleHotel/>}/>
           <Route path='hotels' element={<HotelsPage/>}/>
           <Route path='bookhotel' element={<BookHotel/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='offers' element={<OfferHotels/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='sign up' element={<SignUp/>}/> 
           <Route path='favourite' element={<Favourite/>}/>
        </Route>


       </Routes>
     
     </BrowserRouter>
    
  
    </>
  );
}

export default App;
