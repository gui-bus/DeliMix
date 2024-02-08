"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { createCategory } from "@/actions/new-category";
import { MdOutlineAddTask } from "react-icons/md";
import toast from "react-hot-toast";
import Link from "next/link";

const newCategorySchema = z.object({
  name: z
    .string({
      required_error: "Campo obrigatório!",
    })
    .trim()
    .min(1, "Campo obrigatório!"),
  imageUrl: z
    .string({
      required_error: "Campo obrigatório!",
    })
    .trim()
    .min(1, "Campo obrigatório!"),
});

const NewCategoryForm = () => {
  const form = useForm<z.infer<typeof newCategorySchema>>({
    resolver: zodResolver(newCategorySchema),
  });

  const handleSubmit = async (data: z.infer<typeof newCategorySchema>) => {
    try {
      await createCategory({ data });

      form.setValue("name", "");
      form.setValue("imageUrl", "");

      toast.success("Categoria criada com sucesso!", {
        style: {
          fontSize: "12px",
        },
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao criar a categoria!", {
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
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o nome da categoria..."
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
                    placeholder="Insira a URL da imagem..."
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          {/* <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div> */}


          <Button
            variant={"default"}
            type="submit"
            className="w-full rounded-xl"
          >
            Cadastrar nova categoria
            <MdOutlineAddTask size={25} className="ml-2 text-white" />
          </Button>
          <Button variant={"link"} className="rounded-full text-black" asChild>
            <Link href="/admin/new/product">
              Quer cadastrar um novo produto? Clique aqui!
            </Link>
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewCategoryForm;
