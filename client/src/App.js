import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import About from "./components/About";
import Probono from "./components/Probono";
import Projects from "./components/Projects";
import UpdateProjects from "./components/UpdateProjects";

const App = () =>
  <Router>
    <div>
    	<Route exact path='/' component={Main} />
	    <Route path='/About' component={About}/>
	    <Route path='/Probono' component={Probono}/>
	    <Route path='/Projects' component={Projects}/>
	    <Route path='/admin/UpdateProjects' component={UpdateProjects}/>
    </div>
  </Router>;

export default App;
