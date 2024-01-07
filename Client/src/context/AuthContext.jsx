import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) =>{
    const [user,setUser] = useState(null);
    const [registerError,setRegisterError] = useState(null);
    const [isRegisterLoading,setIsRegisterLoading] = useState(false);
    const [loginError,setLoginError] = useState(null);
    const [isLoginLoading,setIsLoginLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name:"",
        email:"",
        password:"",
    })
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:"",
    })

    useEffect(()=>{
        const userdata = localStorage.getItem("User");
        setUser(JSON.parse(userdata));
    },[]);

    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info);
    },[]);
    const updateLoginInfo = useCallback((info)=>{
        setLoginInfo(info);
    },[]);

    const registerUser = useCallback(async(e)=>{
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await postRequest(`${baseUrl}/users/register`,JSON.stringify(registerInfo))
        if(response.error){
            setIsRegisterLoading(false);
            return setRegisterError(response);
        }
        
        setIsRegisterLoading(false);
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response);
    },[registerInfo]);


    const logoutUser = useCallback(()=>{
        localStorage.removeItem("User");
        setUser(null);
    },[])

    const loginUser = useCallback(async(e)=>{
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);
        const response = await postRequest(`${baseUrl}/users/login`,JSON.stringify(loginInfo));
        setIsLoginLoading(false);
        if(response.error){
            return setLoginError(response);
        }
        localStorage.setItem("User",JSON.stringify(response))
        setUser(response)
    },[loginInfo])

    return (
        <AuthContext.Provider value={{user,registerInfo,updateRegisterInfo,registerUser,registerError,isRegisterLoading,logoutUser,loginUser,loginInfo,updateLoginInfo,loginError,isLoginLoading}}>
            {children}
        </AuthContext.Provider>
    );
}