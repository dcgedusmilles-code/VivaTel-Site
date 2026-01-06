import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page of the Vivatel Website.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
<Breadcrumb
  pageName="Quem Somos"
  description="Atuamos no desenvolvimento de soluções tecnológicas que impulsionam a eficiência, a inovação e a transformação digital de empresas e instituições."
/>

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
