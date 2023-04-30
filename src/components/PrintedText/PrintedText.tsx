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
    typeLine();
  }, []);

  let line = 0;
  let count = 0;
  let result = '';

  function typeLine() {
    if (count + 1 >= text[line].length){
        return setTimeout(()=> {deleteLine()}, 2000)
        
    };

    if (line === text.length - 1) return;

    let interval = setTimeout(() => {
      result += text[line][count];
      setString(result + ' |');
      count++;
      
      typeLine();
      
    }, 150);

    
  }

  function deleteLine() {

    if (count <= 0){
        count = 0;

        if (line === text.length - 1){
            line = 0
            return setTimeout(()=> {typeLine()}, 1000)
        }

        line++

        return setTimeout(()=> {typeLine()}, 1000)
    }

    let interval = setTimeout(() => {
      result = result.slice(0, -1);
      setString(result + ' |');

      count--;

      deleteLine();
    }, 100);
  }

  return <div className={`printed_text ${props.className}` } style={{color: 'var(--main-color)'}}>{string}</div>;
};

export default PrintedText;
