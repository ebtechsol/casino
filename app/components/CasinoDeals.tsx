import styles from "@/public/style/casinodeals.module.css";

const CasinoDeals = () => {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>
        Discover <span className={styles.titlesColor}>Top Casino Deals &</span>
        <br /> Boost Your Winnings!
      </h3>
      <p className={"text-center " + styles.titleText}>
        Your go-to source for the latest casino news, industry trends, and expert insights—plus the best casino offers and exclusive bonuses. 
        <br /> Stay informed, play smarter, and make the most of your gaming experience.
      </p>
      <div className="text-center">
        {" "}
        <input
          type="text"
          placeholder="Search casinos, games.."
          className={styles.searchInput}
        />
        <button className={styles.search}>Search</button>
      </div>
    </div>
  );
};

export default CasinoDeals;
