import productsData from "../products.json";

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const featuredProducts = productsData.products.filter(
    product => product.featured,
  );

  return Response.json(featuredProducts);
}
