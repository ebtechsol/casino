import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const GET = async (request: NextRequest) => {
  try {
    const user_id = request?.nextUrl?.searchParams.get('user_id');
    if(Number(user_id) > 0) {
      const userRecord = await prisma.user.findUnique({
        where: {
          id: Number(user_id),
          is_active: true,
        },
      });
      if (userRecord != null && userRecord?.id > 0) {
        return NextResponse.json({
          status: true,
          data: userRecord,
          msg: "User data is exist!",
        });
      }
  
      return NextResponse.json({
        status: false,
        data: null,
        msg: "User data is not exist!",
      });
    } else {
      return NextResponse.json({
        status: false,
        data: null,
        msg: "User Id [user_id] is required!",
      });
    }
  } catch {
    return NextResponse.json({ status: false, data: null, msg: "Bad Request!" });
  }
};

export { GET };
