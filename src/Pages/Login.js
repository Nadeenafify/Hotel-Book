import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Importing the auth instance
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useMyContext } from '../contextApi/ContextApi';

const AuthApp = () => {
  //for tranlation
   const { t, i18n } = useTranslation();
   const {setisLogged,setEmail}=useMyContext()
   const currentLanguage = i18n.language || 'en';
  
  // -----------------------set data-------------------------------------------------------------------
  
  //input values
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  

 

// ---------------------------------------------------------------------------------------------------------
  // Sign in user
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setEmail(email)
      setisLogged(true)
       navigate("/")
       setErrorMessage("");
      
    } 
    catch (error) {
  
      console.error("Error signing in:", error.message);
      setErrorMessage(error.message);
    }
  };

  
  return (

    <>
        
    <Helmet>
      <title>{t("Login")}</title>
    </Helmet>
    <div className="container py-4">
     
   
         <h1 className="text-center dark:text-white font-bold">{t("Login")}</h1>
          <div className="flex items-center gap-3 flex-col mt-10">
            <input
                 type="email"
                  placeholder={t("Email")}
                  value={email}
                  className={currentLanguage=="ar"?"px-5 rounded p-2 border-0  bg-gray-100 rtl":"ltr px-5 rounded p-2 border-0  bg-gray-100"}
                   onChange={(e) => setemail(e.target.value)}
                   />
                  
                 <input
                    type="password"
                    placeholder={t("Password")}
                    value={password}
                  className={currentLanguage=="ar"?"px-5 rounded p-2 border-0  bg-gray-100 rtl":"ltr px-5 rounded p-2 border-0  bg-gray-100"}
                 onChange={(e) => setPassword(e.target.value)}
                />
           

              <div className="flex flex-col items-center gap-2 mt-5">
              <button onClick={handleSignIn} className="p-1  rounded bg-cyan-500 px-1 text-white">{t("Sign In")}</button>          
              <button  className={`p-1 rounded   dark:text-white px-1 mt-5 ${currentLanguage=="ar"?"rtl":"ltr"}`}> {t("I dont have account")} <Link to="/sign up"><span className="hover:underline text-blue-400">{t("Sign Up")}</span></Link></button>
                    
               </div>
               <p className="text-red-500">
                {errorMessage}
                </p>

                
           
     
      </div>
      </div>
   
    </>
  );
};

export default AuthApp;
