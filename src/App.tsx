
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Contract from "./pages/Contract";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Coach from "./pages/Coach";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
            {/* Placeholder routes for remaining pages */}
            <Route path="/rewards" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 pb-20 md:pl-64"><div className="text-center"><h1 className="text-3xl font-bold text-gray-800 mb-4">Rewards Coming Soon!</h1><p className="text-gray-600">Unlock amazing perks with your GRYT Points</p></div></div>} />
            <Route path="/leaderboard" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 pb-20 md:pl-64"><div className="text-center"><h1 className="text-3xl font-bold text-gray-800 mb-4">Community Coming Soon!</h1><p className="text-gray-600">Connect with other GRYT members</p></div></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
