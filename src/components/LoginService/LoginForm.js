import React, { useState } from 'react';

import './Login.css';
function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({username:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
    
  return (
      <form onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>BẢO VIỆT SECURITY</h2>
              <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" id="name" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
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
                        <div className='lang'>Tiếng việt</div><img id="flag-vn" src="https://online.bvsc.com.vn/sso/images/vietnam.svg"/>
                        <div className='lang'>Tiếng anh</div><img id="flag-us" src="https://online.bvsc.com.vn/sso/images/uk.svg"/>
                  </div>
              <div className='form-group-flex'>
                 <div className="row">
                    <div className="col">
                        <div className="language" ></div>
                    </div>
                    <div className="col">
                        <div className="language" ></div>
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