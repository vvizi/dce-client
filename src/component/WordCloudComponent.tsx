import ReactWordcloud from 'react-wordcloud';
import { observer } from 'mobx-react-lite';
import useStore from '../store/useStore';
import '../style/WordCloud.css';

const WordCloudComponent = (): JSX.Element => {
    const { appStore } = useStore();

    const words = appStore.topicDataList;

    const options = {
      deterministic: false,
      enableTooltip: false,
      fontFamily: "Lora",
      fontStyles: "normal",
      fontWeight: "700",
      fontSizes: [10, 50] as [number, number],
      padding: 1,
      rotations: 1,
      rotationAngles: [0, 90] as [number, number]
    };
    

    return (
      <div className="wordCloudBox">
          <ReactWordcloud
            options={options} 
            words={words}
          />
      </div>
    );
}

export default observer(WordCloudComponent);