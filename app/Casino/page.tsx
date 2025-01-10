import styles from "@/public/style/casino.module.css";
import Image from "next/image";

const Casino = () => {
    return (
        <div className={styles.mainSection}>
            <h1>Casino</h1>
            <div className="row">
                <div className="col-lg-6">
                    <div className={styles.card1}>
                        <h1 className={styles.casinoTitle}>BEST CASINO OFFERS</h1>
                        <button className={styles.casinobtn}>REDEEM NOW &nbsp;&nbsp; REDEEM NOW &nbsp;&nbsp; REDEEM NOW &nbsp;&nbsp; REDEEM NOW</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.card2}>
                        <h1 className={styles.casinoTitle}>CASINO REVIEWS</h1>
                        <button className={styles.casinobtn}>REVIEWS &nbsp;&nbsp; REVIEWS &nbsp;&nbsp; REVIEWS &nbsp;&nbsp; REVIEWS</button>
                    </div>
                </div>
            </div>
            <h1 className={styles.ratingTitle}>Top Rated Online Casinos</h1>
            <div className="row gap-0 column-gap-0">
                <div className="col-lg-4">
                    <div className={styles.cardColumn}>
                        <Image
                            src="/casino_stake.svg"
                            width={500}
                            height={210}
                            className={styles.stakeImg}
                            alt="Stake"
                        />
                        <div className={"row " + styles.casinoCardRow}>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/wizard_rating.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Wizard Rating</span>
                                    <div className={styles.wizardNum}>
                                        6.9/10
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <Image
                                    src="/Line.svg"
                                    width={10}
                                    height={40}
                                    alt="Stake"
                                />
                            </div>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/critic_score.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Critic Score</span>
                                    <div className={styles.wizardNum}>
                                        85%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardPrice}>
                            Get 100% up to €500 + 200 Bonus Spins
                        </div>
                        <button className={styles.visitCasinoBtn}>Visit Stake Casino</button><br />
                        <button className={styles.readCasinoBtn}>Read Stake Review</button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.cardColumn}>
                        <Image
                            src="/casino_stake.svg"
                            width={500}
                            height={210}
                            className={styles.stakeImg}
                            alt="Stake"
                        />
                        <div className={"row " + styles.casinoCardRow}>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/wizard_rating.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Wizard Rating</span>
                                    <div className={styles.wizardNum}>
                                        6.9/10
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <Image
                                    src="/Line.svg"
                                    width={10}
                                    height={40}
                                    alt="Stake"
                                />
                            </div>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/critic_score.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Critic Score</span>
                                    <div className={styles.wizardNum}>
                                        85%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardPrice}>
                            Get 100% up to €500 + 200 Bonus Spins
                        </div>
                        <button className={styles.visitCasinoBtn}>Visit Stake Casino</button><br />
                        <button className={styles.readCasinoBtn}>Read Stake Review</button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.cardColumn}>
                        <Image
                            src="/casino_stake.svg"
                            width={500}
                            height={210}
                            className={styles.stakeImg}
                            alt="Stake"
                        />
                        <div className={"row " + styles.casinoCardRow}>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/wizard_rating.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Wizard Rating</span>
                                    <div className={styles.wizardNum}>
                                        6.9/10
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <Image
                                    src="/Line.svg"
                                    width={10}
                                    height={40}
                                    alt="Stake"
                                />
                            </div>
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <Image
                                        src="/critic_score.svg"
                                        width={20}
                                        height={20}
                                        alt="Stake"
                                    /> <span className={styles.wizardRating}>Critic Score</span>
                                    <div className={styles.wizardNum}>
                                        85%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardPrice}>
                            Get 100% up to €500 + 200 Bonus Spins
                        </div>
                        <button className={styles.visitCasinoBtn}>Visit Stake Casino</button><br />
                        <button className={styles.readCasinoBtn}>Read Stake Review</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Casino;