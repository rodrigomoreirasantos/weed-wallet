import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Weed } from "@prisma/client";
import { Leaf, Pipette } from "lucide-react";
import Image from "next/image";

interface WeedProps {
  weed: Weed;
}

const WeedCard = ({ weed }: WeedProps) => {
  return (
    <div className="px-5 py-5">
      <Card className="rounded-lg">
        <CardContent className="flex flex-row gap-5 p-5">
          <Image src="/weedImg.png" alt="Weed Image" height={80} width={130} />
          <div>
            <Badge className="bg-[#D9D9D9] text-gray-600 rounded capitalize">
              {weed.type}
            </Badge>
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
