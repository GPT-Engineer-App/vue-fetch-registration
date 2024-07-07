import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/default"; // available: default, navbar, sidebar
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import { createPinia } from 'pinia';
import { PiniaVuePlugin } from 'pinia';
import { PiniaProvider } from 'pinia-react';

const queryClient = new QueryClient();
const pinia = createPinia();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <PiniaProvider store={pinia}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="/register" element={<Layout />}>
                  <Route index element={<Register />} />
                </Route>
                {/* Add more routes here as needed */}
              </Route>
            </Routes>
          </PiniaProvider>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;