"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Weed } from "@prisma/client";
import { Leaf, Pipette, Heart } from "lucide-react";
import Image from "next/image";

interface WeedProps {
  weed: Weed;
}

const WeedCard = ({ weed }: WeedProps) => {
  const handleLikedClick = async () => {
    try {
      if (!weed.id) {
        console.error("Weed ID is undefined");
        return;
      }
      const updatedWeed = { ...weed, liked: !weed.liked };
      console.log(updatedWeed);
      const response = await fetch(`/api/liked/${weed.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedWeed),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update liked status.");
      }
    } catch (error) {
      console.error("Error updating liked status:", error);
    }
  };

  return (
    <div className="px-5 py-5">
      <Card className="rounded-lg">
        <CardContent className="flex flex-row gap-5 p-5">
          <Image src="/weedImg.png" alt="Weed Image" height={80} width={130} />
          <div className="w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <Badge
                className="bg-[#D9D9D9] text-gray-600 rounded capitalize px-4 py-2"
                variant="outline"
              >
                {weed.type}
              </Badge>

              <Button
                variant="ghost"
                className="capitalize"
                onClick={handleLikedClick}
              >
                <Heart className={`${weed.liked ? "fill-black" : ""}`} />
              </Button>
            </div>
            <h2>{weed.name}</h2>
            <div className="flex flex-row justify-between w-10 gap-6">
              <div className="flex flex-col">
                <p className="text-xs">THC</p>
                <div className="flex flex-row items-center gap-1">
                  <Leaf size={16} />
                  <p>{weed.thc}%</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-xs">CBD</p>
                <div className="flex flex-row items-center gap-1">
                  <Pipette size={16} />
                  <p>{weed.cbd}%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeedCard;
