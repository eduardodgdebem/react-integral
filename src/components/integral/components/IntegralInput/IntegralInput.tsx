import { Button, Card, Input } from "@geist-ui/core";
import { useEffect, useState } from "react";

const IntegralInput = (props: any) => {
  const {
    setInA: parentSetInA,
    setInB: parentSetInB,
    setFunc: parentSetFunc,
    setShowResult: parentSetShowResult,
  } = props;

  const [inA, setInA] = useState(0);
  const [inB, setInB] = useState(0);
  const [func, setFunc] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    parentSetInA(inA);
    parentSetInB(inB);
    parentSetFunc(func);
    parentSetShowResult(showResult);
  }, [inA, inB, func, showResult]);

  return (
    <div className="input-card">
      <div className="input-container">
        <h2>Limite inicial (a)</h2>
        <Input
          htmlType="number"
          value={inA.toString()}
          onInput={(e: any) => setInA(e.target.value)}
          disabled={showResult}
        />
      </div>
      <div className="input-container">
        <h2>Limite final (b)</h2>
        <Input
          htmlType="number"
          value={inB.toString()}
          onInput={(e: any) => setInB(e.target.value)}
          disabled={showResult}
        />
      </div>
      <div className="input-container">
        <h2>Função</h2>
        <Input
          value={func}
          onInput={(e: any) => setFunc(e.target.value)}
          disabled={showResult}
          placeholder="EX:3*x*x+5*x"
        />
      </div>

      {!showResult ? (
        <Button
          type="success"
          onClick={() => setShowResult(true)}
          disabled={!showResult && !func.length}
        >
          Calcular
        </Button>
      ) : (
        <Button
          type="secondary"
          onClick={() => setShowResult(false)}
          disabled={!showResult && !func.length}
        >
          Recalcular
        </Button>
      )}
    </div>
  );
};

export default IntegralInput;
