import React, { createContext, useContext, useEffect, useState } from "react";


const FavouriteContext = createContext();


export const FavouriteProvider = ({ children }) => {

  const [favouriteItems, setFavouriteItems] = useState(JSON.parse(localStorage.getItem("favouriteItems")||"[]")||[]);

  useEffect(()=>{
    localStorage.setItem("favouriteItems",JSON.stringify(favouriteItems))
  },[favouriteItems])

  const addToFavourite = (hotel) => {
    if (!isFavourite(hotel)) {
      setFavouriteItems([...favouriteItems, hotel]);
    }
  };


  const removeFromFavourite = (hotel) => {
    setFavouriteItems(favouriteItems.filter((item) => item.id !== hotel.id));
  };

 
  const isFavourite = (hotel) => {
    return favouriteItems.some((item) => item.image === hotel.image);
  };

  return (
    <FavouriteContext.Provider
      value={{
        favouriteItems,
        setFavouriteItems,
        addToFavourite,
        removeFromFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavouriteContext = () => useContext(FavouriteContext);
