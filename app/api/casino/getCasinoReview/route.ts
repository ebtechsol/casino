import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const casino_id = request?.nextUrl?.searchParams.get('casino_id');
    if(Number(casino_id) > 0) {
      const record = await prisma.casinoReviews.findMany({
        where: {
          casino_id: Number(casino_id)
        },
      });
  
      if (record != null && record?.length > 0) {
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
        msg: "Casino Id [casino_id] is required!",
      });
    }
  } catch (e) {
    return NextResponse.json({ status: false, data: null, msg: "Bad Request!" });
  }
};
export { GET };
