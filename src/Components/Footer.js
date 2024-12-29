import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


const Footer = () => {

  const navigate=useNavigate()
  //for translation
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  return (
    <>
  <footer className={`container py-5 mt-2 w-[92vw]  mb-10 ${currentLanguage=="ar"?"rtl mr-10":"ltr ml-10"}`}>
   <h4 className='ml-3 md:ml-5 font-bold text-2xl dark:text-white'>{t("Cities")}</h4>
   <div className="grid grid-cols-2  ml-5 mt-10 md:grid-cols-4 ">
      <div className='flex flex-col gap-4 cursor-pointer mt-5'>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"Cairo"}})}}>{t("Cairo")}</h4>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"Alex"}})}}>{t("Alex")}</h4>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"MarsaMatroh"}})}}>{t("MarsaMatroh")}</h4>
       
      </div>
      {/* ------------------------------ */}

      <div  className='flex flex-col gap-4 cursor-pointer mt-5'>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"BorSaid"}})}} >{t("BorSaid")}</h4>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"Hardage"}})}} >{t("Hardaga")}</h4>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"SharmElshike"}})}}>{t("SharmElshike")}</h4>
      </div>
      {/* ---------------------------- */}
     
      <div className='flex flex-col gap-4 cursor-pointer mt-5'>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"Dahab"}})}}>{t("Dahab")}</h4>
        <h4  className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"Elgona"}})}}>{t("Elgona")}</h4>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"MasrAlam"}})}}>{t("Masr Alam")}</h4>
        </div>
      {/* ------------------ */}
      <div  className='flex flex-col gap-4 cursor-pointer mt-5'>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"Aswan"}})}}>{t("Aswan")}</h4>
        <h4 className='dark:text-white' onClick={()=>{navigate("/hotels",{state:{city:"Aksor"}})}}>{t("Aksor")}</h4>

      </div>
     
     
   </div>
    
   
  
   </footer>
{/* --------------------------------------------------------------------------------- */}

    
    </>
  )
}

export default Footer