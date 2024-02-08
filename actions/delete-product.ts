"use server";

import { prismaClient } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (productId: string) => {
  await prismaClient.product.delete({
    where: {
      id: productId,
    },
  });

  revalidatePath("/admin/list/products");
  revalidatePath("/");
};