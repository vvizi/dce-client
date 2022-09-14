import TitleComponent from './TitleComponent';
import PieChartComponent from './PieChartComponent';
import WordCloudComponent from './WordCloudComponent';
import DeleteDialogComponent from './DeleteDialogComponent';
import BarChartComponent from './BarChartComponent';

import '../style/Dashboard.css';

const DashboardComponent = (): JSX.Element => {
    return (
        <>
            <TitleComponent/>
            <div className="graph-container">
                <BarChartComponent />
                <DeleteDialogComponent />
                <PieChartComponent />
                <WordCloudComponent />
            </div>
        </>
    );
};

export default DashboardComponent;