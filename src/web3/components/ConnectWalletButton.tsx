import { useWeb3 } from "@/web3/context/Web3Context";

const ConnectWalletButton = () => {
  const { connect } = useWeb3();

  return (
    <button
      className="px-8 py-2  bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus:ring focus:border-purple-600"
      onClick={connect}
    >
      Connect wallet
    </button>
  );
};

export default ConnectWalletButton;
