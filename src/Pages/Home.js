import React, { useEffect, useState } from 'react'
import Hotel from '../Components/Hotel'
import HotelDesign2 from '../Components/HotelDesign2'
import HotelDesign3 from '../Components/HotelDesign3'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from 'react-router-dom'
import {Hotels} from "../Components/Data"
import {format} from "date-fns"
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../contextApi/ContextApi';

const Home = () => {

   //i use [windowWidth,setwindowWidth] because in line 50 i use windowWidth 
   // in react slider to know width of window to style arrows of react slider 
   //  depend on it to acieve responsive design
  const  [windowWidth,setwindowWidth]=useState(window.innerWidth)
  const navigate=useNavigate()
 //input data
  const [dest,setdest]=useState("Cairo")
  const currentDate=format(new Date(),"yyyy-MM-dd")
  const [date,setdate]=useState(currentDate)
  const [maxprice,setmaxprice]=useState("")
  //for translation
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

 
   //i use [windowWidth,setwindowWidth] because in line 50 i use windowWidth 
   // in react slider to know width of window to style arrows of react slider 
   //  depend on it to acieve responsive design
   useEffect(()=>{
   
        const handeleresize=()=>{
          setwindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",handeleresize)
        return()=>window.removeEventListener("resize",handeleresize)
        
   },[])
 
// -----------------------------------------------------------------------------
//function of nextarrow of react slider  
function SampleNextArrow(props) {
    const { className,  onClick } = props;
    return (
      <div
        className={className}
        style={{
          backgroundColor: "rgba(170, 189, 189, 0.96)",
          borderRadius: "10px",
          right:windowWidth<600?"0":null,
          zIndex:"10",
        
        }}
        onClick={onClick}
      />
    );
  }
  //function of prevarrow of react slider
  function SamplePrevArrow(props) {
    const { className, onClick} = props;
    return (
      <div
        className={className}
        style={{
          backgroundColor: "rgba(170, 189, 189, 0.96)",
          borderRadius: "10px",
          left:windowWidth<600?"0":null,
          zIndex:"10",
        
        }}
        onClick={onClick}
      >hi</div>
    );
  }
  // -----------------------------------------------------------------------------------------------------
  //react slider responsiveess
  const settings = {
    dots: false,
    arrows: true,
    onInit: () => {
      // Use JavaScript to target slick arrow and style it
      const arrows = document.querySelectorAll('.slick-prev:before, .slick-next:before');
      arrows.forEach((arrow) => {
        arrow.style.color = 'red'; // Direct styling using JavaScript
      });
    },
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  
  return (
    <>
    <Helmet>
       <title>{t("Home")}</title>
     </Helmet>
    
     



{/* -------------------------------------search part--------------------------------------------------------------------------- */}
     <div className='relative h-[85vh] w-[100vw] '>
       <video   autoPlay muted loop className=' h-full w-full object-cover'>  
           <source src="./videos/HomeMain3.mp4" type='video/mp4'  />
         </video>
       </div>
     
      {/* -------------------------------------- */}
     <div className={`absolute flex flex-col ${currentLanguage=="ar"?"rtl sm:pr-5 sm:right-6  pr-4 ":"ltr  sm:pl-5 sm:left-6  pl-4 "}  top-1/3  w-full   md:mx-20`}>
       <p className={`text-md  text-white xl:text-xl ${currentLanguage=="ar"?"hidden":"block"}`}>OUR PACKAGES</p>
       <h1 className='text-2xl font-bold text-white mt-5 lg:text-5xl'>{t("Search Your Holiday Hotel")} </h1>
      
       <div className='bg-white  rounded-lg  grid grid-cols-3 h-auto w-[89vw] mt-5 py-1 px-3  md:w-2/3' >
         {/* ---------------------------- */}
          <div className='pt-3'>
            <h4 className='text-slate-500  text-xs'>{t("Search Dest")}</h4>
            <select type="text" onChange={(e)=>{setdest(e.target.value)}} value={dest}  className='w-full py-1 px-4 mt-2   outline-0 bg-slate-200 rounded-xl h-[4vh]' >
              <option value="Cairo">{t("Cairo")}</option>
              <option value="Alex">{t("Alex")}</option>
              <option value="MarsaMatroh">{t("MarsaMatroh")}</option>   
              <option value="BorSaid">{t("BorSaid")}</option>
              <option value="Hardage">{t("Hardaga")}</option>
              <option value="SharmElshike">{t("SharmElshike")}</option>
              <option value="Dahab">{t("Dahab")}</option>
              <option value="Elgona">{t("Elgona")}</option>
              <option value="Aswan">{t("Aswan")}</option>
              <option value="Aksor">{t("Aksor")}</option>    
              <option value="MasrAlam">{t("Masr Alam")}</option>   
            </select>
          </div>
          {/* ------------------------- */}
          <div className='px-2 pt-3'>
            <h4 className='text-slate-500 text-xs ms-1'>{t("Select Date")}</h4>
            <input type="date" onChange={(e)=>{setdate(e.target.value)}} value={date} className='w-full p-4   p-2 mt-2  outline-0 bg-slate-200 rounded-xl  h-1/3' />
          </div>
          {/* ------------------------------- */}
          <div className=' px-1 pt-3'>
            <h4 className='text-slate-500 text-xs'>{t("Max Price")}</h4>
            <div className='flex h-1/3'>
            <input type="number" min="15"  value={maxprice} onChange={(e)=>{setmaxprice(e.target.value)}}  className={currentLanguage=="ar"?'w-full p-4  p-2 mt-2  outline-0 bg-slate-200 rounded-xl  h-full rtl':'w-full p-4  p-2 mt-2  outline-0 bg-slate-200 rounded-xl  h-full'} />
            <div>
            
            <h4 className='mt-2 ms-2 bg-cyan-100 rounded-xl cursor-pointer texr-white p-1' onClick={()=>{ navigate("/hotels",{state:{city:dest,maxprice:maxprice}})}}>{t("Go")}</h4>
          
            </div>
            </div>
          </div>
          {/* ------------------------------- */}
            
          </div>
     
      
     </div>
{/* -------------------------------------------------Home Part----------------------------------------------------- */}
 
 

    <div className="p-3 px-2  ">
  <h4 className={` font-bold  ${currentLanguage=="ar"?"rtl mr-2 xl:mr-20":"ltr ml-5"} text-xl xl:text-2xl dark:text-white`}>{t("Explore stays in popular destinations")}</h4>
  <div className="  slider-container w-[92vw]  ml-1 mt-5 md:ml-6">
  <Slider  {...settings}>  
     {/* ------------------------ */}
     <div className="mt-1 relative h-[23vh] cursor-pointer px-1">
       <Link to="/hotels" state={{city:"Alex"}}><img loading="lazy" className='rounded w-full h-full p-2  rounded-2xl' src="https://aqaryamasr.com/blog/wp-content/uploads/2023/02/11.jpg"  alt="alex-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Alex")}</h4>
     </div>
     {/* ------------------------------ */}
     <div className="mt-1 relative h-[23vh] cursor-pointer  px-1">
     <Link to="/hotels"state={{city:"Elgona"}}><img loading="lazy" src="https://th.bing.com/th/id/OIP.xQI-gG0DG4ep36r5v8IH5QHaE-?rs=1&pid=ImgDetMain" className='p-2 rounded w-full  rounded-2xl h-full ' alt="elgona-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Elgona")}</h4>
     </div>
     {/* --------------------------------- */}
     <div className="mt-1 relative h-[23vh] cursor-pointer px-1">
     <Link to="/hotels" state={{city:"MasrAlam"}}><img loading="lazy" src="https://th.bing.com/th/id/R.6db35784096181d8663f88819a241620?rik=qE9yuHVJNgzCAg&pid=ImgRaw&r=0" className='p-2 rounded w-full  rounded-2xl h-full ' alt="masralam-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Masr Alam")}</h4>
     </div>
      {/* --------------------------------- */}
      <div className="mt-1 relative h-[23vh] cursor-pointer px-3 ">
      <Link to="/hotels" state={{city:"MarsaMatroh"}}><img loading="lazy" src="https://th.bing.com/th/id/R.280dba123d246337cf29d167e38cf3ec?rik=URKi8RnnarqEFA&pid=ImgRaw&r=0" className='p-2 rounded w-full  rounded-2xl h-full ' alt="dahab-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("MarsaMatroh")}</h4>
     </div>
       {/* --------------------------------- */}
        <div className="mt-1 relative h-[23vh] cursor-pointer px-1" >
        <Link to="/hotels" state={{city:"Hardaga"}}><img loading="lazy" src="https://aqaryamasr.com/blog/wp-content/uploads/2023/02/11.jpg" className='p-2 rounded w-full  rounded-2xl h-full ' alt="marsamatroh-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Hardaga")}</h4>
     </div>
     {/* --------------------------------- */}
     <div className="mt-1 relative h-[23vh] cursor-pointer px-1" >
     <Link to="/hotels" state={{city:"SharmElshick"}}><img loading="lazy" src="https://th.bing.com/th/id/OIP.vZv90dR8NHYYLmF0uE_OmAHaE8?rs=1&pid=ImgDetMain" className='p-2 rounded w-full  rounded-2xl h-full ' alt="marsamatroh-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("SharmElshike")}</h4>
     </div>
     {/* --------------------------------- */}
    
     <div className="mt-1 relative h-[23vh] cursor-pointer px-1" >
     <Link to="/hotels" state={{city:"Aksor"}}><img loading="lazy" src="https://th.bing.com/th/id/OIP.vulF9Wn4xJ_2kfukO5tZLwHaE8?rs=1&pid=ImgDetMain" className='p-2 rounded w-full  rounded-2xl h-full ' alt="marsamatroh-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Aksor")}</h4>
     </div>
     {/* --------------------------------- */}
     <div className="mt-1 relative h-[23vh] cursor-pointer px-1">
     <Link to="/hotels" state={{city:"Aswan"}}><img loading="lazy" src="https://th.bing.com/th/id/R.c0e2ca7f3c626704dd5299b30de3eec3?rik=oG5rPnZVTXzRIw&pid=ImgRaw&r=0" className='p-2 rounded w-full  rounded-2xl h-full ' alt="marsamatroh-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Aswan")}</h4>
     </div>
     {/* --------------------------------- */}
     
    
    </Slider>
     
   
   </div>
     </div>
 {/* -------------------------------------------------------------------------- */}
  
    <div className="py-5 mt-2 px-2">
    <h4 className={`font-bold text-xl ${currentLanguage=="ar"?"rtl mr-2 xl:mr-20":"ltr ml-5"} xl:text-2xl dark:text-white`}>{t("Suggested Hotels")}</h4>
    <div className="slider-container ml-1 mt-5 w-[92vw] md:ml-6">
     <Slider  {...settings}>
      {   
       Hotels["Cairo"].map((element)=>{
         return(<Hotel hotel={element} key={element.id} />)      
       })
      }
       </Slider>
     </div>
    
 
 
    </div>
 
 {/* ----------------------------------------------------------------------------------- */}
 <div className="py-2 px-2">
    <h4 className={` ${currentLanguage=="ar"?"rtl mr-2 xl:mr-10":"ltr ml-5"}  font-bold  text-xl xl:text-2xl dark:text-white`} >{t("Suggested Cities To Reserve Hotels")}</h4>
   {/* --------------------------------------------------------------- */}
   <div className="grid grid-cols-1 gap-5 w-[92vw] ml-3  mr-2 mt-3 font-bold text-2xl  md:grid-cols-2 md:ml-10 ">   
     <div className="mt-1 relative h-[35vh] cursor-pointer hover:opacity-70 lg:h-[54vh]">
     <Link to="/hotels" state={{city:"Cairo"}}> <img loading="lazy" className='rounded w-full h-full  rounded-2xl' src="https://estateofcyprus.com/wp-content/uploads/2022/07/new_9723fd66547a38c55dafd5df6f2fb646.jpg"  alt="maka-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Cairo")}</h4>
     </div>
     {/* --------------------------- */}
     <div className="mt-1 relative h-[35vh] cursor-pointer hover:opacity-70 lg:h-[54vh]">
     <Link to="/hotels" state={{city:"Aswan"}}> <img loading="lazy" src="https://th.bing.com/th/id/OIP.UwmTSmAD-SE0DQqdetaeOAHaEw?rs=1&pid=ImgDetMain" className='rounded w-full  rounded-2xl h-full ' alt="elmadina-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Aswan")}</h4>
     </div>
 
   </div>
   {/* ---------------------------------------------------------------------- */}
   <div className="grid grid-cols-1 w-[88vw] gap-5 ml-3 mr-2 w-[92vw] mt-8 font-bold text-2xl md:grid-cols-3 md:ml-10 ">   
     <div className="mt-1 relative h-[25vh] cursor-pointer hover:opacity-70 lg:h-[40vh] ">
     <Link to="/hotels" state={{city:"Aksor"}}><img loading="lazy" className='rounded w-full h-full  rounded-2xl' src="https://th.bing.com/th/id/OIP.ttSW_AvNArnMIECE6sx7FgHaFU?rs=1&pid=ImgDetMain"  alt="jaddah-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Aksor")}</h4>
     </div>
     {/* ------------------------------ */}
     <div className="mt-1 relative h-[25vh] cursor-pointer  hover:opacity-70 lg:h-[40vh]">
     <Link to="/hotels" state={{city:"BorSaid"}}><img loading="lazy" src="https://cdn.sandals.com/sandals/v12/images/resorts/srb/home/slider-inclusions/coconut-grave.jpg" className='rounded w-full  rounded-2xl h-full ' alt="dubai-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("BorSaid")}</h4>
     </div>
     {/* --------------------------------- */}
     <div className="mt-1 relative h-[25vh] cursor-pointer hover:opacity-70 lg:h-[40vh]">
     <Link to="/hotels" state={{city:"Dahab"}}><img loading="lazy" src="https://th.bing.com/th/id/OIP.VR0-x_pckYR9fa8AsJm6gQHaE8?w=1200&h=801&rs=1&pid=ImgDetMain" className='rounded w-full  rounded-2xl h-full ' alt="estanboul-image"/></Link>
       <h4 className={`absolute top-5  ${currentLanguage=="ar"?"rtl right-5":"ltr left-10"} text-2xl text-white`}>{t("Dahab")}</h4>
     </div>
 
   </div>
   {/* ------------------------------------------------------------------- */}
     </div>
 {/* ---------------------------------------------------------------------------------------- */}
 <div className="container hidden py-5   md:ml-10 xl:block ">
     <div className="grid grid-rows-1  relative w-[92vw]  h-[90vh] ">
      <img className="opacity-70 rounded-xl w-full h-full" loading="lazy"  src="https://fsmag-ecs.paceinteractive.com/magazine/wp-content/uploads/2017/04/MFL_176_new.jpg" alt="background-image"/>
      <h4 className={`text-4xl font-bold absolute text-white top-20 ${currentLanguage=="ar"?"rtl right-20":"ltr left-20"}`}>{t("Top deals for a last minute getaway")}</h4>
      <h4 className={`${currentLanguage?"rtl right-20":"ltr left-20"} text-white absolute top-32  font-bold `}>{t("Showing deals for:14 Dec - 16 Dec")}</h4>
      <div className="grid grid-cols-4  gap-1 absolute top-40 left-20 me-20 ">
        {
       
         Hotels["Alex"].slice(0,4).map((element)=>{
           return(<Hotel hotel={element} key={element.id} text="white"/>)      
         })
        }
      
      </div>
      </div>
    </div>
 {/* ------------------------------------------------------------------------------------------------ */}
 <div className="  py-5 mt-10 px-2 ">
    <h4 className={` ${currentLanguage=="ar"?"rtl mr-2 xl:mr-20":"ltr ml-5"} font-bold text-2xl dark:text-white`}>{t("Stay at our top unique properties")}</h4>
    <h4 className={`${currentLanguage=="ar"?"rtl mr-2 xl:mr-20":"ltr ml-5"} mt-2 dark:text-white`}>{t("From castles and villas to boats and igloos, we've got it all")}</h4>
    <div className="slider-container  w-[92vw]   mt-5 md:ml-6">
    <Slider  {...settings}>
      {
       
       Hotels["Cairo"].map((element)=>{
         return(<HotelDesign2 hotel={element} key={element.id}/>)      
       })
      }
        </Slider>
     </div>
    
 {/*------------------------------------------------------------------------------------------------  */}
  <div className=" py-5 mt-2">
    <h4 className={` ${currentLanguage=="ar"?"rtl mr-2 xl:mr-20":"ltr ml-5"} font-bold text-2xl dark:text-white`}>{t("Looking for the perfect stay?")}</h4>
    <h4 className={` ${currentLanguage=="ar"?"rtl mr-2 xl:mr-20":"ltr ml-5"} mt-2 dark:text-white`}>{t("Travellers with similar searches booked these properties")}</h4>
    <div className=" slider-container w-[92vw]  mt-5 md:ml-6">
     <Slider  {...settings}>
      {
       
       Hotels["Hardage"].map((element)=>{
         return(<HotelDesign3 hotel={element} key={element.id}/>)      
       })
      }
      </Slider>
     </div>
    
   
    </div>
    </div>
 {/* ----------------------------------------------------------------------------------------------- */}
 
 
 

    </>
   )
}

export default Home