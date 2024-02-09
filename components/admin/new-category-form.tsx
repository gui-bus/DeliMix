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
import { createCategory } from "@/actions/new-category";
import { MdOutlineAddTask } from "react-icons/md";
import toast from "react-hot-toast";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
    .refine(
      (url) => {
        const allowedPrefixes = [
          "https://images.unsplash.com",
          "https://img.freepik.com",
          "https://utfs.io/",
        ];

        return allowedPrefixes.some((prefix) => url.startsWith(prefix));
      },
      {
        message: "Só são aceitas imagens hospedadas nos sites citados acima.",
      },
    ),
});

const NewCategoryForm = () => {
  const [imageUrlPreview, setImageUrlPreview] = useState("");

  const form = useForm<z.infer<typeof newCategorySchema>>({
    resolver: zodResolver(newCategorySchema),
  });

  const handleSubmit = async (data: z.infer<typeof newCategorySchema>) => {
    try {
      await createCategory({ data });

      form.setValue("name", "");
      form.setValue("imageUrl", "");
      setImageUrlPreview("");

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

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredUrl = event.target.value;

    const allowedPrefixes = [
      "https://images.unsplash.com",
      "https://img.freepik.com",
      "https://utfs.io/",
    ];

    const isUrlValid = allowedPrefixes.some((prefix) =>
      enteredUrl.startsWith(prefix),
    );

    if (isUrlValid) {
      form.setValue("imageUrl", enteredUrl);
      setImageUrlPreview(enteredUrl);
    } else {
      setImageUrlPreview("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div className={`${imageUrlPreview.length > 0 ? "md:w-1/3" : "hidden"}`}>
        {imageUrlPreview && (
          <Image
            src={imageUrlPreview}
            alt="Preview da imagem"
            width={0}
            height={0}
            sizes="100vw"
            className="h-72 w-full rounded-3xl object-cover md:h-96"
          />
        )}
      </div>

      <div className={`${imageUrlPreview.length > 0 ? "md:w-2/3" : "w-full"}`}>
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
                      onChange={(e) => {
                        field.onChange(e);
                        handleImageUrlChange(e);
                      }}
                    />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Utilizar apenas imagens dos provedores{" "}
                    <Link
                      className="underline transition-all duration-200 ease-in-out hover:text-blue-500 dark:hover:text-white"
                      href="https://br.freepik.com/"
                      target="_blank"
                    >
                      Freepik
                    </Link>{" "}
                    e{" "}
                    <Link
                      className="underline transition-all duration-200 ease-in-out hover:text-blue-500 dark:hover:text-white"
                      href="https://unsplash.com/pt-br"
                      target="_blank"
                    >
                      Unsplash
                    </Link>{" "}
                    ou imagens hospedadas no{" "}
                    <Link
                      className="underline transition-all duration-200 ease-in-out hover:text-blue-500 dark:hover:text-white"
                      href="https://uploadthing.com/"
                      target="_blank"
                    >
                      UploadThing
                    </Link>
                    .
                  </FormDescription>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <Button
              variant={"default"}
              type="submit"
              className="w-full rounded-xl"
            >
              Cadastrar nova categoria
              <MdOutlineAddTask size={25} className="ml-2 text-white" />
            </Button>
            <Button
              variant={"link"}
              className="rounded-full text-black dark:text-white"
              asChild
            >
              <Link href="/admin/new/product">
                Quer cadastrar um novo produto? Clique aqui!
              </Link>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewCategoryForm;
