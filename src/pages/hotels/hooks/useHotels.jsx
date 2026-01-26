import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Hotels } from "../../../Data";

export const useHotels = () => {
  const location = useLocation();
  const { city, maxprice } = location?.state || {};
  const [wifi, setWifi] = useState(false);
  const [pool, setPool] = useState(false);
  const [gym, setGym] = useState(false);
  const [rest, setRest] = useState(false);
  const [fromPrice, setFromPrice] = useState(1);
  const [isList, setIsList] = useState(true);

  const cityHotels = useMemo(() => [...(Hotels[city] || [])], [city]);
  const maxPrice = useMemo(() => {
    return cityHotels.length
      ? Math.max(...cityHotels.map((h) => Number(h.price_per_night)))
      : 0;
  }, [cityHotels]);

  const [toPrice, setToPrice] = useState(maxprice || maxPrice);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";

 
  useEffect(() => {
    setToPrice(maxprice || maxPrice);
    window.scrollTo(0, 0);
  }, [city, maxPrice, maxprice]);


  const filteredHotels = useMemo(() => {
    let result = [...cityHotels];

    if (wifi) result = result.filter((h) => h.amenities.includes("Free WiFi"));
    if (pool)
      result = result.filter(
        (h) => h.amenities.includes("Pool") || h.amenities.includes("Outdoor Pool")
      );
    if (gym) result = result.filter((h) => h.amenities.includes("Gym"));
    if (rest) result = result.filter((h) => h.amenities.includes("Restaurant"));

    if (fromPrice || toPrice)
      result = result.filter(
        (h) =>
          Number(h.price_per_night) >= Number(fromPrice) &&
          Number(h.price_per_night) <= Number(toPrice)
      );

    return result;
  }, [cityHotels, wifi, pool, gym, rest, fromPrice, toPrice]);


  return {
    city,
    maxPrice,
    filteredHotels,
    wifi,
    setWifi,
    pool,
    setPool,
    gym,
    setGym,
    rest,
    setRest,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice,
    isList,
    setIsList,
    t,
    currentLanguage,
  };
};
