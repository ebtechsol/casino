"use client";
import React, { useEffect, useState } from "react";
import BlogListService from "../services/newsAndBlogs/blogService";
import BlogDto from "../dto/newsAndBlogs/blogDto";
import styles from "@/public/style/blogs.module.css";
import Image from "next/image";

interface BlogTag {
  value: string;
}
const blogTagRecord: BlogTag[] = [
  { value: "Crypto" },
  { value: "Bitcoin" },
  { value: "Casino" },
];

const Blogs = () => {
  const [blogContent, setBlogContent] = useState<BlogDto[]>([]);

    useEffect(() => {
      BlogListService().then((contentData) => {
        setBlogContent(contentData);
      });
    }, [setBlogContent]);

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

      {blogContent.map((blog, index) => (
        <div key={index}>
          <div className={"row mt-2 " + styles.blogSection}>
            <div className={"col-md-4 " + styles.blogImgSection}>
              <Image
                src={blog.image_url}
                width={370}
                height={200}
                className={styles.blogImg}
                alt="Picture of the author"
              />
            </div>
            <div className="col-lg-8 ps-4 pe-4">
              <div className={styles.blogTextSec}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <div className="mt-2">
                  <div className="mt-4">
                  {blogTagRecord.map((tag, i) => (
                <span className={styles.blogTag} key={i}>
                  {tag.value}
                </span>
              ))}
                  </div>
                  <p className={styles.blogDesc}>{blog.description}</p>
                  <a href={("/BlogDetail?blog_id=").concat(blog.id.toString())}>
                    <button className={styles.featureBtn}>
                      Read More {" "}
                      <Image
                        src="/more.svg"
                        width={15}
                        height={15}
                        alt="Picture of the author"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.topSpace}></div>
    </div>
  );
};

export default Blogs;
