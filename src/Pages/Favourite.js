import React from 'react'
import { useMyContext } from '../contextApi/ContextApi';
import { IoIosCloseCircleOutline } from "react-icons/io";
import FavouriteH from '../Components/FavouriteH';
import { useTranslation } from 'react-i18next';


const Favourite = () => {

   const {FavouriteHotel,setFavouriteHotel}=useMyContext()
    const { t, i18n } = useTranslation();
   const currentLanguage = i18n.language || 'en';
   
   function removeFromfavourite(hotel){
    
        let filter=FavouriteHotel.filter((ele)=>{
           return hotel.id!=ele.id
        })
        setFavouriteHotel(filter)
      
    }
    




  return (
    <>
      <div className={`container py-10 px-5 ${currentLanguage=="ar"?"sm:mr-10 xl:mr-20":"sm:ml-10 xl:ml-20"}`}>
      {FavouriteHotel.length==0&&<h4 className='text-red-500 text-center font-bold'>No Hotels Added To Favourite</h4>}
        <div className={`grid md:grid-cols-3 sm:grid-cols-2 xs:grid-grid-cols-1 justify-center gap-3 ${currentLanguage=="ar"?"rtl":"ltr"}`}>

          
           {
            FavouriteHotel.map((hotel)=>{
               return( 
                
               <div className='flex flex-col'>
                  <IoIosCloseCircleOutline className='text-xl cursor-pointer' onClick={()=>{removeFromfavourite(hotel)}} />
                  <FavouriteH  hotel={hotel}/>
                 
               </div>
               
               )
            })
           }
        </div>
      </div>
    
    </>
  )
}

export default Favourite