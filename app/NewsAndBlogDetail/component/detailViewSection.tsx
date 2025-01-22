import React, { useEffect, useState } from "react";
import { GetRecordService } from "@/app/services/newsAndBlogs/newsAndBlogService";
import Image from "next/image";
import NewsAndBlogDto from "@/app/dto/newsAndBlogs/newsAndBlog";
import styles from "@/public/style/blog_detail.module.css";
import { setDateFormat } from "@/app/helpers/defaultHelper";
import { useSearchParams, useRouter } from "next/navigation";

const DetailViewSection = () => {
    const searchParams = useSearchParams();
    const newsAndBlog_id = searchParams.get("id");

  const router = useRouter();
  const [detail, setDetail] = useState<NewsAndBlogDto>();

    useEffect(() => {
          if (detail == null) {
            GetRecordService(Number(newsAndBlog_id)).then((blog) => {
              if (blog == null) {
                router.push("/");
              } else {
                setDetail(blog as NewsAndBlogDto);
              }
            });
          }
    }, [router, detail, newsAndBlog_id]);

  return (
    <div>
      <Image
        src={detail?.image_url ? detail?.image_url : "/blog.svg"}
        width={1300}
        className={styles.heroImg}
        height={550}
        alt="Picture of the author"
      />
      <div className={styles.detailWidth}>
        <p className={styles.blogSubTitle}>
          {detail?.author_name} •{" "}
          {detail?.publish_date
            ? setDateFormat(detail?.publish_date)
            : ""}
        </p>
        <h2 className={styles.blogTitle}>{detail?.title}</h2>
        <div className={styles.blogDesc}>{detail?.long_description}</div>
      </div>
    </div>
  );
};

export default DetailViewSection;
