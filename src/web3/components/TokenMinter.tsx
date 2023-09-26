import { useState } from "react";
import { useTokenContract } from "@/web3/hooks/useTokenContract";
import { useWeb3 } from "@/web3/context/Web3Context";
import LayoutCard from "@/layout/components/LayoutCard";

const TokenMinter = () => {
  const [to, setTo] = useState<string>("");

  const { user } = useWeb3();

  const { mint } = useTokenContract();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mint(to)
      .then((tx) => {
        console.log("debug - tx", tx);
      })
      .catch((err) => {
        console.log("debug - err", err);
      });
  };
  return (
    <LayoutCard title="Token Minter">
      <div className="container mx-auto mt-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="to"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              To
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-500 mb-4"
              placeholder="Ethereum address (0x...)"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <button
              type="submit"
              className={`px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus:ring focus:border-purple-600 
              ${!user ? "disabled:opacity-25" : ""}
              `}
              disabled={!user}
            >
              {user ? "Mint tokens" : "Connect wallet to mint tokens"}
            </button>
          </div>
        </form>
      </div>
    </LayoutCard>
  );
};
export default TokenMinter;
