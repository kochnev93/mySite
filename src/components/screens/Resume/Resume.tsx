import cx from 'classnames';
import styles from './Resume.module.scss';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import PageItem from '@/components/PageItem/PageItem';
import Skills from '@/components/Skills/Skills';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import { useRouter } from 'next/router';

//Icons
import { MdWorkOutline } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';

type Props = {
  className?: string;
  id?: string;
};



const Resume: React.FC<Props> = (props) => {
  const router = useRouter();

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  // useEffect(() => {
  //   if(inView) router.push('/#resume')
  // }, [inView])

  
  return (
    <div
    id={props.id}
    className={cx(styles.resume, props.className)}
    data-label={'Resume'}
    ref={ref}
  >
    <PageItem title="Резюме" className={styles.resume_block}>
   
        <div className={styles.resume_title}>
          <MdWorkOutline />
          <h3>Опыт работы</h3>
        </div>

        <Experience />
    
        <div className={styles.resume_title}>
          <MdSchool />
          <h3>Образование</h3>
        </div>
        
        <Education />
   
    </PageItem>

    <PageItem title="Ключевые навыки">
      <Skills />
    </PageItem>
  </div>
  )
};

export default Resume;
