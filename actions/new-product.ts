"use server";

import { prismaClient } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

interface createCategoryProps {
  data: {
    imageUrl: string;
    name: string;
    // slug: string;
    basePrice: number;
    description: string;
    discountPercentage: number;
    category: string;
  };
}

export const createProduct = async ({ data }: createCategoryProps) => {
  //   if (!data.imageUrl || !data.name || !data.slug) {
  //     return null;
  //   }

  var slugify = require('slugify')


  await prismaClient.product.create({
    data: {
      imageUrl: data.imageUrl,
      name: data.name,
      slug: slugify(data.name),
      id: uuidv4(),
      basePrice: data.basePrice,
      description: data.description,
      discountPercentage: data.discountPercentage,
      categoryId: data.category,
    },
  });
};
