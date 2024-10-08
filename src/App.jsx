import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Router correctly
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Result from "./pages/Result";
import Reviews from "./pages/Reviews";
import Brochure from "./pages/Brochure";
import ContactUs from "./pages/ContactUs";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
       <Navbar />
      {/* Router wrapping all routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/result" element={<Result />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>

      {/* Your other content (if necessary) */}
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

     
    </div>
  );
}

export default App;
