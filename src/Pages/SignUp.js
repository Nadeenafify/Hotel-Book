import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Importing the auth instance
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { useMyContext } from '../contextApi/ContextApi';

const SignUp = () => {

  //input values
     const [email, setemail] = useState("");
      const [password, setPassword] = useState("");
      const [errorMessage, setErrorMessage] = useState("");

       const navigate = useNavigate();  
//for translation
        const { t, i18n } = useTranslation();
        const currentLanguage = i18n.language || 'en';

        //set values of context Api to show in email header
        const {setisLogged,setEmail}=useMyContext()
        
      // Sign up user
      const handleSignUp = async (e) => {
        e.preventDefault();
        try {
             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
              setisLogged(true)
              setEmail(email)
              navigate("/")//navigate to home
              setErrorMessage("");
           }   
        catch (error) 
        {
    
          console.error("Error signing up:", error.message);
          setErrorMessage(error.message);
        }
      };
  return (
    <>
    <Helmet>
          <title>{t("Sign Up")}</title>
        </Helmet>


        <div className="container py-4">
     
   
         <h1 className="text-center dark:text-white font-bold">{t("Sign Up")}</h1>
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
           

              <div className="flex flex-col gap-2 mt-5">
             
             <button onClick={handleSignUp} className="p-1 rounded bg-cyan-500 px-1 text-white">{t("Sign Up")}</button>
                    
               </div>
               <p className="text-red-500">
                {errorMessage}
                </p>

                
           
     
      </div>
      </div>
    </>
  )
}

export default SignUp