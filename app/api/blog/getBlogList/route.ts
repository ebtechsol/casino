import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient()

const GET = async () => {
    try {
      const blogList = await prisma.blog.findMany();      
        if (blogList != null && blogList.length > 0) {
          return NextResponse.json({ status: true, data: blogList, msg: "Record found successfully!" })    
        } else {
          return NextResponse.json({ status: false, data: "", msg: "Record not found!" })    
        }
    } catch {
      return NextResponse.json({ status: false, data: "", msg: "Bad Request!" })    
    }  
}
export { GET };