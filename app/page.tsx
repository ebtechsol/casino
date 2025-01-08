import Image from "next/image";
import styles from "./../public/style/navbar.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <h3 className={styles.title}>Discover <span className={styles.titlesColor}>Top Casino Deals &</span><br /> Boost Your Winnings!</h3>
        <p className="text-center">Your ultimate destination for the best affiliate casino offers, exclusive bonuses, and top-notch<br /> gaming insights. Play smarter, win bigger—start your adventure today!&quot;</p>
        <div className="text-center"> <input type="text" placeholder="Search casinos, games.." className={styles.searchInput} /><button className={styles.search}>Search</button></div>
      </div>
      <div className={styles.brands}>
        <div className="row">
          <div className={"col-md-6 " + styles.brandTitleDiv}>
            <Image
              src="/Feature.svg"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            <span className={"text-white " + styles.brandTitle}>Featured Casino</span>
          </div>
          <div className="col-md-6"><button className={styles.featureBtn}>View More <Image
            src="/more.svg"
            width={15}
            height={15}
            alt="Picture of the author"
          /></button></div>
        </div>
        <div className="row">
          <div className={"col-md-2 " + styles.featCard}>
            <div className="text-center"><Image
              src="/jackpotsvg.svg"
              width={150}
              height={80}
              alt="Picture of the author"
            />
              <h5>JACKPOTCITY CASINO</h5>
              <p>50% deposit bonus</p>
              <button className={styles.sendBtn}><Image
                src="/pan.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              /> Play Now</button>
              <h6>Jackpotcity Review</h6>
            </div>
          </div>
          <div className={"col-md-2 " + styles.featCard}>
            <div className="text-center"><Image
              src="/stack.svg"
              width={100}
              height={80}
              alt="Picture of the author"
            />
              <h5>STAKE CASINO</h5>
              <p>50% deposit bonus</p>
              <button className={styles.sendBtn}><Image
                src="/pan.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              /> Play Now</button>
              <h6>Stake Review</h6>
            </div>
          </div>
          <div className={"col-md-2 " + styles.featCard}>
            <div className="text-center"><Image
              src="/betRiver.svg"
              width={150}
              height={80}
              alt="Picture of the author"
            />
              <h5>BETRIVERS CASINO</h5>
              <p>50% deposit bonus</p>
              <button className={styles.sendBtn}><Image
                src="/pan.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              /> Play Now</button>
              <h6>Betrivers Review</h6>
            </div>
          </div>
          <div className={"col-md-2 " + styles.featCard}>
            <div className="text-center"><Image
              src="/betway.svg"
              width={150}
              height={80}
              alt="Picture of the author"
            />
              <h5>BETWAY CASINO</h5>
              <p>50% deposit bonus</p>
              <button className={styles.sendBtn}><Image
                src="/pan.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              /> Play Now</button>
              <h6>betway Review</h6>
            </div>
          </div>
          <div className={"col-md-2 " + styles.featCard}>
            <div className="text-center"><Image
              src="/draftKing.svg"
              width={150}
              height={80}
              alt="Picture of the author"
            />
              <h5>DRAFTKING CASINO</h5>
              <p>50% deposit bonus</p>
              <button className={styles.sendBtn}><Image
                src="/pan.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              /> Play Now</button>
              <h6>Draftkings Review</h6>
            </div>
          </div>

        </div>
      </div>
      <div className={styles.casinoBanner}>
        <div className="text-center">
          <h4 className={styles.casinoTitle}>Can&apos;t find a Casino? Do the quiz!</h4>
          <p className="text-white">Answer a few questions and let us guide you to the best spot.</p>
          <button className={styles.complbtn}>
            <Image
              src="/pan.svg"
              width={25}
              height={25}
              alt="Picture of the author"
            />
            Complete The Quiz & Get Rewarded!
            <Image
              src="/pan.svg"
              width={25}
              height={25}
              alt="Picture of the author"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
