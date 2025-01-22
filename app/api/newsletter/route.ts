import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const {
      email
    } = await request.json();

    await prisma.subscribeNewsLetter.create({
      data: {
        email:email
      },
    });

    return NextResponse.json({
      status: true,
      msg: "Successfully add new News Letter!",
    });
  } catch(e){
    return NextResponse.json({ status: false, msg: e });
  }
};

export {POST};
