"use client";

import { SignInCard } from "./sign-in-card";

export const AuthScreen = () => {
  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        <SignInCard />
      </div>
    </div>
  );
};
