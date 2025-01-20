import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient()

const GET = async () => {
    try {
      const casinoList = await prisma.casino.findMany();      
        if (casinoList != null && casinoList.length > 0) {
          return NextResponse.json({ status: true, data: casinoList, msg: "Record found successfully!" })    
        } else {
          return NextResponse.json({ status: false, data: "", msg: "Record not found!" })    
        }
    } catch {
      return NextResponse.json({ status: false, data: "", msg: "Bad Request!" })    
    }  
}
export { GET };