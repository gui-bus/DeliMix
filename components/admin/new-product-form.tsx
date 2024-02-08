"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineAddTask } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/actions/categories";
import { Category } from "@prisma/client";
import { createProduct } from "@/actions/new-product";
import toast from "react-hot-toast";

const newProductSchema = z.object({
  name: z
    .string({ required_error: "Campo obrigatório!" })
    .trim()
    .min(1, "Campo obrigatório!"),
  imageUrl: z
    .string({ required_error: "Campo obrigatório!" })
    .trim()
    .min(1, "Campo obrigatório!"),
  category: z.string({ required_error: "Campo obrigatório!" }),
  basePrice: z
    .string({
      required_error: "Campo obrigatório!",
    })
    .refine((value) => /^[0-9]+([,.][0-9]+)?$/.test(value), {
      message: "Deve ser um número ou número decimal",
    }),
  discountPercentage: z
    .string({
      required_error: "Campo obrigatório!",
    })
    .refine((value) => /^[0-9]+([,.][0-9]+)?$/.test(value), {
      message: "Deve ser um número ou número decimal",
    }),
  description: z
    .string({ required_error: "Campo obrigatório!" })
    .trim()
    .min(1, "Campo obrigatório!"),
});

const NewProductForm = () => {
  const [categorySelected, setCategorySelected] = useState<number | string>("");
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasData = await categories();
        setCategoriesList(categoriasData);
      } catch (error) {
        console.error("Erro ao obter categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
  });

  function handleChangeCategory(value: string) {
    setCategorySelected(value);
  }

  const handleSubmit = async (data: z.infer<typeof newProductSchema>) => {
    try {
      const productData = {
        ...data,
        basePrice: parseFloat(data.basePrice.replace(",", ".")),
        discountPercentage: parseFloat(
          data.discountPercentage.replace(",", "."),
        ),
      };

      await createProduct({ data: productData });

      form.setValue("name", "");
      form.setValue("imageUrl", "");
      form.setValue("category", "");
      form.setValue("basePrice", "");
      form.setValue("discountPercentage", "");
      form.setValue("description", "");

      toast.success("Produto criado com sucesso!", {
        style: {
          fontSize: "12px",
        },
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao criar o produto!", {
        style: {
          fontSize: "12px",
        },
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex items-center gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome do produto..."
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Descrição do produto</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira a descrição do produto..."
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>URL da imagem</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira a URL da imagem do produto..."
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-5">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                      {...field}
                      onChange={(e) => {
                        handleChangeCategory(e.target.value);
                        field.onChange(e);
                      }}
                    >
                      <option value="default" className="hidden">
                        Selecione a categoria do produto...
                      </option>
                      {categoriesList.map((category) => (
                        <option
                          className="text-black"
                          key={category.id}
                          value={category.id}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center gap-5">
            <FormField
              control={form.control}
              name="basePrice"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira o valor do produto..."
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discountPercentage"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Desconto (%)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira a quantidade de desconto..."
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />
          </div>

          <Button
            variant={"default"}
            type="submit"
            className="w-full rounded-xl"
          >
            Cadastrar novo produto
            <MdOutlineAddTask size={25} className="ml-2 text-white" />
          </Button>
          <Button variant={"link"} className="rounded-full text-black" asChild>
            <Link href="/admin/new/category">
              Quer cadastrar uma nova categoria? Clique aqui!
            </Link>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewProductForm;
