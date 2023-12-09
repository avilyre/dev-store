import { z } from "zod";

import data from "../products.json";
import { ParamsProps } from "./interface";

export async function GET(_request: Request, { params }: ParamsProps) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const slug = z.string().parse(params.slug);

  const product = data.products.find(product => product.slug === slug);

  if (!product) {
    return Response.json(
      {
        message: "Product not found",
      },
      {
        status: 400,
      },
    );
  }

  return Response.json(product);
}
