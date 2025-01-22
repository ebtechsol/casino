import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const {
      title,
      type,
      description,
      long_description,
      image_url,
      author_name,
      tags,
      publish_date
    } = await request.json();

    await prisma.newsAndBlog.create({
      data: {
        title: title,
        type: type,
        description: description,
        long_description: long_description,
        image_url: image_url,
        author_name: author_name,
        tags: tags,
        publish_date: publish_date,
        is_active: true
      },
    });

    return NextResponse.json({
      status: true,
      msg: "Record add successfully!",
    });
  } catch {
    return NextResponse.json({ status: false, msg: "Bad Request!" });
  }
};

export { POST };
