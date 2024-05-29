import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Componets/Hero";
import Soceilicon from "./common/Soceilicon";
import About from "./Componets/About";
import TOKENOMICS from "./Componets/TOKENOMICS";
import UTILITY from "./Componets/UTILITY";
import NEWS from "./Componets/NEWS";
import Footer from "./Componets/Footer";
import ECOSYSTEM from "./Componets/ECOSYSTEM";
import ROADMAP from "./Componets/ROADMAP";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);
  return (
    <div className="App">
      <Hero />
      <Soceilicon />
      <About />
      <TOKENOMICS />
      <UTILITY />
      <ECOSYSTEM />
      <ROADMAP />
      <NEWS />
      <Footer />
    </div>
  );
}

export default App;
