import styles from "@/public/style/featuredcasino.module.css";
import Image from "next/image";

interface CasinoData {
  logo: string;
  title: string;
  bonus: string;
  subTitle: string;
  source: string;
}

const fcasinoRecord: CasinoData[] = [
  {
    logo: "/jackpotsvg.svg",
    title: "JACKPOTCITY CASINO",
    bonus: "50% deposit bonus",
    subTitle: "Jackpotcity Review",
    source: "#",
  },
  {
    logo: "/stake.svg",
    title: "STAKE CASINO",
    bonus: "50% deposit bonus",
    subTitle: "Stake Review",
    source: "#",
  },
  {
    logo: "/betRiver.svg",
    title: "BETRIVERS CASINO",
    bonus: "50% deposit bonus",
    subTitle: "Betrivers Review",
    source: "#",
  },
  {
    logo: "/betway.svg",
    title: "BETWAY CASINO",
    bonus: "50% deposit bonus",
    subTitle: "Betway Review",
    source: "#",
  },
  {
    logo: "/draftKing.svg",
    title: "DRAFTKING CASINO",
    bonus: "50% deposit bonus",
    subTitle: "Draftkings Review",
    source: "#",
  },
];

const NewsAndBlogs = () => {
  return (
    <div className={styles.brands}>
      <div className="row">
        <div className={"col-md-6 " + styles.brandTitleDiv}>
          <Image
            src="/Feature.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <span className={"text-white " + styles.brandTitle}>
            Featured Casino
          </span>
        </div>
        <div className="col-md-6">
          <button className={styles.featureBtn}>
            View More{" "}
            <Image
              src="/more.svg"
              width={15}
              height={15}
              alt="Picture of the author"
            />
          </button>
        </div>
      </div>
      <div className="row">
        {fcasinoRecord.map((fc, index) => (
          <div key={index} className={"col-md-2 " + styles.featCard}>
            <div className="text-center">
              <Image
                src={fc.logo}
                width={150}
                height={80}
                alt={fc.title}
              />
              <h5>{fc.title}</h5>
              <p>{fc.bonus}</p>
              <a href={fc.source}>
                <button className={styles.sendBtn}>
                  <Image
                    src="/pan.svg"
                    width={25}
                    height={25}
                    alt="Picture of the author"
                  />{" "}
                  Play Now
                </button>
              </a>
              <h6>{fc.subTitle}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndBlogs;
