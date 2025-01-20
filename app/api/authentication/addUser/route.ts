import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { user_name, email, password } = await request.json();
    const userRecord = await prisma.user.findUnique({
      where: {
        email: email,
        is_active: true,
      },
    });
    if(userRecord != null && userRecord?.id > 0) {
      return NextResponse.json({ status: false, msg: "Email address already exist!" });
    } 

    await prisma.user.create({
      data: {
        user_name: user_name,
        email: email,
        password: md5(password),
        is_active: true
      },
    });

    return NextResponse.json({
      status: true,
      msg: "Successfully add new user!",
    });
  } catch {
    return NextResponse.json({ status: false, msg: "Bad Request!" });
  }
};

export { POST };
