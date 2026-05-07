import { fakeDelay } from "./client";
import { productsMock } from "../mocks/products.mock";
import type { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  await fakeDelay();
  return productsMock.filter((product) => product.isActive);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await fakeDelay();
  return productsMock.find((product) => product.slug === slug && product.isActive) ?? null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await fakeDelay();
  return productsMock.filter((product) => product.brandType === "epic" && product.isActive).slice(0, 8);
}
