import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../common/Container";

export function Footer() {
  const { pathname } = useLocation();
  const terminatorMode = pathname.startsWith("/terminator-mechanical-bull");

  return (
    <footer className={terminatorMode ? "bg-stone-950 text-stone-200" : "bg-slate-950 text-white"}>
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block rounded-2xl bg-white px-4 py-2">
            {terminatorMode ? (
              <img
                src="/images/terminator_logo_for_footer.png"
                alt="The Terminator Mechanical Bull Rental"
                className="h-36 w-auto object-contain"
              />
            ) : (
              <img
                src="/images/epic-bouncers-logo-full.jpg"
                alt="Epic Bouncers Bounce House Rentals"
                className="h-28 w-auto object-contain"
              />
            )}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Bounce house rentals, wet/dry slides, combo units, and The Terminator Mechanical Bull for events that need
            a standout attraction.
          </p>
        </div>

        <div>
          <h2 className="text-base font-black">Quick Links</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <Link to="/rentals" className="hover:text-white">
              Rentals
            </Link>
            <Link to="/gallery" className="hover:text-white">
              Gallery
            </Link>
            <Link to="/terminator-mechanical-bull" className="hover:text-white">
              Mechanical Bull
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-base font-black">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <span className="flex items-center gap-3">
              <Phone size={18} aria-hidden="true" /> 801.941.0482
            </span>
            <span className="flex items-center gap-3">
              <Mail size={18} aria-hidden="true" /> info@epicbouncersutah.com
            </span>
            <span className="flex items-center gap-3">
              <MapPin size={18} aria-hidden="true" /> Davis, Weber, Box Elder counties
            </span>
            <span className="flex items-center gap-3">
              <CalendarCheck size={18} aria-hidden="true" /> Setup and take-down included
            </span>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-sm text-slate-400 text-center">
          <p>Copyright {new Date().getFullYear()} Epic Bouncers. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
