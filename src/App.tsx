import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.js";
import Collaboration from "./components/Collaboration.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";

const App = () => {
  return (
    <>
      <div
        className="pt-[4.75rem] 
      lg:pt-[5.25rem] overflow-hidden"
      >
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
