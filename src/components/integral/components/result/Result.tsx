import IntegralHelper from '../../../../helpers/integral/IntegralHelper';
import Graph from '../../../graph/GraphComponent';
import './result.css';

const Result = (props: any) => {
  const { inA, inB, func } = props;

  return (
    <div className="output-card">
      <div className="result-number">
        <h2>Resultado (area): </h2>
        <IntegralHelper inA={inA} inB={inB} func={func}></IntegralHelper>
      </div>
      <div>
        <h2>Gráfico</h2>
        <Graph inA={inA} inB={inB} func={func}></Graph>
      </div>
    </div>
  );
};

export default Result;