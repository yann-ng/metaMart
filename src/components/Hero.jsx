import style from '../styles/hero.module.css';

import hero from '../assets/img/hero.png';
import ethLogo from '../assets/img/eth-logo.svg';
import profile1 from '../assets/img/profile3.png';
import profile2 from '../assets/img/profile1.png';
import profile3 from '../assets/img/profile2.png';


function Hero(){
  return(
    <section className={style.hero}>
      <div className={style.hero_container}>
        <img src={hero} alt="The fantastic avatar" className={style.hero_image}/>
        <div className={style.hero_stats}>
          {/* stats */}
          <h2 className={style.hero_stats_title}>POTM #5621</h2>
          {/* first row */}
          <div className={style.hero_stats_row1}>
            <div>
              <span className={style.hero_stats_row1_title}>Current bid</span><br />
              <div className={style.hero_stats_row1_x}>
                <img src={ethLogo} alt="Ethereum logo" className={style.hero_stats_ethlogo} />
                <span className={style.hero_stats_row1_value}>290.3 ETH</span>
              </div>
            </div>
            <div>
              <span className={style.hero_stats_row1_title}>Ends in</span><br />
              <span className={style.hero_stats_row1_value}>15h 18m 16s</span>
            </div>
          </div>
          {/* second row */}
          <div className={style.hero_stats_row2}>
              <span className={style.hero_stats_row1_title}>Recent bids</span>
                <div className={style.hero_stats_row2_recentbids}>
                  <div className={style.hero_stats_row2_recentbids_bids}>
                    <img src={profile1} alt="First profile" className={style.hero_stats_row2_recentbids_bids_image} />
                    <span className={style.hero_stats_row2_recentbids_bids_value}>189.2 ETH</span>
                  </div>
                  <div className={style.hero_stats_row2_recentbids_bids}>
                    <img src={profile2} alt="Second profile" className={style.hero_stats_row2_recentbids_bids_image} />
                    <span className={style.hero_stats_row2_recentbids_bids_value}>162 ETH</span>
                  </div>
                  <div className={style.hero_stats_row2_recentbids_bids}>
                    <img src={profile3} alt="Third profile" className={style.hero_stats_row2_recentbids_bids_image} />
                    <span className={style.hero_stats_row2_recentbids_bids_value}>144 ETH</span>
                  </div>
                </div>
            </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;