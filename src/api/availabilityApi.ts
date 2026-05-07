import { fakeDelay } from "./client";
import { getMockAvailability } from "../mocks/availability.mock";
import { productsMock } from "../mocks/products.mock";
import type { AvailabilityResponse } from "../types/availability";

export async function checkAvailability(productId: number, date: string): Promise<AvailabilityResponse> {
  await fakeDelay();
  const product = productsMock.find((item) => item.id === productId);

  if (!product) {
    return {
      productId,
      date,
      available: false,
      unavailableReason: "Rental item was not found.",
    };
  }

  return getMockAvailability(product, date);
}
