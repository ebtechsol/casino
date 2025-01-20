import { DateTime } from "next-auth/providers/kakao";

type BlogDto = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  createdAt: DateTime;
  updatedAt: DateTime;
};

export default BlogDto;