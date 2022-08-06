import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <div style={{height: "2000px"}}></div>
    </>
  );
}

export default App;
