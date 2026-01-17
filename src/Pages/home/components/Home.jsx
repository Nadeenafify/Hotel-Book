
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';
import useHomeHook from '../hooks/useHomeHook';
import SearchHotel from './SearchHotel';
import DestenationsSlider from './DestenationsSlider';
import SuggestedHotels from './SuggestedHotels';
import SuggestedCities from './SuggestedCities';
import TopDeals from './TopDeals';



const Home = () => {

  const {
    navigate,
    setDate,
    setMaxprice,
    setDest,
    dest,
    date,
    maxprice,
    t,
    currentLanguage,
    settings,
  } = useHomeHook()


  return (
    <>

      <Helmet>
        <title>{t("Home")}</title>
      </Helmet>


      <SearchHotel
        dest={dest}
        setDest={setDest}
        date={date}
        setDate={setDate}
        maxprice={maxprice}
        setMaxprice={setMaxprice}
        navigate={navigate}
        t={t}
        currentLanguage={currentLanguage}
      />


      <DestenationsSlider
        settings={settings}
      />

      <SuggestedHotels
        settings={settings}
      />


      <SuggestedCities />

      <TopDeals
       settings={settings}
      />

    </>
  )
}

export default Home