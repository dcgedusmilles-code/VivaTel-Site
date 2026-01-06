import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
<Breadcrumb
  pageName="Contacte-nos"
  description="Estamos prontos para ouvir, colaborar e construir soluções tecnológicas à medida das suas necessidades. Fale connosco e dê o próximo passo rumo à transformação digital."
/>


      <Contact />
    </>
  );
};

export default ContactPage;
