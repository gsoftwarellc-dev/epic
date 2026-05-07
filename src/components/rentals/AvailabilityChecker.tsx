import { clsx } from "clsx";
import { format } from "date-fns";
import { AlertCircle, CalendarDays, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { checkAvailability } from "../../api/availabilityApi";
import type { AvailabilityResponse } from "../../types/availability";
import { Button } from "../common/Button";

interface AvailabilityCheckerProps {
  productId: number;
  onAvailable: (response: AvailabilityResponse) => void;
  onUnavailable?: () => void;
  tone?: "epic" | "terminator";
}

export function AvailabilityChecker({
  productId,
  onAvailable,
  onUnavailable,
  tone = "epic",
}: AvailabilityCheckerProps) {
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

  const availabilityMutation = useMutation({
    mutationFn: (selectedDate: string) => checkAvailability(productId, selectedDate),
    onSuccess: (response) => {
      if (response.available) {
        onAvailable(response);
        return;
      }

      onUnavailable?.();
    },
  });

  const response = availabilityMutation.data;
  const isTerminator = tone === "terminator";

  return (
    <section
      className={clsx(
        "rounded-[2rem] border p-5 shadow-xl sm:p-6",
        isTerminator ? "border-red-900 bg-stone-950/88 text-white" : "border-purple-100 bg-white text-slate-950",
      )}
      aria-label="Availability checker"
    >
      <div className="flex items-center gap-3">
        <span
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-2xl",
            isTerminator ? "bg-terminatorRed text-white" : "bg-purple-100 text-epicPurple",
          )}
        >
          <CalendarDays aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-2xl font-black">Check Availability</h2>
          <p className={clsx("text-sm", isTerminator ? "text-stone-300" : "text-slate-600")}>
            Pick your event date before starting the booking form.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto]">
        <label className="grid gap-2 text-sm font-bold">
          Event date
          <input
            type="date"
            min={format(new Date(), "yyyy-MM-dd")}
            value={date}
            className={clsx(
              "min-h-12 rounded-2xl border px-4 text-base outline-none focus:ring-4",
              isTerminator
                ? "border-stone-700 bg-stone-900 text-white focus:ring-red-900"
                : "border-purple-100 bg-white focus:ring-purple-100",
            )}
            onChange={(event) => {
              setDate(event.target.value);
              onUnavailable?.();
              availabilityMutation.reset();
            }}
          />
        </label>
        <div className="self-end">
          <Button
            type="button"
            variant={isTerminator ? "terminator" : "secondary"}
            fullWidth
            disabled={availabilityMutation.isPending || !date}
            onClick={() => availabilityMutation.mutate(date)}
          >
            {availabilityMutation.isPending ? "Checking..." : "Check Date"}
          </Button>
        </div>
      </div>

      {response ? (
        <div
          className={clsx(
            "mt-5 rounded-2xl border p-4",
            response.available
              ? isTerminator
                ? "border-red-700 bg-red-950/35 text-red-100"
                : "border-green-200 bg-green-50 text-green-800"
              : isTerminator
                ? "border-stone-700 bg-stone-900 text-stone-200"
                : "border-orange-200 bg-orange-50 text-orange-800",
          )}
          role="status"
        >
          <div className="flex gap-3">
            {response.available ? <CheckCircle2 aria-hidden="true" /> : <AlertCircle aria-hidden="true" />}
            <div>
              <p className="font-black">
                {response.available ? "Available for your date." : "Unavailable for that date."}
              </p>
              {response.unavailableReason ? <p className="mt-1 text-sm">{response.unavailableReason}</p> : null}
              {response.availableSlots?.length ? (
                <p className="mt-1 text-sm">Available time windows will appear in the booking form.</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
