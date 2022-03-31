import React, { useState, useEffect } from 'react'
import logo_header from '../../assets/img/logo_header.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logoutredux, SwitchTheme, SwitchLang, GetUser } from '../../Redux/Action/actions';
import { ImClock } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { BiDownArrow } from 'react-icons/bi';
import home_dark from '../../assets/img/home_dark.png'
import home_light from '../../assets/img/home_light.png'
import '../HomePage/Home.scss';
import { useTranslation } from 'react-i18next';
import '../changeLanguage/i18n'
// import PriceBoard from '../priceBoard/Header/priceBoard1';

function Home() {
  useEffect(() => {
    document.title = "Bảng giá BVSC"
  }, [])
  const clock = {
    color: "white", fontSize: "1.1rem"
  }
  const profileicon = {
    color: "white", fontSize: "1.5em"
  }
  const arrow = {
    color: "white", fontSize: ".8em"
  }
  const current = new Date();
  const date = current.toLocaleDateString();
  const time = current.toLocaleTimeString();

  const themeMode = useSelector((state) => state.Theme.themeMode)
  const [checked, setChecked] = useState(themeMode)
  const handleChangeTheme = (event) => {
    setChecked(event.target.value);
    dispatch(SwitchTheme(
      event.target.value
    ))
  };

  const { t, i18n } = useTranslation();

  const langMode = useSelector((state) => state.Lang.langis)
  const [lang, setLang] = useState(langMode)
 
  const handleLang = (e) => {
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    dispatch(SwitchLang(
        e.target.value
    ))
}

  const dispatch = useDispatch();
  const hadleLogout = () => {
    dispatch(Logoutredux(false))
    dispatch(GetUser(''))
  }

  const [showlist, setShowlist] = useState(false)

  const toggleshowlist = () => {
    if (showlist == false) {
      setShowlist(true)
    } else {
      setShowlist(false)
    }
  }

  const User = useSelector((state) => state.Login.usernumber)


  const Accountdropdown = () => {
    return (
      <div className='account-dropdownlist'>
         {/* <PriceBoard /> */}
        <div className={checked === 'dark' ? 'wrap-pane-setting-dark' : 'wrap-pane-setting-light'}>
          <div className='usernumber'> {User}</div>
          <div className='setting-box'>
            <div className='wrap-setting'>
              <h5>{t("head.theme")}</h5>
              <div className='setting-pane'>
                <div className='setting-option'>
                  <input type='radio'name='radio_theme'value='light' checked={checked === 'light'} onChange={ handleChangeTheme }/>
                  <span>{t("head.light")}</span>
                </div>
                <div className='setting-option'>
                  <input type='radio'name='radio_theme' value='dark' checked={checked === 'dark'} onChange={ handleChangeTheme }/>
                  <span>{t("head.dark")}</span>
                </div>
              </div>
            </div> 
          </div>
          <div className='setting-box'>
            <div className='wrap-setting'>
              <h5>{t("head.lang")}</h5>
              <div className='setting-pane'>
                <div className='setting-option'>
                  <input type='radio' name='radio_lang' value='vi' checked={lang === 'vi'} onChange={ handleLang } />
                  <span></span><img id="flagvn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg"/>
                </div>
                <div className='setting-option'>
                  <input type='radio' name='radio_lang' value='en' checked={lang === 'en'} onChange={ handleLang } />
                  <span></span><img id="flagus" src="https://online.bvsc.com.vn/sso/images/uk.svg"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <header>
        <div className={checked === 'light' ? 'header__home-light' : 'header__home-dark'}>
          <img className='logo_header' src={logo_header} />
          <div className='date-clock'>
            <ImClock style={clock} />
            <span>&nbsp;</span>
            <span>{date}</span>
            <span>&nbsp;</span>
            <span>{time}</span>
          </div>
          <marquee className='moving-band' >
            <p className='marquee-header'>
              <span className="marquee-item">{t("head.1")}</span>
              <span className="marquee-item">{t("head.2")}</span>
              <span className="marquee-item">{t("head.3")} </span>
              <span className="marquee-item">16.702</span>
              <span className="marquee-item">{t("head.9")}</span>
              <span className="marquee-item">{t("head.4")}</span>
              <span className="marquee-item">{t("head.5")}</span>
              <span className="marquee-item">{t("head.6")}</span>
              <span className="marquee-item">{t("head.7")}</span>
              <span className="marquee-item">{t("head.8")}</span>
              <span className="marquee-item">{t("head.1")}</span>
              <span className="marquee-item">{t("head.2")}</span>
              <span className="marquee-item">{t("head.5")}</span>
              <span className="marquee-item">{t("head.6")}</span>
              <span className="marquee-item">{t("head.7")}</span>
              <span className="marquee-item">{t("head.8")}</span>
              <span className="marquee-item">{t("head.1")}</span>
              <span className="marquee-item">{t("head.2")}</span>
              <span className="marquee-item">{t("head.3")}</span>
              <span className="marquee-item">16.702</span>
              <span className="marquee-item">{t("head.9")}</span>
              <span className="marquee-item">{t("head.4")}</span>
              <span className="marquee-item">{t("head.5")} </span>
              <span className="marquee-item">{t("head.6")}</span>
              <span className="marquee-item">{t("head.7")}</span>
              <span className="marquee-item">{t("head.8")}</span>
            </p>
          </marquee>
          <div className='log-in'>
            <Link to='/'><button className='log-in-btn' onClick={hadleLogout}>{t("head.logout")}</button></Link>
            <div className='wrap'>
              <button className='toggle-info' onClick={toggleshowlist}>
                <CgProfile style={profileicon} /><BiDownArrow style={arrow} />
              </button>
            </div>
          </div>
        </div>
        <div >  {showlist ? <Accountdropdown/> : ''}</div>
      </header>
      <div className={checked === 'light' ? 'container-light' : 'container-dark'}>
        <br />
        <div className='home-img'>
          <img src={checked === 'dark' ? home_dark : home_light} alt='Bieu do' className='chart-img' />
          <body>
            <div className="menu-tab">
              <ul>
                <li className="search-tab">
                  <input type="text" className="search" placeholder="Tìm kiếm mã CK"/>
                 </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">Danh mục theo dõi</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="Tạo danh mục mới..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">VN30</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="HOSE..."/>
                    <input type="text"  className="search" placeholder="VN30..."/>
                    <input type="text"  className="search" placeholder="Giao dịch thỏa thuận..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">HNX</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="HNX..."/>
                    <input type="text"  className="search" placeholder="HNX30..."/>
                    <input type="text"  className="search" placeholder="Giao dịch thỏa thuận..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">UPCOM</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="UPCOM..."/>
                    <input type="text"  className="search" placeholder="Giao dịch thỏa thuận..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">Sàng lọc cổ phiếu</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="CP ngành..."/>
                    <input type="text"  className="search" placeholder="Sự kiện quyền..."/>
                    <input type="text"  className="search" placeholder="Top mã tăng giá nhất..."/>
                    <input type="text"  className="search" placeholder="Top mã giảm giá nhất..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">Phái sinh</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="Phái sinh..."/>
                    <input type="text"  className="search" placeholder="HNX30..."/>
                    <input type="text"  className="search" placeholder="Giao dịch thỏa thuận..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">Chứng quyền</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="HNX..."/>
                    <input type="text"  className="search" placeholder="HĐTL chỉ số VN30..."/>
                    <input type="text"  className="search" placeholder="HĐTL CPTP..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">Trái phiếu doanh nghiệp</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="HNX..."/>
                    <input type="text"  className="search" placeholder="HNX30..."/>
                    <input type="text"  className="search" placeholder="Giao dịch thỏa thuận..."/>
                  </div>
                </li>
                <li class="dropdown2">
                  <a href="javascript:void(0)" class="dropbtn">Lô lẻ</a>
                  <div class="dropdown2-content">
                    <input type="text"  className="search" placeholder="HNX..."/>
                    <input type="text"  className="search" placeholder="HNX30..."/>
                    <input type="text"  className="search" placeholder="Giao dịch thỏa thuận..."/>
                  </div>
                </li>
              </ul>
            </div>
          </body>
          <div class="footer">
           <div className="footer-item">
             <span className="dv">{t('foot.DVCS')}</span><span className="sl">x1000</span>
             <span className="dv">{t('foot.KL')}</span><span className="sl">x10</span>
             <span className="dv">{t('foot.DVTTPS')}</span><span className="sl">x1</span>
             <span className="dv">{t('foot.KL')}</span><span className="sl">x1</span>
             <span className="dv">{t('foot.DVTTKL')}</span><span className="sl">x1</span>
          </div>
          <button className="btnl"><i className="fa fa-shopping-cart"></i> {t('foot.btn_setcommand')}</button>
          <button className="btng"><i class="fas fa-chart-line"></i>{t('foot.btn_priceboard')}</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home
