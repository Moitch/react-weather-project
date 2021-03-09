import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/shared/Router';
import Navigation from './components/shared/Navigation';
import Footer from './components/shared/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Router/>
      <Footer/>
    </BrowserRouter>  
    
  );
}

export default App;
