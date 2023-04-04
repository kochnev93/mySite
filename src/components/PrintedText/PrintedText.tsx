import { useState, useEffect } from 'react';

type Props = {
  className?: string;
};

const PrintedText: React.FC<Props> = (props) => {
  const [text] = useState([
    'Frontend-разработчик',
    'Веб-разработчик',
    'React-разработчик',
    'JS-разработчик ',
  ]);

  const [string, setString] = useState('');

  useEffect(() => {
    console.log('USEEFFECT')
    //typeLine();
  }, []);

  let line = 0;
  let count = 0;
  let result = '';

  function typeLine() {
    if (count + 1 >= text[line].length){
        return setTimeout(()=> {deleteLine()}, 5000)
        
    };

    if (line === text.length) return;

    let interval = setTimeout(() => {
      result += text[line][count];
      setString(result + '|');
      count++;

      console.log('before count', count);
      console.log('result', result);
      console.log('after count', count);
      console.warn(text[line].length, count >= text[line].length);

      //   if (line === text.length) {
      //     clearTimeout(interval);
      //     return;
      //   }

      //   if (count + 1 >= text[line].length) {
      //     deleteLine();
      //     //clearTimeout(interval);
      //     //return;
      //   }

      
      typeLine();
      
    }, getRandomInt(250 * 2.5));

    
  }

  function deleteLine() {
    console.log('DELETE COUNT', count);

    if (count <= 0){
        count = 0;

        if (line === text.length){
            line = 0
        }

        line++

        return setTimeout(()=> {typeLine()}, 3000)
    }

    let interval = setTimeout(() => {
      result = result.slice(0, -1);
      setString(result + '|');

      count--;

    //   if (count <= 0) {
    //     //line++;
    //     clearTimeout(interval);
    //     return;
    //     //typeLine();
    //   }

      deleteLine();
    }, getRandomInt(250 * 2.5));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return <div className={`printed_text ${props.className}`}>{string}</div>;
};

export default PrintedText;
