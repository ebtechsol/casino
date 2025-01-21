"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/public/style/blog_detail.module.css";
import NewsDto from "../dto/newsAndBlogs/newsDto";
import NewsListService, {
  NewsService,
} from "../services/newsAndBlogs/newsService";
import { useSearchParams, useRouter } from "next/navigation";
import { setDateFormat } from "../helpers/defaultHelper";

interface NewsTag {
  value: string;
}
const newsTagRecord: NewsTag[] = [
  { value: "Crypto" },
  { value: "Bitcoin" },
  { value: "Casino" },
];

const NewsDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [newsList, setNewsList] = useState<NewsDto[]>([]);
  const [newsDetail, setNewsDetail] = useState<NewsDto>();
  const showNewssCount = 3;

  useEffect(() => {
    const news_id = searchParams.get("news_id");
    if (news_id == null || news_id == "" || Number(news_id) <= 0) {
      router.push("/");
    }

    if (newsDetail == null) {
      NewsService(Number(news_id)).then((news) => {
        if (news == null) {
          router.push("/");
        } else {
          setNewsDetail(news as NewsDto);
        }
      });
    }

    NewsListService(showNewssCount).then((list) => {
      setNewsList(list);
    });
  }, [searchParams, router, newsDetail, setNewsDetail, setNewsList]);

  return (
    <div className="container">
      <Image
        src={newsDetail?.image_url ? newsDetail?.image_url : "/news.svg"}
        width={1300}
        className={styles.heroImg}
        height={550}
        alt="Picture of the author"
      />
      <div className={styles.detailWidth}>
        <p className={styles.blogSubTitle}>
          {newsDetail?.author_name} •{" "}
          {newsDetail?.publish_date
            ? setDateFormat(newsDetail?.publish_date)
            : ""}
        </p>
        <h2 className={styles.blogTitle}>{newsDetail?.title}</h2>
        <div className={styles.blogDesc}>{newsDetail?.long_description}</div>
      </div>
      <div className={styles.detailWidth}>
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
              width={25}
              height={25}
              className="ms-2"
              alt="Picture of the author"
            />
            {/* Comment Section */}
            <div className={styles.mainDev}>
              <Image src="/sms.svg" width={25} height={25} alt="" />
              <span className={styles.commentHead}>Benjamin Wilderness</span>
              <span className={styles.commentTime}>35 mins ago</span>
              <p className={styles.commentParagh}>
                Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas
                iaculis ultricies morbi viverra pharetra consectetur. Sed
                ultricies leo amet id potenti at. Cursus tempus dolor aliquam
                gravida ac tellus. Porttitor.
              </p>

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
                />{" "}
                <span className={styles.commentParagh}>Reply</span>
              </div>
            </div>
            <div className={styles.mainDev}>
              <Image src="/sms.svg" width={25} height={25} alt="" />
              <span className={styles.commentHead}>Benjamin Wilderness</span>
              <span className={styles.commentTime}>35 mins ago</span>
              <p className={styles.commentParagh}>
                Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas
                iaculis ultricies morbi viverra pharetra consectetur. Sed
                ultricies leo amet id potenti at. Cursus tempus dolor aliquam
                gravida ac tellus. Porttitor.
              </p>

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
                />{" "}
                <span className={styles.commentParagh}>Reply</span>
              </div>
            </div>
            <div className={styles.mainDev}>
              <Image src="/sms.svg" width={25} height={25} alt="" />
              <span className={styles.commentHead}>Benjamin Wilderness</span>
              <span className={styles.commentTime}>35 mins ago</span>
              <p className={styles.commentParagh}>
                Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas
                iaculis ultricies morbi viverra pharetra consectetur. Sed
                ultricies leo amet id potenti at. Cursus tempus dolor aliquam
                gravida ac tellus. Porttitor.
              </p>

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
                />{" "}
                <span className={styles.commentParagh}>Reply</span>
              </div>
            </div>
            <div className={styles.mainDev}>
              <Image src="/sms.svg" width={25} height={25} alt="" />
              <span className={styles.commentHead}>Benjamin Wilderness</span>
              <span className={styles.commentTime}>35 mins ago</span>
              <p className={styles.commentParagh}>
                Lorem ipsum dolor sit amet consectetur. Urna ultrices egestas
                iaculis ultricies morbi viverra pharetra consectetur. Sed
                ultricies leo amet id potenti at. Cursus tempus dolor aliquam
                gravida ac tellus. Porttitor.
              </p>

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
                />{" "}
                <span className={styles.commentParagh}>Reply</span>
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
          {newsList.map((news, index) => (
            <div key={index} className={"col-md-4 " + styles.blogSection}>
              <Image
                src={news.image_url}
                width={370}
                height={200}
                className={styles.blogImg}
                alt="Picture of the author"
              />
              <p className={styles.blogSubTitle}>
                {newsDetail?.author_name} •{" "}
                {newsDetail?.publish_date
                  ? setDateFormat(newsDetail?.publish_date)
                  : ""}
              </p>
              <div className="row">
                <div className="col-lg-10">
                  <span className={styles.blogTitle}>{news.title}</span>
                </div>
                <div className="col-lg-2">
                  <a href={"/NewsDetail?news_id=".concat(news.id.toString())}>
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
                {newsTagRecord.map((tag, i) => (
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
    </div>
  );
};

export default NewsDetail;
