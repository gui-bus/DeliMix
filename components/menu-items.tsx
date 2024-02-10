import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { prismaClient } from "@/lib/prisma";
import ProductsSection from "@/sections/products-section";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const tel = 12981847553;
var text =
  "*Seja muito bem-vindo ao WhatsApp da DeliMix! Estamos aqui para atendê-lo com todo o prazer.*\n";
text +=
  "Para realizar seu pedido, precisamos de algumas informações. Caso tenha alguma dúvida, fique à vontade para perguntar!\n\n";
text += "*Seu nome:*\n";
text += "*O que você gostaria de pedir hoje?*\n";
text += "*Endereço de entrega e ponto de referência:*\n";
text +=
  "*Qual será a forma de pagamento. (Dinheiro, PIX, Crédito, Débito, VA/VR)*\n\n";

text += "*Obrigado por escolher a Delimix!*";

let encode = encodeURIComponent(text);
let URL = `https://wa.me/${tel}?text=${encode}`;

const MenuItems = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="my-8 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center px-5">
        <span className="font-light text-primary">CARDÁPIO</span>
        <h2 className="text-center text-2xl font-black uppercase italic">
          Explore nossa seleção de sabores únicos
        </h2>

        <p className="text-center text-sm font-light dark:text-white/70">
          Desde clássicos irresistíveis até novidades limitadas, temos algo para
          satisfazer todos os paladares
        </p>

        <Button variant={"outline"} asChild className="rounded-xl mt-5 w-full max-w-md mx-auto">
          <Link href={URL} target="_blank" className="flex items-center gap-2">
            Faça seu pedido <FaWhatsapp size={20} />
          </Link>
        </Button>
      </div>

      <Tabs
        defaultValue="Pizzas"
        className="flex w-full flex-col items-center justify-center"
      >
        <TabsList className="px-2">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.name}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.name}
            className="w-full"
          >
            <ProductsSection categoryName={category.name} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenuItems;
