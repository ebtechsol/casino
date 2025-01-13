import Image from "next/image";
import styles from "@/public/style/quiz.module.css";

const Qz1 = () => {
  return (
    <div className={styles.quizOneBanner}>
      <div className="text-center">
        <h4 className={styles.casinoTitle}>
          Can&apos;t find a Casino? Do the quiz!
        </h4>
        <p className="text-white">
          Answer a few questions and let us guide you to the best spot.
        </p>
        <h2 className={styles.gameTwoTilte}>2. What's your favorite game?</h2>
        <div className={"row container " + styles.gameOptionTwoRow}>
          <div className="col-lg-3">
          <Image
            src="/blackjack.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Blackjack</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/craps.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Craps</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/roulette.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Roulette</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/game_slots.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Slots</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qz1;
