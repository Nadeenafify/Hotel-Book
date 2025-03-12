import React from 'react'
import { useTranslation } from 'react-i18next';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import StarRatings from 'react-star-ratings'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMyContext } from '../contextApi/ContextApi';
import toast, { Toaster } from 'react-hot-toast';
const HotelDesign4 = (props) => {

    const { t, i18n } = useTranslation()
     const navigate=useNavigate()
     const {FavouriteHotel,setFavouriteHotel,isLogged}=useMyContext()
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
<div className={!props.islist?"flex flex-col mt-3 h-[60vh] ":"flex flex-col md:flex-row mt-3 px-3  md:h-[26vh] lg:h-[30vh] "} key={props.ele.id}>
<div className={props.islist?"relative  w-full xl:w-1/2  md:h-full": "w-full relative  "}>
 <img loading="lazy" onClick={()=>{navigate("/hotel",{state:{hotel:{...props.ele}}})}} src={props.ele.image} className={!props.islist?"cursor-pointer w-full h-[25vh] rounded":"cursor-pointer w-full h-full rounded"} alt="hotel-image"/>
   <MdOutlineFavoriteBorder onClick={()=>{addtofavourite(props.ele)} }className={`hover:bg-gray-300  cursor-pointer absolute top-3 right-3 ${isfav?"bg-green-500":"bg-white"}  rounded-2xl p-1 text-3xl`}/>
 </div>
 <div className='px-5 shadow shadow-gray-200 h-full relative'>
   <h4 className='text-xl font-bold mt-3 dark:text-white'>{props.ele.name}</h4>
   <h4 className='text-sm dark:text-white'>{t(props.ele.location.country)} , {t(props.ele.location.city)}</h4>
   
    <StarRatings
           rating={props.ele.rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="0.9em"
            starSpacing="0.2em"
          /> 
    
 
   
    <p className='text-xs w-full mt-3 dark:text-white  '>
     {t("Safety and security are prioritized through 24/7 staff and surveillance.Guests can enjoy additional services such as on-site dining, laundry,and concierge assistance.")}
    </p>

    <div className={`absolute ${props.currentLanguage=="ar"?"left-5":"right-5"} top-8`}>
    <h4 className='dark:text-white mt-3 bold text-white bg-red-500 text-center w-[10vw] md:w-[5vw] rounded-md '>${props.ele.price_per_night}</h4>
    </div>
    <h4 className='dark:text-white mt-2 mb-3 px-1 w-[8vw] md:w-[4vw] bg-blue-700 text-white rounded-md  text-center'>{props.ele.rating}</h4>
 </div>
</div>
    </>
  )
}

export default HotelDesign4