"use server";
import UserDto from "@/app/dto/authentication/userDto";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.AUTHENTICATION_SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);


export async function setAuthSession(userDetail: UserDto) {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
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

  if (!session || !payload) {
    return null;
  }
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(encodedKey);
}

export async function decrypt(encryptedValue: string | undefined = "") {
  if (!encryptedValue) return null;
  try {
    const { payload } = await jwtVerify(encryptedValue, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log(error)
    return null;
  }
}
