import "./App.css";
import Slide from "./components/slides";
import slides from "./data";

function App() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-slate-300">
        <Slide />
      </div>
    </>
  );
}

export default App;
