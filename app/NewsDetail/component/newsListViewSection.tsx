import React, { useEffect, useState } from "react";
import NewsListService from "@/app/services/newsAndBlogs/newsService";
import Image from "next/image";
import NewsDto from "@/app/dto/newsAndBlogs/newsDto";
import styles from "@/public/style/blog_detail.module.css";
import { setDateFormat } from "@/app/helpers/defaultHelper";

interface NewsTag {
  value: string;
}
const newsTagRecord: NewsTag[] = [
  { value: "Crypto" },
  { value: "Bitcoin" },
  { value: "Casino" },
];

const NewsListViewSection = () => {

  const [newsList, setNewsList] = useState<NewsDto[]>([]);
  const showNewsCount = 3;

  useEffect(() => {
    NewsListService(showNewsCount).then((list) => {
        setNewsList(list);
      });
  }, [showNewsCount]);

  return (
    <div className="row mt-2 mb-2">
      {newsList.map((news, index) => (
        <div
          key={news.id.toString().concat(index.toString())}
          className={"col-md-4 " + styles.blogSection}
        >
          <Image
            src={news.image_url}
            width={370}
            height={200}
            className={styles.blogImg}
            alt="Picture of the author"
          />
          <p className={styles.blogSubTitle}>
            {news?.author_name} •{" "}
            {news?.publish_date ? setDateFormat(news?.publish_date) : ""}
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
  );
};

export default NewsListViewSection;
