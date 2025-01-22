import styles from "@/public/style/blogs.module.css";

type tagStringObject = {
  tagString: string;
};

const Tags = (stringObj: tagStringObject) => {
  let tagList: string[] = [];
  const tagString = stringObj.tagString;
  if(tagString != null && tagString != "") {
    tagList = tagString.split(",");
  }
  return (
    <>
      {tagList.map((tag, i) => (
        <span className={styles.blogTag} key={i}>
          {tag}
        </span>
      ))}
    </>
  );
};

const TagsElement = Tags as unknown as React.JSXElementConstructor<{
  tagString: string;
}>;

export default TagsElement;
