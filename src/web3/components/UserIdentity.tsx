import { FC } from "react";
import { User } from "@/web3/context/Web3Context";

type Props = {
  user: User;
};
const UserIdentity: FC<Props> = ({ user }) => {
  const { address, balance, chainId } = user;
  return (
    <div className="flew items-center rounded-lg px-3 py-2.5 text-base text-gray-900 bg-purple-100 text-right">
      <div className="flex-1 font-semibold">{address}</div>
      <div className="flex-1 font-regular">Balance: ETH {balance}</div>
      <div className="flex-1 font-regular">Chain ID: {chainId}</div>
    </div>
  );
};

export default UserIdentity;
