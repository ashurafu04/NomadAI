import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
//import HomePage from "./Pages/Home/HomePage";
import Nomad from "./Pages/NomadAi/Nomad";
import Contact from "./Pages/Contact/ContactPage";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";
import Morocco360P from "./Pages/Morocco360Page/Morocco360P";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nomadAi" element={<Nomad />} />
          <Route path="/discover" element={<Morocco360P/>}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
