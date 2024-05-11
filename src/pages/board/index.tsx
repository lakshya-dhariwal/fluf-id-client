import SaasLayout from "@app/components/layouts/saas.layout";
import { ConnectKitButton } from "connectkit";
import React, { ReactElement, useState } from "react";
import { generateSixDigitSecret } from "@app/utils/generateSecret";
import { useAccount } from "wagmi";

function Page() {
  const { address, isConnected } = useAccount();
  const [pin, setPin] = useState<string>();
  const [generatedPin, setGeneratedPin] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const pinInt = parseInt(pin as string);
    const secret = generateSixDigitSecret(pinInt, address as string);
    setGeneratedPin(secret);
  };
  return (
    <div className="p-4 border flex-row gap-4">
      {isConnected && (
        <div>
          <label>
            Four-digit Number:
            <input
              className="border m-2"
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </label>
          <br />

          <br />
          <button className="border" onClick={(e) => handleSubmit(e)}>
            Generate PIN
          </button>
        </div>
      )}
      <ConnectKitButton />
      {generatedPin && (
        <>
          <h2>Generated PIN:</h2>
          <p>{generatedPin}</p>
        </>
      )}
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <SaasLayout>{page}</SaasLayout>;
};

export default Page;
