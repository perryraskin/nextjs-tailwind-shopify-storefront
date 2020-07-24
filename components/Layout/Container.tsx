import { NextPage } from "next";

interface Props {
  children: any;
}

const Container: NextPage<Props> = ({ children }) => {
  return <div className="max-w-4xl mx-auto px-6 md:px-8">{children}</div>;
};

export default Container;
