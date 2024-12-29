import React from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../contextApi/ContextApi';
import { useState } from 'react';

const HotelDesign3 = (props) => {
  const navigate=useNavigate()
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const {FavouriteHotel,setFavouriteHotel,isLogged}=useMyContext()
  const [isfav,setisfav]=useState(false)
 
  function addtofavourite(hotel){
    if(isLogged){
      
      setisfav(!isfav);

     if(!isfav){
        const foundedHotel=FavouriteHotel.find((ele)=>{
          return hotel.id===ele.id
         })
        if(!foundedHotel)
        setFavouriteHotel([...FavouriteHotel,hotel])
      }


      else if(isfav){
        let filter=FavouriteHotel.filter((ele)=>{
           return hotel.id!=ele.id
        })
        setFavouriteHotel(filter)
      }
       
        
    }
    else{
     navigate("/login")
    }
 }
 


  return (
      <>
       <div className={`rounded-xl  h-[65vh] py-2 px-3 dark:bg-gray-700 w-full bg-white  shadow  shadow-salat-900 relative ${currentLanguage=="ar"?"rtl":"ltr"}`}>
       <img loading="lazy"  onClick={()=>{navigate("/hotel",{state:{hotel:{...props.hotel}}})}} src={props.hotel.image} alt="hotel-image" className='w-full h-1/3 xl:h-1/2  cursor-pointer'/>
           <MdOutlineFavoriteBorder onClick={()=>{ addtofavourite(props.hotel)} } className={`cursor-pointer absolute top-3   right-5 ${isfav?"bg-green-500":"bg-white"}  rounded-2xl p-1 text-3xl`}/>
          <div className='flex mt-5 ml-4'>
              <h4 className='dark:text-white'>{t("Appartment")}</h4>
              <div className={`${currentLanguage=="ar"?"hidden":"block"} text-sm w-auto px-1 text-white bg-blue-900 ml-3 rounded pt-1 `}>Geinuis</div>
          </div>
          <h4 className={props.text?'dark:text-white font-bold text-white text-2xl m-1 pl-2':'dark:text-white font-bold text-2xl m-1 pl-2'}>{props.hotel.name}</h4>
         
          <div className='flex '>   
            <h4 className='text-sm mt-5 ml-1 dark:text-white'>{t("starting from")}</h4>
            <h4 className='  mt-5 ml-2 dark:text-white  dark:text-white'>${(props.hotel.price_per_night*(85/100)).toFixed(0)}</h4>
            <h4 className=' mt-5 ml-2 line-through font-bold text-red-500 '>${props.hotel.price_per_night.toFixed(0)}</h4>
          </div>
          <div className='mt-1 p-1 w-10 text-center dark:text-white h-8 text-white bg-blue-900 ml-3 rounded p-1'>{props.hotel.rating}</div>
      </div>
      </>
    )
}

export default HotelDesign3