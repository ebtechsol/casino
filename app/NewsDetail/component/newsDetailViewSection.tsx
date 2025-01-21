import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/public/style/blog_detail.module.css";
import { setDateFormat } from "@/app/helpers/defaultHelper";
import { useSearchParams, useRouter } from "next/navigation";
import NewsDto from "@/app/dto/newsAndBlogs/newsDto";
import { NewsService } from "@/app/services/newsAndBlogs/newsService";

const NewsDetailViewSection = () => {
    const searchParams = useSearchParams();
    const news_id = searchParams.get("news_id");

  const router = useRouter();
  const [newsDetail, setNewsDetail] = useState<NewsDto>();

    useEffect(() => {
          if (newsDetail == null) {
            NewsService(Number(news_id)).then((news) => {
              if (news == null) {
                router.push("/");
              } else {
                setNewsDetail(news as NewsDto);
              }
            });
          }
    }, [router, newsDetail, news_id]);

  return (
    <div>
      <Image
        src={newsDetail?.image_url ? newsDetail?.image_url : "/blog.svg"}
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
    </div>
  );
};

export default NewsDetailViewSection;
