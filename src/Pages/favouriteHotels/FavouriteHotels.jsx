import { useTranslation } from 'react-i18next';
import { useFavouriteContext } from '../../contextApi/FavouriteContext';
import FavouriteHotelCard from './FavouriteHotelCard';

const FavouriteHotels = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const { favouriteItems } = useFavouriteContext();

  return (
    <div className={`container py-10 px-5 ${currentLanguage === "ar" ? "rtl" : "ltr"}`}>
     
      <h1 className="text-2xl md:text-3xl font-bold dark:text-white mb-8">
        {t("favourites.title")}
      </h1>


      {favouriteItems.length === 0 && (
        <h4 className="text-red-500 text-center font-bold text-lg">
          {t("favourites.empty")}
        </h4>
      )}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-6">
        {favouriteItems.map((hotel) => (
          <FavouriteHotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteHotels;
