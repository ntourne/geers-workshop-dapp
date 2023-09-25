import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const LayoutContainer: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto flex flex-row max-w-7xl spacing-4">{children}</div>
  );
};

export default LayoutContainer;
