import LayoutMain from "@/layout/components/LayoutMain";
import LayoutContainer from "@/layout/components/LayoutContainer";
import LayoutHeader from "@/layout/components/LayoutHeader";
import { Web3Provider } from "@/web3/context/Web3Context";
import TokenMinter from "@/web3/components/TokenMinter";
import TokenBalance from "@/web3/components/TokenBalance";

function App() {
  return (
    <Web3Provider>
      <LayoutMain>
        <LayoutHeader />

        <LayoutContainer>
          <TokenMinter />
          <TokenBalance />
        </LayoutContainer>
      </LayoutMain>
    </Web3Provider>
  );
}

export default App;
