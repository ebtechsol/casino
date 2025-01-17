import { DateTime } from "next-auth/providers/kakao";

type NewsDto = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  author_name: string;
  publish_date: DateTime;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export default NewsDto;