import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { observer } from 'mobx-react-lite';
import useStore from '../store/useStore';
import '../style/BarChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = (): JSX.Element => {
  const { appStore } = useStore();
  const labels = ['January', 'February', 'March', 'April', 'd'];
  const dataSet = [];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'center' as const,
      },
      title: {
        display: true,
        text: '받은 메일 TOP 5',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: '받은 메일',
        data: [1,2,3,4,5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="bar-chart">
      <div className="pie-title">Bar Chart</div>
      <p>설명설명</p>
      <Bar options={options} data={data} />
    </div>
  );
};

export default observer(BarChartComponent);