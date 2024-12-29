import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';



const Book = () => {
  const {state}=useLocation()
  //form fields
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [phone,setphone]=useState("")
  const [cardnum,setcardnum]=useState("")
  const [expdate,setexpdate]=useState("")
  const [cvn,setcvn]=useState("")
  const [num_of_rooms,setNumOfRooms]=useState(1)
  const [num_of_nights,setNumOfNights]=useState(1)
  //for translation
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  




  return (
   <>
     <Helmet>
       <title>{t("Book")}</title>
     </Helmet>
     <form action="">
      <div className={`container py-5 flex justify-center mt-10 ${currentLanguage=="ar"?"rtl":"ltr"}`}>

        <div className="grid grid-rows-1 rounded-xl border border-cyan-400 lg:px-10  px-5 py-10 w-[90vw] md:w-2/3 xl:w-1/2">
        <h4 className='font-bold text-xl mt-10 mb-5 dark:text-white'>{t("Personal Details")}</h4>
          <h4 className='font-bold dark:text-white'>{t("Name")}</h4>
          <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}  required className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>
          <h4 className='font-bold mt-3 dark:text-white'>{t("Email")}</h4>
          <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}   required className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>
          <h4 className='font-bold mt-3 dark:text-white'>{t("Phone")}</h4>
          <input type="tel"  value={phone} onChange={(e)=>{setphone(e.target.value)}}   required pattern="[0-9+()-]*" className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>
          <h4 className='font-bold mt-3 dark:text-white'>{t("Number Of Rooms")}</h4>
          <input type="number" min="1"  onChange={(e)=>{setNumOfRooms(e.target.value)}} max={state?.hotel?.available_rooms} value={num_of_rooms} placeholder='Name' required pattern="[0-9]{10}" className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>
          <h4 className='font-bold mt-3 dark:text-white'>{t("Number Of Nights")}</h4>
          <input type="number" min="1"  onChange={(e)=>{setNumOfNights(e.target.value)}}  value={num_of_nights} placeholder='Name' required pattern="[0-9]{10}" className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>
       
    
                  
          <h4 className='font-bold text-xl mt-5 mb-5 dark:text-white'>{t("Credit Card")}</h4>
          <h4 className='font-bold dark:text-white'>{t("Card Number")}</h4>
           <input type="tel" value={cardnum} onChange={(e)=>{setcardnum(e.target.value)}}  pattern="^4[0-9]{12}(?:[0-9]{3})?$"  maxLength="16"  className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>
                     
                
            <h4 className='font-bold dark:text-white'>{t("Expiration date")}</h4>
           <input type="date" value={expdate} onChange={(e)=>{setexpdate(e.target.value)}}  className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>    
                    
                         
            <h4 className='font-bold dark:text-white'>CVN2</h4>
            <input type="tel" value={cvn} onChange={(e)=>{setcvn(e.target.value)}}  maxLength="3"  className={`dark:text-white bg-gray-100  mt-3 border-0 rounded outline-0 p-2  dark:bg-gray-500 ${currentLanguage=="ar"?"rtl":"ltr"}`}/>  
                       
                      
                   
            <h4 className='font-bold mt-5 dark:text-white'>{t("Total")}: {(Number(state?.hotel?.price_per_night)*Number(num_of_rooms)**Number(num_of_nights))}  </h4>
            <button type="submit"  className='cursor-pointer mt-10 bg-cyan-500 text-white rounded text-bold p-2 w-2/3  text-xl'>{t("Pay")}</button>
          </div>
               
           
         
        </div>  
        </form>   
   </>
  )
}

export default Book