import LayoutMain from "@/layout/components/LayoutMain";
import LayoutContainer from "@/layout/components/LayoutContainer";
import LayoutHeader from "@/layout/components/LayoutHeader";

function App() {
  return (
    <LayoutMain>
      <LayoutHeader />

      <LayoutContainer>
        <div>Content here</div>
      </LayoutContainer>
    </LayoutMain>
  );
}

export default App;
