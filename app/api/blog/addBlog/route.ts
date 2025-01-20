import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const {
      title,
      description,
      long_description,
      is_active,
      image_url,
      created_at,
      updated_at,
    } = await request.json();

    await prisma.blog.create({
      data: {
        title: title,
        description: description,
        long_description: long_description,
        image_url: image_url,
        is_active: is_active,
        created_at: created_at,
        updated_at: updated_at,
      },
    });

    return NextResponse.json({
      status: true,
      msg: "Successfully add new Blog!",
    });
  } catch {
    return NextResponse.json({ status: false, msg: "Bad Request!" });
  }
};

export { POST };
