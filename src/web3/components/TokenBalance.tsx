import { useEffect, useState } from "react";
import LayoutCard from "@/layout/components/LayoutCard";
import { useWeb3 } from "@/web3/context/Web3Context";
import { useTokenContract } from "@/web3/hooks/useTokenContract";

const TokenBalance = () => {
  const { user } = useWeb3();
  const [to, setTo] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { getName } = useTokenContract();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    getName().then((name) => setName(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <LayoutCard title="Token Balance">
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
              {user ? "Get Balance" : "Connect wallet to get balance"}
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col spacing-8">
        <div className="flex text-xl font-regular pt-4">Name: {name}</div>
        <div className="flex text-xl font-regular">Decimals: [decimals]</div>
        <div className="flex text-xl font-regular">
          Balance: [symbol] [amount]
        </div>
      </div>
    </LayoutCard>
  );
};

export default TokenBalance;
