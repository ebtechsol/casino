import { DateTime } from "next-auth/providers/kakao";

type UserDto = {
  id: number;
  user_id: string;
  user_name: string;
  email: string;
  password: string;
  is_active: boolean;
  created_at: DateTime;
  updated_at: DateTime;
};

export default UserDto;

export type SignInRequestDto = {
  email: string;
  password: string;
};

export type SignInResponseDto = {
  status: boolean;
  msg: string;
  data?: UserDto;
};

export type SignUpRequestDto = {
  user_name: string;
  email: string;
  password: string;
};

export type SignUpResponseDto = {
  status: boolean;
  msg: string;
};
