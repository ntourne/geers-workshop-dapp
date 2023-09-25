import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const LayoutMain: FC<Props> = ({ children }) => {
  return <div className="flex flex-col spacing-4">{children}</div>;
};

export default LayoutMain;
