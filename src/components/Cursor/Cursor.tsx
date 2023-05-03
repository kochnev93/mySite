import { FC, useEffect, useRef } from 'react';
import styles from './Cursor.module.scss';

const Cursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function initCursor() {

      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;

      let cursor = {
        el: cursorRef.current,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 30,
        h: 30,
        update: function () {
          let l = this.x - this.w / 2;
          let t = this.y - this.h / 2;
          if(this.el){
            this.el.style.transform = `translate3d(${l}px, ${t}px, 0px)`;
          }
          
        },
      };

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      let links = document.querySelectorAll('a');

      links.forEach((elem)=>{
        elem.addEventListener('mouseover',()=>{
          cursorRef.current?.classList.add(`${styles.zoom}`);
        })

        elem.addEventListener('mouseout',()=>{
          cursorRef.current?.classList.remove(`${styles.zoom}`);
        })
      })

      var intervalCursor = setInterval(move, 1000 / 60);

      function move() {
        cursor.x = lerp(cursor.x, mouseX, 0.1);
        cursor.y = lerp(cursor.y, mouseY, 0.1);
        cursor.update();
      }

      function lerp(start: number, end: number, amt: number) {
        return (1 - amt) * start + amt * end;
      }
    }

    initCursor();

  }, []);

  return <div className={styles.cursor} ref={cursorRef}></div>;
};

export default Cursor;
