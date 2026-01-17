import React from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineFavoriteBorder } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { FaUser } from "react-icons/fa";

const MobileHeaderList = ({
  email,
  currentLanguage,
  t,
  isDark,
  setIsDark,
  language,
  setLanguage,
  isLogged,
  setIsLogged,
  setEmail,
  onClose,
}) => {
  return (
    <nav
      className={`left-list md:hidden fixed top-0 left-0 h-screen w-2/3 bg-white dark:bg-gray-800 shadow-xl z-50 p-6 flex flex-col gap-5 ${currentLanguage === "ar" ? "rtl" : "ltr"
        }`}
    >
      <IoIosCloseCircleOutline
        className="self-end text-3xl cursor-pointer dark:text-white"
        onClick={onClose}
      />

      {[
        { icon: IoHomeOutline, label: "Home", to: "/" },
        { icon: BiSolidOffer, label: "Offers", to: "/offers" },
        { icon: IoMdContact, label: "Contact", to: "/contact" },
      ].map(({ icon: Icon, label, to }) => (
        <Link key={label} to={to} className="flex items-center gap-3">
          <Icon className="dark:text-white" />
          <span className="dark:text-white">{t(`nav.${label}`)}</span>
        </Link>
      ))}

      <div className="flex items-center gap-3">
        <MdOutlineDarkMode className="dark:text-white" />
        <button
          onClick={() => setIsDark(!isDark)}
          className="dark:text-white"
        >
          {isDark ? t("theme.light") : t("theme.dark")}
        </button>
      </div>

      <div className="flex items-center gap-3">
        <GrLanguage className="dark:text-white" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-transparent dark:text-white outline-none"
        >
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>

      {!isLogged ? (
        <Link to="/login" className="flex items-center gap-3">
          <FaUser className="dark:text-white" />
          <span className="dark:text-white">{t("Sign In")}</span>
        </Link>
      ) : (
        <>


          <Link to="/favourite" className="flex items-center gap-3">
            <MdOutlineFavoriteBorder className="dark:text-white" />
            <span className="dark:text-white">{t("nav.Favourite")}</span>
          </Link>


          <button
            onClick={() => {
              setIsLogged(false);
              localStorage.setItem("isLogged", "false")
              localStorage.setItem("email", JSON.stringify(email))
              setEmail("");
            }}
            className="flex items-center gap-3 text-red-400"
          >
            <FaUser />
            {t("nav.logout")}
          </button>

        </>
      )}
    </nav>
  );
};

export default MobileHeaderList;
