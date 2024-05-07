import React from "react";

function SaasLayout(props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row ">
      <div className="w-[300px] border-r-[1px] border-gray-700  h-full">
        Covenant
      </div>
      {props.children}
    </div>
  );
}

export default SaasLayout;
