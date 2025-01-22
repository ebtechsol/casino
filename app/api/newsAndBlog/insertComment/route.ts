import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

const POST = async (request: NextRequest) => {
  try {
    const { message, newsAndBlog_id, user_id, parent_comment_id } = await request.json();
   
    await prisma.newsAndBlogComments.create({
      data: {
        message: message,
        parent_comment_id: parent_comment_id > 0 ? parent_comment_id : null,
        newsAndBlog_id: newsAndBlog_id,
        user_id: user_id,
      },
    });

    return NextResponse.json({
      status: true,
      msg: "Comment add successfully!",
    });
  } catch(e) {
    return NextResponse.json({ status: false, msg: e });
  }
};

export { POST };
