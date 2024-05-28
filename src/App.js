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
import Place from "./Componets/Place";

function App() {
  return (
    <div className="App">
      <Hero />
      <Soceilicon />
      <About />
      <TOKENOMICS />
      <UTILITY />
      <Place/>
      <ECOSYSTEM />
      <ROADMAP />
      <NEWS />
      <Footer />
    </div>
  );
}

export default App;
