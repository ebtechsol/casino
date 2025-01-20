import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient()

const GET = async () => {
  try {
    const newsList = await prisma.news.findMany();      
      if (newsList != null && newsList.length > 0) {
        return NextResponse.json({ status: true, data: newsList, msg: "Record found successfully!" })    
      } else {
        return NextResponse.json({ status: false, data: "", msg: "Record not found!" })    
      }
    } catch {
    return NextResponse.json({ status: false, data: "", msg: "Bad Request!" })    
  }  
}
export { GET };