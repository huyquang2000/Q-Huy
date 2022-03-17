import { useState } from 'react';
import LoginForm from './LoginForm';
import { users } from '../service/LoginUser';
import { useNavigate  } from 'react-router-dom';
import './Login.css';
function Login() {
    const navigate  = useNavigate();
    const handledStory = () => {
        navigate('/Home')
    }
    const [user, setUser] = useState({
        name: "",
        password: ""
    });

    const [error, setError] = useState("");

    function Login(details) {
        const checkuser = users.find(user => (user.name === details.name && user.password === details.password));
        if (checkuser) {

            console.log("Logged in");
            setUser({
                name: details.name,
                password: details.password
            });
            handledStory();
        } else {
            console.log("Logged fail");
            setError("Fail")
        }
    }

    const Logout = () => {
        setUser({
            name: "",
            password: ""
        })
    }

    return (
        <div className="Login" > {
            (user.name != "") ? (<div>
                <button className='log-out-btn btn-inp' onClick={Logout}>Log out</button>
            </div>) : (
                <div>
                    < LoginForm Login={Login} error={error} />
                </div>)
        }

        </div>
    );
}

export default Login;