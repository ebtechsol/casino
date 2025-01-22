import { DateTime } from "next-auth/providers/kakao";

type NewsLetterDto = {
    id: number;
    email: string;
    created_at: DateTime;
};
export default NewsLetterDto;

export type NewsLetterRequestDto = {
    email: string;
};
export type NewsLetterResponseDto = {
    status: boolean;
    msg: string;
};