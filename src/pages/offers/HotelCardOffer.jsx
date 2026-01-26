import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import StarRatings from 'react-star-ratings';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../contextApi/AuthContext';
import { useFavouriteContext } from '../../contextApi/FavouriteContext';

const HotelCardOffer = ({ ele }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isLogged } = useAuthContext();
  const { ToggleFavourite, isFavourite } = useFavouriteContext();

  const offerPrice = (ele.price_per_night * 0.85).toFixed(0);

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl mt-3">

      
      <div className="relative md:w-1/3 h-64 md:h-auto">
        <img
          loading="lazy"
          onClick={() => navigate("/hotelDetails", { state: { hotel: { ...ele } } })}
          src={ele.image}
          alt={t("hotelCardOffer.hotelImageAlt")}
          className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none cursor-pointer transition-transform duration-300"
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            if (isLogged) {
              ToggleFavourite(ele);
              toast.success(t("hotelCardOffer.addedToFavourites"));
            } else {
              toast.error(t("hotelCardOffer.signinRequired"));
            }
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white dark:bg-gray-700 text-black dark:text-white cursor-pointer transition"
        >
          {isFavourite(ele) ? <MdOutlineFavorite size={24} color="red" /> : <MdOutlineFavoriteBorder size={24} />}
        </div>
      </div>

      <div className="flex flex-col justify-between p-4 md:w-2/3">
        <div>
          <h4 className="text-lg md:text-xl font-bold dark:text-white">{t(ele.name)}</h4>
          <h4 className="text-sm dark:text-gray-300">
            {t(ele.location.country)}, {t(ele.location.city)}
          </h4>

          <StarRatings
            rating={ele.rating}
            starRatedColor="gold"
            numberOfStars={5}
            starDimension="0.9em"
            starSpacing="0.2em"
            className="mt-1"
          />

          <p className="text-xs mt-3 dark:text-gray-300 line-clamp-3">
            {t("hotelCardOffer.description")}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 gap-2">
          <div className="flex items-center gap-2">
            <h4 className="px-3 py-1 bg-green-500 text-white rounded-full text-center text-sm font-semibold">
              ${offerPrice} / {t("hotelCardOffer.perNight")}
            </h4>
            <h4 className="text-sm line-through text-red-500 dark:text-red-400 font-semibold">
              ${ele.price_per_night.toFixed(0)}
            </h4>
          </div>

          <h4 className="px-3 py-1 bg-blue-600 text-white rounded-full text-center text-sm font-semibold">
            {ele.rating}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HotelCardOffer;
