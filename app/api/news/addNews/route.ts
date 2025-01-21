import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const {
      title,
      image_url,
      author_name,
      publish_date,
      created_at,
      updated_at,
    } = await request.json();

    await prisma.news.create({
      data: {
        title: title,
        description: "",
        image_url: image_url,
        author_name: author_name,
        publish_date: publish_date,
        is_active: true,
        created_at: created_at,
        updated_at: updated_at,
      },
    });

    return NextResponse.json({
      status: true,
      msg: "Successfully add new News!",
    });
  } catch {
    return NextResponse.json({ status: false, msg: "Bad Request!" });
  }
};

export { POST };
