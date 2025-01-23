import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
import { generateAuthenticationAccessToken } from "@/app/helpers/authenticationHelper";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: md5(password),
        is_active: true,
      },
    });
    if (user != null) {
      user.authentication_access_token = await generateAuthenticationAccessToken(
        user.user_id
      );
      await setAccessTokenCredential(user.id, user.authentication_access_token);
      await insertAuthenticationLogs(
        user.user_id,
        user.authentication_access_token
      );
      return NextResponse.json({
        status: true,
        data: user,
        msg: "Successfully Login",
      });
    }
    return NextResponse.json({
      status: false,
      data: null,
      msg: "Invalid credentials!",
    });
  } catch {
    return NextResponse.json({
      status: false,
      data: null,
      msg: "Bad Request!",
    });
  }
};

export { POST };

const setAccessTokenCredential = async (id: number, access_token: string) => {
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      authentication_access_token: access_token,
    },
  });
};

const insertAuthenticationLogs = async (
  user_id: string,
  access_token: string
) => {
  await prisma.userAuthenticationLogs.create({
    data: {
      user_id: user_id,
      access_token: access_token
    },
  });
};
