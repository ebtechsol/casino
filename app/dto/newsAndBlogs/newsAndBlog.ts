import { DateTime } from "next-auth/providers/kakao";
import UserDto from "../authentication/userDto";

type NewsAndBlogDto = {
  id: number;
  title: string;
  type: string;
  description: string;
  long_description: string;
  image_url: string;
  author_name: string;
  tags: string;
  publish_date: DateTime;
  is_active: boolean;
  created_at: DateTime;
  updated_at: DateTime;
};

type NewsAndBlogCommentDto = {
  id: number;
  message: string;
  parent_comment_id: number;
  created_at: DateTime;
  newsAndBlog_id: number;
  user_id: string;
  user: UserDto;
};

type AddNewsAndBlogRequestDto = {
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  is_active: boolean;
  created_at: DateTime;
  updated_at: DateTime;
};

type AddNewsAndBlogResponseDto = {
  status: boolean;
  msg: string;
};

type AddNewsAndBlogCommentRequestDto = {
  message: string;
  parent_comment_id: number;
  created_at: DateTime;
  newsAndBlog_id: number;
  user_id: string;
};

type AddNewsAndBlogCommentResponseDto = {
  status: boolean;
  msg: string;
};

export default NewsAndBlogDto;
export type {
  NewsAndBlogCommentDto,
  AddNewsAndBlogRequestDto,
  AddNewsAndBlogResponseDto,
  AddNewsAndBlogCommentRequestDto,
  AddNewsAndBlogCommentResponseDto,
};
