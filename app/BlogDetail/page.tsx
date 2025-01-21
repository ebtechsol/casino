"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/public/style/blog_detail.module.css";
import BlogDto, { BlogCommentsDto } from "../dto/newsAndBlogs/blogDto";
import BlogListService, {
  BlogCommentsListService,
  BlogService,
} from "../services/newsAndBlogs/blogService";
import { useSearchParams, useRouter } from "next/navigation";
import { setDateFormat } from "../helpers/defaultHelper";

interface BlogTag {
  value: string;
}
const blogTagRecord: BlogTag[] = [
  { value: "Crypto" },
  { value: "Bitcoin" },
  { value: "Casino" },
];

const BlogDetail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [blogList, setBlogList] = useState<BlogDto[]>([]);
  const [blogCommentsList, setBlogCommentsList] = useState<BlogCommentsDto[]>(
    []
  );
  const [blogDetail, setBlogDetail] = useState<BlogDto>();
  const showBlogsCount = 3;

  useEffect(() => {
    const blog_id = searchParams.get("blog_id");
    if (blog_id == null || blog_id == "" || Number(blog_id) <= 0) {
      router.push("/");
    }

    if (blogDetail == null) {
      BlogService(Number(blog_id)).then((blog) => {
        if (blog == null) {
          router.push("/");
        } else {
          setBlogDetail(blog as BlogDto);
        }
      });

      BlogCommentsListService(Number(blog_id)).then((comment) => {
        setBlogCommentsList(comment as BlogCommentsDto[]);
      });
    }

    BlogListService(showBlogsCount).then((list) => {
      setBlogList(list);
    });
  }, [
    searchParams,
    router,
    blogDetail,
    setBlogDetail,
    setBlogList,
    setBlogCommentsList,
  ]);

  return (
    <div className="container">
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

            {blogCommentsList.map((comment, index) => (
              <div key={comment.id.toString().concat(index.toString())}>
                <div className={styles.mainDev}>
                  <Image src="/sms.svg" width={25} height={25} alt="" />
                  <span className={styles.commentHead}>
                    Benjamin Wilderness
                  </span>
                  <span className={styles.commentTime}>35 mins ago</span>
                  <p className={styles.commentParagh}>
                    {comment.message}
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
            ))}
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
          {blogList.map((blog, index) => (
            <div key={blog.id.toString().concat(index.toString())} className={"col-md-4 " + styles.blogSection}>
              <Image
                src={blog.image_url}
                width={370}
                height={200}
                className={styles.blogImg}
                alt="Picture of the author"
              />
              <p className={styles.blogSubTitle}>
                {blogDetail?.author_name} •{" "}
                {blogDetail?.publish_date
                  ? setDateFormat(blogDetail?.publish_date)
                  : ""}
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
        <div className={styles.topSpace}></div>
      </div>
    </div>
  );
};

export default BlogDetail;
