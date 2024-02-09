import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MdMenuBook } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

const products = [
  {
    href: "https://img.freepik.com/fotos-gratis/um-hamburguer-com-um-ovo-nele_24640-82013.jpg?w=900&t=st=1690585200~exp=1690585800~hmac=0cd3639fb1be7d58299a50da69e498d2e88c7ea32400eab8c0ef651568f618fd",
  },
  {
    href: "https://img.freepik.com/fotos-premium/pizza-italiana-fresca-com-salame-salsicha-queijo-e-cebola-na-mesa-de-madeira-decorada-com-ingredientes-foto-do-menu_201836-509.jpg",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/arranjo-de-cachorros-quentes-e-molhos-de-angulo-alto_23-2148768167.jpg?w=740&t=st=1690595510~exp=1690596110~hmac=42a8a6385686be5ea2c4d5fff43d247062423f35cd6f04d9e4ecfaf4ec278458",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/tacos-mexicanos-com-carne-em-molho-de-tomate-e-salsa_2829-14218.jpg?w=740&t=st=1690657132~exp=1690657732~hmac=7d23b4933cc1958ed707b70ed2622e1903fa8b501d23d0926ea04d0f3f00cad2",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/quesadilla-mexicana-com-frango-milho-pimentao-e-salsa_2829-19734.jpg?w=740&t=st=1690657583~exp=1690658183~hmac=d37dc79a414aa211d2b88375bacc63fe5a610419a49ea6be222684123fe0cb2e",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/nacho-mexicano-chips-e-molho-de-salsa-na-tigela_2829-14457.jpg?w=740&t=st=1690657390~exp=1690657990~hmac=38c10d60f0652de4098d4b7f728726162a169721e78ab2db4d3bc10366760af1",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/batatas-fritas-caseiras-assadas-com-maionese-molho-de-tomate-e-alecrim-na-placa-de-madeira-saborosas-batatas-fritas-na-tabua-em-saco-de-papel-pardo-no-fundo-da-mesa-de-pedra-preta-alimentos-pouco-saudaveis_1150-41840.jpg?w=740&t=st=1690660178~exp=1690660778~hmac=35ea7d5478961687bbfeadc4db8a9478e240a2943ae9bbf76af3879719778fcb",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/salada-de-tomate-pepino-cebola-roxa-e-folhas-de-alface-menu-de-vitamina-verao-saudavel-comida-vegetal-vegana-mesa-de-jantar-vegetariana_2829-6473.jpg?w=740&t=st=1690660613~exp=1690661213~hmac=068a1791980de47db9846ba5f9b607b4d5e95b7786e38101ae1761ff0a497094",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/bebida-deliciosa-com-folhas-de-hortela_23-2148751852.jpg?w=740&t=st=1690664169~exp=1690664769~hmac=19e10aa9da6d1c245a40140576bb302b1a5a6bc0a4784f8994847a7f613e7ddd",
  },
  {
    href: "https://img.freepik.com/fotos-gratis/um-copo-de-coquetel-com-cubos-de-gelo-decorado-com-frutas-e-limao-secos_141793-1983.jpg?w=740&t=st=1690663242~exp=1690663842~hmac=b8ed631ddf77a7626d3ee3fa4b46acb853837f7ae2de041a244a63dde2104712",
  },
];

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 px-5">
      <div className="flex flex-col items-center justify-center gap-2 p-5">
        <h1 className="text-center text-xl font-black uppercase italic md:text-3xl">
          Explore uma explosão de sabores em cada mordida
        </h1>
        <p className="text-sm font-light dark:text-white/70 md:text-base">
          Onde a diversidade é a estrela do nosso cardápio
        </p>
      </div>

      <Carousel className="mx-auto w-full max-w-7xl">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              key={product.href}
            >
              <Image
                src={product.href}
                alt="DeliMix"
                width={0}
                height={0}
                className="h-60 w-full select-none rounded-2xl object-cover"
                sizes="100vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden lg:block">
          <CarouselNext />
          <CarouselPrevious />
        </div>
      </Carousel>

      <Separator className="my-5"/>

      <div className="flex flex-col-reverse items-center justify-between md:flex-row gap-5">
        <Image
          src="/About.png"
          alt="Sobre a DeliMix"
          width={0}
          height={0}
          className="h-auto w-full object-cover"
          sizes="100vw"
          priority
          draggable="false"
        />

        <div className="flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <span className="font-light text-primary">SOBRE</span>
          <h2 className="text-2xl font-bold">O Que é a DeliMix?</h2>

          <div className="mt-5 flex flex-col gap-3">
            <p className="font-light text-white/70">
              Bem-vindo à DeliMix, onde a gastronomia é a nossa paixão. Somos
              uma lanchonete gourmet delivery comprometida em criar experiências
              culinárias excepcionais e sem igual. Com nossos lanches saborosos,
              pizzas artesanais, culinária japonesa autêntica, drinks
              refrescantes e muitos outros pratos, oferecemos uma jornada
              culinária incrível.
            </p>

            <p className="font-bold text-xl">
              Venha desfrutar de uma jornada inesquecível na DeliMix!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
