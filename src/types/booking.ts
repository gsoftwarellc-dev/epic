import type { Customer, DeliveryAddress } from "./customer";

export interface CreateBookingPayload {
  productId: number;
  eventDate: string;
  startTime?: string;
  endTime?: string;
  customer: Customer;
  deliveryAddress: DeliveryAddress;
  notes?: string;
}

export interface Booking {
  id: number;
  status: "pending_checkout" | "confirmed" | "cancelled";
  totalCents: number;
  depositCents: number;
  payload: CreateBookingPayload;
}

export interface CheckoutSessionResponse {
  bookingId: number;
  checkoutUrl: string;
}
