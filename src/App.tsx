import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteContentProvider } from "@/contexts/SiteContentContext";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Programs from "./pages/Programs.tsx";
import Donate from "./pages/Donate.tsx";
import GetInvolved from "./pages/GetInvolved.tsx";
import News from "./pages/News.tsx";
import Contact from "./pages/Contact.tsx";
import Gallery from "./pages/Gallery.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminGlobalSettings from "./pages/admin/AdminGlobalSettings.tsx";
import AdminHomePage from "./pages/admin/AdminHomePage.tsx";
import AdminAboutPage from "./pages/admin/AdminAboutPage.tsx";
import AdminProgramsPage from "./pages/admin/AdminProgramsPage.tsx";
import AdminGalleryPage from "./pages/admin/AdminGalleryPage.tsx";
import AdminContactPage from "./pages/admin/AdminContactPage.tsx";
import AdminDonatePage from "./pages/admin/AdminDonatePage.tsx";
import AdminGetInvolvedPage from "./pages/admin/AdminGetInvolvedPage.tsx";
import AdminNewsPage from "./pages/admin/AdminNewsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SiteContentProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="global" element={<AdminGlobalSettings />} />
              <Route path="home" element={<AdminHomePage />} />
              <Route path="about" element={<AdminAboutPage />} />
              <Route path="programs" element={<AdminProgramsPage />} />
              <Route path="gallery" element={<AdminGalleryPage />} />
              <Route path="contact" element={<AdminContactPage />} />
              <Route path="donate" element={<AdminDonatePage />} />
              <Route path="get-involved" element={<AdminGetInvolvedPage />} />
              <Route path="news" element={<AdminNewsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SiteContentProvider>
  </QueryClientProvider>
);

export default App;
