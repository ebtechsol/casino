import BlogDto from '@/app/dto/newsAndBlogs/blogDto';
import {BlogRequestDto,BlogResponseDto,BlogCommentResponseDto,BlogCommentRequestDto} from '@/app/dto/newsAndBlogs/blogDto';
import { GetApiSource } from '@/app/helpers/defaultHelper';

const BlogListService = async () : Promise<BlogDto[]> => 
{
    let blogList : BlogDto[] = [];
    try {
        const requestSource = GetApiSource("/api/blog/getBlogList");
        const response = await fetch(requestSource, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const responseJson = await response.json();
        if(responseJson.status == true){
            blogList = responseJson.data;
        }
    } catch (err) {
        console.log(err);
    }    
    return blogList;
}
export default BlogListService;

export const AddBlog = async (
  request: BlogRequestDto
): Promise<BlogResponseDto> => {
  let addBlogStatus: BlogResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = GetApiSource("/api/blog/addBlog");
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


export const AddComment = async (
  request: BlogCommentRequestDto
): Promise<BlogCommentResponseDto> => {
  let addCommentStatus: BlogCommentResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = GetApiSource("/api/blogComments/addComment");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    addCommentStatus = (await response.json()) as BlogCommentResponseDto;
  } catch (err) {
    console.log(err);
  }
  return addCommentStatus;
};

