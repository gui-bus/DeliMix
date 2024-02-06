"use client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useUser } from "@clerk/nextjs";

const WelcomeMessage = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex flex-col dark:text-white">
      {isSignedIn ? (
        <h2 className="text-xl">
          Olá, <span className="font-bold">{user?.fullName}!</span>
        </h2>
      ) : (
        <h2 className="text-xl">
          Olá, <span className="font-bold">faça seu login!</span>
        </h2>
      )}
      <p className="text-sm font-light dark:text-white/70">
        {`Hoje é ${format(new Date(), "EEEE', dia' dd 'de' MMMM", {
          locale: ptBR,
        })}`}
        .
      </p>
    </div>
  );
};

export default WelcomeMessage;
