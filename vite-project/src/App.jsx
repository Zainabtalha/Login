import { useState } from "react";import Login from './Login/Login';
import Signup from "./Signup/Signup";

const App = () => {
    const [isloggedIn, setIsLoggedIn] = useState(true);

    const toggle = () => {   
        setIsLoggedIn(!isloggedIn);
    }   

    return (
        <div>
            {isloggedIn ? <Login clickFunc={toggle} /> : <Signup clickFunc={toggle} />}
        </div>
    );
}

export default App;
