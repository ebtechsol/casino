import styles from "@/public/style/casino.module.css";
import Image from "next/image";
interface casinoData {
    src: string;
    wizardTitle: string;
    WizardValue: string;
    CriticTitle: string;
    CriticValue: string;
    bonusText: string;
    Visitsource: string;
    Reviewsource: string;
}

const casinoRecord: casinoData[] = [
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
    {
        src: "/casino_stake.svg",
        wizardTitle: "Wizard Rating",
        WizardValue: "6.9/10",
        CriticTitle: "Critic Score",
        CriticValue: "85%",
        bonusText: "Get 100% up to €500 + 200 Bonus Spins",
        Visitsource: "#",
        Reviewsource: "#",
    },
];
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
            <div className={"row " + styles.casinobg}>
            {casinoRecord.map((casino, index) => (
                <div key={index} className="col-lg-4">
                    <div className={styles.cardColumn}>
                        <Image
                            src={casino.src}
                            width={400}
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
                                    /> <span className={styles.wizardRating}>{casino.wizardTitle}</span>
                                    <div className={styles.wizardNum}>
                                    {casino.WizardValue}
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
                                    /> <span className={styles.wizardRating}>{casino.CriticTitle}</span>
                                    <div className={styles.wizardNum}>
                                    {casino.WizardValue}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardPrice}>
                        {casino.bonusText}
                        </div>
                        <a href={casino.Visitsource}><button className={styles.visitCasinoBtn}>Visit Stake Casino</button></a><br />
                        <a href={casino.Reviewsource}><button className={styles.readCasinoBtn}>Read Stake Review</button></a>
                    </div>
                </div>
                ))}
            </div>
            <br />
            <div className={styles.topSpace}></div>
        </div>
    );
};

export default Casino;