import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { id } = await request.json();
    const userRecord = await prisma.user.findUnique({
      where: {
        id: id,
        is_active: true,
      },
    });
    if (userRecord != null && userRecord?.id != "") {
      return NextResponse.json({
        status: true,
        data: userRecord,
        msg: "User data is exist!",
      });
    }

    return NextResponse.json({
      status: false,
      data: "",
      msg: "User data is not exist!",
    });
  } catch {
    return NextResponse.json({ status: false, data: "", msg: "Bad Request!" });
  }
};

export { POST };
