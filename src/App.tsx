import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Saveur from "./pages/Saveur";
import AvocatCoriandre from "./pages/AvocatCoriandre";
import CaliforniaSaumonAvocat from "./pages/CaliforniaSaumonAvocat";
import LessThanThirteen from "./pages/LessThanThirteen";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saveur" element={<Saveur />} />
          <Route path="/avocat_coriandre" element={<AvocatCoriandre />} />
          <Route path="/california_saumon_avocat" element={<CaliforniaSaumonAvocat />} />
          <Route path="/less_than_thirteen" element={<LessThanThirteen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
