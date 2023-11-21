import Gibson from "../assets/Gibson_logo.svg";
import Behringer from "../assets/Behringer-Logo.svg";
import Fender from "../assets/Fender_guitars_logo.svg";
import Zildjian from "../assets/Zildjian_Logo.svg";
import Shure from "../assets/Shure_Logo.svg";
import Epiphone from "../assets/Epiphone-Logo-1024x640.svg";
import { nanoid } from "nanoid";

import Quality from "../assets/Best-Quality-Guarantee.svg";
import Delivery from "../assets/Fast-Delivery.svg";
import Return from "../assets/Free-Return.svg";
import EasyPay from "../assets/Easy-Payment.svg";
import { IProductContext } from "../types/product";

export const categories = [
  {
    url: "audio",
    text: "ÁUDIO",
  },
  {
    url: "cordas",
    text: "CORDAS",
  },
  {
    url: "persussao",
    text: "PERCUSSÃO",
  },
  {
    url: "sopro",
    text: "SOPRO",
  },
  {
    url: "teclas",
    text: "TECLAS",
  },
];
export const brands = ["gibson", "epiphone", "behringer", "fender", "todas"];

export const brandsLogo = [
  {
    logo: Shure,
    name: "shure",
    id: nanoid(),
  },
  {
    logo: Behringer,
    name: "behringer",
    id: nanoid(),
  },
  {
    logo: Gibson,
    name: "gibson",
    id: nanoid(),
  },
  {
    logo: Fender,
    name: "fender",
    id: nanoid(),
  },
  {
    logo: Epiphone,
    name: "epiphone",
    id: nanoid(),
  },
  {
    logo: Zildjian,
    name: "zildjian",
    id: nanoid(),
  },
];

/*
const IconsArray = [
  {
    wishList: {
      icon: <Heart />,
      destination: "/wishlist",
    },
  },
  {
    profile: {
      icon: <ProfileIcon src={Profile} alt="User Button" />,
      destination: "/profile",
    },
  },
  {
    cart: {
      icon: <ProfileIcon $bgColor src={Cart} alt="Cart Button" />,
      destination: "/cart",
    },
  },
];
*/

export const HomeIllustrations = [
  {
    image: Quality,
    title: "Garantia de qualidade",
    description:
      "Os produtos aqui passam por um controle de qualidade profissional",
    id: nanoid(),
  },
  {
    image: EasyPay,
    title: "Pagamento facilitado",
    description: "Várias opções de pagamento que facilitam sua vida",
    id: nanoid(),
  },
  {
    image: Delivery,
    title: "Entrega no mesmo dia",
    description:
      "Toda compra feita até as 15:00 de um dia útil são entregues até 23:59",
    id: nanoid(),
  },
  {
    image: Return,
    title: "Direito de arrependimento",
    description:
      "Se você se arrepender em até 15 dias garantimos o dinheiro de volta",
    id: nanoid(),
  },
];

export const helpOptions = [
  "DEVOLUÇÃO E RECLAMAÇÃO",
  "ENTREGA E PAGAMENTO",
  "PERGUNTAS FREQUENTES",
  "CONTATO",
];

export const personalItems = [
  {
    url: "addresses",
    text: "ENDEREÇOS",
  },
  {
    url: "payments",
    text: "FORMAS DE PAGAMENTO",
  },
];
export const buyingItems = [
  {
    url: "orders",
    text: "PEDIDOS DE COMPRA",
  },
  {
    url: "anuncios",
    text: "ANÚNCIOS",
  },
];

export const corporationOptions = ["ARQUIVOS", "MÍDIA", "SOBRE NÓS"];

export const mockProducts: IProductContext[] = [
  {
    id: 1,
    brand: "Fender",
    name: "Amplificador Fender Frontman 212r",
    description:
      "Tonalidades das cores e detalhes podem variar levemente conforme iluminação, tal como descrições técnicas, embalagens e informações estão sujeitas à alteração sem aviso prévio da fabricante.",
    price: 3990,
    image:
      "https://guitarspace.org/wp-content/uploads/2021/12/fender-frotman-212r-review-720x540.jpg",
    stock: 8,
    condition: "new",
    ownerId: 1,
  },
  {
    id: 2,
    brand: "Gibson",
    name: "Sanfona 80 Baixos Michael Acm8007n Preto Sólido Com Bag",
    description:
      "ACORDEON CADENZA Características Gerais - Modelo: Acordeon Cadenza CD120/41 RD - Acabamento: Alto Brilho - Cor: Red (RD) - Palhetas: Confeccionadas em aço - Fole: Revestido em linho e couro sintético - Válvula: Em couro natural - Limitadores de válvula: Em cobre - Corpo das Sapatas: Em metal - Cantoneiras externas do Fole: Em metal - Estrutura: Confeccionada em madeira - Acompanha: Case e Correias.",
    price: 7510,
    image:
      "https://cdnbatera.bateraclube.com.br/files/122/PROD_678668780689.jpg",
    stock: 12,
    condition: "used",
    ownerId: 1,
  },
  {
    id: 3,
    brand: "Gretsch",
    name: "Guitarra elétrica Gretsch Electromatic G5422TG",
    description:
      "Desfrute com a guitarra Gretsch Electromatic da conexão com a música. Com este instrumento você vai descobrir novos acordes, cantar suas canções e curtirá da vida musical. Explore, amplifique sua criatividade e desenvolva a sua paixão.",
    price: 14000,
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/59/590980/1200/preview.jpg",
    stock: 2,
    condition: "new",
    ownerId: 1,
  },
  {
    id: 4,
    brand: "behringer",
    name: "Guitarra elétrica Gretsch Electromatic G5422TG",
    description:
      "Desfrute com a guitarra Gretsch Electromatic da conexão com a música. Com este instrumento você vai descobrir novos acordes, cantar suas canções e curtirá da vida musical. Explore, amplifique sua criatividade e desenvolva a sua paixão.",
    price: 3510,
    image:
      "https://guitarspace.org/wp-content/uploads/2021/12/fender-frotman-212r-review-720x540.jpg",
    stock: 1,
    condition: "new",
    ownerId: 1,
  },
];
