import React, {useState} from "react";
import LoginForm from './components/LoginService/LoginForm';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Dropdown} from 'react-bootstrap';

function App() {
  const adminUser = {
    username: "",
    password: ""
  }
  const [darkMode, setDarkMode] = useState(false);
    const current = new Date();
    const date = current.toLocaleDateString();
    const time = current.toLocaleTimeString( );

  const [user, setUser] = useState({username:"", password:""});
  const [error,setError] = useState("");

  const Login = details =>{
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        username: details.name,
        password: details.password
      });
    } else {
      console.log("Details do not match");
      setError("Details not match");
    }
    
  }
  
  const Logout = () => {
    setUser({ username: "", password:""});  
  }

  return (
    <div className="App">
      {(user.username !="")?(
        <div className="welcome">
           <div className={darkMode ? "dark-mode" : "light-mode"}>
            <header>
                <nav class="navbar navbar-expand-sm" style={{ background: darkMode ? "#494d4e" : "#3e95e2" }} id='nav'>
                    <ul class="navbar-nav">
                        <li class="nav-item-logo">
                            <img className='logo-home' src='https://online.bvsc.com.vn/priceboard/static/media/logo_BVSC.2e992417.png' />
                        </li>
                        <li class="nav-item-date-time">
                            <div className='date-time'>
                                <span>&nbsp;</span>
                                <span>{date}</span>
                                <span>&nbsp;</span>
                                <span >{time}</span>
                            </div>
                        </li>    
                        <li class="nav-item-marquee">
                            <marquee className='moving-header'>
                                <p className='marquee-header'>
                                <span className='marquee-item'>KL thoả thuận: </span>
                                <span className='marquee-item'>1.984.252 tỷ </span>
                                <span className='marquee-item'>KLGD lô lẻ: </span>
                                <span className='marquee-item'>16.702</span>
                                <span className='marquee-item'>GTGD: </span>
                                <span className='marquee-item'>12.558.999 tỷ </span>
                                <span className='marquee-item'>GT thoả thuận: </span>
                                <span className='marquee-item'>1.235.468 tỷ </span>
                                <span className='marquee-item'>KLGD: </span>
                                <span className='marquee-item'>61.192.002 tỷ </span>
                                <span className='marquee-item'>KL thoả thuận: </span>
                                <span className='marquee-item'>1.984.252 tỷ </span>
                                <span className='marquee-item'>KLGD lô lẻ: </span>
                                <span className='marquee-item'>16.702</span>
                                <span className='marquee-item'>GTGD: </span>
                                <span className='marquee-item'>12.558.999 tỷ </span>
                                <span className='marquee-item'>GT thoả thuận: </span>
                                <span className='marquee-item'>1.235.468 tỷ </span>
                                <span className='marquee-item'>KLGD: </span>
                                <span className='marquee-item'>61.192.002 tỷ </span>
                                </p>
                            </marquee>
                        </li>
                        <li class="nav-item-user">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <BsFillPersonLinesFill size="2em" color="#ffff" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className='setting-box'>
                                        <div className='setting-box-theme'>
                                            <span id="switchtheme">Đổi theme</span>
                                            <label className="switch">
                                                <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                                <span className="slider round" style={{ color: darkMode ? "blue" : "black" }}>Tối ---- </span>
                                            </label>
                                        </div>
                                    </div>    
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
          <h2>WELCOME <span>{user.username}</span></h2>
          <button  onClick = {Logout} >Logout</button>
          </div>
      ) : ( 
        <LoginForm Login = {Login} error={error} />
      )}
  
    </div>
      
      
  );
}

export default App;
