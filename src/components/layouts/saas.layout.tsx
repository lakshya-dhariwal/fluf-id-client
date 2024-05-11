import { Web3Provider } from "@app/utils/Web3Provider";
import React from "react";

function SaasLayout(props: { children: React.ReactNode }) {
  return (
    <Web3Provider>
    <div className="flex flex-row ">
      <div className="w-[300px] border-r-[1px] border-gray-700  h-full">
        Fluf
      </div>
      {props.children}
      
    </div>
    </Web3Provider>
  );
}

export default SaasLayout;
