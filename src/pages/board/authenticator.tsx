import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { SiGoogleauthenticator } from "react-icons/si";
import { TbGridScan } from "react-icons/tb";
import { FaCopy } from "react-icons/fa";
import { useAccount } from "wagmi";
import { generateFourDigitSecret } from "@app/utils/generateSecret";

function Authenticator() {
  const [passcode, setPasscode] = useState("");
  const {address} = useAccount()
  const [verified, setVerified] = useState(false);
  const [otp, setOTP] = useState<string>("");
  const [seconds, setSeconds] = useState(30);
  const [timestamp, setTimestamp] = useState(0);
  const [generatedPin, setGeneratedPin] = useState("");

  useEffect(() => {
    const regenerateTimestamp = () => {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const last5TimeStamp = currentTimestamp % 100000;
      const pin =localStorage.getItem("pin")
      const pinInt = parseInt(pin as string);
      const secret = generateFourDigitSecret(pinInt, address as string);
      // console.log("generated PIN:", secret)
      setGeneratedPin(secret);
      setTimestamp(currentTimestamp);
      console.log(last5TimeStamp * parseInt(generatedPin))
      setOTP(`${last5TimeStamp * parseInt(generatedPin)}`);
      console.log("GENERATED TOTP",last5TimeStamp * parseInt(generatedPin));
    };
    const timer = setInterval(() => {
      if (seconds === 30) {
        regenerateTimestamp();
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        setSeconds(30);
      }
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup the timer when the component unmounts
    };
  }, [seconds]);
  return (
    <div className="relative h-screen ">
      {verified ? (
        <div className="p-4  flex-row gap-4">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl text-gray-700 flex flex-row items-center gap-2 font-mono font-semibold">
              <SiGoogleauthenticator /> <span>Authenticator</span>
            </h1>
            <button
              className="bg-emerald-500 flex flex-row gap-2 items-center font-semibold mb-8 border-b-[2px] border-r-[2px] border-emerald-600 text-gray-700 p-[10px] py-[8px] rounded-md"
              onClick={() => {}}
            >
              <TbGridScan /> Add Daap
            </button>
          </div>

          <div className={"grid grid-cols-5"}>
            {/* otp card */}
            <div className="p-4 px-0  border flex flex-col items-center gap-3 rounded">
              <p className="text-center px-4 text-lg font-semibold text-gray-500">
                🏛️ FHE Vault
              </p>
              <div style={{ width: "100%" }}>
                <div
                  className="h-[2px] bg-emerald-500"
                  style={{
                    width: `${(seconds / 30) * 100}%`,
                  }}
                />
              </div>
              <p className="text-3xl px-4 font-semibold font-mono flex flex-row gap-2 items-center">
                {otp}{" "}
                <FaCopy
                  onClick={() => {
                    window?.navigator.clipboard?.writeText(otp!=="NaN"?otp:"- - -")
                    toast("Copied to clipboard!");
                  }}
                  className="text-emerald-500 cursor-pointer"
                />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute flex-col top-0 bottom-0 gap-4 left-0 right-0 bg-[rgba(0, 0, 0, 0.5)] flex items-center justify-center">
          <h1 className="text-gray-800 text-xl mb-4">
            {" "}
            Enter passcode to unlock authenticator
          </h1>
          <OtpInput
            value={passcode}
            onChange={setPasscode}
            numInputs={4}
            renderSeparator={<span className="mx-2">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                type={"number"}
                className="p-2 text-3xl min-w-[52px] focus:ring-emerald-500 focus:border-emerald-500 border rounded  text-emerald-400"
              />
            )}
          />
          <button
            className="bg-emerald-500 mb-8 border-b-[2px] border-r-[2px] border-emerald-600 text-gray-700 p-[10px] py-[8px] rounded-md"
            onClick={() => {
              if (localStorage.getItem("pin") === passcode) {
                setVerified(true);
              } else {
                toast.error("Invalid passcode");
              }
            }}
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
}

export default Authenticator;
