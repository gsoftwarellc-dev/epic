import { fakeDelay } from "./client";
import { productsMock } from "../mocks/products.mock";
import type { Booking, CheckoutSessionResponse, CreateBookingPayload } from "../types/booking";

let nextBookingId = 1042;

export async function createBooking(payload: CreateBookingPayload): Promise<Booking> {
  await fakeDelay(650);
  const product = productsMock.find((item) => item.id === payload.productId);

  return {
    id: nextBookingId++,
    status: "pending_checkout",
    totalCents: product?.priceCents ?? 0,
    depositCents: product?.depositCents ?? 0,
    payload,
  };
}

export async function createCheckoutSession(bookingId: number): Promise<CheckoutSessionResponse> {
  await fakeDelay(500);

  return {
    bookingId,
    checkoutUrl: `/checkout/success?bookingId=${bookingId}`,
  };
}
