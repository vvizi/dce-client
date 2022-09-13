import useStore from '../store/useStore';
import { ReactComponent as Point } from '../assets/point.svg';

import '../style/Title.css';


const TitleComponent = (): JSX.Element => {
  const { appStore } = useStore();
  const email = appStore.getUserEmail();

  return (
    <div className="title-container">
      <div className="title">
        <div className="title-img">
          <Point />
          </div>
          {email}
          </div>님의 분석결과입니다.
    </div>
  );
};

export default TitleComponent;