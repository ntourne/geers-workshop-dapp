import LayoutCard from "@/layout/components/LayoutCard";

const TokenBalance = () => {
  return (
    <LayoutCard title="Token Balance">
      <div className="flex flex-col spacing-8">
        <div className="flex text-xl font-regular pt-4">Name: [name]</div>
        <div className="flex text-xl font-regular">Name: [decimals]</div>
        <div className="flex text-xl font-regular">
          Balance: [symbol] [amount]
        </div>
      </div>
    </LayoutCard>
  );
};

export default TokenBalance;
