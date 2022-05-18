import { useState } from "react";
import "./home.css";
import Result from "./components/result";
import IntegralInput from "./components/IntegralInput";
import MaiNav from "./components/mainNav";

const Home = () => {
  const [inA, setInA] = useState(0);
  const [inB, setInB] = useState(0);
  const [func, setFunc] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <div className="main-container">
        {/* <MaiNav></MaiNav> */}
        <IntegralInput
          setInA={setInA}
          setInB={setInB}
          setFunc={setFunc}
          setShowResult={setShowResult}
        ></IntegralInput>
        {showResult && <Result inA={inA} inB={inB} func={func}></Result>}
      </div>
    </>
  );
};

export default Home;
