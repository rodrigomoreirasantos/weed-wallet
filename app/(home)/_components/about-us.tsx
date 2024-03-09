"use client";

import { useSession } from "next-auth/react";
import React from "react";

const AboutUs = () => {
  const { status } = useSession();

  return (
    <>
      {status == "authenticated" ? (
        <div>
          <h1>USER</h1>
        </div>
      ) : (
        <div>
          <h1>ABOUT US</h1>
        </div>
      )}
    </>
  );
};

export default AboutUs;
