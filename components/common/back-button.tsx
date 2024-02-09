"use client";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      size={"sm"}
      variant={"outline"}
      onClick={() => router.back()}
      className="absolute left-4 top-4 w-fit"
    >
      <ChevronLeftIcon size={20} className="mr-2" /> Voltar
    </Button>
  );
};

export default BackButton;
