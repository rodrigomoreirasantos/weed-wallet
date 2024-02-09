import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Pipette } from "lucide-react";
import Image from "next/image";

const WeedCard = () => {
  return (
    <div className="p-5">
      <Card className="rounded-lg">
        <CardContent className="flex flex-row gap-5 p-5">
          <Image src="/weedImg.png" alt="Weed Image" height={80} width={130} />
          <div>
            <Badge className="bg-[#D9D9D9] text-gray-600 rounded">Sativa</Badge>
            <h2>Amnésia Haze</h2>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-center">
                <p className="text-xs">THC</p>
                <div className="flex flex-row items-center gap-1">
                  <Leaf size={16} />
                  <p>19%</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs">CBD</p>
                <div className="flex flex-row items-center gap-1">
                  <Pipette size={16} />
                  <p>9%</p>
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
