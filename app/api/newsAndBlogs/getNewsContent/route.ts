import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient()

const GET = async () => {
  try {
    const news = await prisma.news.findMany();      
      if (news != null) {
        return NextResponse.json({ status: true, data: news, msg: "Record found successfully!" })    
      }
      return NextResponse.json({ status: false, data: "", msg: "Record not found!" })    
    } catch {
    return NextResponse.json({ status: false, data: "", msg: "Bad Request!" })    
  }  
}
export { GET };