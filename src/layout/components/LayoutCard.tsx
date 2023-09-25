import { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
const LayoutCard: FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-purple-100 rounded-lg shadow-md p-6 min-w-[300px] mr-4">
      <h2 className="text-xl font-semibold pb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default LayoutCard;
