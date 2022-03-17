import React, { useState } from 'react';

import './Login.css';
function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
      <form onSubmit={submitHandler}>
          <div className="form-inner">
              <div className='logo'></div>
              <h2>BẢO VIỆT SECURITY</h2>
      
              <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
              </div>
              <div className="form-group">
                  <label htmlFor="password" >Password</label>
                  <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
              </div>
              <input className='btn-inp' type="submit" value="LOGIN" />
              <div className='login-flex'>
                  <div ><a href='#' className='login-text'>Mở tài khoản</a></div>
                  <div ><a href='#' className='login-text'>Quên mật khẩu ?</a></div>
              </div>
                  <div className='login-flex'>
                        <div className='lang'>Tiếng việt</div>
                        <div className='lang'>Tiếng anh</div>
                  </div>
              <div className='form-group-flex'>
                 <div className="row">
                    <div className="col">
                        <div className="language" >
                            <img id="flag-vn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg"/>
                            <span>Việt Nam</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="language" >
                            <img id="flag-us" src="https://online.bvsc.com.vn/sso/images/uk.svg"/>
                            <span>English</span>
                        </div>
                    </div>
                </div>  
                <hr id="line" />
                </div>
             <div className="contact">
                Liên hệ: (84-24) 3928 8080 - ext.699/(84-28) 3914 6888
             </div>

          </div>
      </form>

  )
}

export default LoginForm