"use server";

import { prismaClient } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface UpdateProductProps {
  productId: string;
  data: {
    name: string;
    basePrice: number;
    discountPercentage: number;
    description: string;
  };
}

export const updateProduct = async ({ data, productId }: UpdateProductProps) => {
  try {
    const existingProduct = await prismaClient.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!existingProduct) {
      throw new Error("Produto não encontrado");
    }

    await prismaClient.product.update({
      where: {
        id: productId,
      },
      data: {
        name: data.name,
        description: data.description,
        basePrice: data.basePrice,
        discountPercentage: data.discountPercentage,
      },
    });

    revalidatePath("/admin/list/products");
    revalidatePath("/");
  } catch (error) {
    console.error("Erro ao atualizar o produto:", error);
    throw error;
  }
};
