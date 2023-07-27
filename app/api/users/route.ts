import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../utils/prisma";

export async function GET(request: NextRequest) {
  const userMail = request.nextUrl.searchParams.get("email");

  if (userMail) {
    const user = await prisma.users.findUnique({
      where: {
        email: userMail,
      },
    });

    return NextResponse.json(!!user);

  } else {
    
    return NextResponse.json(false);
  }
}
