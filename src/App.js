import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/components/Home';
import HotelsPage from './pages/hotels/components/HotelsPage';
import Contact from './pages/contact/Contact';
import OfferHotels from './pages/offers/OfferHotels';
import Login from"./pages/Auth/LoginPage"
import SignUp from './pages/Auth/SignUpPage';
import Favourite from './pages/favouriteHotels/FavouriteHotels';
import HotelDetails from './pages/hotelDetails/HotelDetails';
import Book from './pages/bookHotel/BookHotel';




function App() {
  return (
    <>
     
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='hotelDetails' element={<HotelDetails/>}/>
           <Route path='hotels' element={<HotelsPage/>}/>
           <Route path='bookhotel' element={<Book/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='offers' element={<OfferHotels/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='signUp' element={<SignUp/>}/> 
           <Route path='favourite' element={<Favourite/>}/>
        </Route>


       </Routes>
     
     </BrowserRouter>
    
  
    </>
  );
}

export default App;
