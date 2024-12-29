import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaWifi } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { FaSwimmingPool } from "react-icons/fa"
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md"
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const SingleHotel = () => {
    const {state}=useLocation()
    const navigate=useNavigate()
    //for translation
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'en';
    
   
  return (
    <>
     <Helmet>
       <title>{t("Hotel")}</title>
     </Helmet>
     <div className={currentLanguage=="ar"?"container rtl  px-3 lg:mx-10 mb-20 mt-10 ":"container  px-3 lg:mx-10 mb-20 mt-10"}>
      <div className="grid md:grid-cols-2 md:grid-rows-2 h-auto md:h-[109vh]  w-[90vw] rounded-xl bg-gray-50 dark:bg-gray-700">
      <img loading="lazy" src={state.hotel.image} className=" rounded-tl-xl w-full md:w-[43vw] md:h-[55vh] rounded-bl-xl" alt="hotel-image"/>
      <div className='py-2 px-5 h-full'>
        <h4 className='font-bold text-xl dark:text-white'>{state.hotel.name}</h4>
        <h4 className='text-sm mt-3 dark:text-white'>{t(state.hotel.location.country)} , {t(state.hotel.location.city)}</h4>
       
         <StarRatings
                       rating={state.hotel.rating}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="0.9em"
                        starSpacing="0.2em"
                      /> 

<h4 className='font-bold mt-5 dark:text-white'>{t("About Our hotel")}</h4>
        <div className='p-2 text-xs xl:text-lg dark:text-white'>

         {t("Hotels offer numerous advantages, making them an ideal choice for travelers. They provide comfort and convenience with fully furnished rooms, daily housekeeping, and essential amenities like Wi-Fi and room service. Safety and security are prioritized through 24/7 staff and surveillance. Guests can enjoy additional services such as on-site dining, laundry, and concierge assistance, along with leisure facilities like gyms, pools, and spas. Hotels are often located in prime areas near tourist attractions or business centers, ensuring easy access to key destinations. With personalized services and a variety of options to suit different budgets, hotels provide a seamless and enjoyable stay experience.")}
        </div>

         <div className='flex mt-3 flex-col md:flex-row'>
          <div className='flex flex-row'>
           <MdOutlineBedroomChild className='text-2xl mt-1 dark:text-white' />
           <h4 className='ml-1 text-sm lg:text-lg dark:text-white'>{t("Available Rooms")} {state.hotel.available_rooms} </h4>
           </div>
           <div className='flex flex-row'>
           < MdOutlinePriceChange className={`text-2xl mt-1 dark:text-white ${currentLanguage=="ar"?" mr-5 md:mr-2":" lg:ml-5 md:ml-2"}`} />
           <h4 className='ml-1 text-sm lg:text-lg dark:text-white'>{t("Price Per Night")} ${state.hotel.price_per_night}</h4>
           </div>
         </div>
        
        <div className='flex gap-3 mt-5'>
          <FaWifi className='text-2xl dark:text-white dark:text-white'/>
          <h4 className='dark:text-white'>{t("Free WiFi")} <span className={state.hotel.amenities.includes("Free WiFi")?"text-green-500":"text-red-500"}> {state.hotel.amenities.includes("Free WiFi")?"available":"not available"}</span> </h4>
         </div>
         <div className='flex gap-3 mt-5'>
          <IoRestaurant className='text-2xl dark:text-white'/>
          <h4 className='dark:text-white'>{t("Restaurant")} <span className={state.hotel.amenities.includes("Restaurant")?"text-green-500":"text-red-500"}> {state.hotel.amenities.includes("Restaurant")?"available":"not available"}</span> </h4>
         </div>
         <div className='flex gap-3 mt-5'>
          <IoMdFitness className='text-2xl dark:text-white'/>
          <h4 className='dark:text-white'>{t("Gym")} <span className={state.hotel.amenities.includes("Gym")?"text-green-500":"text-red-500"}> {state.hotel.amenities.includes("Gym")?"available":"not available"}</span></h4>
         </div>
         <div className='flex gap-3 mt-5'>
          <FaSwimmingPool className='text-2xl dark:text-white'/>
          <h4 className='dark:text-white'>{t("Pool")} <span className={state.hotel.amenities.includes("Pool")?"text-green-500":"text-red-500"}> {state.hotel.amenities.includes("Pool")?"available":"not available"}</span></h4>
         </div>
         
          <button className='mt-10 bg-cyan-500 text-white rounded text-bold p-2' onClick={()=>{navigate("/bookhotel",{state:{hotel:{...state.hotel}}})}}>{t("Book Now")}</button>
     
      </div>

     
      
    
    
      

      </div>
      </div>
    </>
  )
}

export default SingleHotel