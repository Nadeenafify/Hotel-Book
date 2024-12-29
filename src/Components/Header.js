import React, { useEffect } from 'react'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaList } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { useMyContext } from '../contextApi/ContextApi';

const Header = () => {
    

  const [isDark,setIsDark]=useState(false)
  const [language,setlanguage]=useState("en")
  //for translation
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  //global variables of context Api
  const {isLogged,Email,setisLogged,setEmail}=useMyContext()



  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language dynamically
   
  };

 

//change language and dark mode
  useEffect(()=>{
   if(isDark)
   {
      document.documentElement.classList.add("dark")
      document.body.classList.add("dark")
   }
      else{
        document.documentElement.classList.remove("dark")
        document.body.classList.remove("dark")
      }
  if(language=="ar"){
    changeLanguage("ar")
  }
   else{
    changeLanguage("en")
   }   
  
  },[isDark,language])



  return (
    <>
    <header className="py-5 shadow shadow-gray-300">
      <div className="row ml-10">
        
          <div className="flex">
            
              <MdOutlineTravelExplore className='text-cyan-500 mt-1 text-2xl ' />
               <h1 className='font-bold text-3xl grow dark:text-white'>Travel</h1>
             
               <FaList className='mr-10 mt-3 block md:hidden cursor-pointer dark:text-white' onClick={()=>{document.querySelector(".left-list").style.display="flex"}} />   
               <nav className='mt-2 mr-10 gap-3 xl:gap-5 xl:mr-40 hidden md:flex'>
                   <Link to="/"><h4 className='headerTopNavigate  dark:text-white'>{t('Home')}</h4></Link>
                   <Link to="/offers"><h4 className='headerTopNavigate dark:text-white'>{t('Offers')}</h4></Link>
                   <Link to="/contact"><h4 className='headerTopNavigate dark:text-white'>{t('Contact')}</h4> </Link>
                   <Link to="/favourite"><h4  className={`headerTopNavigate dark:text-white ${!isLogged&&"hidden"}`}>{t('Favourite')}</h4> </Link>    
                   <MdOutlineDarkMode  className='cursor-pointer mt-1 me-1 text-lg dark:text-white' onClick={()=>{setIsDark(!isDark)}} />
                   <div className='flex'>
                   <GrLanguage className='cursor-pointer mt-1 dark:text-white' />
                    <select value={language} className='text-sm lg:text-lg border-0 outline-0 dark:text-white dark:bg-gray-700' onChange={(e)=>{setlanguage(e.target.value)}}>
                      <option value="en">{t("en")}</option>
                      <option value="ar">{t("ar")}</option>
                   </select>
                   </div>
      
                 <Link to={!isLogged&&"/login"}><h4 className='border border-gray-700 dark:border-white md:px-1 rounded dark:text-white '>{isLogged?Email.slice(0,1).toUpperCase():"Sign in"}</h4></Link>
                  <h4 className={`text-sm lg:text-lg cursor-pointer dark:text-white ${!isLogged&&"hidden"}`} onClick={()=>{setisLogged(false);setEmail("")}}>{t("Logout")}</h4>
              </nav>

              <nav className={` ${currentLanguage=="ar"?"rtl":"ltr"} left-list  flex flex-col hidden  py-10 px-5 dark:bg-gray-700 bg-white z-20 fixed w-1/2 top-0 left-0 h-screen`}>
                  <IoIosCloseCircleOutline className='self-end cursor-pointer text-2xl dark:text-white' onClick={()=>{document.querySelector(".left-list").style.display="none"}} />
                  <div className='flex'>
                  <IoHomeOutline className='dark:text-white' />
                  <Link to="/"><h4 className='headerTopNavigate ml-2 dark:text-white'>{t("Home")}</h4></Link>
                  </div>
                  <div className='flex'>
                  <BiSolidOffer className='text-md mt-1 dark:text-white'/>
                  <Link to="/offers"><h4 className='headerTopNavigate ml-2 dark:text-white'>{t("Offers")}</h4></Link> 
                  </div>
                  <div className='flex'>
                   <IoMdContact className='dark:text-white'/>
                   <Link to="/contact"><h4 className='headerTopNavigate ml-2 dark:text-white'>{t("Contact")}</h4></Link>
                  </div>
                  
                  <div className='flex'>
                     <MdOutlineDarkMode  className='cursor-pointer mt-1 dark:text-white'  />
                     <h4 className='dark:text-white headerTopNavigate ml-2' onClick={()=>{setIsDark(!isDark)}}>{isDark?t("Light"):t("Dark")}</h4>
                     
                  </div>
                  <div className='flex'>
                  <GrLanguage className='cursor-pointer mt-1 dark:text-white' />
                  <select value={language} onChange={(e)=>{setlanguage(e.target.value)}} className='w-2/3 ml-2  dark:bg-gray-700 dark:text-white headerTopNavigate ml-2'>
                      <option value="en">{t("en")}</option>
                      <option value="ar">{t("ar")}</option>
                   </select>
                  </div>
                <div className={`flex mt-2 ${isLogged&&"hidden"}`}>
                    <FaUser className='dark:text-white' />
                    <Link to="login"><h4 className='px-1 dark:text-white headerTopNavigate ml-2 '>{t("Sign In")}</h4></Link>
                  </div>
                  <div className={`flex mt-2 ${!isLogged&&"hidden"}`}>
                    <FaUser className='dark:text-white' />
                   <h4 onClick={()=>{setisLogged(false);setEmail("")}} className='px-1 dark:text-white headerTopNavigate ml-2 '>{t("Sign Up")}</h4>
                  </div>
                  <div className={`flex mt-1 ${!isLogged&&"hidden"}`}>
                    <MdOutlineFavoriteBorder className={`dark:text-white cursor-pointer ${!isLogged&&"hidden"}    text-xl`}/>
                    <Link to="/favourite"><h4 className='px-1 dark:text-white headerTopNavigate ml-1 '>{t("Favourite")}</h4></Link>
                  </div>

                
                 
                

                   
              </nav>
            
          </div>
          
    




      </div>




    </header>
    
    
    
    </>
  )
}

export default Header