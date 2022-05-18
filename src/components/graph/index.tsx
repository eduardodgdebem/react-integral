import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const style = {
  height: "30vh",
  width: "100%",
};

function plugIn(x: any, equation: any) {
  return eval(equation);
}

const generateOption = (data: any) => {
  const { inA, inB, func } = data;
  console.log(inA, inB, func);
  let interval: Number[] = [];
  for (let i = inA; i <= inB; i++) {
    interval = [...interval, i];
  }
  const results = interval.map((x: any) => plugIn(x, func));
  console.log(interval, results);
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "2%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: interval,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Line 4",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        // TODO colocar aqui o resultado dos pontos
        // data: [220, 402, 231, 134, 190, 230, 120],
        data: results,
      },
    ],
  };
};

const Graph = (props: any) => {
  return (
    <ReactEcharts option={generateOption(props)} style={style}></ReactEcharts>
  );
};

export default Graph;
