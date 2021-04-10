import Header from "../Header";
import Categories from "../Categories";
import PageTitle from "../PageTitle";

import { Section } from "./styles";
import Footer from "../Footer";
import Whatsapp from "../Whatsapp";

export default function Layout({
  noCategories = false,
  children,
  title = "",
  noFooter = false,
}) {
  return (
    <div>
      <Header />
      <Section>
        {!noCategories && <Categories />}
        {title && <PageTitle title={title} />}
        {children}
      </Section>
      <Whatsapp />
      {!noFooter && <Footer />}
    </div>
  );
}
