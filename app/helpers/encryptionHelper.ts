import { SignJWT, jwtVerify } from "jose";

const secretKey = process.env.AUTHENTICATION_SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

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
