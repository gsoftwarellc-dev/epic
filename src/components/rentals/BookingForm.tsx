import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { clsx } from "clsx";
import { CalendarCheck, Loader2, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createBooking } from "../../api/bookingsApi";
import { PHONE_DISPLAY, PHONE_TEL } from "../../config/contact";
import type { AvailabilityResponse } from "../../types/availability";
import type { CreateBookingPayload } from "../../types/booking";
import type { Product } from "../../types/product";
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

  const bookingMutation = useMutation({
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

      return createBooking(payload);
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
            Submit your details and we&apos;ll call you to confirm scheduling.
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

      {bookingMutation.isSuccess ? (
        <div
          className={clsx(
            "mt-6 grid gap-4 rounded-2xl p-6 text-center",
            isTerminator ? "bg-stone-900 text-white" : "bg-green-50 text-slate-950",
          )}
        >
          <CalendarCheck className={clsx("mx-auto", isTerminator ? "text-red-400" : "text-green-700")} size={36} aria-hidden="true" />
          <p className="font-bold">
            Request received! Call us now to confirm your scheduling details.
          </p>
          <a
            href={PHONE_TEL}
            className={clsx(
              "mx-auto inline-flex items-center justify-center gap-2 rounded-full px-7 text-lg font-extrabold transition min-h-14",
              isTerminator
                ? "bg-terminatorRed text-white shadow-terminator hover:bg-red-800"
                : "bg-epicPurple text-white shadow-bounce hover:bg-purple-700",
            )}
          >
            <Phone aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      ) : (
      <form className="mt-6 grid gap-5" onSubmit={handleSubmit((values) => bookingMutation.mutate(values))}>
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

        {bookingMutation.isError ? (
          <p className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">
            Something went wrong submitting the booking. Please try again.
          </p>
        ) : null}

        <Button
          type="submit"
          variant={isTerminator ? "terminator" : "primary"}
          size="lg"
          disabled={bookingMutation.isPending}
          icon={bookingMutation.isPending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <CalendarCheck aria-hidden="true" />}
        >
          {bookingMutation.isPending ? "Submitting Request..." : "Request Booking"}
        </Button>
      </form>
      )}
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
