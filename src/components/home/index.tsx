import { useState } from "react";
import Integral from "../../helpers/integral";
import { Button, Card, Input } from "@geist-ui/core";
import "./home.css";
import Graph from "../graph";

const Home = () => {
  const [inA, setInA] = useState(0);
  const [inB, setInB] = useState(0);
  const [func, setFunc] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <div className="main-container">
        <div className="input-card">
          <div className="input-container">
            <h2>Limite inicial (a)</h2>
            <Input
              htmlType="number"
              value={inA.toString()}
              onInput={(e: any) => setInA(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h2>Limite final (b)</h2>

            <Input
              htmlType="number"
              value={inB.toString()}
              onInput={(e: any) => setInB(e.target.value)}
            />
          </div>
          <div className="input-container">
            <h2>Função</h2>

            <Input value={func} onInput={(e: any) => setFunc(e.target.value)} />
          </div>

          <Button
            type="success"
            onClick={() => setShowResult(true)}
            disabled={!showResult && !func.length}
          >
            Calculate
          </Button>
        </div>
        {showResult && (
          <div className="output-card">
            <div className="result-number">
              <h2>Resultado (area): </h2>
              <Integral inA={inA} inB={inB} func={func}></Integral>
            </div>
            <div>
              <h2>Gráfico</h2>
              <Graph inA={inA} inB={inB} func={func}></Graph>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
