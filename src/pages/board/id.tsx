import { EncryptedCard } from "@app/components/ui/encrypted-card";
import React from "react";
import { PiIdentificationBadgeFill } from "react-icons/pi";

function id() {
  return (
    <div className="p-2 h-full">
      <h1 className="text-2xl text-gray-800  flex flex-row items-center gap-1 font-mono font-semibold p-2">
        <PiIdentificationBadgeFill className="" /> <span>Identity</span>
      </h1>
      <div className="flex-grow overflow-y-scroll scrollbar-hide">
        <div className="flex items-center justify-center p-8 w-full font-mono">
          <div className="max-w-sm h-[30rem] border border-emerald-400 rounded-lg">
            <EncryptedCard text="create_id" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default id;
