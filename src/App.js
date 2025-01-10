import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Plant from "./Pages/Plant";
import Contact from "./Pages/Contact";
import OrderNow from "./Pages/OrderNow";
import OurServices from "./Pages/OurServices";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />;
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderNow />} />
          <Route path="/our-services" element={<OurServices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
