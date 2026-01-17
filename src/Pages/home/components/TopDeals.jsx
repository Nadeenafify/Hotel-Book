import React from "react";
import { Hotels } from "../../../Data";
import Slider from "react-slick";
import HotelCard from "./HotelCard";
import { useTranslation } from "react-i18next";

const TopDeals = ({ settings }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";

  return (
    <div className="py-5 mt-2 px-2">
      <h4
        className={`font-bold text-xl xl:text-2xl dark:text-white ${
          currentLanguage === "ar"
            ? "rtl mr-2 xl:mr-20"
            : "ltr ml-5"
        }`}
      >
        {t("sections.topDeals")}
      </h4>

      <div className="ml-1 mt-5 w-[92vw] h-full md:ml-6">
        <Slider {...settings}>
          {Hotels["Cairo"].map((element) => (
            <HotelCard hotel={element} key={element.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopDeals;
