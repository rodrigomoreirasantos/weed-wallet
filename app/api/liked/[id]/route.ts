import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: NextApiRequest) {
  const teste = req.query;
  const body = JSON.stringify(req.body);
  console.log(teste);

  return new NextResponse(JSON.stringify({ message: "OK" }), {
    status: 200,
    statusText: "OK",
  });

  // try {
  //   const body = JSON.parse(req.body);
  //   console.log(body);
  //   if (!id || typeof id !== "string") {
  //     return new NextResponse(
  //       JSON.stringify({ message: "Invalid ID parameter" }),
  //       {
  //         status: 404,
  //         statusText: "Invalid ID parameter",
  //       }
  //     );
  //   }
  //   if (req.method === "PUT") {
  //     const { updatedWeed } = body;
  //     const weed = await db.weed.findUnique({
  //       where: {
  //         id: id as string,
  //       },
  //     });
  //     if (!weed) {
  //       return new NextResponse(JSON.stringify({ message: "Weed not found" }), {
  //         status: 404,
  //         statusText: "Weed not found",
  //       });
  //     }
  //     console.log("Updated weed:", updatedWeed);
  //     const updatedWeedData = {
  //       ...weed,
  //       liked: !weed.liked,
  //     };
  //     const updatedWeedResponse = await db.weed.update({
  //       where: {
  //         id: id as string,
  //       },
  //       data: updatedWeedData,
  //     });
  //     return new NextResponse(JSON.stringify(updatedWeedResponse), {
  //       status: 200,
  //       statusText: "OK",
  //     });
  //   } else {
  //     return new NextResponse(JSON.stringify({ error: "Method Not Allowed" }), {
  //       status: 405,
  //       statusText: "Method Not Allowed",
  //     });
  //   }
  // } catch (error) {
  //   console.error("Error:", error);
  //   return new NextResponse(
  //     JSON.stringify({ message: "Internal server error" }),
  //     {
  //       status: 500,
  //       statusText: "Internal server error",
  //     }
  //   );
  // }
}
