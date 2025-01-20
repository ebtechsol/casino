import { DateTime } from "next-auth/providers/kakao";

type NewsDto = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  author_name: string;
  publish_date: DateTime;
  is_active : boolean;
  created_at: DateTime;
  updated_at: DateTime;
};
export default NewsDto;

export type NewsTagsDto = {
  id: number;
  name: string;
  bg_color_code: string;
  text_color_code: string;
  created_at: DateTime;
  news_id: number;
  news: NewsDto
};

export type NewsRequestDto = {
  title: string;
  description: string;
  image_url: string;
  author_name: string;
  publish_date: DateTime;
  created_at: DateTime;
  updated_at: DateTime;
};

export type NewsResponseDto = {
  status: boolean;
  msg: string;
};

