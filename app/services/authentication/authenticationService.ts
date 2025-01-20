import {
  SignInRequestDto,
  SignInResponseDto,
  SignUpRequestDto,
  SignUpResponseDto,
} from "@/app/dto/authentication/userDto";
import { GetApiSource } from "@/app/helpers/defaultHelper";
import { setAuthSession } from "@/lib/authenticationSession";
import { deleteAuthSession } from "@/lib/authenticationSession";

const AuthSignIn = async (
  request: SignInRequestDto
): Promise<SignInResponseDto> => {
  let authSignInStatus: SignInResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = GetApiSource("/api/authentication/authenticateUser");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    authSignInStatus = (await response.json()) as SignInResponseDto;
    if (
      authSignInStatus.status == true &&
      authSignInStatus.data &&
      authSignInStatus.data != null &&
      authSignInStatus.data != undefined
    ) {
      await setAuthSession(authSignInStatus.data);
    }
  } catch (err) {
    console.log(err);
  }
  return authSignInStatus;
};

const AuthSignUp = async (
  request: SignUpRequestDto
): Promise<SignUpResponseDto> => {
  let authSignUpStatus: SignUpResponseDto = {
    status: false,
    msg: "",
  };
  try {
    const requestSource = GetApiSource("/api/authentication/addUser");
    const response = await fetch(requestSource, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    authSignUpStatus = (await response.json()) as SignUpResponseDto;
  } catch (err) {
    console.log(err);
  }
  return authSignUpStatus;
};

const AuthSignOut = async () => {
  await deleteAuthSession();
};

export { AuthSignIn, AuthSignOut, AuthSignUp };
