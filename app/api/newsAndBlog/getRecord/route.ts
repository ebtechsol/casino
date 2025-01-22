import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const newsAndBlog_id = request?.nextUrl?.searchParams.get('id');
    if(Number(newsAndBlog_id) > 0) {
      const record = await prisma.newsAndBlog.findUnique({
        where: {
          id: Number(newsAndBlog_id),
          is_active: true,
        },
      });
  
      if (record != null && record?.id > 0) {
        return NextResponse.json({
          status: true,
          data: record,
          msg: "Record exist!",
        });
      } else {
        return NextResponse.json({
          status: false,
          data: null,
          msg: "Record not exist!",
        });  
      }
    } else {
      return NextResponse.json({
        status: false,
        data: null,
        msg: "ID [id] is required!",
      });
    }
  } catch {
    return NextResponse.json({ status: false, data: null, msg: "Bad Request!" });
  }
};
export { GET };
