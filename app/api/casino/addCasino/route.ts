import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const {
     title,
       sub_tile,
       description,
       image_url,
       wizard_rating,
       critic_score,
       is_active,
       created_at,
    } = await request.json();

    await prisma.casino.create({
      data: {
        title: title,
        sub_tile: sub_tile,
        description: description,
        image_url: image_url,
        wizard_rating: wizard_rating,
        critic_score: critic_score,
        is_active: is_active,
        created_at: created_at,
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
