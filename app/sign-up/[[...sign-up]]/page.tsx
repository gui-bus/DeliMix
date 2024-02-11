import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center pb-10 bg-[url('/loading.png')] bg-cover bg-center bg-no-repeat">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="DeliMix"
          height={0}
          width={0}
          sizes="100vw"
          priority
          className="h-auto w-44 object-contain"
        />
      </Link>

      <SignUp />
    </div>
  );
}
