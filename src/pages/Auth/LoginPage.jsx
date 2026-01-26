import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../contextApi/AuthContext";

const AuthApp = () => {
  const { t, i18n } = useTranslation();
  const { setisLogged, setEmail } = useAuthContext();
  const currentLanguage = i18n.language || "en";
  const isRTL = currentLanguage === "ar";

  const [email, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail(email);
      setisLogged(true);
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("email", JSON.stringify(email));
      navigate("/");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(t("auth.invalidCredentials")); 
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("auth.login")}</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center px-4 dark:bg-gray-900">
        <form
          onSubmit={handleSignIn}
          className={`w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 ${
            isRTL ? "rtl text-right" : "ltr text-left"
          }`}
        >
          
          <h1 className="text-2xl font-bold text-center dark:text-white mb-6">
            {t("auth.login")}
          </h1>

        
          <div className="mb-4">
            <input
              type="email"
              placeholder={t("auth.email")}
              value={email}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

        
          <div className="mb-4">
            <input
              type="password"
              placeholder={t("auth.password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
          >
            {t("auth.signIn")}
          </button>

        
          <p className="mt-6 text-sm text-center dark:text-gray-300">
            {t("auth.noAccount")}{" "}
            <Link
              to="/signUp"
              className="text-cyan-500 hover:underline font-semibold"
            >
              {t("auth.signUp")}
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default AuthApp;
