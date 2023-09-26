import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Provider, Signer } from "ethers";
import {
  getAccounts,
  getBalance,
  getChainId,
  getProviderAndSigner,
} from "@/web3/helpers/web3";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum: any;
  }
}

type Web3ProviderProps = {
  children: ReactNode;
};

export type User = {
  address: string;
  balance: string;
  chainId: string;
  provider: Provider;
  signer: Signer;
};

type Web3ContextValues = {
  connect: () => void;
  disconnect: () => void;
  user: User | undefined;
};

const Web3Context = createContext<Web3ContextValues | undefined>(undefined);

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const connect = async () => {
    if (window.ethereum) {
      const accounts = await getAccounts();

      const address = accounts[0];

      const balance = await getBalance(address);

      const chainId = await getChainId();

      const { provider, signer } = await getProviderAndSigner();

      setUser({
        address,
        balance,
        chainId,
        provider,
        signer,
      });
    }
  };

  const disconnect = async () => {
    setUser(undefined);
  };

  const handleAccountsChanged = async (accounts: string[]) => {
    if (accounts.length === 0) {
      setUser(undefined);
    } else {
      // TODO: Implement this
    }
  };

  const handleChainsChanged = () => {
    // Recommended to reload page when disconnect wallet
    window.location.reload();
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", handleChainsChanged);

      window.ethereum.on("accountsChanged", handleAccountsChanged);

      window.ethereum.on("disconnect", () => {
        disconnect();
      });
    }

    return () => {
      window?.ethereum?.removeListener(
        "accountsChanged",
        handleAccountsChanged
      );
      window?.ethereum?.removeListener("chainChanged", handleChainsChanged);
    };
  }, []);

  return (
    <Web3Context.Provider value={{ connect, disconnect, user }}>
      {children}
    </Web3Context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWeb3 = (): Web3ContextValues => {
  const context = useContext(Web3Context);

  if (!context) throw new Error("Web3Context must be used within Web3Provider");

  return context;
};
