import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import Index from "./pages/Index";
import MT5 from "./pages/MT5";
import Calculator from "./pages/Calculator";
import Transparency from "./pages/Transparency";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import FaqPage from "./pages/FaqPage";
import TremsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivecyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TradeHistory from "./pages/TradeHistory";
import CommingSoon from "./components/CommingSoon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mt5" element={<MT5 />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/TremsOfService" element={<TremsOfService />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
            <Route path="/CookiesPolicy" element={<CookiesPolicy/>} />
            <Route path="/TradeHistory" element={<TradeHistory  />} />
            <Route path="/CommingSoon" element={<CommingSoon />} />
            
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default App;
