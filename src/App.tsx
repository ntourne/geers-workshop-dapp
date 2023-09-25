import LayoutMain from "@/layout/components/LayoutMain";
import LayoutContainer from "@/layout/components/LayoutContainer";
import LayoutHeader from "@/layout/components/LayoutHeader";
import { Web3Provider } from "@/web3/context/Web3Context";

function App() {
  return (
    <Web3Provider>
      <LayoutMain>
        <LayoutHeader />

        <LayoutContainer>
          <div>Content here</div>
        </LayoutContainer>
      </LayoutMain>
    </Web3Provider>
  );
}

export default App;
