import React from "react"
import Home from "./Home"
import { useSelector } from "react-redux"
import { checkLogin } from "../../Redux/Selector/selectors"
import Login from '../../components/LoginService/Login'

export default function ShowHome(){
    const usercheck = useSelector(checkLogin);
    
    if(usercheck){
        return <Home/>
    }else{
        return <Login/>
    }
}