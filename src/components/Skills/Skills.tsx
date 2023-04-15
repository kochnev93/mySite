import { FC } from 'react';
import cx from 'classnames';

//Icons
import { FaReact } from 'react-icons/Fa';
import { SiNextdotjs } from 'react-icons/Si';
import {TbBrandJavascript} from 'react-icons/Tb'
import {TbBrandTypescript} from 'react-icons/Tb'
import {SiMysql} from 'react-icons/Si'
import {SiExpress} from 'react-icons/Si'
import {AiOutlineHtml5} from 'react-icons/Ai'
import {BsFiletypeScss} from 'react-icons/Bs'
import {BsWordpress} from 'react-icons/Bs'


//Styles
import styles from './Skills.module.scss';

//Components
import Skill from './Skill';


const Skills: FC = () => {
  return (
    <ul className={cx(styles.skills)}>

        <Skill title='React JS' subtitle='React Hooks, Redux-toolkit'>
            <FaReact />
        </Skill>

        <Skill title='Next JS'>
         <SiNextdotjs />
        </Skill>

        <Skill title='JavaScript' subtitle='ES5, ES6, Promise'>
            <TbBrandJavascript />
        </Skill>

        <Skill title='TypeScript'>
            <TbBrandTypescript />
        </Skill>

        <Skill title='HTML 5'>
            <AiOutlineHtml5 />
        </Skill>


        <Skill title='CSS, SCSS'>
            <BsFiletypeScss />
        </Skill>


        <Skill title='MySQL'>
            <SiMysql />
        </Skill>

        <Skill title='Express JS'>
            <SiExpress />
        </Skill>

        <Skill title='Wordpress'>
            <BsWordpress />
        </Skill>

  </ul>
  );
};

export default Skills;
