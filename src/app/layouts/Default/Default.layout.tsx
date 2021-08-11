import { Navbar } from "../../components/Navbar";
import * as DL from "./Default.layout.styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <DL.Wrapper>
      <DL.Header>header</DL.Header>
      <DL.Main>
        <DL.Navigation>
          <Navbar />
        </DL.Navigation>
        <DL.FeaturedContent>
          todo: featuredContent
          {props.children}
        </DL.FeaturedContent>
        <DL.Aside>aside</DL.Aside>
      </DL.Main>
    </DL.Wrapper>
  );
}

export default DefaultLayout;
