"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiRefreshCw } from "react-icons/fi";
import toast from "react-hot-toast";
import { updateProduct } from "@/actions/update-product";
import { Product } from "@prisma/client";
import { useState } from "react";
import { Tags, tagTranslation } from "@/helpers/tag-translation";

const newProductSchema = z.object({
  name: z
    .string({ required_error: "Campo obrigatório!" })
    .trim()
    .min(1, "Campo obrigatório!"),
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
  specialTag: z
    .string()
    .refine((val) => Object.values(Tags).includes(val as Tags)),
});

interface UpdateProductFormProps {
  product: Product;
  productId: string;
}

const UpdateProductForm = ({ productId, product }: UpdateProductFormProps) => {
  const [tagSelected, setTagSelected] = useState<string>("");

  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      basePrice: String(product.basePrice),
      discountPercentage: String(product.discountPercentage),
      specialTag: product.specialTag,
    },
  });

  const handleSubmit = async (data: z.infer<typeof newProductSchema>) => {
    try {
      const productData = {
        ...data,
        basePrice: parseFloat(data.basePrice.replace(",", ".")),
        discountPercentage: parseFloat(
          data.discountPercentage.replace(",", "."),
        ),
        specialTag: data.specialTag as Tags,
      };

      await updateProduct({ data: productData, productId });

      toast.success("Produto atualizado com sucesso!", {
        style: {
          fontSize: "12px",
        },
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao atualizar o produto!", {
        style: {
          fontSize: "12px",
        },
      });
    }
  };

  function handleChangeTag(value: string) {
    setTagSelected(value);
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-4"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col items-center gap-5">
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

          <FormField
            control={form.control}
            name="specialTag"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Classificação</FormLabel>

                <FormControl>
                  <select
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                    {...field}
                    onChange={(e) => {
                      handleChangeTag(e.target.value);
                      field.onChange(e);
                    }}
                  >
                    <option
                      value="default"
                      className="hidden text-muted-foreground"
                    >
                      Selecione a tag do produto...
                    </option>
                    {Object.values(Tags).map((tag) => (
                      <option
                        className="text-black dark:text-white"
                        key={tag}
                        value={tag}
                      >
                        {tagTranslation(tag)}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormDescription className="text-xs">
                  Selecione a opção &apos;Vazio&apos; caso não queira nenhuma
                  classificação adicional.{" "}
                </FormDescription>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

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
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row">
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

        <Button variant={"default"} type="submit" className="w-full rounded-xl">
          Atualizar informações
          <FiRefreshCw size={25} className="ml-2 text-white" />
        </Button>
      </form>
    </Form>
  );
};

export default UpdateProductForm;
