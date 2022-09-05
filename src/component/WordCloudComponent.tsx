import ReactWordcloud from 'react-wordcloud';


const words = [
    {
      text: '취업',
      value: 500,
    },
    {
      text: '개발',
      value: 300,
    },
    {
      text: '웹툰',
      value: 200,
    },
    {
      text: '광운대학교',
      value: 119,
    },
    {
        text: '유튜브',
        value: 50,
      },
];

const WordCloudComponent = (): JSX.Element => {
    return <ReactWordcloud words={words} />;
}

export default WordCloudComponent;