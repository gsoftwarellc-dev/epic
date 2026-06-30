import { clsx } from "clsx";
import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_TEL } from "../../config/contact";

export function CallNowButton() {
  const { pathname } = useLocation();
  const terminatorMode = pathname.startsWith("/terminator-mechanical-bull");

  return (
    <div className="fixed bottom-5 right-5 z-50 h-16 w-16">
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-spin-slow rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #ef4444, #f97316, #eab308, #22c55e, #0ea5e9, #7c3aed, #ec4899, #ef4444)",
        }}
      />
      <a
        href={PHONE_TEL}
        aria-label={`Call us now at ${PHONE_DISPLAY}`}
        className={clsx(
          "absolute inset-[3px] flex items-center justify-center rounded-full text-white transition hover:scale-105 focus:outline-none focus-visible:ring-4",
          terminatorMode
            ? "bg-terminatorRed shadow-terminator hover:bg-red-800 focus-visible:ring-terminatorRed"
            : "bg-epicPurple shadow-bounce hover:bg-purple-700 focus-visible:ring-epicPurple",
        )}
      >
        <Phone fill="currentColor" size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
