"use client";
import React, { useEffect, useState } from "react";
import styles from "@/public/style/news.module.css";
import Image from "next/image";
import GetListService from "../services/newsAndBlogs/newsAndBlogService";
import NewsAndBlogDto from "../dto/newsAndBlogs/newsAndBlog";
import { setDateFormat } from "../helpers/defaultHelper";
import TagsElement from "../components/NewAndBlogTags";

const News = () => {
  const [newsContent, setNewsContent] = useState<NewsAndBlogDto[]>([]);

  useEffect(() => {
    GetListService("N").then((contentData) => {
      setNewsContent(contentData);
    });
  }, [setNewsContent]);

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
        {newsContent.map((news, index) => (
          <div key={index} className={"col-md-4 " + styles.blogSection}>
            <Image
              src={news.image_url}
              width={370}
              height={200}
              className={styles.blogImg}
              alt="Picture of the author"
            />
            <p className={styles.blogSubTitle}>
              {news.author_name} . {setDateFormat(news.publish_date)}
            </p>
            <div className="row">
              <div className="col-lg-10">
                <span className={styles.blogTitle}>{news.title}</span>
              </div>
              <div className="col-lg-2">
              <a href={"/NewsAndBlogDetail?id=".concat(news.id.toString(), "&t=", news.type)}>
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
              <TagsElement tagString={news.tags} />
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
        {newsContent.map((news, index) => (
          <div key={index} className={"col-md-4 " + styles.blogSection}>
            <Image
              src={news.image_url}
              width={370}
              height={200}
              className={styles.blogImg}
              alt="Picture of the author"
            />
            <p className={styles.blogSubTitle}>
              {news.author_name} . {setDateFormat(news.publish_date)}
            </p>
            <div className="row">
              <div className="col-lg-10">
                <span className={styles.blogTitle}>{news.title}</span>
              </div>
              <div className="col-lg-2">
              <a href={"/NewsAndBlogDetail?id=".concat(news.id.toString(), "&t=", news.type)}>
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
              <TagsElement tagString={news.tags} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.topSpace}></div>
    </div>
  );
};

export default News;
