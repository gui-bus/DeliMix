import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeliMix | Lanches, Pizzas e muito mais - Tudo em um só lugar!",
  description:
    "Descubra a excelência da DeliMix, sua lanchonete gourmet favorita. Peça nossos deliciosos pratos artesanais e experimente uma explosão de sabores únicos, preparados com ingredientes frescos e de alta qualidade. Desfrute de uma experiência gastronômica excepcional!",
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
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body
          className={`${montserrat.className} bg-[#F5F5F0] dark:bg-background`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex min-h-screen w-full flex-col">
              <div className="flex-grow">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
