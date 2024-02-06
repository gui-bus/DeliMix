import AboutSection from "@/sections/about-section";
import WelcomeSection from "@/sections/welcome-section";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Image
        src="/banner.png"
        alt="DeliMix Banner"
        width={0}
        height={0}
        className="h-auto w-full object-cover"
        sizes="100vw"
        priority
        draggable="false"
      />
      <div className="md:hidden">
        <WelcomeSection />
      </div>
      <AboutSection />
      <div className="hidden md:block">
        <WelcomeSection />
      </div>
    </section>
  );
}
