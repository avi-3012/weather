import "./App.css";
import Social from "./components/Social";
import Background from "./components/Background";
import LeftInfo from "./components/LeftInfo.js";
import Sidebar from "./components/Sidebar";
import Forecast from "./components/Forecast";

// Add photos to github
// fixed live clock, added dynamic backgrounds, added dynamic weather icons

function App() {
  return (
    <>
      <section className="container">
        <Social />
        <Background />
        <LeftInfo />
        {/* <Forecast /> */}
        <Sidebar />
      </section>
    </>
  );
}

export default App;
