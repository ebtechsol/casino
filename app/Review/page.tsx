"use client"
import Image from "next/image";
import styles from "@/public/style/review.module.css";
import React , { Suspense } from "react";
import CasinoDetail from "./component/detailCasinoSection";
import CasinoRatingSection from "./component/detailCasinoRating";
const Review = () => {
  return (
    <div className={styles.ReviewRow}>
      <Suspense fallback={<div>Loading...</div>}>
      <CasinoDetail />
      </Suspense>
      <button className={styles.overviewBtn}><Image
                src="/home.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              /> Overview</button>
      <div className={styles.mainDiv}>
        <div className="row">
          <div className="col-lg-8">
            <div className={styles.childDev}>
            <Suspense fallback={<div>Loading...</div>}>
             <CasinoRatingSection />
             </Suspense>
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.childDev}>
              <div className={styles.percentDev}>
              <p className={styles.lightParagh}>Payout percent</p>
              <h2 className={styles.ratHeading}>96.5%</h2>
              <hr/>
              <p className={styles.lightParagh}>Payment Speed</p>
              <h2 className={styles.ratHeading}>Instant</h2>
              </div>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-responsive rounded-3 mt-5">
  <tbody>
    <tr>
      <td className={styles.colum}><Image
                    src="/build.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Casino Name</td>
      <td className={styles.colum}>Stake</td>
      <td className={styles.colum}><Image
                    src="/owner.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Owner</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/game.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Year Established</td>
      <td className={styles.colum}>2024</td>
      <td className={styles.colum}><Image
                    src="/number-of-game.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Number of Games</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/payoutPercent.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Games Offered</td>
      <td className={styles.colum}>Slots, Blackjack, Roulette, Baccarat, Live Casino</td>
      <td className={styles.colum}><Image
                    src="/devices.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Compatible Devices</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/paymentCard.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Payout Percentage</td>
      <td className={styles.colum}>96.6%</td>
      <td className={styles.colum}><Image
                    src="/payoutDays.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Payout Days</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image
                    src="/language.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Languages</td>
      <td className={styles.colum}>German, Spanish, English, French, Finish + 9 More</td>
      <td className={styles.colum}><Image
                    src="/customer-support.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Customer Support</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
    <tr>
      <td className={styles.colum}><Image 
                    src="/paymentCard.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Payment Methods</td>
      <td className={styles.colum}>Visa, MasterCard, Bitcoin, Ethereum + More</td>
      <td className={styles.colum}><Image
                    src="/softwareUsed.svg"
                    width={30}
                    height={30}
                    alt=""
                  /> Software Used</td>
      <td className={styles.colum}>Sweepstaked Limited</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Review;
