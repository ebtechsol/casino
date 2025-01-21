import React, { useEffect, useState } from "react";
import BlogListService from "@/app/services/newsAndBlogs/blogService";
import Image from "next/image";
import BlogDto from "@/app/dto/newsAndBlogs/blogDto";
import styles from "@/public/style/blog_detail.module.css";
import { setDateFormat } from "@/app/helpers/defaultHelper";

interface BlogTag {
  value: string;
}
const blogTagRecord: BlogTag[] = [
  { value: "Crypto" },
  { value: "Bitcoin" },
  { value: "Casino" },
];

const BlogListViewSection = () => {

  const [blogList, setBlogList] = useState<BlogDto[]>([]);
  const showBlogsCount = 3;

  useEffect(() => {
    BlogListService(showBlogsCount).then((list) => {
        setBlogList(list);
      });
  }, [showBlogsCount]);

  return (
    <div className="row mt-2 mb-2">
      {blogList.map((blog, index) => (
        <div
          key={blog.id.toString().concat(index.toString())}
          className={"col-md-4 " + styles.blogSection}
        >
          <Image
            src={blog.image_url}
            width={370}
            height={200}
            className={styles.blogImg}
            alt="Picture of the author"
          />
          <p className={styles.blogSubTitle}>
            {blog?.author_name} •{" "}
            {blog?.publish_date ? setDateFormat(blog?.publish_date) : ""}
          </p>
          <div className="row">
            <div className="col-lg-10">
              <span className={styles.blogTitle}>{blog.title}</span>
            </div>
            <div className="col-lg-2">
              <a href={"/BlogDetail?blog_id=".concat(blog.id.toString())}>
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
            {blogTagRecord.map((tag, i) => (
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

export default BlogListViewSection;
