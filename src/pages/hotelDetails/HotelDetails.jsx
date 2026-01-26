import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaWifi, FaSwimmingPool } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { MdOutlineBedroomChild, MdOutlinePriceChange } from "react-icons/md";
import StarRatings from 'react-star-ratings';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const HotelDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  const hotel = state.hotel;

  return (
    <>
      <Helmet>
        <title>{t("hotelDetails.title")}</title>
      </Helmet>

      <div className={`container mx-auto px-4 lg:px-16 py-10 ${currentLanguage === "ar" ? "rtl" : "ltr"}`}>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 drop-shadow-lg">
          {t("hotelDetails.header")}
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              loading="lazy"
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-80 lg:h-full object-cover rounded-t-3xl lg:rounded-l-3xl"
            />
          </div>

          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold dark:text-white">{t(hotel.name)}</h2>
              <p className="text-gray-500 dark:text-gray-300 mt-1">
                {t(`locations.${(hotel.location.city).toLowerCase()}`)}, {t(`locations.${hotel.location.country}`)}
              </p>

              <div className="mt-2">
                <StarRatings
                  rating={hotel.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="1.2em"
                  starSpacing="0.2em"
                />
              </div>

              <h3 className="text-lg font-semibold mt-4 dark:text-white">{t("hotelDetails.about")}</h3>
              <p className="text-gray-600 dark:text-gray-200 text-sm lg:text-base mt-2">
                {t("hotelDetails.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <MdOutlineBedroomChild className="text-cyan-500 text-2xl" />
                  <span className="dark:text-white">{t("hotelDetails.availableRooms")}: {hotel.available_rooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlinePriceChange className="text-cyan-500 text-2xl" />
                  <span className="dark:text-white">{t("hotelDetails.pricePerNight")}: ${hotel.price_per_night}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <Amenity icon={<FaWifi />} name={t("amenities.freeWifi")} available={hotel.amenities.includes("Free WiFi")} />
              <Amenity icon={<IoRestaurant />} name={t("amenities.restaurant")} available={hotel.amenities.includes("Restaurant")} />
              <Amenity icon={<IoMdFitness />} name={t("amenities.gym")} available={hotel.amenities.includes("Gym")} />
              <Amenity icon={<FaSwimmingPool />} name={t("amenities.pool")} available={hotel.amenities.includes("Pool")} />
            </div>

            <button
              onClick={() => navigate("/bookhotel", { state: { hotel } })}
              className="mt-6 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
            >
              {t("hotelDetails.bookNow")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Amenity = ({ icon, name, available }) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm">
      <span className="text-cyan-500">{icon}</span>
      <span className="text-sm sm:text-base dark:text-white">{name}</span>
      <span className={`ml-auto font-semibold ${available ? "text-green-500" : "text-red-500"}`}>
        {available ? "✔" : "✖"}
      </span>
    </div>
  );
};

export default HotelDetails;
