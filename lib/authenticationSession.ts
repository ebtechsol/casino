"use server";
import UserDto from "@/app/dto/authentication/userDto";
import { decrypt, encrypt } from "@/app/helpers/encryptionHelper";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setAuthSession(userDetail: UserDto) {
  const timeOut = process.env.AUTHENTICATION_SESSION_TIMEOUT;
  const expiresAt = new Date(Date.now() + Number(timeOut) * 60 * 1000);
  const session = await encrypt({ userDetail, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set("AUTHENTICATION_SESSION", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateAuthSession() {
  const session = (await cookies()).get("AUTHENTICATION_SESSION")?.value;
  const payload = await decrypt(session);
  const timeOut = process.env.AUTHENTICATION_SESSION_TIMEOUT;
  if (!session || !payload) {
    return null;
  }
  const expiresAt = new Date(Date.now() + Number(timeOut) * 60 * 1000);

  const cookieStore = await cookies();
  cookieStore.set("AUTHENTICATION_SESSION", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteAuthSession() {
    const cookieStore = await cookies();
    cookieStore.delete('AUTHENTICATION_SESSION');
    redirect("/");
}

export const verifyAuthenticationSession = async (): Promise<boolean> => {
  const cookie = (await cookies()).get("AUTHENTICATION_SESSION")?.value;
  const session = await decrypt(cookie);

  if (!session?.userDetail) {
    redirect("/SignIn");
  }
  return true;
};

export const getAuthenticationUser = async () : Promise<UserDto | null> => {
  const cookie = (await cookies()).get("AUTHENTICATION_SESSION")?.value;
  const session = await decrypt(cookie);
  if (!session) return null;
  try {
    return session?.userDetail as UserDto;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAuthenticationUserID = async () : Promise<string | null> => {
  const userRecord : UserDto | null = await getAuthenticationUser(); 
  if(userRecord == null) { return null; }
  return userRecord.user_id;
}

export const getAuthenticationAccessToken = async () : Promise<string | null> => {
  const userRecord : UserDto | null = await getAuthenticationUser(); 
  if(userRecord == null) { return null; }
  return userRecord.authentication_access_token;
}