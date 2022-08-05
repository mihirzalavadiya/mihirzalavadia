import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div style={{height: "2000px"}}></div>
    </>
  );
}

export default App;
