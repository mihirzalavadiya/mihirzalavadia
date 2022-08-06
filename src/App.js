import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <ContactUs />
      {/* <div style={{height: "2000px"}}></div> */}
    </>
  );
}

export default App;
