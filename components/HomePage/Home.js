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


function Home() {
  useEffect(() => {
    document.title = "Bảng giá BVSC"
  }, [])
  const clock = {
    color: "white", fontSize: "1.2rem"
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

  const langMode = useSelector((state) => state.Lang.langis)
  const [lang, setLang] = useState(langMode)
  const handleLang = (e) => {
    setLang(e.target.value)
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
      // dispatch(GetUser('001C'))
    } else {
      setShowlist(false)
    }
  }

  const User = useSelector((state) => state.Login.usernumber)


  const Accountdropdown = () => {
    return (
      <div className='account-dropdownlist'>
        <div className={checked === 'dark' ? 'wrap-pane-setting-dark' : 'wrap-pane-setting-light'}>
          <div className='usernumber'> {User}</div>
          <div className='setting-box'>
            <div className='wrap-setting'>
              <h5>Giao diện</h5>
              <div className='setting-pane'>
                <div className='setting-option'>
                  <input type='radio'name='radio_theme'value='light' checked={checked === 'light'} onChange={ handleChangeTheme }/>
                  <span>Sáng</span>
                </div>
                <div className='setting-option'>
                  <input type='radio'name='radio_theme' value='dark' checked={checked === 'dark'} onChange={ handleChangeTheme }/>
                  <span>Tối</span>
                </div>
              </div>
            </div> 
          </div>
          <div className='setting-box'>
            <div className='wrap-setting'>
              <h5>Ngôn ngữ</h5>
              <div className='setting-pane'>
                <div className='setting-option'>
                  <input type='radio' name='radio_lang' value='vie' checked={lang === 'vie'} onChange={ handleLang } />
                  <span></span><img id="flagvn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg"/>
                </div>
                <div className='setting-option'>
                  <input type='radio' name='radio_lang' value='eng' checked={lang === 'eng'} onChange={ handleLang } />
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
              <span className='marquee-item'>GT thoả thuận: </span>
              <span className='marquee-item'>141.25 tỷ</span>
              <span className='marquee-item'>KLGD lô lẻ: </span>
              <span className='marquee-item'>16.702</span>
              <span className='marquee-item'>GTGD: </span>
              <span className='marquee-item'>14534.999 tỷ</span>
              <span className='marquee-item'>KL thoả thuận: </span>
              <span className='marquee-item'>111.242.555 tỷ</span>
              <span className='marquee-item'>KLGD: </span>
              <span className='marquee-item'>104.202.002 tỷ</span>
              <span className='marquee-item'>GT thoả thuận: </span>
              <span className='marquee-item'>141.25 tỷ</span>
              <span className='marquee-item'>KLGD lô lẻ: </span>
              <span className='marquee-item'>16.702</span>
              <span className='marquee-item'>GTGD: </span>
              <span className='marquee-item'>14534.999 tỷ</span>
              <span className='marquee-item'>KL thoả thuận: </span>
              <span className='marquee-item'>111.242.555 tỷ</span>
              <span className='marquee-item'>KLGD: </span>
              <span className='marquee-item'>104.202.002 tỷ</span>
            </p>
          </marquee>
          <div className='log-in'>
            <Link to='/'><button className='log-in-btn' onClick={hadleLogout}>Logout</button></Link>
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
            <div id="nav" class="clrfx">
              <div class="search-box">
                <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-" aria-expanded="false"  class="react-autosuggest__container" >
                  <input type="text" autoComplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-" class="react-autosuggest__input" placeholder="Tìm kiếm mã CK" value />
                  <div id="react-autowhatever-" role="listbox" class="react-autosuggest__suggestions-container"></div>
                </div>
                <button class="button" type="submit"><i class="fa fa-plus"></i></button>
              </div>
              <ul class="primary">
                <li id="tabWatchList" class="has-sub-menu">
                  <a title="Danh mục theo dõi">Danh mục theo dõi</a>
              <ul class="sub-menu user-categories" id="WATCHLIST-sub-menu">
                <li class="add"><input class="txtbox_dmnd01" type="text" maxlength="25" placeholder="Tạo danh mục mới..." value=""/><span class="editing-buttons"><button><i class="fa fa-plus"></i></button></span></li>
                  </ul>
                </li>
                </ul>
          
            </div>
          </body>
        </div>
      </div>
    </div>
  )
}

export default Home
