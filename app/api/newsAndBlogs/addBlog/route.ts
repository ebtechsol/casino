import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { title,description,long_description,is_active, image_url, createdAt,updatedAt } = await request.json();
   

    await prisma.blog.create({
      data: {
        title: title,
        description: description,
        long_description: long_description,
        is_active: is_active,
        image_url: image_url,
        createdAt: createdAt,
        updatedAt:updatedAt
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
