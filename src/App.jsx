import React from 'react'
import './App.css';
import Navbar from './componenets/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './componenets/pages/Home'
import Services from './componenets/pages/services'
import Signup from './componenets/pages/signup'
import Products from './componenets/pages/products'
import Login from './componenets/pages/login'

import Action from './componenets/temp-pages/action'
import Sports from './componenets/temp-pages/sports'
import Strategy from './componenets/temp-pages/strategy'
import Adventure from './componenets/temp-pages/adventure'
import Racing from './componenets/temp-pages/racing'

function App() {
  return (
    <Router>  
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/products' exact component={Products}/>

        {/* only for front-end purpose */}
        <Route path='/action' exact component={Action}/>        
        <Route path='/sports' exact component={Sports}/>
        <Route path='/strategy' exact component={Strategy}/>
        <Route path='/adventure' exact component={Adventure}/>
        <Route path='/racing' exact component={Racing}/>
        {/* only for front-end purpose */}

        <Route path='/login'  exact component={Login}/>
        <Route path='/signup' exact component={Signup}/>
      </Switch>
    </Router>   
    
  );
}

export default App;
