import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const newsAndBlog_id = request?.nextUrl?.searchParams.get("id");
    if (Number(newsAndBlog_id) > 0) {
      const record = await prisma.newsAndBlogComments.findMany({
        where: {
          newsAndBlog_id: Number(newsAndBlog_id),
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
        msg: "ID [id] is required!",
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
