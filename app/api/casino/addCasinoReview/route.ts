import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const {
      reviews_type,
      rating,
      created_at,
      casino_id
    } = await request.json();

    await prisma.casinoReviews.create({
      data: {
        reviews_type: reviews_type,
        rating: rating,
        created_at: created_at,
        casino_id: casino_id
      },
    });

    return NextResponse.json({
      status: true,
      msg: "Successfully add new Casino!",
    });
  } catch {
    return NextResponse.json({ status: false, msg: "Bad Request!" });
  }
};

export { POST };
