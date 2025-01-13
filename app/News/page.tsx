import styles from "@/public/style/news.module.css";
import Image from "next/image";

interface BlogTags {
  value: string;
}

interface BlogData {
  src: string;
  title: string;
  subTitle: string;
  tags: BlogTags[];
  source: string;
}

const blogRecord: BlogData[] = [
  {
    src: "/prices_will.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    subTitle: "Crypto Lark • 28 DEC 2024",
    tags: [{ value: "Crypto" }, { value: "Bitcoin" }, { value: "Casino" }],
    source: "/BlogDetail",
  },
  {
    src: "/buying.svg",
    title: "Can PENGU Overtake DOGE? Pudgy Penguins VS Dogecoin Altcoins in 2025",
    subTitle: "Altcoin Buzz • 28 DEC 2024",
    tags: [{ value: "Crypto" }, { value: "Bitcoin" }, { value: "Casino" }],
    source: "/BlogDetail",
  },
  {
    src: "/prices_will.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    subTitle: "Crypto Lark • 28 DEC 2024",
    tags: [{ value: "Crypto" }, { value: "Bitcoin" }, { value: "Casino" }],
    source: "/BlogDetail",
  },
  {
    src: "/buying.svg",
    title: "Can PENGU Overtake DOGE? Pudgy Penguins VS Dogecoin Altcoins in 2025",
    subTitle: "Altcoin Buzz • 28 DEC 2024",
    tags: [{ value: "Crypto" }, { value: "Bitcoin" }, { value: "Casino" }],
    source: "/BlogDetail",
  },
  {
    src: "/prices_will.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    subTitle: "Crypto Lark • 28 DEC 2024",
    tags: [{ value: "Crypto" }, { value: "Bitcoin" }, { value: "Casino" }],
    source: "/BlogDetail",
  },
  {
    src: "/buying.svg",
    title: "Can PENGU Overtake DOGE? Pudgy Penguins VS Dogecoin Altcoins in 2025",
    subTitle: "Altcoin Buzz • 28 DEC 2024",
    tags: [{ value: "Crypto" }, { value: "Bitcoin" }, { value: "Casino" }],
    source: "/BlogDetail",
  }
];

const News = () => {
  return (
    <div className={styles.casinoBlog}>
      <div className="row">
        <div className={"col-md-6 " + styles.brandTitleDiv}>
          <span className={styles.blogMainTitle}>Blogs and News</span>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="row">
        <div className={"col-md-6 " + styles.brandSubTitleDiv}>
          <span className={styles.blognesTitle}>Casino News</span>
        </div>
        <div className="col-md-6">
          <a href="/Blogs">
            <button className={styles.blogBtn}>
              More Casino News{" "}
              <Image
                src="/arrow-up-right.svg"
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </button>
          </a>
        </div>
      </div>

      <div className="row mt-2 mb-2">
        {blogRecord.map((blog, index) => (
          <div key={index} className={"col-md-4 " + styles.blogSection}>
            <Image
              src={blog.src}
              width={370}
              height={200}
              className={styles.blogImg}
              alt="Picture of the author"
            />
            <p className={styles.blogSubTitle}>{blog.subTitle}</p>
            <div className="row">
              <div className="col-lg-10">
                <span className={styles.blogTitle}>{blog.title}</span>
              </div>
              <div className="col-lg-2">
                <a href={blog.source}>
                  <Image
                    src="/arrow-up-right.svg"
                    className={styles.arrowImg}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                </a>
              </div>
            </div>
            <div className="mt-4">
              {blog.tags.map((tag, i) => (
                <span className={styles.blogTag} key={i}>
                  {tag.value}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
      <div className="row">
        <div className={"col-md-6 " + styles.brandSubTitleDiv}>
          <span className={styles.blognesTitle}>Casino Strategies</span>
        </div>
        <div className="col-md-6">
          <a href="/Blogs">
            <button className={styles.blogBtn}>
              More Casino Strategies{" "}
              <Image
                src="/arrow-up-right.svg"
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </button>
          </a>
        </div>
      </div>

      <div className="row mt-2 mb-2">
        {blogRecord.map((blog, index) => (
          <div key={index} className={"col-md-4 " + styles.blogSection}>
            <Image
              src={blog.src}
              width={370}
              height={200}
              className={styles.blogImg}
              alt="Picture of the author"
            />
            <p className={styles.blogSubTitle}>{blog.subTitle}</p>
            <div className="row">
              <div className="col-lg-10">
                <span className={styles.blogTitle}>{blog.title}</span>
              </div>
              <div className="col-lg-2">
                <a href={blog.source}>
                  <Image
                    src="/arrow-up-right.svg"
                    className={styles.arrowImg}
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                </a>
              </div>
            </div>
            <div className="mt-4">
              {blog.tags.map((tag, i) => (
                <span className={styles.blogTag} key={i}>
                  {tag.value}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.topSpace}></div>
    </div>
  );
};

export default News;
