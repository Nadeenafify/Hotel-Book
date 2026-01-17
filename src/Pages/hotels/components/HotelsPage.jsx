import { Helmet } from 'react-helmet';
import { useHotels } from '../hooks/useHotels';
import HotelCardHorizontal from './HotelCardHorizontal';
import { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

const HotelsPage = () => {
  const {
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
    maxPrice,
    t,
    currentLanguage,
    isList,
    setIsList,
  } = useHotels();

  // Mobile filter dropdown
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter panel content
  function FilterContent() {
    return (
      <>
        <h4 className="font-bold text-lg mb-4 dark:text-white">{t("hotelsPage.filterBy")}</h4>

        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 dark:text-white cursor-pointer">
            <input type="checkbox" checked={wifi} onChange={(e) => setWifi(e.target.checked)} className="w-5 h-5 accent-cyan-500" />
            {t("hotelsPage.wifi")}
          </label>
          <label className="flex items-center gap-3 dark:text-white cursor-pointer">
            <input type="checkbox" checked={pool} onChange={(e) => setPool(e.target.checked)} className="w-5 h-5 accent-cyan-500" />
            {t("hotelsPage.pool")}
          </label>
          <label className="flex items-center gap-3 dark:text-white cursor-pointer">
            <input type="checkbox" checked={gym} onChange={(e) => setGym(e.target.checked)} className="w-5 h-5 accent-cyan-500" />
            {t("hotelsPage.gym")}
          </label>
          <label className="flex items-center gap-3 dark:text-white cursor-pointer">
            <input type="checkbox" checked={rest} onChange={(e) => setRest(e.target.checked)} className="w-5 h-5 accent-cyan-500" />
            {t("hotelsPage.restaurant")}
          </label>
        </div>

        <h4 className="font-bold text-lg mt-6 mb-2 dark:text-white">{t("hotelsPage.pricePerNight")}</h4>
        <div className="flex gap-3 flex-col md:flex-row">
          <input
            type="number"
            min="1"
            max={maxPrice}
            value={fromPrice}
            onChange={(e) => setFromPrice(e.target.value)}
            placeholder={t("hotelsPage.min")}
            className={`w-full md:w-1/2 p-2 rounded-lg border ${
              Number(toPrice) < Number(fromPrice) ? "border-red-500" : "border-gray-300"
            }`}
          />
          <input
            type="number"
            min="1"
            max={maxPrice}
            value={toPrice}
            onChange={(e) => setToPrice(e.target.value)}
            placeholder={t("hotelsPage.max")}
            className={`w-full md:w-1/2 p-2 rounded-lg border ${
              Number(toPrice) < Number(fromPrice) ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {Number(toPrice) < Number(fromPrice) && (
          <p className="text-red-500 text-sm mt-2">{t("hotelsPage.priceValidation")}</p>
        )}
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t("hotelsPage.title")}</title>
      </Helmet>

      <div className="py-8 px-4 md:px-10 dark:bg-gray-900 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md"
            >
              <FiFilter className="text-lg" />
              {t("hotelsPage.filters")}
            </button>

            {showMobileFilters && (
              <div className="mt-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 space-y-4">
                <FilterContent />
              </div>
            )}
          </div>

          {/* Sidebar (Desktop) */}
          <div className="hidden lg:block lg:w-1/4 w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5">
              <FilterContent />
            </div>
          </div>

          {/* Hotels List/Grid */}
          <div className="lg:w-3/4 w-full flex flex-col gap-4">
            {/* List/Grid Toggle */}
            <div className="flex justify-end gap-2 mb-4">
              <button
                onClick={() => setIsList(true)}
                className={`px-3 py-1 rounded-lg font-semibold transition ${
                  isList ? "bg-cyan-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                }`}
              >
                {t("hotelsPage.list")}
              </button>
              <button
                onClick={() => setIsList(false)}
                className={`px-3 py-1 rounded-lg font-semibold transition ${
                  !isList ? "bg-cyan-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                }`}
              >
                {t("hotelsPage.grid")}
              </button>
            </div>

            {/* Hotels */}
            <div className={isList ? "flex flex-col gap-4" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}>
              {filteredHotels.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
                  {t("hotelsPage.noHotelsFound")}
                </p>
              ) : (
                filteredHotels.map((hotel) => (
                  <HotelCardHorizontal
                    key={hotel.id}
                    ele={hotel}
                    currentLanguage={currentLanguage}
                    islist={isList}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelsPage;
