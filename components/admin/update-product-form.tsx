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
import { FiRefreshCw } from "react-icons/fi";
import toast from "react-hot-toast";
import { updateProduct } from "@/actions/update-product";
import { Product } from "@prisma/client";

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
});

interface UpdateProductFormProps {
  product: Product;
  productId: string;
}

const UpdateProductForm = ({ productId, product }: UpdateProductFormProps) => {
  const form = useForm<z.infer<typeof newProductSchema>>({
    resolver: zodResolver(newProductSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      basePrice: String(product.basePrice),
      discountPercentage: String(product.discountPercentage),
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
