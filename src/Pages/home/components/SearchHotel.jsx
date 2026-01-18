import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SearchHotel = ({
  dest,
  setDest,
  date,
  setDate,
  maxprice,
  setMaxprice,
}) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const [videoReady, setVideoReady] = useState(false);
  

  const destinations = [
    { value: "Cairo", label: "locations.cairo" },
    { value: "Alex", label: "locations.alex" },
    { value: "Marsa", label: "locations.marsa" },
    { value: "Portsaid", label: "locations.portsaid" },
    { value: "Hurghada", label: "locations.hurghada" },
    { value: "Sharm", label: "locations.sharm" },
    { value: "Dahab", label: "locations.dahab" },
    { value: "Gouna", label: "locations.gouna" },
    { value: "Aswan", label: "locations.aswan" },
    { value: "Luxor", label: "locations.luxor" },
    { value: "MarsaAlam", label: "locations.marsaalam" },
  ];

  return (
    <>
      <div className="relative h-[85vh] w-[100vw]">
        {/* <video
          autoPlay
          muted
          loop
          poster="/videos/VedioPoster.png"
          preload="metadata"
          onCanPlayThrough={() => setVideoReady(true)}
          className="h-full w-full object-cover"
        >
          <source src="/videos/HomeMain3.mp4" type="video/mp4" />
        </video> */}
        {!videoReady&&
         <img src="/videos/VedioPoster.png" alt="poster-pic" className="h-[85vh] w-[100vw] top-0 left-0 absolute object-cover z-100"/>
        }
      </div>

      <div
        className={`absolute top-[30%] w-full md:mx-20 flex flex-col gap-2 ${
          currentLanguage === "ar"
            ? "rtl sm:pr-5 sm:right-6 pr-4"
            : "ltr sm:pl-5 sm:left-6 pl-4"
        }`}
      >
        <p
          className={`text-md xl:text-xl text-white font-semibold  ${
            currentLanguage === "ar" ? "hidden" : "block"
          }`}
        >
          {t("search.packages")}
        </p>

        <h1 className="text-3xl lg:text-5xl font-extrabold text-white ">
          {t("search.title")}
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 p-4 w-[90%] sm:w-[80%] md:w-2/3">
        
          <div className="flex flex-col">
            <label className="text-slate-500 dark:text-gray-300 text-xs font-medium mb-1">
              {t("search.dest")}
            </label>
            <select
              value={dest}
              onChange={(e) => setDest(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-gray-700 dark:text-white outline-none"
            >
              {destinations.map((d) => (
                <option key={d.value} value={d.value}>
                  {t(d.label)}
                </option>
              ))}
            </select>
          </div>

         
          <div className="flex flex-col">
            <label className="text-slate-500 dark:text-gray-300 text-xs font-medium mb-1">
              {t("search.date")}
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-gray-700 dark:text-white outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-500 dark:text-gray-300 text-xs font-medium mb-1">
              {t("search.maxPrice")}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="15"
                value={maxprice}
                onChange={(e) => setMaxprice(e.target.value)}
                className={`w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-gray-700 dark:text-white outline-none ${
                  currentLanguage === "ar" ? "rtl" : "ltr"
                }`}
              />
              <button
                onClick={() =>
                  navigate("/hotels", { state: { city: dest, maxprice } })
                }
                className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl px-4 font-semibold"
              >
                {t("search.go")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHotel;
