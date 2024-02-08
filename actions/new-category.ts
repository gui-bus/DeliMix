"use server";

import { prismaClient } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

interface createCategoryProps {
  data: {
    imageUrl: string;
    name: string;
  };
}

export const createCategory = async ({ data }: createCategoryProps) => {
  if (!data.imageUrl || !data.name) {
    return null;
  }

  var slugify = require('slugify')
  
  await prismaClient.category.create({
    data: {
      imageUrl: data.imageUrl,
      name: data.name,
      slug: slugify(data.name),
      id: uuidv4(),
    },
  });
};
