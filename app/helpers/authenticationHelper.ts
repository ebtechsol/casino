import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { VerifyAccessTokenResponseDto } from "../dto/authentication/userDto";
import { encrypt } from "./encryptionHelper";
const prisma = new PrismaClient();

export async function generateAuthenticationAccessToken(user_id: string): Promise<string> {
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
  const session = await encrypt({ user_id, expiresAt });
  return session;
}

export const verifyAuthenticationAccessToken =
  async (): Promise<VerifyAccessTokenResponseDto> => {
    const headersList = await headers();
    const access_token = headersList.get("authentication_access_token");
    if (access_token == null || access_token == "") {
      return { status: false, msg: "Missing authentication access token!" };
    }

    if (await verifyAuthenticationLogs(access_token)) {
      return { status: true, msg: "Valid authentication access token!" };
    } else {
      return { status: false, msg: "Expired authentication access token!" };
    }
  };

const verifyAuthenticationLogs = async (
  access_token: string
): Promise<boolean> => {
  const timeOut = process.env.AUTHENTICATION_SESSION_TIMEOUT;
  const logs = await prisma.userAuthenticationLogs.findFirst({
    where: {
      access_token: access_token,
    },
  });
  if (logs != null) {
    const authenticationAt = new Date(logs?.authentication_at).getMinutes();
    const dateNow = new Date().getMinutes();
    if (
      Number(dateNow - authenticationAt) >= 0 &&
      Number(dateNow - authenticationAt) <= Number(timeOut)
    ) {
      return true;
    }
  }
  return false;
};
