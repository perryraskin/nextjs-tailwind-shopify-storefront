import { NextPage } from "next";
import Container from "./Container";

interface Props {
  children: any;
  extend?: string;
}

const Section: NextPage<Props> = ({ children, extend }) => {
  return (
    <section className={`${extend}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
