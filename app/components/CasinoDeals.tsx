import styles from "@/public/style/casinodeals.module.css";

const CasinoDeals = () => {
  return (
    <div className={styles.banner}>
      <h3 className={styles.title}>
        Discover <span className={styles.titlesColor}>Top Casino Deals &</span>
        <br /> Boost Your Winnings!
      </h3>
      <p className={"text-center " + styles.titleText}>
        Your ultimate destination for the best affiliate casino offers,
        exclusive bonuses, and top-notch
        <br /> gaming insights. Play smarter, win bigger—start your adventure
        today!&quot;
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
