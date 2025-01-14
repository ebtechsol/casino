import Image from "next/image";
import styles from "@/public/style/quiz.module.css";

const Qz3 = () => {
  return (
    <div className={styles.quizTreeBanner}>
      <div className="text-center">
        <h4 className={styles.casinoTitle}>
          Can&apos;t find a Casino? Do the quiz!
        </h4>
        <p className="text-white">
          Answer a few questions and let us guide you to the best spot.
        </p>
        <h2 className={styles.gameThreeTilte}>3. Where do you live?</h2>
        <div className={"row container " + styles.gameOptionTwoRow}>
          <div className="col-lg-3">
          <Image
            src="/uk.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>United Kingdom</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/aust.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>Australia</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/eup.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>Europe</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/ind.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>India</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/asia.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>Asia</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/north_america.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>North America</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/new_zealand.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>New Zealand</h4>
          </div>
          <div className="col-lg-3">
          <Image
            src="/central_south.svg"
            width={200}
            height={170}
            alt="Picture of the author"
          />
          <h4 className={styles.gamecardThreeTitle}>Central/South America</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qz3;
