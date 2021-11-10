import React from 'react'
import Navbar from './component/navbar/Navbar';
import Signup from './component/signup/Signup';
import Login from './component/login/Login';
import Newpost from './component/newpost/Newpost';
import { BrowserRouter, Route} from "react-router-dom";
import { Switch } from "react-router-dom";
import "./index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
      
            <Switch>
                 <Route path="/"  exact component={Navbar} />
                 <Route path="/login" component={Login} />
                 <Route path="/signup" component={Signup} />
                 <Route path="/newpost" component={Newpost} />
            </Switch>
          
           
      </div>
  </BrowserRouter>  
  )
}
export default App;