import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const pizzas = [
  {
    href: "/pizza01.png",
  },
  {
    href: "/pizza02.png",
  },
  {
    href: "/pizza03.png",
  },
  {
    href: "/pizza04.png",
  },
  {
    href: "/pizza05.png",
  },
  {
    href: "/pizza06.png",
  },
  {
    href: "/pizza07.png",
  },
  {
    href: "/pizza08.png",
  },
];

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-2 p-5">
        <h1 className="text-center text-xl font-bold uppercase italic md:text-3xl">
          Explore uma explosão de sabores em cada mordida
        </h1>
        <p className="text-sm font-light dark:text-white/70 md:text-base">
          Onde a diversidade é a estrela do nosso cardápio
        </p>
      </div>

      <Carousel className="mx-auto w-full max-w-7xl px-5">
        <CarouselContent>
          {pizzas.map((pizza) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
              key={pizza.href}
            >
              <Image
                src={pizza.href}
                alt="DeliMix Pizza"
                width={0}
                height={0}
                className="mb-5 h-auto w-full object-cover select-none"
                sizes="100vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
};

export default AboutSection;
