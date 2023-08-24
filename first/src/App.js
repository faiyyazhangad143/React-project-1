
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from "./components/Header";

import "./styles/App.scss";
import "./styles/header.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Servicess";
import "./styles/mediaquery.scss";








function App() {
  return (
      <Router>
        <Header/>

     
        
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/contact"  element={<Contact/>} />

          <Route path="/services"  element={<Services/>} />

        
   

     
        


        
        </Routes>
       
        <Footer/>
           
      </Router>


      
    );
    
}

export default App;
