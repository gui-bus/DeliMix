"use server";

import { prismaClient } from "@/lib/prisma";
import { Product } from "@prisma/client";

export const products = async (): Promise<Product[]> => {
  const productsData = await prismaClient.product.findMany({
    orderBy: {
      categoryId: "asc",
    },
  });
  return productsData;
};
