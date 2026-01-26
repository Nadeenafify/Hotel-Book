import { IoHome, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  return (
    <>
      <Helmet>
        <title>{t("contact.title")}</title>
      </Helmet>

      <div className={`container px-3 md:px-20 py-10 ${currentLanguage === "ar" ? "rtl" : "ltr"}`}>

        <h1 className="text-xl sm:text-3xl font-bold  dark:text-white">
          {t("contact.header")}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-1 mb-8 text-sm sm:text-base">
          {t("contact.description")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

         
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
            <h4 className="font-bold text-lg mb-6 dark:text-white">{t("contact.sendMessage")}</h4>
            <form className="flex flex-col gap-4">
              <input
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                type="text"
                placeholder={t("contact.name")}
              />
              <input
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                type="email"
                placeholder={t("contact.email")}
              />
              <input
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                type="tel"
                placeholder={t("contact.phone")}
              />
              <textarea
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none h-32"
                placeholder={t("contact.comment")}
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition"
              >
                {t("contact.submit")}
              </button>
            </form>
          </div>

          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col gap-6">
            <h4 className="font-bold text-lg dark:text-white">{t("contact.getInTouch")}</h4>

            <div className="flex items-start gap-3">
              <IoHome className="text-cyan-500 text-2xl" />
              <p className="dark:text-white text-sm sm:text-base">{t("contact.address")}</p>
            </div>

            <div className="flex items-center gap-3">
              <IoCall className="text-cyan-500 text-2xl" />
              <a href="tel:+9177234608" className="dark:text-white text-sm sm:text-base">
                +91 77234608
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-cyan-500 text-2xl" />
              <a href="mailto:Demo@Company.com" className="dark:text-white text-sm sm:text-base">
                Demo@Company.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <IoIosTimer className="text-cyan-500 text-2xl" />
              <p className="dark:text-white text-sm sm:text-base">{t("contact.officeHours")}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
