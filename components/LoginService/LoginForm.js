import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ usernumber: "", password: "" });
    const accountinput = useRef(null);
    useEffect(() => {
        accountinput.current.focus();
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div className='form-inner'>
                    <Link to="/Home" className='home-page'>
                        <div className='img-logo'>
                        </div>
                    </Link>
                    <div className='form-group'>
                        <label htmlFor="usernumber"></label>
                        <br />
                        <input className='btn-inp'placeholder='Tài khoản'
                            ref={accountinput} type="text" name="usernumber" id="usernumber"
                            required onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                            value={details.usernumber}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"></label>
                        <br />
                        <input className='btn-inp'placeholder='Mật khẩu'
                            type="password" name="password" id="password"
                            required onChange={(e) => setDetails({ ...details, password: e.target.value })}
                            value={details.password}></input>
                    </div>
                    {(error != "") ? (<div className='error'>Tài khoản hoặc mật khẩu không đúng!<br />Vui lòng thử lại.</div>) : ""}
                    <input className='btn-inp' type="submit" value="Login"></input>
                    <div className='login-flex'>
                        <div ><a href='#' className='login-text'>Open new account</a></div>
                        <div ><a href='#' className='login-text'>Forget password ?</a></div>
                    </div>
                    <div className='login-flex'>
                    <img id="flag-vn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg"/><div className='lang'>Tiếng việt</div>
                    <img id="flag-us" src="https://online.bvsc.com.vn/sso/images/uk.svg"/><div className='lang'>Tiếng anh</div>
                    </div>
                    <hr id="line" />
                    <div className="contact">
                        Liên hệ: (84-24) 3928 8080 - ext.699/(84-28) 3914 6888
                  </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm