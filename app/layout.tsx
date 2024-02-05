import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeliMix | Pizzas Artesanais, Sabor Gourmet Inigualável!",
  description:
    "Descubra a excelência da DeliMix, sua pizzaria gourmet favorita. Peça nossas deliciosas pizzas artesanais e experimente uma explosão de sabores únicos, preparados com ingredientes frescos e de alta qualidade. Desfrute de uma experiência gastronômica excepcional!",
  keywords: [
    "pizzaria gourmet",
    "pizza artesanal",
    "entrega de pizza",
    "sabores únicos",
    "ingredientes frescos",
    "excelência gastronômica",
    "Delimix",
    "comida de qualidade",
    "delivery de pizza",
    "menu exclusivo",
    "pizzas especiais",
    "sabor inigualável",
    "cardápio gourmet",
    "cozinha artística",
    "receitas premium",
    "experiência culinária",
    "sabor autêntico",
    "qualidade premium",
    "forno a lenha",
    "menu variado",
    "gastronomia refinada",
    "delícias da culinária",
    "harmonia de sabores",
    "frescor dos ingredientes",
    "pizzaiolos especializados",
    "sabor extraordinário",
    "gourmet delivery",
    "pizzas exclusivas",
    "toque artesanal",
    "prazer gastronômico",
    "pizzas gourmet em casa",
    "pedidos online",
    "delivery premium",
    "satisfação garantida",
    "menu sofisticado",
    "experiência única",
    "sabores premium",
    "pizza feita com amor",
    "excelência em cada fatia",
    "qualidade em cada mordida",
    "frescor e sabor",
    "pizzas de alta categoria",
    "ingredientes selecionados",
    "delícias preparadas com carinho",
    "arte na culinária",
    "degustação refinada",
    "pizzaria de luxo",
    "sabores que encantam",
    "momentos gourmet",
    "prazer em cada pedaço",
    "tradição e inovação",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
