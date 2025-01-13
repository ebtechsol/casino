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
        <h2 className={styles.gameTilte}>1. What games do you like to play?</h2>
        <div className={"row container " + styles.gameOptionRow}>
          <div className="col-lg-4">
          <Image
            src="/slot_game.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Slots & Table Games</h4>
          </div>
          <div className="col-lg-4">
          <Image
            src="/just_slot.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Just Slots</h4>
          </div>
          <div className="col-lg-4">
          <Image
            src="/just_game.svg"
            width={200}
            height={150}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardTitle}>Just Game Tables</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qz1;
