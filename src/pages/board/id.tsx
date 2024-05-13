import SaasLayout from "@app/components/layouts/saas.layout";
import React, { ReactElement, useEffect, useState } from "react";
import { generateFourDigitSecret } from "@app/utils/generateSecret";
import { useAccount, useWalletClient } from "wagmi";
import { createWalletClient, custom } from "viem";
import { getInstance } from "@app/utils/fhevm";
import { FhevmInstance } from "fhevmjs";
import { zama, inco } from "@app/utils/Web3Provider";
import { waitForTransactionReceipt, createConfig, http } from "@wagmi/core";
import { TOTP } from "@app/utils/TOTPConfig";
import { toHexString } from "@app/utils/utils";
import { readContract } from "@wagmi/core";

let instance: FhevmInstance;
function Board() {
  const { address, isConnected, chain } = useAccount();
  const [pin, setPin] = useState<string>();
  const [generatedPin, setGeneratedPin] = useState("");
  const [contractAddr, setContractAddr] = useState<string>();
  const [encryptedData, setEncryptedData] = useState("");
  const [OTP, setOTP] = useState(0);
  const [timestamp, setTimestamp] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [initlised, setInitilised] = useState<boolean>(false);
  const [_input, setInput] = useState<string>();

  const {
    data: walletClient,
    isError,
    isLoading: wallletIsLoading,
  } = useWalletClient({ chainId: inco.id });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const pinInt = parseInt(pin as string);
    const secret = generateFourDigitSecret(pinInt, address as string);
    setGeneratedPin(secret);
  };

  const handleValidate = (e:any)=>{
    e.preventDefault();
    const inputInt = parseInt(_input as string)
    if (instance) {
      const encrypted = instance.encrypt32(inputInt);
      setEncryptedData(toHexString(encrypted));
      validateOTP(toHexString(encrypted))
    }
    
  }

  const validateOTP = async (value:any) => {
    if (!address) return;

    const config =  createConfig({
      chains: [inco],
      transports: {
        [inco.id]: http()
      },
    })
    
    const result = await readContract(config, {
      abi: TOTP.abi,
      address: contractAddr as `0x${string}`,
      functionName: 'validateTOTP',
      args: [`0x${value}`,timestamp]
    })
    console.log({result})
    
  };

  const deploy = async () => {
    if (!address) return;
    const e = instance.encrypt16(parseInt(generatedPin));
    const final = toHexString(e);

    //@ts-ignore
    const hash = await walletClient.deployContract({
      abi: TOTP.abi,
      account: address,
      args: [`0x${final}`], //random number
      bytecode: `0x${TOTP.bytecode}`,
    });
    console.log("hash", hash);
    const transaction = await waitForTransactionReceipt(
      createConfig({
        chains: [inco],
        transports: {
          [inco.id]: http(),
        },
      }),
      {
        hash: hash,
      }
    );
    console.log(transaction.contractAddress);
    //TODO: api call to store it in DB
    setContractAddr(transaction.contractAddress as string);
    setInitilised(true);
  };

  useEffect(() => {
    async function fetchInstance() {
      instance = await getInstance();
    }
    fetchInstance();
  }, []);

  useEffect(() => {
    const regenerateTimestamp = () => {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const last5TimeStamp = currentTimestamp % 100000;
      setTimestamp(currentTimestamp);
      setOTP(last5TimeStamp * parseInt(generatedPin));
      console.log(last5TimeStamp * parseInt(generatedPin));
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
  }, [seconds, contractAddr]);

  return (
    <div className="p-4 border flex-row gap-4">
      <div className="">
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
      </div>
      <>
        {generatedPin && (
          <>
            <h2>Generated PIN:</h2>
            <p>{generatedPin}</p>

            <button className="border" onClick={() => deploy()}>
              Create Fluf ID
            </button>
          </>
        )}
        {contractAddr && <p>{contractAddr}</p>}
        {/* {initlised && contractAddr && {OTP}} */}
      </>

      <>
      {initlised && <>
        <div>
            <label>
              Four-digit Number for validation
              <input
                className="border m-2"
                type="text"
                value={_input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
            </label>
            <br />

            <br />
            <button className="border" onClick={(e) => handleValidate(e)}>
              validater
            </button>
          </div>
      </>}
      </>
    </div>
  );
}

// Board.getLayout = function getLayout(Board: ReactElement) {
//   return <SaasLayout>{Board}</SaasLayout>;
// };

export default Board;
