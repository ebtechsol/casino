import Image from "next/image";
import styles from "@/public/style/quiz.module.css";

const Qz7 = () => {
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
          <Image
            src="/shuffleOne.svg"
            width={400}
            height={300}
            alt="Picture of the author"
          />
          </div>
          <div className="col-lg-4">
          <Image
            src="/shuffleTwo.svg"
            width={400}
            height={300}
            alt="Picture of the author"
          />
          <button className={styles.shufflebtn}>
          <Image
            src="/pan.svg"
            width={25}
            height={25}
            alt="Picture of the author"
          />
          SHUFFLE
          <Image
            src="/pan.svg"
            width={25}
            height={25}
            alt="Picture of the author"
          />
        </button>
          </div>
          <div className="col-lg-4">
          <Image
            src="/shuffleThree.svg"
            width={400}
            height={300}
            alt="Picture of the author"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qz7;
