import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { title, image_url,author_name,publish_date, createdAt,updatedAt } = await request.json();
   

    await prisma.news.create({
      data: {
        title: title,
        image_url: image_url,
        author_name: author_name,
        publish_date: publish_date,
        createdAt: createdAt,
        updatedAt:updatedAt
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
