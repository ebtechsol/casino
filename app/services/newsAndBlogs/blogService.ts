import BlogDto from "@/app/dto/newsAndBlogs/blogDto";
import {
  BlogRequestDto,
  BlogResponseDto,
} from "@/app/dto/newsAndBlogs/blogDto";
import { GetApiSource } from "@/app/helpers/defaultHelper";

const BlogListService = async (ln?: number | null): Promise<BlogDto[]> => {
  let blogList: BlogDto[] = [];
  try {
    let source = "/api/blog/getBlogList";
    if (ln != null && ln > 0) {
      source = source.concat("?ln=", ln.toString());
    }
    const requestSource = GetApiSource(source);
    const response = await fetch(requestSource, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    if (responseJson.status == true) {
      blogList = responseJson.data;
    }
  } catch (err) {
    console.log(err);
  }
  return blogList;
};
export default BlogListService;

export const AddBlogService = async (
  request: BlogRequestDto
): Promise<BlogResponseDto> => {
  let addBlogStatus: BlogResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = GetApiSource("/api/newsAndBlogs/addBlog");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    addBlogStatus = (await response.json()) as BlogResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addBlogStatus;
};

export const BlogService = async (blog_id : number): Promise<BlogDto | null> => {
  let blogDetail: BlogDto | null = null;
  try {
    const requestSource = GetApiSource(("/api/blog/getBlogDetail?blog_id=").concat(blog_id.toString()));
    const response = await fetch(requestSource, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    if (responseJson.status == true) {
      blogDetail = responseJson.data as BlogDto;
    }
  } catch (err) {
    console.log(err);
  }
  return blogDetail;
};
