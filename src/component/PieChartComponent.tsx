import { observer } from "mobx-react-lite";
import ReactApexChart from "react-apexcharts"; 
import { graphData } from "../store/AppStore";
import useStore from "../store/useStore";

const PieChartComponent = (): JSX.Element => {
  const { appStore } = useStore();

  const ratioData = appStore.ratioDataList;
  const data: Array<number> = [];
  const label: Array<string> = [];
  ratioData.map((d:graphData) => (
    data.push(d.count),
    label.push(d.name)
  ))

  const pieData = {
    type: "pie",
    series: data,
    options: {
      labels: label,
      legend: {
        show: true
      },
      colors: ["#FF6F6F", "#65B7E5"]
    }
  }

  return (
    <div id="chart">
        <ReactApexChart 
            options={pieData.options}
            series={pieData.series}
            type="pie" 
            width="400"
        />
    </div>
  );
};

export default observer(PieChartComponent);