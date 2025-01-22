import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const type = request?.nextUrl?.searchParams.get("t");
    const ln = request?.nextUrl?.searchParams.get("ln");
    let newsAndBlogList = null;
    let find = {
      where: {
        is_active: true,
      },
      orderBy: {
        id: "desc",
      },
    };

    if (Number(ln) > 0) {
      find = Object.assign(find, { take: Number(ln) });
    }

    if (type != null && type != "") {
      find = Object.assign(find, {
        where: Object.assign(find.where, { type: type }),
      });
    }

    newsAndBlogList = await prisma.newsAndBlog.findMany(find as object);
    if (newsAndBlogList != null && newsAndBlogList.length > 0) {
      return NextResponse.json({
        status: true,
        data: newsAndBlogList,
        msg: "Record found!",
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
