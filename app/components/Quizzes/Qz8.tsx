import styles from "@/public/style/quiz.module.css";

const Qz8 = () => {
  return (
    <div className={styles.quizSevenBanner}>
      <div className="text-center">
        <h4 className={styles.casinoTitle}>
          Can&apos;t find a Casino? Do the quiz!
        </h4>
        <p className="text-white">
          Answer a few questions and let us guide you to the best spot.
        </p>
        <div className={"row container " + styles.shuffleRow}>
          <div className="col-lg-4">
          <div className={styles.shaffleCardOne}>
            <h4 className={styles.shuffleHeading}>$10 Free balance</h4>
            <p className={styles.shufflePara}>Deposit $20 & Wager $100+ in total!</p>
            <button className={styles.redeemBtn}>Redeem Now!</button>
          </div>
          </div>
          <div className={"col-lg-4 " + styles.shufflecardresp}>
          <div className={styles.shaffleCardTwo}>
            <h4 className={styles.shuffleHeading}>$250 Free balance</h4>
            <p className={styles.shufflePara}>Deposit $2,000 & Wager $20,000+ in total!</p>
            <button className={styles.redeemBtn}>Redeem Now!</button>
          </div>
          </div>
          <div className={"col-lg-4 " + styles.shufflecardresp}>
          <div className={styles.shaffleCardThree}>
            <h4 className={styles.shuffleHeading}>Join discord &<br />
            create support ticket</h4>
            <button className={styles.redeemBtn}>Redeem Now!</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qz8;
