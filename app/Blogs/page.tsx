import styles from "@/public/style/blogs.module.css";
import Image from "next/image";

interface BlogTags {
    value: string
}

interface BlogData {
  src: string;
  title: string;
  tags: BlogTags[];
  description: string;
  source: string;
}

const blogRecord: BlogData[] = [
  {
    src: "/prices_will.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    tags: [{value: "Crypto"},{value: "Bitcoin"},{value: "Casino"}],
    description: "Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus. Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat. Turpis tempor id turpis pellentesque laoreet pellentesque.",
    source: "/BlogDetail"
  },
  {
    src: "/buying.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    tags: [{value: "Crypto"},{value: "Bitcoin"},{value: "Casino"}],
    description: "Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus. Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat. Turpis tempor id turpis pellentesque laoreet pellentesque.",
    source: "/BlogDetail"
  },
  {
    src: "/prices_will.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    tags: [{value: "Crypto"},{value: "Bitcoin"},{value: "Casino"}],
    description: "Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus. Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat. Turpis tempor id turpis pellentesque laoreet pellentesque.",
    source: "/BlogDetail"
  },
  {
    src: "/buying.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    tags: [{value: "Crypto"},{value: "Bitcoin"},{value: "Casino"}],
    description: "Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus. Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat. Turpis tempor id turpis pellentesque laoreet pellentesque.",
    source: "/BlogDetail"
  },
  {
    src: "/prices_will.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    tags: [{value: "Crypto"},{value: "Bitcoin"},{value: "Casino"}],
    description: "Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus. Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat. Turpis tempor id turpis pellentesque laoreet pellentesque.",
    source: "/BlogDetail"
  },
  {
    src: "/buying.svg",
    title: "Crypto Holders! Here’s EXACTLY When To Sell For Max Profits",
    tags: [{value: "Crypto"},{value: "Bitcoin"},{value: "Casino"}],
    description: "Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus. Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat. Turpis tempor id turpis pellentesque laoreet pellentesque.",
    source: "/BlogDetail"
  }
];

const Blogs = () => {
  return (
    <div>
      <a href="/News">
        <div className={styles.newsSection}>
          <Image
            src="/news.svg"
            width={60}
            height={60}
            alt="Picture of the author"
          />{" "}
          Casino News
        </div>
      </a>

      {blogRecord.map((blog, index) => (
        <a key={index} href={blog.source}>
          <div className={"row mt-2 " + styles.blogSection}>
          <div className={"col-md-4 " + styles.blogImgSection}>
              <Image
                src={blog.src}
                width={370}
                height={200}
                className={styles.blogImg}
                alt="Picture of the author"
              />
            </div>
            <div className="col-lg-8 ps-4 pe-4">
              <div className={styles.blogTextSec}>
                <h3 className={styles.blogTitle}>
                    {blog.title}                  
                </h3>
                <div className="mt-2">
                    <div className="mt-4">
                        {blog.tags.map((tag, i) => (
                            <span className={styles.blogTag} key={i}>
                                {tag.value}
                            </span>
                        ))}
                    </div>
                    <p className={styles.blogDesc}>
                        {blog.description}
                    </p>
                    <button className={styles.featureBtn}>
                        Read More{" "}
                        <Image
                        src="/more.svg"
                        width={15}
                        height={15}
                        alt="Picture of the author"
                        />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}

      <div className={styles.topSpace}></div>
    </div>
  );
};

export default Blogs;
