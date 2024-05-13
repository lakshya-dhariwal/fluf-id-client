export function generateFourDigitSecret(num: number, metamaskAddress: string): string {
  const lowercaseAddress = metamaskAddress.toLowerCase();
  const addressWithoutPrefix = lowercaseAddress.startsWith("0x") ? lowercaseAddress.slice(2) : lowercaseAddress;
  
  const byteArray: number[] = [];
  for (let i = 0; i < addressWithoutPrefix.length; i += 2) {
    byteArray.push(parseInt(addressWithoutPrefix.slice(i, i + 2), 16));
  }

  const sum = byteArray.reduce((acc, curr) => acc + curr, 0);
  const product = byteArray.reduce((acc, curr) => acc * curr, 1);

  const combinedNumber = parseInt(`${num}${sum}${product}`);
  const seed = combinedNumber;
  const random = cryptoRandom(seed);

  const fourDigitNumber = Math.floor(random * 10000);

  return fourDigitNumber.toString().padStart(4, "0");
}

function cryptoRandom(seed: number): number {
  const crypto = require("crypto");
  const hash = crypto.createHash("sha256");
  hash.update(seed.toString());
  const digest = hash.digest("hex");
  const random = parseInt(digest, 16) / Math.pow(2, 256);
  return random;
}


