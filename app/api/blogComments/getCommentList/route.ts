import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const blog_id = request?.nextUrl?.searchParams.get("blog_id");
    if (Number(blog_id) > 0) {
      const record = await prisma.blogComments.findMany({
        where: {
          blog_id: Number(blog_id),
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
    } else {
      return NextResponse.json({
        status: false,
        data: null,
        msg: "Blog Id [blog_id] is required!",
      });
    }
  } catch {
    return NextResponse.json({
      status: false,
      data: null,
      msg: "Bad Request!",
    });
  }
};
export { GET };
