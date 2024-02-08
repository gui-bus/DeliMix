"use server";

import { prismaClient } from "@/lib/prisma";
import { Category } from "@prisma/client";

export const categories = async (): Promise<Category[]> => {
  const categoriasData = await prismaClient.category.findMany({});
  return categoriasData;
};
