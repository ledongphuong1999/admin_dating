import { Component } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './login.css'


export default function Login() {
    let history = useHistory()
    let login = () => {
        localStorage.setItem("accessToken", true)
        history.replace("/")
    }

    return (
        <div class="containerlogin" onclick="onclick">
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="center">
                <h2>Admin Sign In</h2>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button className="loginBtn" onClick={login}>LOGIN</button>
                <h2>&nbsp;</h2>
            </div>
        </div>
    )
}