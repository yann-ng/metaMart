import style from '../styles/rightcore.module.css';
import badge from '../assets/img/badge.svg';

function RightCore(){
  return(
    <section className={style.rightcore}>
      <div className={style.rightcore_container}>
        <h2 className={style.rightcore_title}>We make your <span className={style.rightcore_title_nftinvestment}>NFT Investment</span> lot more easier</h2>
        <p className={style.rightcore_detail}>We help you take your NFT Investments to next level with the help of our advanced blockchain infrastructure</p>
        <div className= {style.rightcore_btn}>
          <button className={style.rightcore_button}>Explore collections</button>
          <img src={badge} alt="The Badge" className={style.rightcore_badge} />
        </div>
        {/* bottom part  */}
        <div className={style.rightcore_startforyou}>
          <h3 className={style.rightcore_startforyou_title}>Stats for you</h3>
          <div className={style.rightcore_startforyou_items}>
            <div>
              <div className={style.rightcore_startforyou_items_container}>
                <span className={style.rightcore_startforyou_items_value}>10K +</span>
              </div>
              <p className={style.rightcore_startforyou_items_text}>Auctions</p>
            </div>
            <div>
              <div className={style.rightcore_startforyou_items_container}>
                <span className={style.rightcore_startforyou_items_value}>200 +</span>
              </div>
              <p className={style.rightcore_startforyou_items_text}>Collections</p>
            </div>
            <div>
              <div className={style.rightcore_startforyou_items_container}>
                <span className={style.rightcore_startforyou_items_value}>50 +</span>
              </div>
              <p className={style.rightcore_startforyou_items_text}>Artists</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
    
  );
}

export default RightCore;