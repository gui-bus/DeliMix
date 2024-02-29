import MenuItems from "@/components/menu-items";
import { Button } from "@/components/ui/button";
import AboutSection from "@/sections/about-section";
import WelcomeSection from "@/sections/welcome-section";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Home() {
  return (
    <section>
      <div className="relative">
        <Image
          src="/banner.png"
          alt="DeliMix Banner"
          width={0}
          height={0}
          className="mx-auto h-auto w-full object-cover 3xl:max-w-7xl 3xl:rounded-b-xl"
          sizes="100vw"
          priority
          draggable="false"
        />

        <div className="absolute bottom-3 right-3 hidden md:block">
          <div className="flex flex-col items-center justify-center gap-2">
            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"#"}>
                <FaInstagram size={20} />
              </Link>
            </Button>

            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"#"}>
                <FaXTwitter size={20} />
              </Link>
            </Button>

            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"#"}>
                <FaLinkedinIn size={20} />
              </Link>
            </Button>

            <Button size={"icon"} variant={"outline"} asChild>
              <Link href={"#"}>
                <FaWhatsapp size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <WelcomeSection />

        <AboutSection />

        <MenuItems />
      </div>
    </section>
  );
}
