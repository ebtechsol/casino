import Image from "next/image";
import styles from "@/public/style/blog_detail.module.css";

const BlogDetail = () => {
    return (
        <div className="container">
            <Image
                src="/blog.svg"
                width={1300}
                height={550}
                alt="Picture of the author"
            />
            <div className={styles.detailWidth}>
                <p className={styles.blogSubTitle}>Crypto Lark • 28 DEC 2024</p>
                <h2 className={styles.blogTitle}>
                    Crypto Holders! Here’s EXACTLY When To Sell For Max Profits
                </h2>
                <p className={styles.blogDesc}>
                    Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus.
                    Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat.
                    Turpis tempor id turpis pellentesque laoreet pellentesque.
                    Lorem ipsum dolor sit amet consectetur. Integer consectetur quis aenean mollis fames lectus.
                </p>
                <h2 className={styles.blogTitle}>
                    Insights
                </h2>
                <p className={styles.blogDesc}>
                    Lorem ipsum dolor sit amet consectetur.
                    Integer consectetur quis aenean mollis fames lectus. Eget curabitur quisque in facilisi luctus tellus.
                    Scelerisque felis ut dui at ultrices fermentum volutpat. Turpis tempor id turpis pellentesque laoreet pellentesque.
                </p>
                <h2 className={styles.blogTitle}>
                    Margin
                </h2>
                <p className={styles.blogDesc}>
                    Lorem ipsum dolor sit amet consectetur.
                    Integer consectetur quis aenean mollis fames lectus.
                    Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat.
                    Turpis tempor id turpis pellentesque laoreet pellentesque.
                </p>
                <h2 className={styles.blogTitle}>
                    Futures
                </h2>
                <p className={styles.blogDesc}>
                    Lorem ipsum dolor sit amet consectetur.
                    Integer consectetur quis aenean mollis fames lectus.
                    Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat.
                    Turpis tempor id turpis pellentesque laoreet pellentesque.
                </p>
                <h2 className={styles.blogTitle}>
                    Wen
                </h2>
                <p className={styles.blogDesc}>
                    Lorem ipsum dolor sit amet consectetur.
                    Integer consectetur quis aenean mollis fames lectus.
                    Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat.
                    Turpis tempor id turpis pellentesque laoreet pellentesque.
                </p>
                <h2 className={styles.blogTitle}>
                    Summary
                </h2>
                <p className={styles.blogDesc}>
                    Lorem ipsum dolor sit amet consectetur.
                    Integer consectetur quis aenean mollis fames lectus.
                    Eget curabitur quisque in facilisi luctus tellus. Scelerisque felis ut dui at ultrices fermentum volutpat.
                    Turpis tempor id turpis pellentesque laoreet pellentesque.
                </p>
                <div className={"row " + styles.socialList}>
                    <div className={"col-lg-6 " + styles.listText}>
                        <p>Like what you see? Share with a friend.</p>
                    </div>
                    <div className="col-lg-6">
                        <Image
                            aria-hidden
                            src="/facebook.svg"
                            alt="Window icon"
                            width={30}
                            height={30}
                            className={styles.socialIcon}
                        />
                        <Image
                            aria-hidden
                            src="/twitter.svg"
                            alt="Window icon"
                            width={30}
                            height={30}
                            className={styles.socialIcon}
                        />
                        <Image
                            aria-hidden
                            src="/linkedin.svg"
                            alt="Window icon"
                            width={30}
                            height={30}
                            className={styles.socialIcon}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className={"col-md-6 " + styles.commentTitleDiv}>
                        <span className={styles.commentMainTitle}>All Comments</span>
                        <Image
                            src="/rating_digit.svg"
                            width={20}
                            height={20}
                            alt="Picture of the author"
                        />
                        {/* Comment Section */}
                        <div className={styles.mainDev}>
                            <Image
                                src="/sms.svg"
                                width={25}
                                height={25}
                                alt=""
                            />
                            <span className={styles.commentHead}>Benjamin Wilderness</span>
                            <span className={styles.commentTime}>35 mins ago</span>
                            <p className={styles.commentParagh}>Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas iaculis ultricies morbi viverra pharetra consectetur. Sed ultricies leo amet id potenti at. Cursus tempus dolor aliquam gravida ac tellus. Porttitor.</p>

                            <div>
                                <Image
                                    src="/like.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/Line.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/reply_arraw.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                /> <span className={styles.commentParagh}>Reply</span>
                            </div>
                        </div>
                        <div className={styles.mainDev}>
                            <Image
                                src="/sms.svg"
                                width={25}
                                height={25}
                                alt=""
                            />
                            <span className={styles.commentHead}>Benjamin Wilderness</span>
                            <span className={styles.commentTime}>35 mins ago</span>
                            <p className={styles.commentParagh}>Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas iaculis ultricies morbi viverra pharetra consectetur. Sed ultricies leo amet id potenti at. Cursus tempus dolor aliquam gravida ac tellus. Porttitor.</p>

                            <div>
                                <Image
                                    src="/like.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/Line.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/reply_arraw.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                /> <span className={styles.commentParagh}>Reply</span>
                            </div>
                        </div>
                        <div className={styles.mainDev}>
                            <Image
                                src="/sms.svg"
                                width={25}
                                height={25}
                                alt=""
                            />
                            <span className={styles.commentHead}>Benjamin Wilderness</span>
                            <span className={styles.commentTime}>35 mins ago</span>
                            <p className={styles.commentParagh}>Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas iaculis ultricies morbi viverra pharetra consectetur. Sed ultricies leo amet id potenti at. Cursus tempus dolor aliquam gravida ac tellus. Porttitor.</p>

                            <div>
                                <Image
                                    src="/like.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/Line.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/reply_arraw.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                /> <span className={styles.commentParagh}>Reply</span>
                            </div>
                        </div>
                        <div className={styles.mainDev}>
                            <Image
                                src="/sms.svg"
                                width={25}
                                height={25}
                                alt=""
                            />
                            <span className={styles.commentHead}>Benjamin Wilderness</span>
                            <span className={styles.commentTime}>35 mins ago</span>
                            <p className={styles.commentParagh}>Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas iaculis ultricies morbi viverra pharetra consectetur. Sed ultricies leo amet id potenti at. Cursus tempus dolor aliquam gravida ac tellus. Porttitor.</p>

                            <div>
                                <Image
                                    src="/like.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/Line.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src="/reply_arraw.svg"
                                    width={15}
                                    height={15}
                                    alt="Picture of the author"
                                /> <span className={styles.commentParagh}>Reply</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <button className={styles.commentBtn}>
                            Latest comments{" "}
                            <Image
                                src="/down-errow.svg"
                                width={10}
                                height={10}
                                alt="Picture of the author"
                            />
                        </button>
                    </div>
                </div>
                <hr />
                {/* Latest Article */}

                <div className="row mt-2 mb-2">
        <div className={"col-md-4 " + styles.blogSection}>
          <Image
            src="/prices_will.svg"
            width={370}
            height={200}
            className={styles.blogImg}
            alt="Picture of the author"
          />
          <p className={styles.blogSubTitle}>Crypto Lark • 28 DEC 2024</p>
          <div className="row">
            <div className="col-lg-10">
              <span className={styles.blogTitle}>
                Crypto Holders! Here’s EXACTLY When To Sell For Max Profits
              </span>
            </div>
            <div className="col-lg-2">
              <Image
                src="/arrow-up-right.svg"
                className={styles.arrowImg}
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="mt-4">
            <span className={styles.blogTag}>Crypto</span>
            <span className={styles.blogTag}>Bitcoin</span>
            <span className={styles.blogTag}>Casino</span>
          </div>
        </div>
        <div className={"col-md-4 " + styles.blogSection}>
          <Image
            src="/buying.svg"
            width={370}
            height={200}
            className={styles.blogImg}
            alt="Picture of the author"
          />
          <p className={styles.blogSubTitle}>Altcoin Buzz• 28 DEC 2024</p>
          <div className="row">
            <div className="col-lg-10">
              <span className={styles.blogTitle}>
                Can PENGU Overtake DOGE? Pudgy Penguins VS Dogecoin Altcoins in
                2025
              </span>
            </div>
            <div className="col-lg-2">
              <Image
                src="/arrow-up-right.svg"
                className={styles.arrowImg}
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="mt-4">
            <span className={styles.blogTag}>Crypto</span>
            <span className={styles.blogTag}>Bitcoin</span>
            <span className={styles.blogTag}>Casino</span>
          </div>
        </div>
        <div className={"col-md-4 " + styles.blogSection}>
          <Image
            src="/prices_will.svg"
            width={370}
            height={200}
            className={styles.blogImg}
            alt="Picture of the author"
          />
          <p className={styles.blogSubTitle}>Crypto Lark • 28 DEC 2024</p>
          <div className="row">
            <div className="col-lg-10">
              <span className={styles.blogTitle}>
                Crypto Holders! Here’s EXACTLY When To Sell For Max Profits
              </span>
            </div>
            <div className="col-lg-2">
              <Image
                src="/arrow-up-right.svg"
                className={styles.arrowImg}
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="mt-4">
            <span className={styles.blogTag}>Crypto</span>
            <span className={styles.blogTag}>Bitcoin</span>
            <span className={styles.blogTag}>Casino</span>
          </div>
        </div>
      </div>

            </div>
        </div>
    );
};

export default BlogDetail;