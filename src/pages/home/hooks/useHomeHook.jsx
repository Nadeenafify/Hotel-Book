import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";

const useHomeHook = () => {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    const navigate = useNavigate()
    const [dest, setDest] = useState("Cairo")
    const currentDate = format(new Date(), "yyyy-MM-dd")
    const [date, setDate] = useState(currentDate)
    const [maxprice, setMaxprice] = useState("")
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'en';


 
    useEffect(() => {

        const handeleresize = () => {
            setwindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handeleresize)
        return () => window.removeEventListener("resize", handeleresize)

    }, [])

    // -----------------------------------------------------------------------------
    //function of nextarrow of react slider  
    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    backgroundColor: "rgba(170, 189, 189, 0.96)",
                    borderRadius: "10px",
                    right: windowWidth < 600 ? "0" : null,
                    zIndex: "10",

                }}
                onClick={onClick}
            />
        );
    }
    //function of prevarrow of react slider
    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    backgroundColor: "rgba(170, 189, 189, 0.96)",
                    borderRadius: "10px",
                    left: windowWidth < 600 ? "0" : null,
                    zIndex: "10",

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

            const arrows = document.querySelectorAll('.slick-prev:before, .slick-next:before');
            arrows.forEach((arrow) => {
                arrow.style.color = 'red'; 
            });
        },
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 755,
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


    return {


    navigate,
    dest,
    setDest,
    date,
    setDate,
    maxprice,
    setMaxprice,
    windowWidth,
    t,
    i18n,
    currentLanguage,
    settings,
    }
}

export default useHomeHook