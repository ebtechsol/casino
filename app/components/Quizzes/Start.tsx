import Image from "next/image";
import styles from "@/public/style/quiz.module.css";

const QuizStart = () => {
  return (
    <div className={styles.casinoBanner}>
      <div className="text-center">
        <h4 className={styles.casinoTitle}>
          Can&apos;t find a Casino? Do the quiz!
        </h4>
        <p className="text-white">
          Answer a few questions and let us guide you to the best spot.
        </p>
        <a href="/Quiz?qt=1"><button className={styles.complbtn}>
          <Image
            src="/pan.svg"
            width={25}
            height={25}
            alt="Picture of the author"
          />
          Start the quiz!
          <Image
            src="/pan.svg"
            width={25}
            height={25}
            alt="Picture of the author"
          />
        </button></a>
      </div>
    </div>
  );
};

export default QuizStart;
