import Image from "next/image";
import styles from "@/public/style/quiz.module.css";

const Qz4 = () => {
  return (
    <div className={styles.quizOneBanner}>
      <div className="text-center">
        <h4 className={styles.casinoTitle}>
          Can&apos;t find a Casino? Do the quiz!
        </h4>
        <p className="text-white">
          Answer a few questions and let us guide you to the best spot.
        </p>
        <h2 className={styles.gameTilte}>4. What size bets do you make?</h2>
        <div className={"row container " + styles.gameOptionRow}>
          <div className="col-lg-4">
          <Image
            src="/minimum_bets.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Minimum Bets</h4>
          </div>
          <div className="col-lg-4">
          <Image
            src="/medium_bets.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Medium Bets</h4>
          </div>
          <div className="col-lg-4">
          <Image
            src="/maximum_bets.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Maximum Bets</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qz4;
