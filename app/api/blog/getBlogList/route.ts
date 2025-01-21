import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const ln = request?.nextUrl?.searchParams.get("ln");
    let blogList = null;
    if (Number(ln) > 0) {
      blogList = await prisma.blog.findMany({
        take: Number(ln),
        where: {
          is_active: true,
        },
      });
    } else {
      blogList = await prisma.blog.findMany({
        where: {
          is_active: true,
        },
      });
    }

    if (blogList != null && blogList.length > 0) {
      return NextResponse.json({
        status: true,
        data: blogList,
        msg: "Record found successfully!",
      });
    } else {
      return NextResponse.json({
        status: false,
        data: "",
        msg: "Record not found!",
      });
    }
  } catch {
    return NextResponse.json({ status: false, data: "", msg: "Bad Request!" });
  }
};
export { GET };
