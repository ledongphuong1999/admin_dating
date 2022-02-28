import { Component, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { URLDefault } from "../../api/urlDefault";
import './login.css'


export default function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [msg, setmsg] = useState('');
    let history = useHistory()
    let login = () => {
        axios({
            method: 'POST',
            url: `${URLDefault}/loginAdmin`,
            data: {
                username: username,
                password: password,
            }
        }).then(res => {
            if (res.data.msg) {
                setmsg(res.data.msg);
            } else {
                localStorage.setItem("accessToken", true)
                history.replace("/")
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div class="containerlogin" onclick="onclick">
            <div class="top"></div>
            <div class="bottom"></div>
            <div class="center">
                <h2>Admin Sign In</h2>
                <input
                    type="email"
                    placeholder="email"
                    onChange={event => { setusername(event.target.value) }}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={event => { setpassword(event.target.value) }}
                />
                <button className="loginBtn" onClick={login}>LOGIN</button>
                {msg == '' ? (<></>) : <h5 className="msgStyle">{msg}</h5>}
                <h2>&nbsp;</h2>
            </div>
        </div>
    )
}