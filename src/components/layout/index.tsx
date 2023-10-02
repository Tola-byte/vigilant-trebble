import { Footer } from "../skeleton/footer";
import { Header } from "../skeleton/header";

type BaseLayoutProps = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
