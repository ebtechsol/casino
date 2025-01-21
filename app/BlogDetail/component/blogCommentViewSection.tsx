import React, { useEffect, useState } from "react";
import { BlogCommentsListService } from "@/app/services/newsAndBlogs/blogService";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BlogCommentsDto } from "@/app/dto/newsAndBlogs/blogDto";
import styles from "@/public/style/blog_detail.module.css";

const BlogCommentViewSection = () => {
    const searchParams = useSearchParams();
    const blog_id = searchParams.get("blog_id");
  const [blogCommentsList, setBlogCommentsList] = useState<BlogCommentsDto[]>(
    []
  );
  const showBlogsCount = 3;

  useEffect(() => {
    BlogCommentsListService(Number(blog_id)).then((comment) => {
      setBlogCommentsList(comment as BlogCommentsDto[]);
    });
  }, [showBlogsCount, blog_id]);

  return (
    <div>
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
                <span className={styles.commentHead}>Benjamin Wilderness</span>
                <span className={styles.commentTime}>35 mins ago</span>
                <p className={styles.commentParagh}>{comment.message}</p>

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
    </div>
  );
};

export default BlogCommentViewSection;
