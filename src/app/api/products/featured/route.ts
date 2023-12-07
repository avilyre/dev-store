import productsData from "../products.json";

export async function GET() {
  const featuredProducts = productsData.products.filter(
    product => product.featured,
  );

  return Response.json(featuredProducts);
}
