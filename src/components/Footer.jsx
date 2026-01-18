import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const navigate = useNavigate()

  const { t} = useTranslation();
  // const currentLanguage = i18n.language || 'en';

  return (
    <>
      <footer
        className={`container py-5 mt-2 mx-5 mb-10`}
      >
        <h4 className=' font-bold text-2xl dark:text-white'>
          {t("hotel.cities")}
        </h4>

        <div className="grid grid-cols-2  mt-4 md:grid-cols-4">
    
          <div className='flex flex-col gap-4 cursor-pointer mt-5'>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Cairo" } })}>
              {t("locations.cairo")}
            </h4>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Alex" } })}>
              {t("locations.alex")}
            </h4>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Marsa" } })}>
              {t("locations.marsa")}
            </h4>
          </div>

          <div className='flex flex-col gap-4 cursor-pointer mt-5'>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Portsaid" } })}>
              {t("locations.portsaid")}
            </h4>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Hurghada" } })}>
              {t("locations.hurghada")}
            </h4>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Sharm" } })}>
              {t("locations.sharm")}
            </h4>
          </div>

          
          <div className='flex flex-col gap-4 cursor-pointer mt-5'>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Dahab" } })}>
              {t("locations.dahab")}
            </h4>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Gouna" } })}>
              {t("locations.gouna")}
            </h4>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "MarsaAlam" } })}>
              {t("locations.marsaalam")}
            </h4>
          </div>

        
          <div className='flex flex-col gap-4 cursor-pointer mt-5'>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Aswan" } })}>
              {t("locations.aswan")}
            </h4>
            <h4 className='dark:text-white' onClick={() => navigate("/hotels", { state: { city: "Luxor" } })}>
              {t("locations.luxor")}
            </h4>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
