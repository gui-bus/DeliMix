const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // !Pizzas
    const pizzasCategory = await prisma.category.create({
      data: {
        name: "Pizzas",
        slug: "pizzas",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/pizza-com-salame-tomate-azeitona-e-queijo-em-uma-massa-com-farinha-de-trigo-integral-comida-italiana_2829-6855.jpg?w=740&t=st=1690587794~exp=1690588394~hmac=a82f2d9a7bbda03db147c9bd5af3a9af286e18ebe78414a8abc4313b4d3857f6",
      },
    });

    const pizzas = [
      {
        name: "Moon Fantasy",
        slug: "moon-fantasy",
        description:
          "Uma deliciosa pizza de salame repleta de sabores intensos, feita com ingredientes frescos e de altíssima qualidade.",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/pizza-com-salame-tomate-azeitona-e-queijo-em-uma-massa-com-farinha-de-trigo-integral-comida-italiana_2829-6855.jpg?w=740&t=st=1690587794~exp=1690588394~hmac=a82f2d9a7bbda03db147c9bd5af3a9af286e18ebe78414a8abc4313b4d3857f6",
        basePrice: 54,
        categoryId: pizzasCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Catupiry Supreme",
        slug: "catupiry-supreme",
        description:
          "Uma pizza deliciosa e irresistível, coberta com um magnífico frango desfiado e o tão famoso catupiry cremoso.",
        imageUrl:
          "https://images.unsplash.com/photo-1618213837799-25d5552820d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=842&q=80",
        basePrice: 50,
        categoryId: pizzasCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Cheese Way",
        slug: "cheese-way",
        description:
          "Uma deliciosa combinação de quatro queijos derretidos em cada pedaço, uma verdadeira delícia de outro mundo.",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/pizza-de-vista-lateral-em-um-carrinho-de-madeira-com-uma-toalha-de-mesa-horizontal_176474-2508.jpg?w=740&t=st=1690587942~exp=1690588542~hmac=836c434a5c93e4e2d58e9fdc474cb9bd66fa8a32e3285ae542e5a0c4bec0fddf",
        basePrice: 49,
        categoryId: pizzasCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: pizzas,
    });

    // !Drinks
    const drinkCategory = await prisma.category.create({
      data: {
        name: "Pizzas",
        slug: "pizzas",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/pizza-com-salame-tomate-azeitona-e-queijo-em-uma-massa-com-farinha-de-trigo-integral-comida-italiana_2829-6855.jpg?w=740&t=st=1690587794~exp=1690588394~hmac=a82f2d9a7bbda03db147c9bd5af3a9af286e18ebe78414a8abc4313b4d3857f6",
      },
    });

    const drinks = [
      {
        name: "Cola-Cola",
        slug: "coca-cola",
        description:
          "Uma bebida refrescante e deliciosa para acompanhar qualquer refeição ou para se refrescar em um dia quente.",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/bebida-fresca-de-cola-com-limao-verde_144627-12393.jpg?w=740&t=st=1690663491~exp=1690664091~hmac=53f3089e1db3172b5b15e79200bf82f6656b006e91eb433b30e4cc934d4624e4",
        basePrice: 15,
        categoryId: drinkCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Suco Natural",
        slug: "suco-natural",
        description:
          "Uma opção saudável e repleta de vitaminas, perfeita para quem aprecia o sabor autêntico das frutas frescas.",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/alimentos-que-estimulam-a-imunidade-para-um-estilo-de-vida-saudavel-com-frutas-citricas_23-2149211498.jpg?w=740&t=st=1690664499~exp=1690665099~hmac=9c9573f2a843d6b8566d4bafe5f97b68f655df2ccc459bfe90266b8e78e66dc0",
        basePrice: 12,
        categoryId: drinkCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Cerveja",
        slug: "cerveja",
        description:
          "Uma cerveja gelada e saborosa, perfeita para relaxar e curtir bons momentos com amigos. Temos varias opções.",
        imageUrl:
          "https://img.freepik.com/fotos-gratis/variedade-de-canecas-de-cerveja-de-natal_23-2149757159.jpg?w=740&t=st=1690664543~exp=1690665143~hmac=621c7a48ddb4ed85d9fa69b37b58b53cd951b3eeb739d166b681f71a81dbf362",
        basePrice: 8,
        categoryId: drinkCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: drinks,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
