import React, { useState } from 'react';
import { Hotels } from '../../Data';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import HotelCardOffer from './HotelCardOffer';
import { useAuthContext } from '../../contextApi/AuthContext';

const OfferHotels = () => {
  const navigate = useNavigate();
  const [isList, setIsList] = useState(true);

  // Hotels with offers
  const filteredHotels = [...Hotels["Cairo"], ...Hotels["Alex"], ...Hotels["Elgona"]];

  // Translation
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  const { FavouriteHotel, setFavouriteHotel, isLogged } = useAuthContext();

  // Add to favourite function
  function addToFavourite(hotel) {
    if (isLogged) {
      setFavouriteHotel([...FavouriteHotel, hotel]);
      toast(t("offerHotels.addedToFavourites"), { duration: 2000, position: "bottom-right" });
    } else {
      toast(t("offerHotels.signinRequired"), { duration: 2000, position: "bottom-right" });
      navigate("/login");
    }
  }

  return (
    <>
      <Helmet>
        <title>{t("offerHotels.title")}</title>
      </Helmet>

      <div className={`flex flex-col col-span-2 mt-10 px-5 xl:px-40 ${currentLanguage === "ar" ? "rtl" : "ltr"}`}>
        

        <div className={`flex ${currentLanguage === "ar" ? "rtl" : "ltr justify-end"} hidden lg:flex`}>
          <h4
            onClick={() => setIsList(true)}
            className='text-md bg-gray-200 px-2 py-1 text-center rounded-md cursor-pointer'
          >
            {t("offerHotels.list")}
          </h4>
          <h4
            onClick={() => setIsList(false)}
            className='text-md bg-gray-200 px-2 py-1 text-center rounded-md ms-2 cursor-pointer'
          >
            {t("offerHotels.grid")}
          </h4>
        </div>

     
        <div className={!isList ? "grid grid-cols-3 gap-3" : "flex flex-col gap-4"}>
          {filteredHotels.map((ele) => (
            <HotelCardOffer key={ele.id} ele={ele} addToFavourite={addToFavourite} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OfferHotels;
