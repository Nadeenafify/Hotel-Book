import { useEffect, useState } from "react";
import {
  MdOutlineTravelExplore,
  MdOutlineDarkMode,

} from "react-icons/md";
import { FaList } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../contextApi/AuthContext";
import MobileHeaderList from "./MobileHeaderList";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("en");
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || "en";
  const { isLogged, Email, setisLogged, setEmail } = useAuthContext();

  useEffect(() => {
    
    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("dark", isDark);
    i18n.changeLanguage(language);
  }, [isDark, language,i18n]);


  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        <div className="flex items-center gap-2">
          <MdOutlineTravelExplore className="text-cyan-500 text-3xl" />
          <h1 className="font-extrabold text-2xl dark:text-white">
            Travel
          </h1>
        </div>


        <nav className="hidden md:flex items-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/offers", label: "Offers" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.label} to={item.to}>
              <span className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition">
                {t(`nav.${item.label}`)}
              </span>
            </Link>
          ))}

          {isLogged && (
            <Link to="/favourite">
              <span className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition">
                {t("nav.Favourite")}
              </span>
            </Link>
          )}

          {/* Dark mode */}
          <MdOutlineDarkMode
            onClick={() => setIsDark(!isDark)}
            className="cursor-pointer text-xl dark:text-white hover:text-cyan-500 transition"
          />

         
          <div className="relative">
           
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border 
               dark:border-gray-600 dark:text-white 
               hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <GrLanguage />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </button>

           
            {langOpen && (
              <div
                className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 
                 border dark:border-gray-700 rounded-xl shadow-lg
                 overflow-hidden animate-scaleIn"
              >
                {["en", "ar"].map((lng) => (
                  <button
                    key={lng}
                    onClick={() => {
                      setLanguage(lng);
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm 
            hover:bg-cyan-500 hover:text-white transition
            ${language === lng ? "font-bold text-cyan-500" : "dark:text-white"}`}
                  >
                    {lng === "en" ? "English " : "العربية "}
                  </button>
                ))}
              </div>
            )}
          </div>



          
          <Link to={!isLogged ? "/login" : ""}>
            <span className="px-3 py-1 border rounded-full text-sm dark:text-white hover:bg-cyan-500 hover:text-white transition">
              {isLogged ? Email?.slice(0, 1).toUpperCase() : t("nav.signin")}
            </span>
          </Link>

          {isLogged && (
            <button
              onClick={() => {
                setisLogged(false);
                localStorage.setItem("isLogged", "false")
                localStorage.setItem("email", JSON.stringify(Email))
                setEmail("");
              }}
              className="text-sm text-red-500 hover:underline"
            >
              {t("nav.logout")}
            </button>
          )}
        </nav>


        <FaList
          className="md:hidden text-2xl cursor-pointer dark:text-white"
          onClick={() =>
            (document.querySelector(".left-list").style.display = "flex")
          }
        />

      </div>


      <MobileHeaderList
        email={Email}
        currentLanguage={currentLanguage}
        t={t}
        isDark={isDark}
        setIsDark={setIsDark}
        language={language}
        setLanguage={setLanguage}
        isLogged={isLogged}
        setIsLogged={setisLogged}
        setEmail={setEmail}
        onClose={() =>
          (document.querySelector(".left-list").style.display = "none")
        }
      />




    </header>
  );
};

export default Header;
