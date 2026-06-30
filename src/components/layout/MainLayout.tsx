import { Outlet } from "react-router-dom";
import { CallNowButton } from "../common/CallNowButton";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CallNowButton />
    </div>
  );
}
