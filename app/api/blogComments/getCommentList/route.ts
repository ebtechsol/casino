import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { blog_id } = await request.json();
    const record = await prisma.blogComments.findMany({
      where: {
        blog_id: blog_id,
      },
    });

    if (record != null && record.length > 0) {
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
    return NextResponse.json({
      status: false,
      data: null,
      msg: "Bad Request!",
    });
  }
};
export { POST };
