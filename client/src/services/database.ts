import Gibson from "../assets/Gibson_logo.svg";
import Behringer from "../assets/Behringer-Logo.svg";
import Fender from "../assets/Fender_guitars_logo.svg";
import Zildjian from "../assets/Zildjian_Logo.svg";
import Shure from "../assets/Shure_Logo.svg";
import Epiphone from "../assets/Epiphone-Logo-1024x640.svg";
import {nanoid} from "nanoid";

import Quality from "../assets/Best-Quality-Guarantee.svg"
import Delivery from "../assets/Fast-Delivery.svg"
import Return from "../assets/Free-Return.svg"
import EasyPay from "../assets/Easy-Payment.svg"

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
    id: nanoid()
  },
  {
    logo: Behringer,
    name: "behringer",
    id: nanoid()
  },
  {
    logo: Gibson,
    name: "gibson",
    id: nanoid()
  },
  {
    logo: Fender,
    name: "fender",
    id: nanoid()
  },
  {
    logo: Epiphone,
    name: "epiphone",
    id: nanoid()
  },
  {
    logo: Zildjian,
    name: "zildjian",
    id: nanoid()
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
    image:Quality,
    title:"Garantia de qualidade",
    description:"Os produtos aqui passam por um controle de qualidade profissional",
    id: nanoid()
  },
  {
    image:EasyPay,
    title:"Pagamento facilitado",
    description:"Várias opções de pagamento que facilitam sua vida",
    id: nanoid()
  },
  {
    image:Delivery,
    title:"Entrega no mesmo dia",
    description:"Toda compra feita até as 15:00 de um dia útil são entregues até 23:59",
    id: nanoid()
  },
  {
    image:Return,
    title:"Direito de arrependimento",
    description:"Se você se arrepender em até 15 dias garantimos o dinheiro de volta",
    id: nanoid()
  },
]

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
    url: "wishlist",
    text: "WISHLIST",
  },
  {
    url: "anuncios",
    text: "ANÚNCIOS",
  },
];

export const corporationOptions = ["ARQUIVOS", "MÍDIA", "SOBRE NÓS"];
