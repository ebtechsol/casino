import { DateTime } from "next-auth/providers/kakao";

type NewsDto = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  author_name: string;
  publish_date: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export type NewRequestDto = {
  title: string;
  description: string;
  image_url: string;
  author_name: string;
  publish_date: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export type NewResponseDto = {
  status: boolean;
  msg: string;
};

export default NewsDto;