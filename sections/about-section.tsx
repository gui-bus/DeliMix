import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <Image
        src="/banner.png"
        alt="DeliMix Banner"
        width={0}
        height={0}
        className="mb-5 h-auto w-full object-cover"
        sizes="100vw"
        priority
      />
    </section>
  );
};

export default AboutSection;
