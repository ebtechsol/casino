import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const ln = request?.nextUrl?.searchParams.get("ln");
    let casinoList = null;
    if (Number(ln) > 0) {
      casinoList = await prisma.casino.findMany({
        take: Number(ln),
        where: {
          is_active: true,
        },
        orderBy: {
          id: "desc",
        },
      });
    } else {
      casinoList = await prisma.casino.findMany({
        where: {
          is_active: true,
        },
        orderBy: {
          id: "desc",
        },
      });
    }

    if (casinoList != null && casinoList.length > 0) {
      return NextResponse.json({
        status: true,
        data: casinoList,
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
