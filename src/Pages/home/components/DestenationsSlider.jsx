import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const DestenationsSlider = ({ settings }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";

  const destinations = [
    {
      city: "Alex",
      label: "locations.alex",
      image: "https://aqaryamasr.com/blog/wp-content/uploads/2023/02/11.jpg",
    },
    {
      city: "Gouna",
      label: "locations.gouna",
      image: "https://th.bing.com/th/id/OIP.xQI-gG0DG4ep36r5v8IH5QHaE-?rs=1&pid=ImgDetMain",
    },
    {
      city: "MarsaAlam",
      label: "locations.marsaalam",
      image: "https://th.bing.com/th/id/R.6db35784096181d8663f88819a241620?rik=qE9yuHVJNgzCAg&pid=ImgRaw&r=0",
    },
    {
      city: "Marsa",
      label: "locations.marsa",
      image: "https://th.bing.com/th/id/R.280dba123d246337cf29d167e38cf3ec?rik=URKi8RnnarqEFA&pid=ImgRaw&r=0",
    },
    {
      city: "Hurghada",
      label: "locations.hurghada",
      image: "https://aqaryamasr.com/blog/wp-content/uploads/2023/02/11.jpg",
    },
    {
      city: "Sharm",
      label: "locations.sharm",
      image: "https://th.bing.com/th/id/OIP.vZv90dR8NHYYLmF0uE_OmAHaE8?rs=1&pid=ImgDetMain",
    },
    {
      city: "Luxor",
      label: "locations.luxor",
      image: "https://th.bing.com/th/id/OIP.1viobxnkCLfzwSMq2f1qpgHaEK?w=1900&h=1069&rs=1&pid=ImgDetMain",
    },
    {
      city: "Aswan",
      label: "locations.aswan",
      image: "https://th.bing.com/th/id/OIP.U8ewTVH2sEnRmnBKl2BmOwHaE7?w=800&h=533&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="p-3 px-2">
      <h4
        className={`font-bold ${
          currentLanguage === "ar" ? "rtl mr-2 xl:mr-20" : "ltr ml-5"
        } text-xl xl:text-2xl dark:text-white my-4`}
      >
        {t("sections.popular")}
      </h4>

      <div className="slider-container w-[92vw] ml-1 mt-5 md:ml-6">
        <Slider {...settings}>
          {destinations.map((item) => (
            <div
              key={item.city}
              className="mt-1 relative h-[23vh] cursor-pointer px-3 transition-transform duration-300 hover:scale-105"
            >
              <Link to="/hotels" state={{ city: item.city }}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </Link>

              <h4
                className={`absolute bottom-3 left-5 right-5 text-2xl font-semibold text-white drop-shadow-lg ${
                  currentLanguage === "ar" ? "rtl right-5 left-auto" : ""
                }`}
              >
                {t(item.label)}
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DestenationsSlider;
