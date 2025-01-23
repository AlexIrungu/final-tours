//import logo from './logo.svg';
import React from 'react';
import { useState, } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Faq from './components/FAQ';
import Service from './components/Service';
import Gallery from './components/Gallery.js';
import CalendarComponent from './components/CalendarComponent';
import PrivacyPolicy from './components/PrivacyPolicy';
import Places from './components/Places';
import Culture from './components/Culture';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ServiceSection from './components/ServiceSection';
import Pricing from './components/Pricing';
import SearchBox from './components/SearchBox.js';
import Maps from './components/Maps.js';
import TermsAndConditions from './components/Terms&Conditions.js';
import AccessibilityTools from './components/AccessibilityTools.js';
import ReviewForm from './components/ReviewForm.js';
import MaasaiMara from './components/MaasaiMara.js';
import ExtensiveTour from './components/ExtensiveTour.js';
import AdventureAmboseli from './components/AdventureAmboseli.js';
import QuoteForm from './components/QuoteForm.js';
import BudgetTour from './components/BudgetTour.js';
import Bogoria from './components/Bogoria.js';
import LavishSafari from './components/LavishSafari.js';
import SevenDay from './components/SevenDay.js';
import Reviews from './components/Reviews.js';
import Enviro from './components/Enviro.js';

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
  // const isLandingPage = location.pathname === "/"
  return (
     <div className='App'>
    {/* {
      !isLandingPage && 
      <Navbar /> }   */}
      
     <Navbar /> 
     {/* <LanguageSwitcher /> */}
    
    <Switch>
      {/* <Route path="/" exact component={LandingPage} /> */}
      {/* <Route component={Navbar} /> */}
      
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/service" exact component={Service} />
      <Route path="/gallery" exact component={Gallery} />
        <Route path="/maps" exact component={() => <Maps selectPosition={selectPosition} setSelectPosition={setSelectPosition} />} />
        <Route path="/search" exact component={(props) => <SearchBox {...props} setSelectPosition={setSelectPosition} />} />
      <Route path="/faq" exact component={Faq} />
      <Route path="/contact" exact component={ContactUs} />
      <Route path="/calendar" exact component={CalendarComponent} />
      <Route path="/privacy" exact component={PrivacyPolicy} /> 
      <Route path="/places" exact component={Places} /> 
      <Route path="/nature" exact component={Enviro} /> 
      <Route path="/culture" exact component={Culture} /> 
      <Route path="/section" exact component={ServiceSection} />
      <Route path="/pricing" exact component={Pricing} />
      <Route path="/terms" exact component={TermsAndConditions} />
      <Route path="/review-form" exact component={ReviewForm} />
      <Route path="/maasai-mara" exact component={MaasaiMara} />
      <Route path="/adventure-amboseli" exact component={AdventureAmboseli} />
      <Route path="/extensive-tour" exact component={ExtensiveTour} />
      <Route path="/quote-form" exact component={QuoteForm} />
      <Route path="/budget-tour" exact component={BudgetTour} />
      <Route path="/bogoria" exact component={Bogoria} />
      <Route path="/lavish" exact component={LavishSafari} />
      <Route path="/seven" exact component={SevenDay} />
      <Route path="/reviews" exact component={Reviews} />
    </Switch>
    <AccessibilityTools />
    </div>
  );
}
export default App;
