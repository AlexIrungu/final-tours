//import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Faq from './components/FAQ';
import Service from './components/Service';
import Gallery from './components/Gallery.js';
// import LandingPage from './components/LandingPage'
import CalendarComponent from './components/CalendarComponent';
import ToursAndPackages from './components/ToursAndPackages';
import PrivacyPolicy from './components/PrivacyPolicy';
import Places from './components/Places';
import Nature from './components/Nature';
import Culture from './components/Culture';
import Reviews from './components/Reviews';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ServiceSection from './components/ServiceSection';
import Pricing from './components/Pricing';

import SearchBox from './components/SearchBox.js';
import Maps from './components/Maps.js';
import './components/fonts/miandra-gd.ttf'

library.add(faArrowLeft, faArrowRight);


function App() {

  const [selectPosition, setSelectPosition] = useState(null);
  const location = useLocation();
  const [searchLocation, setSearchLocation] = useState(null);

  const handleSearch = (searchString) => {
    // Add your search logic here
    console.log("Search string:", searchString);

    // Example: You can update the searchLocation state based on the searchString
    setSearchLocation(/* Logic to update the searchLocation */);
  };
  
  const isLandingPage = location.pathname === "/"

  return (
    <div className='App' >
    {/* {
      !isLandingPage && 
      <Navbar /> }   */}
      
     <Navbar /> 
    <Switch>
      {/* <Route path="/" exact component={LandingPage} /> */}
      {/* <Route component={Navbar} /> */}
      
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/service" exact component={Service} />
      <Route path="/gallery" exact component={Gallery} />
      {/* <Route
          path="/maps"
          exact
          render={() => <CustomMap searchLocation={searchLocation} handleSearch={handleSearch} />}
        /> */}
        <Route path="/maps" exact component={() => <Maps selectPosition={selectPosition} setSelectPosition={setSelectPosition} />} />

        <Route path="/search" exact component={(props) => <SearchBox {...props} setSelectPosition={setSelectPosition} />} />

        {/* <Route path="/search" exact component={SearchBox} selectPosition={selectPosition} setSelectPosition={setSelectPosition}/> */}
      <Route path="/faq" exact component={Faq} />
      <Route path="/contact" exact component={ContactUs} />
      <Route path="/calendar" exact component={CalendarComponent} />
      <Route path="/privacy" exact component={PrivacyPolicy} /> 
      <Route path="/places" exact component={Places} /> 
      <Route path="/nature" exact component={Nature} /> 
      <Route path="/culture" exact component={Culture} /> 
      <Route path="/section" exact component={ServiceSection} />
      <Route path="/pricing" exact component={Pricing} />
      
    </Switch>
    </div>
   
      
     
   
  );
}

export default App;
