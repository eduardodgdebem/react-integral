import Integral from "../../../../helpers/integral";
import Graph from "../../../graph";
import './result.css';

const Result = (props: any) => {
  const { inA, inB, func } = props;

  return (
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
  );
};

export default Result;