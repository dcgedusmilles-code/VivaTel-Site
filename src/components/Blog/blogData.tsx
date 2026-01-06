import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Componentes UI essenciais para sites modernos",
    paragraph:
      "Descubra os melhores componentes de interface que tornam seu site mais intuitivo, responsivo e visualmente atraente para seus usuários.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["UI", "Design", "Web"],
    publishDate: "Jan 2025",
  },
  {
    id: 2,
    title: "9 estratégias simples para melhorar suas habilidades de design",
    paragraph:
      "Aprenda técnicas práticas para elevar sua criatividade e produtividade no design, garantindo resultados mais impactantes e eficientes.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Design", "Dicas", "Criatividade"],
    publishDate: "Feb 2025",
  },
  {
    id: 3,
    title: "Dicas para aumentar sua velocidade de programação",
    paragraph:
      "Otimize seu fluxo de desenvolvimento com métodos comprovados para codificar mais rápido sem perder qualidade e eficiência.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Full Stack Developer",
    },
    tags: ["Programação", "Produtividade", "Coding"],
    publishDate: "Mar 2025",
  },
];

export default blogData;
