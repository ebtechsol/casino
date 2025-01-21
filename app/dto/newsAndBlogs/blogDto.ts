import { DateTime } from "next-auth/providers/kakao";

type BlogDto = {
  id: number;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  is_active : boolean;
  created_at: DateTime;
  updated_at: DateTime;
};
export default BlogDto;

export type BlogTagsDto = {
  id: number;
  name: string;
  bg_color_code: string;
  text_color_code: string;
  created_at: DateTime;
  blog_id: number;
  blog: BlogDto
};

export type BlogCommentsDto = {
  id: number;
  message: string;
  parent_comment_id: number;
  created_at: DateTime;
  blog_id: number;
  user_id: string;
};

export type BlogCommentRequestDto = {
  message: string;
  parent_comment_id: number;
  created_at: DateTime;
  blog_id: number;
  user_id: string;
};
export type BlogCommentResponseDto = {
  status: boolean;
  msg: string;
};
export type BlogRequestDto = {
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  is_active : boolean;
  created_at: DateTime;
  updated_at: DateTime;
};

export type BlogResponseDto = {
  status: boolean;
  msg: string;
};

