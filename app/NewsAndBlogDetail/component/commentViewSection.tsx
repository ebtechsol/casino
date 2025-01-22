import React, { useEffect, useState } from "react";
import { GetCommentListService, InsertCommentService } from "@/app/services/newsAndBlogs/newsAndBlogService";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import {
  NewsAndBlogCommentDto,
  AddNewsAndBlogCommentRequestDto,
  AddNewsAndBlogCommentResponseDto,
} from "@/app/dto/newsAndBlogs/newsAndBlog";
import styles from "@/public/style/blog_detail.module.css";

const CommentViewSection = () => {
  const searchParams = useSearchParams();
  const newsAndBlog_id = searchParams.get("id");
  const [blogCommentsList, setBlogCommentsList] = useState<
    NewsAndBlogCommentDto[]
  >([]);

  useEffect(() => {
    GetCommentListService(Number(newsAndBlog_id)).then((comment) => {
      setBlogCommentsList(comment as NewsAndBlogCommentDto[]);
    });
  }, [newsAndBlog_id]);

  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [addSuccessMessage, setAddSuccessMessage] = useState("");
  const [addErrorMessage, setAddErrorMessage] = useState("");
  const formSchema = z.object({
    message: z.string().min(1, { message: "Comment is required!" }).trim(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmitCommentForm(values: z.infer<typeof formSchema>) {
    setFormSubmitLoading(true);
    setAddSuccessMessage("");
    setAddErrorMessage("");
    if (values.message) {
      const request: AddNewsAndBlogCommentRequestDto = {
        message: values.message,
        parent_comment_id: 0,
        created_at: "",
        newsAndBlog_id: Number(newsAndBlog_id),
        user_id: "cm65b23680000r7m089yj0fme",
      };
      InsertCommentService(request)
        .then((response: AddNewsAndBlogCommentResponseDto) => {
          setFormSubmitLoading(false);
          if (response.status == true) {
            setAddSuccessMessage(response.msg);
            setAddErrorMessage("");
            reset();
          } else {
            setAddSuccessMessage("");
            setAddErrorMessage(response.msg);
          }
        })
        .catch(() => {
          setFormSubmitLoading(false);
          setAddSuccessMessage("");
          setAddErrorMessage("Something went wrong!");
        });
    }
  }
  return (
    <div>
      <div className={"row " + styles.socialList}>
        <div className={"col-lg-6 " + styles.listText}>
          <p>Like what you see? Share with a friend.</p>
        </div>
        <div className="col-lg-6">
          <a href="https://www.facebook.com/">
            {" "}
            <Image
              aria-hidden
              src="/facebook.svg"
              alt="Window icon"
              width={30}
              height={30}
              className={styles.socialIcon}
            />
          </a>
          <a href="#">
            <Image
              aria-hidden
              src="/twitter.svg"
              alt="Window icon"
              width={30}
              height={30}
              className={styles.socialIcon}
            />
          </a>
          <a href="https://www.linkedin.com/">
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="Window icon"
              width={30}
              height={30}
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmitCommentForm)}>
        {addSuccessMessage != "" ? (
          <span className="alert alert-success p-2 m-0 d-block">
            {addSuccessMessage}
          </span>
        ) : (
          ""
        )}
        {addErrorMessage != "" ? (
          <span className="alert alert-danger p-2 m-0 d-block">
            {addErrorMessage}
          </span>
        ) : (
          ""
        )}{" "}
        <textarea
          placeholder="Type your comment here"
          {...register("message")}
          className={styles.textareaField}
        ></textarea>
        <button
          className={styles.textareaBtn}
          type="submit"
          disabled={errors.message?.message ? true : false}
        >
          {formSubmitLoading ? "Loading..." : "Submit"}
        </button>
      </form>
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

export default CommentViewSection;
