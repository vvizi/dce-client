import TitleComponent from './TitleComponent';
import PieChartComponent from './PieChartComponent';
import WordCloudComponent from './WordCloudComponent';

const DashboardComponent = (): JSX.Element => {
    return (<><TitleComponent/><PieChartComponent/><WordCloudComponent /></>);
};

export default DashboardComponent;