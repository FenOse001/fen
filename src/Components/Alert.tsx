import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MyComponents = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default MyComponents;
