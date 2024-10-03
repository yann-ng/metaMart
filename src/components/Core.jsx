import style from '../styles/core.module.css';
import Hero from './Hero';
import RightCore from './RightCore';
import badge from '../assets/img/badge.svg';

function Core(){
  return(
    <main className={style.core_container}>
      <Hero />
      <RightCore />
      <img src={badge} alt="The Badge" className={style.core_badge} />
    </main>
  );
}

export default Core;