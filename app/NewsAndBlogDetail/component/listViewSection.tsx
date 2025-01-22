import React, { useEffect, useState } from "react";
import Image from "next/image";
import NewsAndBlogDto from "@/app/dto/newsAndBlogs/newsAndBlog";
import styles from "@/public/style/blog_detail.module.css";
import { setDateFormat } from "@/app/helpers/defaultHelper";
import GetListService from "@/app/services/newsAndBlogs/newsAndBlogService";
import TagsElement from "@/app/components/NewAndBlogTags";
import { useSearchParams } from "next/navigation";

const ListViewSection = () => {
  const searchParams = useSearchParams();
  let type: string = "N";
  const [recordList, setRecordList] = useState<NewsAndBlogDto[]>([]);
  const showCount = 3;

  if (searchParams.get("t") != null && searchParams.get("t") != "") {
    type = searchParams.get("t") as string;
  }

  useEffect(() => {
    GetListService(type, showCount).then((list) => {
      setRecordList(list);
    });
  }, [type, showCount]);

  return (
    <div className="row mt-2 mb-2">
      {recordList.map((record, index) => (
        <div
          key={record.id.toString().concat(index.toString())}
          className={"col-md-4 " + styles.blogSection}
        >
          <Image
            src={record.image_url}
            width={370}
            height={200}
            className={styles.blogImg}
            alt="Picture of the author"
          />
          <p className={styles.blogSubTitle}>
            {record?.author_name} •{" "}
            {record?.publish_date ? setDateFormat(record?.publish_date) : ""}
          </p>
          <div className="row">
            <div className="col-lg-10">
              <span className={styles.blogTitle}>{record.title}</span>
            </div>
            <div className="col-lg-2">
            <a href={"/NewsAndBlogDetail?id=".concat(record.id.toString(), "&t=", record.type)}>
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
            <TagsElement tagString={record.tags} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListViewSection;
