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
  authentication_access_token: string;
};

type UserAuthenticationLogs = {
  id: number;
  user_id: string;
  access_token: string;
  authentication_at: DateTime;
};

type SignInRequestDto = {
  email: string;
  password: string;
};

type SignInResponseDto = {
  status: boolean;
  msg: string;
  data?: UserDto;
};

type SignUpRequestDto = {
  user_name: string;
  email: string;
  password: string;
};

type SignUpResponseDto = {
  status: boolean;
  msg: string;
};

type VerifyAccessTokenResponseDto = {
  status: boolean;
  msg: string;
};

export default UserDto;
export type {
  UserAuthenticationLogs,
  SignInRequestDto,
  SignInResponseDto,
  SignUpRequestDto,
  SignUpResponseDto,
  VerifyAccessTokenResponseDto
};
