import { useState, useEffect } from 'react';

type Props = {
  className?: string;
};

const PrintedText: React.FC<Props> = (props) => {
  const [text] = useState([
    'Frontend-разработчик',
    'Web-разработчик',
    'React-разработчик',
    'Fullstack-разработчик ',
  ]);

  const [string, setString] = useState<string>('');

  useEffect(() => {
    let line = 0;
    let count = 0;
    let result = '';

    function typeLine() {
      if (count >= text[line].length) {
        return setTimeout(() => {
          deleteLine();
        }, 2000);
      }

      let interval = setTimeout(() => {
        result += text[line][count];
        setString(result + ' |');
        count++;

        typeLine();
      }, 150);
    }

    function deleteLine() {
      if (count <= 0) {
        count = 0;

        if (line === text.length - 1) {
          line = 0;
          return setTimeout(() => {
            typeLine();
          }, 1000);
        }

        line++;

        return setTimeout(() => {
          typeLine();
        }, 1000);
      }

      let interval = setTimeout(() => {
        result = result.slice(0, -1);
        setString(result + ' |');

        count--;

        deleteLine();
      }, 100);
    }

    typeLine();
  }, []);

  return (
    <div
      className={`printed_text ${props.className}`}
      style={{ color: 'var(--main-color)' }}
    >
      {string}
    </div>
  );
};

export default PrintedText;
