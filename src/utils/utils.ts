export const toHexString = (bytes:any) =>
    bytes.reduce((str:any, byte:any) => str + byte.toString(16).padStart(2, "0"), "");
  