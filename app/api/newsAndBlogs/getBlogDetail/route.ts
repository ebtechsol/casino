import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { id } = await request.json();
    const record = await prisma.blog.findUnique({
      where: {
        id: id,
        is_active: true,
      },
    });

    if (record != null && record?.id > 0) {
      return NextResponse.json({
        status: true,
        data: record,
        msg: "Record exist!",
      });
    }
    return NextResponse.json({
      status: false,
      data: null,
      msg: "Record not exist!",
    });
  } catch {
    return NextResponse.json({ status: false, data: null, msg: "Bad Request!" });
  }
};
export { POST };
