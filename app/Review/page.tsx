import Image from "next/image";
import styles from "@/public/style/review.module.css";

const Profile = () => {
  return (
    <div className={"row " + styles.ReviewRow}>
      <div className="col-lg-8">
        <div className="row">
          <div className="col-lg-3">
            <Image
              src="/casino_stake.svg"
              width={220}
              height={150}
              alt=""
            />
          </div>
          <div className="col-lg-9">
            <h2>Stake Reviews</h2>
            <div>
              <span className={styles.reviewTags}>
                <Image
                  src="/review-slots.svg"
                  width={20}
                  height={20}
                  alt=""
                /> Slots
              </span>
              <span className={styles.reviewTagspac}>
                <Image
                  src="/shaf-card.svg"
                  width={20}
                  height={20}
                  alt=""
                /> Blackjack
              </span>
              <span className={styles.reviewTagspac}>
                <Image
                  src="/lottery.svg"
                  width={20}
                  height={20}
                  alt=""
                /> Roulette
              </span><br /><br />
              <span className={styles.reviewTags}>
                <Image
                  src="/dice.svg"
                  width={20}
                  height={20}
                  alt=""
                /> Craps
              </span>
              <span className={styles.reviewTagspac}>

                <Image
                  src="/live-streaming.svg"
                  width={20}
                  height={20}
                  alt=""
                /> Live Games
              </span>
            </div>
          </div>
        </div>
        <h4>General Information about Stake</h4>
        <p>Stake.com is one of the most exciting online casinos out there, mainly because of its outstanding collection
          of games from top software providers. There are tons of progressive jackpots, easy banking transactions and
          strong customer service, and you are left with a truly vibrant and authentic casino experience.</p>
      </div>
      <div className={"col-lg-4 " + styles.cardBg}>
        <div className={styles.cardRow}>
          <button className={styles.visitBtn}>Visit Stake Casino</button>
          <div className={styles.stakeInnerSec}>
            <p>Welcome Bonus</p>
            <h2 className={styles.stakeBonusParagh}>100% up to €500 + 200 <br />Bonus Spins</h2>
            <button className={styles.claimBtn}>
              <Image
                src="/pan.svg"
                width={20}
                height={20}
                alt="Picture of the author"
              />
              Claim Offer & Play</button>
          </div>
        </div>
      </div>
      <div className={styles.mainDiv}>
        <div className="row">
          <div className="col-lg-8">
            <div className={styles.childDev}>
              <div className={"row " + styles.ratingSec}>
                <div className="col-lg-6">
                  <h5>Overall Rating</h5>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/rating.svg"
                    width={650}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className={"row " + styles.ratingCopSec}>
                <div className="col-lg-6">
                  <span>Bonuses & Offer</span>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/rating.svg"
                    width={650}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className={"row " + styles.ratingCopSec}>
                <div className="col-lg-6">
                  <span>Security</span>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/rating.svg"
                    width={650}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className={"row " + styles.ratingCopSec}>
                <div className="col-lg-6">
                  <span>Software & Games</span>
                </div>
                <div className="col-lg-6">
                  <Image
                    src="/rating.svg"
                    width={650}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.childDev}></div>
          </div>
        </div>
        <table className="table table-bordered rounded-3">
  <tbody>
    <tr>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Casino Name</td>
      <td className={styles.colum}>Stake</td>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Owner</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Year Established</td>
      <td className={styles.colum}>2024</td>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Owner</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Games Offered</td>
      <td className={styles.colum}>Slots, Blackjack, Roulette, Baccarat, Live Casino</td>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Owner</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Payout Percentage</td>
      <td className={styles.colum}>96.6%</td>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Owner</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Languages</td>
      <td className={styles.colum}>German, Spanish, English, French, Finish + 9 More</td>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Owner</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Payment Methods</td>
      <td className={styles.colum}>Visa, MasterCard, Bitcoin, Ethereum + More</td>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  />Owner</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Profile;
