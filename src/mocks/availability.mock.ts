import { format, isBefore, parseISO, startOfToday } from "date-fns";
import type { AvailabilityResponse } from "../types/availability";
import type { Product } from "../types/product";

const fixedSlots = [
  { startTime: "09:00", endTime: "13:00" },
  { startTime: "14:00", endTime: "18:00" },
];

const hourlySlots = [
  { startTime: "12:00", endTime: "14:00" },
  { startTime: "15:00", endTime: "17:00" },
  { startTime: "18:00", endTime: "20:00" },
  { startTime: "20:30", endTime: "22:30" },
];

export function getMockAvailability(product: Product, date: string): AvailabilityResponse {
  const requestedDate = parseISO(date);
  const dayOfWeek = requestedDate.getDay();
  const dayOfMonth = Number(format(requestedDate, "d"));

  if (isBefore(requestedDate, startOfToday())) {
    return {
      productId: product.id,
      date,
      available: false,
      unavailableReason: "That date has already passed.",
    };
  }

  if (product.brandType === "epic" && dayOfWeek === 0) {
    return {
      productId: product.id,
      date,
      available: false,
      unavailableReason: "Sunday is reserved for cleaning and maintenance.",
    };
  }

  if ((product.id + dayOfMonth) % 11 === 0) {
    return {
      productId: product.id,
      date,
      available: false,
      unavailableReason: "This rental is already booked for that date.",
    };
  }

  if (product.rentalType === "hourly") {
    const availableSlots = hourlySlots.filter((_, index) => (dayOfMonth + index) % 3 !== 0);

    return {
      productId: product.id,
      date,
      available: availableSlots.length > 0,
      unavailableReason: availableSlots.length === 0 ? "All bull rental time slots are booked." : undefined,
      availableSlots,
    };
  }

  if (product.rentalType === "fixed_slot") {
    return {
      productId: product.id,
      date,
      available: true,
      availableSlots: fixedSlots,
    };
  }

  return {
    productId: product.id,
    date,
    available: true,
  };
}
