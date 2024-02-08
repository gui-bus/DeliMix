"use client";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import { Product } from "@prisma/client";
import Image from "next/image";

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
import { deleteProduct } from "@/actions/delete-product";
import { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { TbTrash } from "react-icons/tb";

interface ProductItemProps {
  product: Product;
  isAdminPage: boolean;
}

const ProductItem = ({ isAdminPage, product }: ProductItemProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [cancelIsLoading, setCancelIsLoading] = useState(false);

  const handleDeleteClick = async () => {
    try {
      setCancelIsLoading(true);
      await deleteProduct(product.id);
      setDialogIsOpen(false);
      toast.success("Produto removido com sucesso!");
    } catch (error) {
      return toast.error("Ocorreu um erro!");
    } finally {
      setCancelIsLoading(false);
    }
  };

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
            <p className="my-3 font-light">
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
            <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
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

                    {isAdminPage && (
                      <Button
                        onClick={handleDeleteClick}
                        disabled={cancelIsLoading}
                        className="mt-5 w-full"
                      >
                        {cancelIsLoading ? (
                          <span className="flex items-center gap-4">
                            <ClipLoader color="#fff" size={20} /> Removendo...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Remover produto do cardápio <TbTrash size={25}/>
                          </span>
                        )}
                      </Button>
                    )}
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
