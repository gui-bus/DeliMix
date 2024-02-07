"use server";

import { prismaClient } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

interface createCategoryProps {
  data: {
    imageUrl: string;
    name: string;
    slug: string;
  };
}

export const createCategory = async ({ data }: createCategoryProps) => {
  if (!data.imageUrl || !data.name || !data.slug) {
    return null;
  }
  
  await prismaClient.category.create({
    data: {
      imageUrl: data.imageUrl,
      name: data.name,
      slug: data.slug,
      id: uuidv4(),
    },
  });
};
