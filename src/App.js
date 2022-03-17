import React, {useState} from "react";
import LoginForm from './components/LoginForm';
import styled,{ThemeProvider} from "styled-components";
import { lightTheme , darkTheme, GlobalStyles} from "./Home/theme";
function App() {
  const [theme, setTheme] = useState("dark");

  const StyledApp = styled.div`
         color: ${(props) => props.theme.fontColor};
  `;
  
  const themeToggle = () => {
    theme === "light" ? setTheme("dark"): setTheme("Light");
  };

  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error,setError] = useState("");

  const Login = details =>{
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match");
      setError("Details not match");
    }
    
  }
  
  const Logout = () => {
    setUser({ name: "", email:""});  
  }

  return (
    <ThemeProvider theme = {theme === "light" ? lightTheme: darkTheme}>
      <StyledApp> 
      </StyledApp>
    <div className="App">
      {(user.email !="")?(
        <div className="welcome">
          <h2>welcome, <span>{user.name}</span></h2>
          <button onClick = {Logout} >Logout</button>
          </div>
      ) : ( 
        <LoginForm Login = {Login} error={error} />
      )}
  
    </div>
    </ThemeProvider>
  );
}

export default App;
