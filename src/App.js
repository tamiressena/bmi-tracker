import "./App.css";
import Calculator from "./components/Calculator";
import { useState } from "react";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";

function App() {
  const [data, setData] = useState([["Date", "BMI"]]);

  const handleValues = (newValues) => {
    setData([["Date", "BMI"], ...newValues]);
  };

  return (
    <div className="App">
      <h1>BMI Tracker</h1>

      <Calculator handleValues={handleValues} data={data} />

      <div className="footer">
        <div className="credits">
          <p>Desenvolvido por: </p>
          <a href="https://www.tamires.tech/" target="_blank" rel="noreferrer">
            Tamires Sena
          </a>
        </div>
        <div className="icons">
          <a
            href="https://github.com/tamiressena"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/tamiressena/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
