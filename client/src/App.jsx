import {Routes, Route} from "react-router-dom";

import Header from "./Components/Header/Header";
//import HomePage from "./Pages/Home/HomePage";
import Nomad from "./Pages/NomadAi/Nomad";
import Contact from "./Pages/Contact/ContactPage";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
        <Routes>
          <Route path="/" />
          <Route path="/nomadAi" element={<Nomad/>}/>
          <Route path="/features" />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
