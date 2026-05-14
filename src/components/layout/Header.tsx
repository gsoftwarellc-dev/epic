import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Rentals", to: "/rentals" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const terminatorMode = pathname.startsWith("/terminator-mechanical-bull");

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "rounded-full px-4 py-2 text-sm font-bold transition",
      terminatorMode
        ? "text-stone-800 hover:bg-red-50 hover:text-terminatorRed"
        : "text-slate-700 hover:bg-purple-100 hover:text-epicPurple",
      isActive && (terminatorMode ? "bg-terminatorRed text-white" : "bg-epicPurple text-white"),
    );

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b",
        terminatorMode ? "border-red-100 bg-stone-50" : "border-purple-100 bg-white",
      )}
    >
      <Container className="flex min-h-[7.2rem] items-center justify-between gap-4 sm:min-h-[7.6rem]">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center">
          {terminatorMode ? (
            <img
              src="/images/terminator-logo.jpg"
              alt="The Terminator Mechanical Bull Rental"
              className="h-[5.6rem] w-auto object-contain sm:h-[6.4rem]"
            />
          ) : (
            <img
              src="/images/epic-bouncers-logo.jpg"
              alt="Epic Bouncers Bounce House Rentals"
              className="h-[5.6rem] w-auto object-contain sm:h-[6.4rem]"
            />
          )}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/terminator-mechanical-bull" className={linkClass}>
            Mechanical Bull
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Button to="/rentals" variant={terminatorMode ? "terminator" : "secondary"} size="sm">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className={clsx(
            "inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            terminatorMode ? "bg-red-50 text-terminatorRed" : "bg-purple-100 text-epicPurple",
          )}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>

      {menuOpen ? (
        <div className={clsx("border-t lg:hidden", terminatorMode ? "border-red-100" : "border-purple-100")}>
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/terminator-mechanical-bull" className={linkClass} onClick={() => setMenuOpen(false)}>
              Mechanical Bull
            </NavLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
