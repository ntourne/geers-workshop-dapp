import { Contract } from "ethers";
import {
  ERC20_CONTRACT_ADDRESS,
  ERC20_CONTRACT_ABI,
  ERC20_CONTRACT_CHAINID,
} from "../constants/contract";
import { useWeb3 } from "../context/Web3Context";

type Values = {
  mint: (to: string, amount: bigint) => Promise<void>;
};

export const useTokenContract = (): Values => {
  const { user } = useWeb3();

  const mint = async (to: string, amount: bigint) => {
    if (user?.chainId !== ERC20_CONTRACT_CHAINID) {
      alert(
        `Wrong network. You are on ${user?.chainId}. Please switch to ${ERC20_CONTRACT_CHAINID}`
      );
    }

    console.log("debug - user", user?.chainId);

    const tokenContract = new Contract(
      ERC20_CONTRACT_ADDRESS,
      ERC20_CONTRACT_ABI,
      user?.signer
    );

    await tokenContract.mint(to, amount);
  };

  return { mint };
};
