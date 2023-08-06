//import logo from './logo.svg';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Faq from './components/FAQ';
import Service from './components/Service';
import Gallery from './components/Gallery.js';
import LandingPage from './components/LandingPage'
import CalendarComponent from './components/CalendarComponent';
import ToursAndPackages from './components/ToursAndPackages';
import PrivacyPolicy from './components/PrivacyPolicy';
import Places from './components/Places';
import Nature from './components/Nature';
import Culture from './components/Culture';



function App() {
  const location = useLocation()
  const isLandingPage = location.pathname === "/"

  return (
    <div className='App' >
    {
      !isLandingPage && 
      <Navbar /> }  
      
      
    <Switch>
      <Route path="/" exact component={LandingPage} />
      {/* <Route component={Navbar} /> */}
      
      <Route path="/home" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/service" exact component={Service} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/faq" exact component={Faq} />
      <Route path="/contact" exact component={ContactUs} />
      <Route path="/calendar" exact component={CalendarComponent} />
      <Route path="/privacy" exact component={PrivacyPolicy} /> 
      <Route path="/places" exact component={Places} /> 
      <Route path="/nature" exact component={Nature} /> 
      <Route path="/culture" exact component={Culture} /> 
      
    </Switch>
    </div>
   
      
     
   
  );
}

export default App;
