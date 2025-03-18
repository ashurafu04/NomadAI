import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
//import HomePage from "./Pages/Home/HomePage";
import Nomad from "./Pages/NomadAi/Nomad";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nomadAi" element={<Nomad />} />
          <Route path="/features" />
          <Route path="/contact" />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
