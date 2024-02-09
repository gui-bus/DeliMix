"use server";

import { prismaClient } from "@/lib/prisma";
import { Tags } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

interface createCategoryProps {
  data: {
    imageUrl: string;
    name: string;
    basePrice: number;
    description: string;
    discountPercentage: number;
    category: string;
    specialTag: Tags;
  };
}

export const createProduct = async ({ data }: createCategoryProps) => {
  var slugify = require("slugify");

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
      specialTag: data.specialTag,
    },
  });
};
