import React, { useEffect, useState } from "react";
import { BlogService } from "@/app/services/newsAndBlogs/blogService";
import Image from "next/image";
import BlogDto from "@/app/dto/newsAndBlogs/blogDto";
import styles from "@/public/style/blog_detail.module.css";
import { setDateFormat } from "@/app/helpers/defaultHelper";
import { useSearchParams, useRouter } from "next/navigation";

const BlogDetailViewSection = () => {
    const searchParams = useSearchParams();
    const blog_id = searchParams.get("blog_id");

  const router = useRouter();
  const [blogDetail, setBlogDetail] = useState<BlogDto>();

    useEffect(() => {
          if (blogDetail == null) {
            BlogService(Number(blog_id)).then((blog) => {
              if (blog == null) {
                router.push("/");
              } else {
                setBlogDetail(blog as BlogDto);
              }
            });
          }
    }, [router, blogDetail, blog_id]);

  return (
    <div>
      <Image
        src={blogDetail?.image_url ? blogDetail?.image_url : "/blog.svg"}
        width={1300}
        className={styles.heroImg}
        height={550}
        alt="Picture of the author"
      />
      <div className={styles.detailWidth}>
        <p className={styles.blogSubTitle}>
          {blogDetail?.author_name} •{" "}
          {blogDetail?.publish_date
            ? setDateFormat(blogDetail?.publish_date)
            : ""}
        </p>
        <h2 className={styles.blogTitle}>{blogDetail?.title}</h2>
        <div className={styles.blogDesc}>{blogDetail?.long_description}</div>
      </div>
    </div>
  );
};

export default BlogDetailViewSection;
