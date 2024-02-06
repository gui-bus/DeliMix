import Search from "@/components/common/search";
import WelcomeMessage from "@/components/common/welcome-message";

const WelcomeSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col p-5 gap-5">
      <WelcomeMessage />
      <Search />
    </section>
  );
};

export default WelcomeSection;
