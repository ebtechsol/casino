import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const blog_id = request?.nextUrl?.searchParams.get('blog_id');
    if(Number(blog_id) > 0) {
      const record = await prisma.blog.findUnique({
        where: {
          id: Number(blog_id),
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
        msg: "Blog Id [blog_id] is required!",
      });
    }
  } catch {
    return NextResponse.json({ status: false, data: null, msg: "Bad Request!" });
  }
};
export { GET };
