import React from 'react';
import { useContext,createContext,useState } from 'react'


const MyContext=createContext();

export const MyProvider=({children})=>{

        
          const [isLogged,setisLogged]=useState(false)
          const [Email,setEmail]=useState(false)
          const [FavouriteHotel,setFavouriteHotel]=useState([])



          return (
            <MyContext.Provider value={{isLogged,setisLogged,Email,setEmail,FavouriteHotel,setFavouriteHotel}}>
                {children}
            </MyContext.Provider>
          )

}

export const useMyContext=()=>useContext(MyContext)