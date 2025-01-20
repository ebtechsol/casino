import { Decimal } from "@prisma/client/runtime/library";
import { DateTime } from "next-auth/providers/kakao";

type CasinoDto = {
  id: number;
  title: string;
  sub_tile: string;
  description: string;
  image_url: string;
  wizard_rating: Decimal;
  critic_score: Decimal;
  created_at: DateTime;
};
export default CasinoDto;

export type CasinoTagsDto = {
  id: number;
  image: string;
  name: string;
  bg_color_code: string;
  text_color_code: string;
  created_at: DateTime;
  casino_id: number;
  casino: CasinoDto
};

export type CasinoReviewsDto = {
  id: number;
  reviews_type: string;
  rating: Decimal;
  created_at: DateTime;
  casino_id: number;
  casino: CasinoDto
};

