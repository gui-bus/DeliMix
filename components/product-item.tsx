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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Separator } from "./ui/separator";
import { deleteProduct } from "@/actions/delete-product";
import { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { TbTrash } from "react-icons/tb";
import UpdateProductForm from "./admin/update-product-form";
import { ProductWithTotalPrice } from "@/helpers/product";
import { MdOutlineDiscount } from "react-icons/md";
import { Tags, tagTranslation } from "@/helpers/tag-translation";

interface ProductItemProps {
  product: ProductWithTotalPrice;
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
      <Card className="w-full rounded-2xl border-none bg-white dark:bg-neutral-800 select-none">
        <CardContent className="px-0">
          <div className="p-5">
            <div className="relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                sizes="100vw"
                height={0}
                width={0}
                className="h-56 w-full rounded-2xl object-cover"
                draggable={false}
              />

              {product.discountPercentage > 0 && (
                <p className="absolute left-0 top-0 rounded-br-2xl rounded-tl-2xl bg-primary px-4 py-1 text-xs font-light text-white">
                  Promoção -{" "}
                  <span className="font-bold">
                    {product.discountPercentage}% OFF
                  </span>
                </p>
              )}

              {product.specialTag !== 'EMPTY' && (
                <p className="absolute bottom-0 right-0 rounded-br-2xl rounded-tl-2xl px-4 py-1 text-xs font-medium bg-primary text-white text-center">
                  {tagTranslation(product.specialTag as Tags)}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center px-5 text-black dark:text-white">
            <h2 className="font-medium lg:text-xl">{product.name}</h2>
            <div className="flex items-center gap-2">
              <p
                className={`my-3 font-light ${product.discountPercentage > 0 && "line-through"}`}
              >
                {Number(product.basePrice).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              {product.discountPercentage > 0 && (
                <p className="my-3 font-light">
                  {Number(product.totalPrice).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              )}
            </div>
            <p className="mb-5 line-clamp-4 w-full max-w-[99%] text-center text-sm font-light text-muted-foreground dark:text-white/70">
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
                      <div className="mt-5 flex flex-col items-center gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="default" className="w-full">
                              Atualizar informações do produto
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="border-none">
                            <DialogHeader>
                              <DialogTitle className="text-xl">
                                Atualizar informações do produto
                              </DialogTitle>
                              <DialogDescription>
                                <Separator className="mb-5 mt-3" />

                                <UpdateProductForm
                                  product={product}
                                  productId={product.id}
                                />
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter></DialogFooter>
                          </DialogContent>
                        </Dialog>

                        <AlertDialog>
                          <AlertDialogTrigger className="w-full">
                            <Button
                              className="flex w-full items-center gap-2"
                              variant={"outline"}
                            >
                              Remover produto do cardápio <TbTrash size={25} />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Você tem certeza disso?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Essa ação não pode ser revertida e este produto
                                será excluido permanentemente do cardápio.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={handleDeleteClick}
                                disabled={cancelIsLoading}
                              >
                                {cancelIsLoading ? (
                                  <span className="flex items-center gap-4">
                                    <ClipLoader color="#fff" size={20} />{" "}
                                    Removendo...
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-2">
                                    Remover
                                    <TbTrash size={25} />
                                  </span>
                                )}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
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
