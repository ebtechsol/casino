import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const {
      title,
      description,
      long_description,
      image_url,
      author_name,
      publish_date
    } = await request.json();

    await prisma.news.create({
      data: {
        title: title,
        description: description,
        long_description: long_description,
        image_url: image_url,
        author_name: author_name,
        publish_date: publish_date,
        is_active: true
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
