import "./App.css";
import Hero from "./component/hero";
import About from "./component/about";

function App() {
  return (
    <div className="text-zinc-500 bg-gray-50">
      <Hero />
      <About />
      <div className="h-[50vh]" />
    </div>
  );
}

export default App;
