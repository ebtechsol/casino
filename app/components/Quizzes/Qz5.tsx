import styles from "@/public/style/quiz.module.css";

const Qz5 = () => {
  return (
    <div className={styles.quizOneBanner}>
      <div className="text-center">
        <h4 className={styles.casinoTitle}>
          Can&apos;t find a Casino? Do the quiz!
        </h4>
        <p className="text-white">
          Answer a few questions and let us guide you to the best spot.
        </p>
        <h2 className={styles.gameTilte}>5. Do you enjoy sports betting?</h2>
        <div className={styles.bettingBtnSec}>
          <button className={styles.bettingBtn}>Yes!</button>
          <button className={styles.bettingBtn}>No!</button>
          <div className={styles.bettingPlaceHolder}>Please select an answer</div>
        </div>
      </div>
    </div>
  );
};

export default Qz5;
