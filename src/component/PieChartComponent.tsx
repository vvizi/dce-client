import { observer } from 'mobx-react-lite';
import ReactApexChart from 'react-apexcharts';
import { graphData } from '../store/AppStore';
import useStore from '../store/useStore';
import '../style/PieChart.css';

const PieChartComponent = (): JSX.Element => {
    const { appStore } = useStore();

    const ratioData = appStore.ratioDataList;
    const data: Array<number> = [];
    const label: Array<string> = [];
    let totalData = 0;
    let unreadMail = 0;
    ratioData.map((d: graphData) => (data.push(d.count), label.push(d.name)));

    totalData = data.reduce((a, b) => a + b, 0);
    unreadMail = data[1];

    const percentage = parseFloat(((unreadMail / totalData) * 100).toFixed(2));

    const pieData = {
        type: 'pie',
        series: data,
        options: {
            labels: label,
            legend: {
                show: true,
            },
            colors: ['#65B7E5', '#FF6F6F'],
        },
    };

    let resultLabel: React.ReactNode = null;

    if (percentage >= 50) {
        resultLabel = (
            <div className="result-label" style={{ color: '#FF6F6F' }}>
                당신은 메일을 정리할 필요가 있습니다.
            </div>
        );
    } else if (50 > percentage && percentage >= 10) {
        resultLabel = (
            <div className="result-label" style={{ color: '#37AF8E' }}>
                당신의 메일함은 비교적 잘 관리 되고 있습니다.
            </div>
        );
    } else {
        resultLabel = (
            <div className="result-label" style={{ color: '#65B7E5' }}>
                당신은 최고입니다.
            </div>
        );
    }

    return (
        <div className="pie-container">
            <div className='pie-title-container'>
                <p className="pie-title">Pie Chart</p>
                <p className="pie-label">읽은 메일 대비 안 읽은 메일 비율: {percentage}%</p>
            </div>
            <div className='pie-chart'>
                <ReactApexChart options={pieData.options} series={pieData.series} type="pie" width="400" />
            </div>
            {resultLabel}
        </div>
    );
};

export default observer(PieChartComponent);