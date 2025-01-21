import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const ln = request?.nextUrl?.searchParams.get("ln");
    let newsList = null;
    if (Number(ln) > 0) {
      newsList = await prisma.news.findMany({
        take: Number(ln),
        where: {
          is_active: true,
        },
      });
    } else {
      newsList = await prisma.news.findMany({
        where: {
          is_active: true,
        },
      });
    }

    if (newsList != null && newsList.length > 0) {
      return NextResponse.json({
        status: true,
        data: newsList,
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
