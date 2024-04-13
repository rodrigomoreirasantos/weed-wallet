import { db } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const { name, cbd, thc, type, user } = req;

  const userId = user.id;

  const createWeed = await db.weed.create({
    data: {
      name,
      cbd,
      thc,
      type,
      userId,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: 200,
      id: createWeed.id,
    }),
    { status: 201 }
  );
}
