import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useAuthContext } from "../../../contextApi/AuthContext";
import { useFavouriteContext } from "../../../contextApi/FavouriteContext";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";

  const { isLogged } = useAuthContext();
  const { ToggleFavourite, isFavourite } = useFavouriteContext();

  const amenitiesMap = {
    "Free WiFi": "freeWifi",
    "Gym": "gym",
    "Spa": "spa",
    "Hot Tub": "hotTub",
    "Outdoor Pool": "outdoorPool",
    "Room Service": "roomService",
    "Ski": "ski"
  };

  return (
    <div
      className={`relative h-[360px] mb-5 rounded-2xl shadow-md hover:shadow-lg transition mx-2.5 bg-white dark:bg-gray-800 ${currentLanguage === "ar" ? "rtl" : "ltr"
        }`}
    >

      <div
        className="relative w-full h-1/2 cursor-pointer"
        onClick={() =>
          navigate("/hotelDetails", { state: { hotel } })
        }
      >
        <img
          src={hotel.image}
          alt={hotel.name}
          loading="lazy"
          className="w-full h-full object-cover rounded-t-2xl"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>


        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            if (isLogged) {
              ToggleFavourite(hotel);
              toast.success(t("offerHotels.addedToFavourites"));
            } else {
              toast.error(t("auth.signinRequired"));
            }
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white dark:bg-gray-700 cursor-pointer"
        >
          {isFavourite(hotel) ? (
            <MdOutlineFavorite size={24} color="red" />
          ) : (
            <MdOutlineFavoriteBorder size={24} />
          )}
        </div>


        <div className="absolute bottom-3 left-3 text-white">
          <h4 className="font-bold text-xl md:text-2xl">
            {t(hotel.name)}
          </h4>
          <p className="text-sm md:text-base">
            {t(`locations.${hotel.location.city}`)},{" "}
            {t(`locations.${hotel.location.country}`)}
          </p>
        </div>
      </div>


      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-xl font-semibold dark:text-white">
            ${hotel.price_per_night}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-300">
            {t("hotel.perNight")}
          </span>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-300">
          {t("hotel.tax")}
        </p>


        <div className="flex flex-wrap gap-2 mt-2">
          {hotel?.amenities?.slice(0, 3).map((a, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {t(`amenities.${amenitiesMap[a]}`)}
            </span>
          ))}
        </div>


        <div className="flex gap-3 mt-3 items-center">
          <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {hotel.rating.toFixed(1)}
          </div>

          <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            {t("hotel.offer10")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
