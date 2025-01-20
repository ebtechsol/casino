import { DateTime } from "next-auth/providers/kakao";

type BlogDto = {
  id: number;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  createdAt: DateTime;
  updatedAt: DateTime;
};


export type BlogRequestDto = {
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  is_active : boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export type BlogResponseDto = {
  status: boolean;
  msg: string;
};

export default BlogDto;