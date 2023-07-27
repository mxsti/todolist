import { NextResponse } from 'next/server'
import  {prisma } from '../../utils/prisma'
 
export async function GET() {
  const tasks = await prisma.tasks.findMany({
    where: {
      done: false,
    }
  })
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {

  const data = await request.json();

  const newTask = await prisma.tasks.create({
    data: {
      description: data.description,
      priority: data.priority,
      done: false,
    }
  });

  return NextResponse.json(newTask.id);
}

export async function PUT(request: Request){
  const data = await request.json();

  const changeTask = await prisma.tasks.update({
    where: {
      id: data.id,
    },
    data: {
      done: true,
    }
  })

  return NextResponse.json(changeTask.id);
}
