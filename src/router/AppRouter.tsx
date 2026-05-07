import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { AboutPage } from "../pages/AboutPage";
import { CheckoutCancelPage } from "../pages/CheckoutCancelPage";
import { CheckoutSuccessPage } from "../pages/CheckoutSuccessPage";
import { ContactPage } from "../pages/ContactPage";
import { GalleryPage } from "../pages/GalleryPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { RentalsPage } from "../pages/RentalsPage";
import { TerminatorPage } from "../pages/TerminatorPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/rentals/:slug" element={<ProductDetailsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terminator-mechanical-bull" element={<TerminatorPage />} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
          <Route path="/checkout/cancel" element={<CheckoutCancelPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
