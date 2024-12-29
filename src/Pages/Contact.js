import React from 'react'
import { IoHome,IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';


const Contact = () => {
   const { t, i18n } = useTranslation();
   const currentLanguage = i18n.language || 'en';

  return (
     <>
      
      <Helmet>
       <title>{t("Contact")}</title>
     </Helmet>
  
       <div className={currentLanguage=="ar"?"container  md:px-20 py-10 rtl":"container  md:px-20 py-10 ltr"}>
    
       
           
           {/* -------------------------------------------------------------------------------- */}
            <div className="grid grid-cols-2 mt-3 p-4 bg-white dark:bg-gray-700 rounded">
       
              <div>
                <h4 className='font-bold mb-3 text-sm md:text-xl dark:text-white'>{t("Contact")}</h4>
                <form className='flex flex-col' >
                  <input className="dark:text-white mb-3 ps-3 p-2 rounded bg-gray-100 dark:bg-gray-500 w-100 outline-0 border-0" type="text" placeholder={t("Name")}/>
                  <input className="dark:text-white mb-3 ps-3 p-2 rounded bg-gray-100 dark:bg-gray-500 w-100 outline-0 border-0"  type="email" placeholder={t("Email")}/>
                  <input className="dark:text-white mb-3 ps-3 p-2 rounded bg-gray-100 dark:bg-gray-500  w-100  outline-0 border-0"  type="number" placeholder={t("Phone")} />
                  <input className="dark:text-white mb-3 ps-3 p-2 rounded bg-gray-100 dark:bg-gray-500  w-100 h-sm-50 h-25 outline-0 border-0"  type="text" placeholder={t("Comment")}/>
                  <button type='submit'  className=' bg-cyan-500 text-white w-[16vw] md:w-[10vw] p-1 mt-4 cursor-pointer rounded'>{t("Submit")}</button>
                 
                  <br/>
                  </form>
                  
              </div>
      
              <div className={`${currentLanguage=="ar"?"mr-3 xl:mr-10":"ml-3 xl:ml-10"}`}>
             
                 <h4 className='mb-4 font-bold text-sm md:text-xl dark:text-white'>{t("Get In Touch With Us")}</h4>

                
                   <div className='flex gap-3 mb-1'>
                    <IoHome className='fs-4 dark:text-white'/>
                     <address>
                     <h4 className='text-sm xl:text-md dark:text-white'>{t("33 St Alharam Cairo 19105")}</h4>
                     </address>
                    </div>
                 
                      <div className='flex gap-3 items-center mb-3'>
                    <IoCall className='fs-4 dark:text-white'/>
                    <Link className="dark:text-white text-sm xl:text-md" href="tel:+91 77234608"><h4>+91 77234608</h4></Link>
                     </div>
              
                  <div className='flex gap-3 mb-3 items-center'>
                    <MdEmail className='fs-sm-4 dark:text-white'/>
                    <h4><a className="dark:text-white text-sm xl:text-md" href="mailto:Demo@Company.com">Demo@Company.com</a></h4>
                 
                  </div>
                  
                  <div className='flex gap-3 mb-3 '>
                    <IoIosTimer className='fs-4 dark:text-white'/>
                    <p className='dark:text-white'>{t("MonDay-Friday 10AM-8PM")}</p>
                  </div>
                  
          
             </div>              
        
           </div>

           {/* ----------------------------------------------------------------------- */}
           
        </div>      
       
     </>
  )
}

export default Contact