import { db } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const { name, cbd, thc, type, user } = req;

  await db.weed.create({
    data: {
      name,
      cbd,
      thc,
      type,
      user,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: 200,
    }),
    { status: 201 }
  );
}
