import { BrowserProvider, formatEther } from "ethers";

export const getAccounts = async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  return accounts;
};

export const getBalance = async (address: string) => {
  const balance = await window.ethereum.request({
    method: "eth_getBalance",
    params: [address, "latest"],
  });

  return formatEther(balance);
};

export const getChainId = async () => {
  const chainId = await window.ethereum.request({ method: "eth_chainId" });

  // chainId is in hexa. Need to convert to string for easier reading
  return BigInt(chainId).toString();
};

export const getProviderAndSigner = async () => {
  const provider = new BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();

  return {
    provider,
    signer,
  };
};
