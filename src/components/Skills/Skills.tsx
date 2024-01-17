import { FC, useRef } from 'react';
import cx from 'classnames';
import { useInView } from 'framer-motion';

//Icons
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BsFiletypeScss } from 'react-icons/bs';
import { BsWordpress } from 'react-icons/bs';

import { BiLogoMongodb } from 'react-icons/bi';
import { SiMinio } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';

//Styles
import styles from './Skills.module.scss';

//Components
import Skill from './Skill';

const Skills: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul className={cx(styles.skills, { [styles.inview]: isInView })} ref={ref}>
      <Skill title="React JS" subtitle="React Hooks, Redux-toolkit">
        <FaReact />
      </Skill>

      <Skill title="Next.js">
        <SiNextdotjs />
      </Skill>

      <Skill title="Gatsby.js">
        <SiGatsby />
      </Skill>

      <Skill title="JavaScript" subtitle="ES5, ES6, Promise">
        <TbBrandJavascript />
      </Skill>

      <Skill title="TypeScript">
        <TbBrandTypescript />
      </Skill>

      <Skill title="HTML 5">
        <AiOutlineHtml5 />
      </Skill>

      <Skill title="CSS, SCSS">
        <BsFiletypeScss />
      </Skill>

      <Skill title="MySQL">
        <SiMysql />
      </Skill>

      <Skill title="Mongo DB">
        <BiLogoMongodb />
      </Skill>

      <Skill title="Express JS">
        <SiExpress />
      </Skill>

      <Skill title="Minio">
        <SiMinio />
      </Skill>

      <Skill title="Wordpress">
        <BsWordpress />
      </Skill>
    </ul>
  );
};

export default Skills;
