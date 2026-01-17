
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiTrash2 } from "react-icons/fi"; 
import { useFavouriteContext } from '../../contextApi/FavouriteContext';

const FavouriteHotelCard = ({ hotel, text }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  const { removeFromFavourite } = useFavouriteContext(); 

  return (
    <div
      className={`relative rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-full pb-12 ${
        currentLanguage === "ar" ? "rtl" : "ltr"
      }`}
    >
   
      <div className="relative w-full h-48 cursor-pointer">
        <img
          loading="lazy"
          onClick={() => navigate("/hotelDetails", { state: { hotel: { ...hotel } } })}
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow">
          {t("hotel.offer10")}
        </div>
      </div>

     
      <div className="px-4 mt-3">
        <h4 className={`font-bold text-lg ${text ? "text-white" : "text-gray-900 dark:text-white"}`}>
          {t(hotel.name)}
        </h4>

        <p className={`text-sm mt-1 ${text ? "text-white" : "text-gray-500 dark:text-gray-300"}`}>
          {t(`locations.${hotel.location.country}`)}, {t(`locations.${(hotel.location.city).toLowerCase()}`)}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <h4 className={`font-semibold text-lg ${text ? "text-white" : "text-gray-900 dark:text-white"}`}>
            ${hotel.price_per_night.toFixed(0)}
          </h4>
          <span className={`text-sm ${text ? "text-white" : "text-gray-500 dark:text-gray-300"}`}>
            {t("hotel.perNight")}
          </span>
        </div>

        <p className={`text-xs mt-1 ${text ? "text-white" : "text-gray-400 dark:text-gray-300"}`}>
          {t("hotel.tax")}
        </p>
      </div>

     
      <div className="absolute bottom-3 right-3">
        <FiTrash2
          onClick={() => removeFromFavourite(hotel)}
          className="text-red-600 text-2xl cursor-pointer hover:text-red-800 transition"
          title={t("hotel.removeFavourite")}
        />
      </div>
    </div>
  );
};

export default FavouriteHotelCard;
