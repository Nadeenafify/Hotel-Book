import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SuggestedCities = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const isRTL = currentLanguage === "ar";

  const topCities = [
    {
      city: "Cairo",
      label: "locations.cairo",
      image:
        "https://estateofcyprus.com/wp-content/uploads/2022/07/new_9723fd66547a38c55dafd5df6f2fb646.jpg",
    },
    {
      city: "Aswan",
      label: "locations.aswan",
      image:
        "https://th.bing.com/th/id/OIP.UwmTSmAD-SE0DQqdetaeOAHaEw?rs=1&pid=ImgDetMain",
    },
  ];

  const bottomCities = [
    {
      city: "Luxor",
      label: "locations.luxor",
      image:
        "https://th.bing.com/th/id/OIP.ttSW_AvNArnMIECE6sx7FgHaFU?rs=1&pid=ImgDetMain",
    },
    {
      city: "SharmElshicke",
      label: "locations.sharm",
      image:
        "https://cdn.sandals.com/sandals/v12/images/resorts/srb/home/slider-inclusions/coconut-grave.jpg",
    },
    {
      city: "Dahab",
      label: "locations.dahab",
      image:
        "https://th.bing.com/th/id/OIP.VR0-x_pckYR9fa8AsJm6gQHaE8?w=1200&h=801&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <section className="py-6 px-4 xl:px-12">
     
      <h4
        className={`font-bold text-xl md:text-2xl mb-6 dark:text-white ${
          isRTL ? "rtl text-right" : "ltr text-left"
        }`}
      >
        {t("sections.suggestedCities")}
      </h4>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topCities.map((item) => (
          <CityCard
            key={item.city}
            item={item}
            isRTL={isRTL}
            t={t}
            aspect="aspect-[16/9]"
          />
        ))}
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {bottomCities.map((item) => (
          <CityCard
            key={item.city}
            item={item}
            isRTL={isRTL}
            t={t}
            aspect="aspect-[4/3]"
          />
        ))}
      </div>
    </section>
  );
};

export default SuggestedCities;


const CityCard = ({ item, isRTL, t, aspect }) => {
  return (
    <Link
      to="/hotels"
      state={{ city: item.city }}
      className="group relative overflow-hidden rounded-2xl shadow-lg"
    >
      <div className={`w-full ${aspect}`}>
        <img
          loading="lazy"
          src={item.image}
          alt={item.city}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

   
      <h4
        className={`absolute top-5 text-xl md:text-2xl font-semibold text-white ${
          isRTL ? "right-5 text-right" : "left-5 text-left"
        }`}
      >
        {t(item.label)}
      </h4>
    </Link>
  );
};
