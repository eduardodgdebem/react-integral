const Integral = (props: any) => {
  const { inA, inB, func } = props;
  return <p>{integrate(inA, inB, func, 1)}</p>;
};

function plugIn(x: any, equation: any) {
  return eval(equation);
}

function trapezoid(length: any, h1: any, h2: any) {
  return ((h1 + h2) / 2) * length;
}

function integrate(a: any, b: any, equation: any, stepsize: any) {
  var area = 0;
  for (var i = a * 1.0; i < b; i += stepsize) {
    var h1 = plugIn(i, equation);
    var h2 = plugIn(i + stepsize, equation);
    area = area + trapezoid(stepsize, h1, h2);
  }
  return area;
}

String.prototype.replaceAll = function (find: any, replace: any) {
  var str = this;
  return str.replace(
    new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
    replace
  );
};

export default Integral;
