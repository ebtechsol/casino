"use client";
import React, { Suspense } from "react";
import styles from "@/public/style/blog_detail.module.css";
import DetailViewSection from "./component/detailViewSection";
import ListViewSection from "./component/listViewSection";
import CommentViewSection from "./component/commentViewSection";

const NewsAndBlogDetail = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <DetailViewSection />
        <div className={styles.detailWidth}>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <CommentViewSection />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <ListViewSection />
          </Suspense>
          <div className={styles.topSpace}></div>
        </div>
      </Suspense>
    </div>
  );
};

export default NewsAndBlogDetail;
