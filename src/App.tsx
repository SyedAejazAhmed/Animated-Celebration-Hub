
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { EventsProvider } from "./contexts/EventsContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import EventManager from "./pages/EventManager";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <EventsProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/event-manager" element={<EventManager />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </EventsProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
