
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from "./components/Hero"
import Nav from "./components/Nav"
// import Payment from "./components/Payment"
import Store from "./components/Store"
import AboutUs from "./components/AboutUs"
import CancelR from "./components/CancelR"
import ContactUs from "./components/ContactUs"
import Copyright from "./components/Copyright"
import PrivacyPolicy from "./components/PrivacyPolicy"



function App() {
  return (
    <BrowserRouter>
      <main className="bg-[--dark] w-full">
        <Nav />
        <Hero />
        <Store />
        {/* <Payment /> */}

        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cancelr" element={<CancelR />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          {/* Add more routes for other components as needed */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
