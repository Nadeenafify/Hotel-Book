import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next';

const Book = () => {
  const { state } = useLocation()

  // form fields
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [cardNum, setCardNum] = useState("")
  const [expDate, setExpDate] = useState("")
  const [cvn, setCvn] = useState("")
  const [numOfRooms, setNumOfRooms] = useState(1)
  const [numOfNights, setNumOfNights] = useState(1)

  // translation
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  // calculate total
  const total = Number(state?.hotel?.price_per_night) * Number(numOfRooms) * Number(numOfNights);

  return (
    <>
      <Helmet>
        <title>{t("booking.title")}</title>
      </Helmet>

      <div className={`min-h-screen py-10 px-4 md:px-10 dark:bg-gray-900`}>
        <div className={`${currentLanguage === "ar" ? "rtl text-right" : "ltr text-left"} mb-8`}>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white">
            {t("booking.title")}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {t("booking.description")}
          </p>
        </div>

        <form className={`max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col gap-6`}>


          <h2 className="text-xl font-bold dark:text-white">{t("booking.personalDetails")}</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-semibold dark:text-white">{t("booking.name")}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="font-semibold dark:text-white">{t("booking.email")}</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="font-semibold dark:text-white">{t("booking.phone")}</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9+()-]*"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold dark:text-white">{t("booking.numRooms")}</label>
                <input type="number" min="1" max={state?.hotel?.available_rooms} value={numOfRooms} onChange={(e) => setNumOfRooms(e.target.value)}
                  className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="font-semibold dark:text-white">{t("booking.numNights")}</label>
                <input type="number" min="1" value={numOfNights} onChange={(e) => setNumOfNights(e.target.value)}
                  className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-6 dark:text-white">{t("booking.creditCard")}</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-semibold dark:text-white">{t("booking.cardNumber")}</label>
              <input type="tel" value={cardNum} onChange={(e) => setCardNum(e.target.value)} maxLength="16"
                className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="font-semibold dark:text-white">{t("booking.expDate")}</label>
                <input type="date" value={expDate} onChange={(e) => setExpDate(e.target.value)}
                  className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="font-semibold dark:text-white">CVN2</label>
                <input type="tel" value={cvn} onChange={(e) => setCvn(e.target.value)} maxLength="3"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label className="font-semibold dark:text-white">{t("booking.total")}</label>
                <input type="text" value={`$${total}`} readOnly
                  className="w-full mt-1 p-3 rounded-lg bg-gray-200 dark:bg-gray-600 dark:text-white cursor-not-allowed" />
              </div>
            </div>
          </div>

          <button type="submit" className="mt-6 w-full md:w-1/2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition">
            {t("booking.pay")}
          </button>
        </form>
      </div>
    </>
  )
}

export default Book;
