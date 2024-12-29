import React, { useState ,useEffect} from 'react'
import {Hotels} from "../Components/Data"
import { useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../contextApi/ContextApi';
import HotelDesign4 from '../Components/HotelDesign4';

const HotelsPage = () => {
 
   
  
   const location=useLocation()
   //filter by values
   const{city,maxprice}=location?.state
   const [wifi,setwifi]=useState(false)
   const [pool,setpool]=useState(false)
   const [gym,setgym]=useState(false)
   const [rest,setrest]=useState(false)
   const [fromPrice,setfromPrice]=useState(1)
   const [islist,setislist]=useState(true)
   //filtered hotels to show in page depend on filtered values
   let filteredHotels=[...Hotels[city]] 
   //set toprice in filter defualt to max price of hotels
   const maxPrice = Number(filteredHotels.reduce((max, product) => Math.max(max, product.price_per_night), 0)).toFixed(0)
   const [toPrice,settoPrice]=useState(maxprice?maxprice:maxPrice)
   //for translation
   const { t, i18n } = useTranslation();
   const currentLanguage = i18n.language || 'en';
     
  
   
   
 
// --------------------------------------------------------

 function handlewifi(e){
  
  setwifi( e.target.checked);
 }
 function handlepool(e){
 
  setpool(e.target.checked);
 }
 function handlegym(e){

  setgym(e.target.checked);
 }
 function handlerest(e){
 
  setrest(e.target.checked);
 }
 
 
//  -------------------------filter hotels depend on values -----------------------------
 if(wifi){
   filteredHotels=filteredHotels.filter((hotel)=>{
    return hotel.amenities.includes("Free WiFi")
 })
 
 }
 if(pool){
  filteredHotels=filteredHotels.filter((hotel)=>{
     return hotel.amenities.includes("Pool")||hotel.amenities.includes("Outdoor Pool")
  })
}
if(gym){
  filteredHotels=filteredHotels.filter((hotel)=>{
     return hotel.amenities.includes("Gym")
  })
}
if(rest){
  filteredHotels=filteredHotels.filter((hotel)=>{
     return hotel.amenities.includes("Restaurant")
  })
 
 }
 if(fromPrice||toPrice){
  filteredHotels=filteredHotels.filter((hotel)=>{
    return Number(hotel.price_per_night)>=Number(fromPrice) && Number(hotel.price_per_night)<=Number(toPrice)
  })}



// --------------------------------------------------------------------
useEffect(()=>{
  settoPrice(maxprice?maxprice:maxPrice)
},[maxPrice,maxprice])
// ------------------------------------------------------------------
return (
  <>
  <Helmet>
       <title>{t("Hotels")}</title>
     </Helmet>
  <div className={` py-4 ${currentLanguage=="ar"?"rtl":"ltr"}`}>
   <div className='grid grid-cols-3  px-2  w-screen'>
    <div className='me-2 xl:me-10 xl:px-10 lg:mt-10 mt-4 px-1 h-[40vh] lg:h-[54vh] shadow shadow-gray-400 '>
      <h4 className='font-bold p-2 md:p-5 text-sm md:text-lg dark:text-white'>{t("Filter By")}</h4>
       <div className='flex flex-col'>
       <div className='flex mt-1'> 
         <input type="checkbox" checked={wifi}  onChange={handlewifi} className='md:ml-5 ml-2'/>
         <label className='md:ml-3 ml-1  text-xs md:text-lg dark:text-white'>{t("WiFi")}</label>
       </div>
       <div className='flex mt-1' > 
         <input type="checkbox" checked={pool}  onChange={handlepool} className='md:ml-5 ml-2'/>
         <label className='md:ml-3 ml-1 text-xs md:text-lg dark:text-white'>{t("Pool")}</label>
       </div>
       <div className='flex mt-1'> 
         <input type="checkbox" checked={gym}  onChange={handlegym} className='md:ml-5 ml-2'/>       
         <label className='md:ml-3 ml-1 text-xs md:text-lg dark:text-white'>{t("GYM")}</label>
       </div>
       <div className='flex mt-1'> 
         <input type="checkbox" checked={rest} onChange={handlerest} className='md:ml-5 ml-2'/>     
         <label className='md:ml-3 ml-1 text-xs md:text-lg dark:text-white'>{t("Restaurant")}</label>
       </div>
       </div>
       {/* ---------------------- */}
       <h4 className='font-bold  p-2 md:p-5 text-xs md:text-lg dark:text-white'>{t("Price Per Night")}</h4>
       <div className='flex flex-col md:flex-row'>
          <input  type="tel" maxLength="6" value={fromPrice} onChange={(e)=>{setfromPrice(e.target.value)}} placeholder='min-price' min="1" className={Number(toPrice)<Number(fromPrice)?'md:w-1/4  bg-gray-100 ms-5 rounded outline-0 p-1 border border-red-500':'md:w-1/4  bg-gray-100 md:ms-5 ms-2 mt-2 w-1/2 rounded outline-0 p-1 '}/>
          <input type="tel" maxLength="6" value={toPrice} onChange={(e)=>{settoPrice(e.target.value)}} placeholder='max-price' className={Number(toPrice)<Number(fromPrice)?'md:w-1/4  bg-gray-100 ms-5 rounded outline-0 p-1 border border-red-500':'md:w-1/4  bg-gray-100 md:ms-5 ms-2 w-1/2 mt-2  rounded outline-0 p-1 '}/>
       </div>
       
       <span className={Number(toPrice)<Number(fromPrice)?"block text-red-500 ml-5 text-sm mt-3":"hidden"} >From price must be less than or equal toprice and toprice must be greater than  or equal from price</span>
    </div>


{/* ------------------------------------------------------------------------------- */}
<div className={`flex flex-col  col-span-2 ${currentLanguage=="ar"?"ml-4":"mr-4"} `}>
     <div className={`flex  ${currentLanguage=="ar"?"rtl":"ltr justify-end"} hidden px-5 lg:flex `}>
        <h4 onClick={()=>{setislist(true)}} className='text-md bg-gray-200 px-2 py-1 text-center rounded-md  cursor-pointer'>{t("List")}</h4>
        <h4 onClick={()=>{setislist(false)}} className='text-md bg-gray-200 px-2 py-1 text-center rounded-md ms-2 cursor-pointer'>{t("Grid")}</h4>
      </div>

    
    <div className={!islist?"grid grid-cols-3 gap-3":""}>
     {
      
      filteredHotels.map((ele)=>{
        

        return(<>
         <HotelDesign4 ele={ele} currentLanguage={currentLanguage} islist={islist}/>  
        </>)
      })
     }
     </div>
      </div>
   
      </div>
      </div>
{/* ------------------------------------------------------------------------------------ */}
  
  </>
)

}

export default HotelsPage