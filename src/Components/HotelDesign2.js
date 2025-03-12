import React, { useState } from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../contextApi/ContextApi';
import toast, { Toaster } from 'react-hot-toast';
const HotelDesign2 = (props) => {
  const navigate=useNavigate()
  //for translation
   const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'en';
    //gloal variables of context Api
    const {FavouriteHotel,setFavouriteHotel,isLogged}=useMyContext()
    //if hotel is in favourite list to add to show in favourite page
    const [isfav,setisfav]=useState(false)

    function addtofavourite(hotel){
      if(isLogged){
        
       
          setFavouriteHotel([...FavouriteHotel,hotel])
        console.log(FavouriteHotel)
        
         
          toast("Added To Favourite Successfully", {
            duration: 2000,
            position: "bottom-right"
    
          });
          
      }
      else{
       navigate("/login")
      }
   }
  return (
    
    <>
       <div className={`relative rounded-xl  h-[65vh] py-2 w-full px-3 bg-white dark:bg-gray-700  shadow shadow-salat-900 ${currentLanguage=="ar"?"rtl":"ltr"}`}>
        <img loading="lazy" onClick={()=>{navigate("/hotel",{state:{hotel:{...props.hotel}}})}} src={props.hotel.image} alt="hotel-image" className='w-full h-1/3 xl:h-1/2  cursor-pointer'/>
        <MdOutlineFavoriteBorder onClick={()=>{addtofavourite(props.hotel)} }className={`hover:bg-gray-300  cursor-pointer absolute top-3   right-5 ${isfav?"bg-green-500":"bg-white"}  rounded-2xl p-1 text-3xl`}/>
        <h4 className={props.text?'font-bold text-white  text-2xl m-1 pl-2 ':'font-bold text-2xl m-1 pl-2 dark:text-white'}>{props.hotel.name}</h4>
        <h4 className={props.text?'m-1 text-white pl-2 dark:text-white':'m-1 text-slate-500 pl-2 dark:text-white'}>{t(props.hotel.location.country)} , {t(props.hotel.location.city)}</h4>
        <h4 className={props.text?'m-1 text-white pl-2 dark:text-white':'m-1 text-slate-500 pl-2 dark:text-white'}>{t(props.hotel.amenities[0])} {t(props.hotel.amenities[1])} {t(props.hotel.amenities[2])}</h4>
        <div className='mt-4 p-1 w-10 text-white text-center bg-blue-900 ml-3 rounded p-1 dark:text-white'>{props.hotel.rating}</div>      
    </div>
   
    </>
  )
}

export default HotelDesign2