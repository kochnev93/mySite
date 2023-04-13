import { useEffect, useRef, useState } from 'react';
import styles from './Background.module.scss';

const Background: React.FC = () => {
  const [widthBox] = useState<number>(15);
  const [countBox, setCountBox] = useState<number>(0);

  const squareRef = useRef(null)

  useEffect(() => {
    const colors = ['#7F152E', '#D61800', '#EDAE01', '#E94F08'];

    let innerWidth =  Math.floor(window.innerWidth / widthBox);
    let innerHeight =  Math.floor(window.innerHeight / widthBox);
    let count = innerWidth * innerHeight;


  for(let i = 0; i < count; i++){
    const box = document.createElement('div');
    box.classList.add('square');
    box.addEventListener('mouseover', () => setColor(square))
    box.addEventListener('mouseleave', () => removeColor(square))
    squareRef.current.append(box);
  }

  function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(element){
      element.style.background = '#1d1d1d';
      element.style.boxShadow = `0 0 2px #000`;
  }

  function getRandomColor(){
      const index = Math.floor(Math.random() * colors.length);
      return colors[index];
  }




    //setCountBox( innerWidth * innerHeight );
  }, [widthBox]);
  
  return (
  <div className={styles.area}>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.light}></div>
    <div className={styles.square} ref={squareRef}>
{Array(countBox).fill(true).map((item, index) => {
  return(
    <div key={index} className={styles.box} />
  )
})}


    </div>
  </div>
)};

export default Background;
