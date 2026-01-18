import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/home/components/Home';
import HotelsPage from './Pages/hotels/components/HotelsPage';
import Contact from './Pages/contact/Contact';
import OfferHotels from './Pages/offers/OfferHotels';
import Login from"./Pages/Auth/LoginPage"
import SignUp from './Pages/Auth/SignUpPage';
import Favourite from './Pages/favouriteHotels/FavouriteHotels';
import HotelDetails from './Pages/hotelDetails/HotelDetails';
import Book from './Pages/bookHotel/BookHotel';




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
