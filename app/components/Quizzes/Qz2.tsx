import Image from "next/image";
import styles from "@/public/style/quiz.module.css";

const Qz2 = () => {
  return (
    <div className={styles.casinoBanner}>
      <div className="text-center">
        <h4 className={styles.casinoTitle}>
          Can&apos;t find a Casino? Do the quiz 2!
        </h4>
        <p className="text-white">
          Answer a few questions and let us guide you to the best spot.
        </p>
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
  );
};

export default Qz2;
