import { Contract } from "ethers";
import {
  ERC20_CONTRACT_ADDRESS,
  ERC20_CONTRACT_ABI,
  ERC20_CONTRACT_CHAINID,
} from "../constants/contract";
import { useWeb3 } from "../context/Web3Context";

type Values = {
  mint: (to: string) => Promise<void>;
  getName: () => Promise<string>;
};

export const useTokenContract = (): Values => {
  const { user } = useWeb3();

  const getContractInstance = () => {
    const tokenContract = new Contract(
      ERC20_CONTRACT_ADDRESS,
      ERC20_CONTRACT_ABI,
      user?.signer
    );
    return tokenContract;
  };

  const mint = async (to: string) => {
    if (user?.chainId !== ERC20_CONTRACT_CHAINID) {
      alert(
        `Wrong network. You are on ${user?.chainId}. Please switch to ${ERC20_CONTRACT_CHAINID}`
      );
      return;
    }

    const tokenContract = getContractInstance();

    console.log("debug - user", user?.chainId);

    await tokenContract.mint(to);
  };

  const getName = async () => {
    const tokenContract = getContractInstance();

    const name = await tokenContract.name();

    return name;
  };

  return { mint, getName };
};
