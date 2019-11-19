import React from 'react';
import { Route, Switch, BrowserRouter as router, Redirect } from 'react-router-dom';
import TopNavbar from '../src/component/Pages/Navbar';
import PrivateRoute from '../src/PrivateRoute';
import AuthRoute from '../src/AuthRoute';
import Register from '../src/component/Auth/Register';
import Profiles from '../src/component/Pages/Profiles';
import './App.css';
class  App extends React.Component {
 
  render(){
    return (
      <div className="App">
        
          <router>
            <switch>
              <Route  path="/" component={TopNavbar}/>
              <AuthRoute exact path="/login" component={Register} />
              <AuthRoute exact path="/u" component={Register} />
              <PrivateRoute exact path="/profile" component={Profiles} />
            </switch>
          </router>
      </div>
    );
  }
}
export default App;
