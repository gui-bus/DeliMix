"use client";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useTheme } from "next-themes";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "./ui/separator";

const ProductItem = ({ product }: { product: Product }) => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Card className="relative w-full rounded-2xl border-none bg-white">
        <CardContent className="px-0">
          <div className="p-5">
            <Image
              src={product.imageUrl}
              alt={product.name}
              sizes="100vw"
              height={0}
              width={0}
              className="h-56 w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 text-black">
            <h2 className="font-medium lg:text-xl">{product.name}</h2>
            <p className="font-light my-3">
              {Number(product.basePrice).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="mb-5 text-center text-sm font-light text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="px-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="w-full">
                  Ver detalhes
                </Button>
              </DialogTrigger>
              <DialogContent className="border-none">
                <DialogHeader>
                  <DialogTitle className="text-xl">{product.name}</DialogTitle>
                  <DialogDescription>
                    <Separator className="mb-5 mt-3" />
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      sizes="100vw"
                      height={0}
                      width={0}
                      className="h-full max-h-56 w-full rounded-2xl object-cover"
                    />

                    <p className="mt-5 text-base font-light text-black dark:text-white">
                      {product.description}
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter></DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductItem;
