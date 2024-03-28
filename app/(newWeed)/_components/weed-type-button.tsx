"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const WeedTypeButton = () => {
  const [currentWeedType, setCurrentWeedType] = useState<string>();
  function handleWeedType(type: string) {
    setCurrentWeedType(type);
  }
  return (
    <div className="flex items-center justify-between">
      <Button
        variant="outline"
        id="sativa"
        onClick={() => handleWeedType("sativa")}
        className={`${currentWeedType == "sativa" && "bg-red-500 text-white"}`}
      >
        Sativa
      </Button>
      <Button
        variant="outline"
        id="indica"
        onClick={() => handleWeedType("indica")}
        className={`${currentWeedType == "indica" && "bg-red-500 text-white"}`}
      >
        Indica
      </Button>
      <Button
        variant="outline"
        id="hybrid"
        onClick={() => handleWeedType("hybrid")}
        className={`${currentWeedType == "hybrid" && "bg-red-500 text-white"}`}
      >
        Hybrid
      </Button>
    </div>
  );
};

export default WeedTypeButton;
