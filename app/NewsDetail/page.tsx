"use client";
import React, { Suspense } from "react";
import styles from "@/public/style/blog_detail.module.css";
import NewsDetailViewSection from "./component/newsDetailViewSection";
import NewsListViewSection from "./component/newsListViewSection";

const NewsDetail = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <NewsDetailViewSection />
        <div className={styles.detailWidth}>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <NewsListViewSection />
          </Suspense>
          <div className={styles.topSpace}></div>
        </div>
      </Suspense>
    </div>
  );
};

export default NewsDetail;
