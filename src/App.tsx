import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Saveur from "./pages/Saveur";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Saveur" element={<Saveur />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
