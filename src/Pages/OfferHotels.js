import React, { useState ,useEffect} from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import {Hotels} from "../Components/Data"
import StarRatings from 'react-star-ratings'
import { useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const OfferHotels = () => {

const navigate=useNavigate()

//list or grid show of hotels 
const [islist,setislist]=useState(true)

//hotels with offers
let filteredHotels=[...Hotels["Cairo"],...Hotels["Alex"],...Hotels["Elgona"]] 
//for translation
const { t, i18n } = useTranslation();
const currentLanguage = i18n.language || 'en';

  return (
    <>
    <Helmet>
           <title>{t("Offers")}</title>
         </Helmet>
    <div className={`flex flex-col  col-span-2 mt-10 px-5 xl:px-40 ${currentLanguage=="ar"?"rtl":"ltr"}`}>
      <div className={`flex ${currentLanguage=="ar"?"rtl":"ltr justify-end"} hidden lg:flex `}>
      <h4 onClick={()=>{setislist(true)}} className='text-md bg-gray-200 px-2 py-1 text-center rounded-md  cursor-pointer'>{t("List")}</h4>
      <h4 onClick={()=>{setislist(false)}} className='text-md bg-gray-200 px-2 py-1 text-center rounded-md ms-2 cursor-pointer'>{t("Grid")}</h4>
      </div>

    
    <div className={!islist?"grid grid-cols-3 gap-3":""}>
     {
      filteredHotels.map((ele)=>{
        return(<>
        <div className={!islist?"flex flex-col mt-3 h-[60vh] ":"flex flex-col md:flex-row mt-3  md:h-[26vh] lg:h-[30vh] "} key={ele.id}>
          <div className={islist?"relative  xl:w-1/2 md:w-[60vw] md:h-full": "w-full relative  "}>
           <img loading="lazy"  onClick={()=>{navigate("/hotel",{state:{hotel:{...ele,price_per_night:(ele.price_per_night*(85/100)).toFixed(0)}}})}} src={ele.image} className={!islist?"cursor-pointer w-full h-[30vh] rounded":"cursor-pointer w-full h-full rounded"} alt="hotel-image"/>
            <MdOutlineFavoriteBorder className='absolute top-4 right-3 text-black bg-white rounded-2xl p-1 text-3xl'/>
           </div>
           <div className='px-5 shadow shadow-gray-200 h-full relative'>
             <h4 className='text-xl dark:text-white font-bold mt-3'>{ele.name}</h4>
             <h4 className='text-sm dark:text-white'>{t(ele.location.country)} , {t(ele.location.city)}</h4>
             
              <StarRatings
                     rating={ele.rating}
                      starRatedColor="gold"
                      numberOfStars={5}
                      starDimension="0.9em"
                      starSpacing="0.2em"
                    /> 
              
           
             
              <p className='text-xs w-full mt-3 dark:text-white  '>
              {t("Safety and security are prioritized through 24/7 staff and surveillance.Guests can enjoy additional services such as on-site dining, laundry,and concierge assistance.")}
              </p>

              <div className={`absolute flex ${currentLanguage=="ar"?"left-5":"right-5"} top-8`}>
              <h4 className=' mt-5 ml-2 dark:text-white '>${(ele.price_per_night*(85/100)).toFixed(0)}</h4>
              <h4 className=' mt-5 ml-2 line-through text-red-500 font-bold '>${ele.price_per_night.toFixed(0)}</h4>
              </div>
              <h4 className='mt-2 mb-3 px-1 w-[8vw] md:w-[4vw] bg-blue-700 text-white rounded-md  text-center'>{ele.rating}</h4>
           </div>
        </div>
        
        </>)
      })
     }
     </div>
      </div>
    </>
  )
}

export default OfferHotels