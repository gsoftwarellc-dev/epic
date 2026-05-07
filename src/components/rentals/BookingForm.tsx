import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { clsx } from "clsx";
import { CreditCard, Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { createBooking, createCheckoutSession } from "../../api/bookingsApi";
import type { AvailabilityResponse } from "../../types/availability";
import type { CreateBookingPayload } from "../../types/booking";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../common/Button";

interface BookingFormProps {
  product: Product;
  availability: AvailabilityResponse;
  tone?: "epic" | "terminator";
}

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Enter a valid phone number."),
  eventDate: z.string().min(1, "Event date is required."),
  street: z.string().min(3, "Street address is required."),
  city: z.string().min(2, "City is required."),
  state: z.string().min(2, "State is required."),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Enter a valid zip code."),
  slot: z.string().optional(),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm({ product, availability, tone = "epic" }: BookingFormProps) {
  const navigate = useNavigate();
  const isTerminator = tone === "terminator";
  const defaultSlot = availability.availableSlots?.[0]
    ? `${availability.availableSlots[0].startTime}|${availability.availableSlots[0].endTime}`
    : "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      eventDate: availability.date,
      state: "UT",
      slot: defaultSlot,
    },
  });

  const checkoutMutation = useMutation({
    mutationFn: async (values: BookingFormValues) => {
      const [startTime, endTime] = values.slot ? values.slot.split("|") : [];
      const payload: CreateBookingPayload = {
        productId: product.id,
        eventDate: values.eventDate,
        startTime,
        endTime,
        customer: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
        },
        deliveryAddress: {
          street: values.street,
          city: values.city,
          state: values.state,
          zipCode: values.zipCode,
        },
        notes: values.notes,
      };

      const booking = await createBooking(payload);
      return createCheckoutSession(booking.id);
    },
    onSuccess: (session) => {
      if (session.checkoutUrl.startsWith("http")) {
        window.location.assign(session.checkoutUrl);
        return;
      }

      navigate(session.checkoutUrl);
    },
  });

  const slotOptions = useMemo(
    () =>
      availability.availableSlots?.map((slot) => ({
        label: `${slot.startTime} to ${slot.endTime}`,
        value: `${slot.startTime}|${slot.endTime}`,
      })) ?? [],
    [availability.availableSlots],
  );

  return (
    <section
      className={clsx(
        "rounded-[2rem] border p-5 shadow-xl sm:p-6",
        isTerminator ? "border-red-900 bg-stone-950/88 text-white" : "border-purple-100 bg-white text-slate-950",
      )}
      aria-label="Booking form"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black">Reserve {product.name}</h2>
          <p className={clsx("mt-1 text-sm", isTerminator ? "text-stone-300" : "text-slate-600")}>
            Total rental {formatCurrency(product.priceCents)}. Deposit due today {formatCurrency(product.depositCents)}.
          </p>
        </div>
        <span
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-black",
            isTerminator ? "bg-red-950 text-red-100" : "bg-green-50 text-green-700",
          )}
        >
          Date available
        </span>
      </div>

      <form className="mt-6 grid gap-5" onSubmit={handleSubmit((values) => checkoutMutation.mutate(values))}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="First name" error={errors.firstName?.message} isTerminator={isTerminator}>
            <input {...register("firstName")} className={inputClasses(isTerminator)} autoComplete="given-name" />
          </Field>
          <Field label="Last name" error={errors.lastName?.message} isTerminator={isTerminator}>
            <input {...register("lastName")} className={inputClasses(isTerminator)} autoComplete="family-name" />
          </Field>
          <Field label="Email" error={errors.email?.message} isTerminator={isTerminator}>
            <input {...register("email")} type="email" className={inputClasses(isTerminator)} autoComplete="email" />
          </Field>
          <Field label="Phone" error={errors.phone?.message} isTerminator={isTerminator}>
            <input {...register("phone")} type="tel" className={inputClasses(isTerminator)} autoComplete="tel" />
          </Field>
          <Field label="Event date" error={errors.eventDate?.message} isTerminator={isTerminator}>
            <input {...register("eventDate")} type="date" readOnly className={inputClasses(isTerminator)} />
          </Field>
          {slotOptions.length ? (
            <Field label="Time window" error={errors.slot?.message} isTerminator={isTerminator}>
              <select {...register("slot")} className={inputClasses(isTerminator)}>
                {slotOptions.map((slot) => (
                  <option key={slot.value} value={slot.value}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </Field>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Street address" error={errors.street?.message} isTerminator={isTerminator}>
            <input {...register("street")} className={inputClasses(isTerminator)} autoComplete="street-address" />
          </Field>
          <Field label="City" error={errors.city?.message} isTerminator={isTerminator}>
            <input {...register("city")} className={inputClasses(isTerminator)} autoComplete="address-level2" />
          </Field>
          <Field label="State" error={errors.state?.message} isTerminator={isTerminator}>
            <input {...register("state")} className={inputClasses(isTerminator)} autoComplete="address-level1" />
          </Field>
          <Field label="Zip code" error={errors.zipCode?.message} isTerminator={isTerminator}>
            <input {...register("zipCode")} className={inputClasses(isTerminator)} autoComplete="postal-code" />
          </Field>
        </div>

        <Field label="Notes" error={errors.notes?.message} isTerminator={isTerminator}>
          <textarea {...register("notes")} rows={4} className={clsx(inputClasses(isTerminator), "resize-y py-3")} />
        </Field>

        {checkoutMutation.isError ? (
          <p className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
            Something went wrong creating the booking. Please try again.
          </p>
        ) : null}

        <Button
          type="submit"
          variant={isTerminator ? "terminator" : "primary"}
          size="lg"
          disabled={checkoutMutation.isPending}
          icon={checkoutMutation.isPending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <CreditCard aria-hidden="true" />}
        >
          {checkoutMutation.isPending ? "Preparing Checkout..." : "Continue to Checkout"}
        </Button>
      </form>
    </section>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  isTerminator: boolean;
  children: ReactNode;
}

function Field({ label, error, isTerminator, children }: FieldProps) {
  return (
    <label className={clsx("grid gap-2 text-sm font-bold", isTerminator ? "text-stone-100" : "text-slate-700")}>
      {label}
      {children}
      {error ? <span className={isTerminator ? "text-red-300" : "text-red-600"}>{error}</span> : null}
    </label>
  );
}

function inputClasses(isTerminator: boolean) {
  return clsx(
    "min-h-12 rounded-2xl border px-4 text-base outline-none transition focus:ring-4",
    isTerminator
      ? "border-stone-700 bg-stone-900 text-white focus:ring-red-900"
      : "border-purple-100 bg-white text-slate-950 focus:ring-purple-100",
  );
}
