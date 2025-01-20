import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5";
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
    return NextResponse.json({ status: false, data: null, msg: "Bad Request!" });
  }
};

export { POST };
