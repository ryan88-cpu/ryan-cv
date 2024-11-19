import "./asstes/css/style.css";
import About from "./components/About";
import Footer from "./components/Footer/index";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Education from "./components/Education";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
