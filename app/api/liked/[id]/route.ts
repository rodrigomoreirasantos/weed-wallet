import { db } from "@/app/_lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (request.method === "POST") {
    try {
      const req = await request.json();
      const { id } = req;

      if (!id || typeof id !== "string") {
        return new NextResponse(
          JSON.stringify({ message: "Invalid ID parameter" }),
          {
            status: 404,
            statusText: "Invalid ID parameter",
          }
        );
      }

      const weed = await db.weed.findUnique({
        where: {
          id,
        },
      });

      if (!weed) {
        return new NextResponse(JSON.stringify({ message: "Weed not found" }), {
          status: 404,
          statusText: "Weed not found",
        });
      }

      const updatedWeedData = {
        ...weed,
        liked: !weed.liked,
      };

      const updatedWeedResponse = await db.weed.update({
        where: {
          id,
        },
        data: updatedWeedData,
      });

      return new NextResponse(JSON.stringify({ message: "OK" }), {
        status: 200,
        statusText: "OK",
      });
    } catch (error) {
      console.error("Error updating liked status:", error);
      return new NextResponse(
        JSON.stringify({ message: "Internal server error" }),
        {
          status: 500,
          statusText: "Internal server error",
        }
      );
    }
  } else {
    return new NextResponse(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      statusText: "Method Not Allowed",
    });
  }
}
