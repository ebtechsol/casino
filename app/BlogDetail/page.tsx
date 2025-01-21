"use client";
import React, { Suspense } from "react";
import styles from "@/public/style/blog_detail.module.css";
import BlogDetailViewSection from "./component/blogDetailViewSection";
import BlogListViewSection from "./component/blogListViewSection";
import BlogCommentViewSection from "./component/blogCommentViewSection";

const BlogDetail = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogDetailViewSection />
        <div className={styles.detailWidth}>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <BlogCommentViewSection />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogListViewSection />
          </Suspense>
          <div className={styles.topSpace}></div>
        </div>
      </Suspense>
    </div>
  );
};

export default BlogDetail;
