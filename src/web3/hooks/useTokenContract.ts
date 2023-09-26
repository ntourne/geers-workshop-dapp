import { Contract } from "ethers";
import {
  ERC20_CONTRACT_ADDRESS,
  ERC20_CONTRACT_ABI,
  ERC20_CONTRACT_CHAINID,
} from "@/web3/constants/contract";
import { useWeb3 } from "@/web3/context/Web3Context";

type Values = {
  mint: (to: string) => Promise<void>;
  getName: () => Promise<string>;
};

export const useTokenContract = (): Values => {
  const { user } = useWeb3();

  const mint = async (to: string) => {
    if (user?.chainId !== ERC20_CONTRACT_CHAINID) {
      alert(
        `Wrong network. You are on ${user?.chainId}. Please switch to ${ERC20_CONTRACT_CHAINID}`
      );
      return;
    }

    const tokenContract = new Contract(
      ERC20_CONTRACT_ADDRESS,
      ERC20_CONTRACT_ABI,
      user?.signer
    );

    await tokenContract.mint(to);
  };

  const getName = async () => {
    const tokenContract = new Contract(
      ERC20_CONTRACT_ADDRESS,
      ERC20_CONTRACT_ABI,
      user?.signer
    );

    const name = await tokenContract.name();

    return name;
  };

  return { mint, getName };
};
