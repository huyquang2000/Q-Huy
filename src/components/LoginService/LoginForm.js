import { t } from 'i18next';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchLang } from '../../Redux/Action/actions';
import { useTranslation } from 'react-i18next';

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
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const langMode = useSelector((state) => state.Lang.langis)
    const [lang, setLang] = useState(langMode)
    const handleLang = (e) => {
        setLang(e.target.value)
        i18n.changeLanguage(e.target.value)
        dispatch(SwitchLang(
            e.target.value
        ))
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
                        <input className='btn-inp'placeholder={t('login.account_input')}
                            ref={accountinput} type="text" name="usernumber" id="usernumber"
                            required onChange={(e) => setDetails({ ...details, usernumber: e.target.value })}
                            value={details.usernumber}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password"></label>
                        <br />
                        <input className='btn-inp'placeholder={t('login.password_input')}
                            type="password" name="password" id="password"
                            required onChange={(e) => setDetails({ ...details, password: e.target.value })}
                            value={details.password}></input>
                    </div>
                    {(error != "") ? (<div className='error'>{t('login.error')}<br />{t('login.try_again')}</div>) : ""}
                    <input className='btn-inp' type="submit" value={t('login.btn_login')}></input>
                    <div className='login-flex'>
                        <div ><a href='#' className='login-text'>{t('login.open_newacc')}</a></div>
                        <div ><a href='#' className='login-text'>{t('login.forgot_pw')}</a></div>
                    </div>
                    <div className='login-flex'>
                    <img id="flag-vn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg"/><div className='lang'>{t('login.vi_lang')}</div>
                    <img id="flag-us" src="https://online.bvsc.com.vn/sso/images/uk.svg"/><div className='lang'>{t('login.en_lang')}</div>
                    </div>
                    <hr id="line" />
                    <div className="contact">{t('login.contact')}</div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm