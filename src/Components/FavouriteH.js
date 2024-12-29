import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const FavouriteH = (props) => {

 
    const navigate=useNavigate()
    //for translation
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'en';
  return (
    <>
       <div className={`relative  rounded-xl w-full pb-20 px-3 h-[59vh] ${currentLanguage=="ar"?"rtl":"ltr"}`}>
        <img loading="lazy" onClick={()=>{navigate("/hotel",{state:{hotel:{...props.hotel}}})}} src={props.hotel.image} alt="hotel-image" className='w-full h-1/2 rounded-xl cursor-pointer '/>
        <h4 className={props.text?'font-bold text-white dark:text-white text-2xl m-1':'font-bold text-2xl m-1 dark:text-white'}>{t(props.hotel.name)}</h4>
        <h4 className={props.text?'m-1 text-white':'m-1 text-slate-500 dark:text-white'}>{t(props.hotel.location.country)}</h4>
        <h4 className={props.text?'m-1 text-white':'m-1 text-slate-500 dark:text-white'}>{t(props.hotel.location.city)}</h4>
        <h4 className={props.text?'m-1 text-white':'m-1 text-slate-900 dark:text-white'}>${t(props.hotel.price_per_night)}</h4>
        <h4 className={props.text?"text-white":"text-slate-500 dark:text-white"}>{t("per Night")}</h4>
        <h4 className={props.text?"text-white":"text-slate-500 dark:text-white"}>{t("includes taxes & fees")}</h4>
        <div className='mt-5 bg-red-600 text-white rounded text-center w-32 px-1 mt-1 dark:text-white'>{t("10% offer")}</div>

    </div>
    </>
  )
}

export default FavouriteH