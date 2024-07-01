import "./App.css";
import Hero from "./component/hero";
import About from "./component/about";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function HeroPage() {
  return (
    <div className="text-zinc-500 bg-gray-50">
      <Hero />
      <About />
      <div className="h-[50vh]" />
    </div>
  );
}

export default App;
